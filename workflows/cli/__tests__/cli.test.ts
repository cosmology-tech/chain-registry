import readline from 'readline';
import { Readable, Transform,Writable } from 'stream';
import stripAnsi from 'strip-ansi';

import { CLI, CLIOptions } from '../src/commander';
import { commands } from '../src/commands'

jest.mock('readline');

const snap = (str: any) => expect(str).toMatchSnapshot();

describe('Inquirerer', () => {
  let mockWrite: jest.Mock;
  let mockInput: Readable;
  let mockOutput: Writable;
  let transformStream: Transform;

  let writeResults: string[];
  let transformResults: string[];

  let inputQueue: Array<{ type: 'key' | 'read', value: string }> = [];
  let currentInputIndex: number = 0;

  function setupReadlineMock() {
    readline.createInterface = jest.fn().mockReturnValue({
      question: (questionText: string, cb: (input: string) => void) => {
        // Process the queued inputs when question is called
        const nextInput = inputQueue[currentInputIndex++];
        if (nextInput && nextInput.type === 'read') {
          setTimeout(() => cb(nextInput.value), 350); // Simulate readline delay
        }
      },
      close: jest.fn(),
    });
  }

  function enqueueInputResponse(input: { type: 'key' | 'read', value: string }) {
    if (input.type === 'key') {
  // Push key events directly to mockInput
  // @ts-ignore
      setTimeout(() => mockInput.push(input.value), 350);
    } else {
      // Queue readline responses to be handled by the readline mock
      inputQueue.push(input);
    }
  }

  const KEY_SEQUENCES = {
    ENTER: '\u000d',     // Carriage return
    UP_ARROW: '\u001b[A', // ANSI escape sequence for the up arrow
    DOWN_ARROW: '\u001b[B',
    SPACE: ' '
  };

  beforeEach(() => {
    mockWrite = jest.fn();
    writeResults = [];
    transformResults = [];


    mockInput = new Readable({
      read(size) { }
    });
    // @ts-ignore
    mockInput.setRawMode = jest.fn();  // Mock TTY-specific method if needed

    mockOutput = new Writable({
      write: (chunk, encoding, callback) => {
        const str = chunk.toString();
        writeResults.push(stripAnsi(str));
        mockWrite(str);
        callback();
      }
    });

    // Create the transform stream to log and pass through data
    transformStream = new Transform({
      transform(chunk, encoding, callback) {
        const data = chunk.toString();
        transformResults.push(stripAnsi(data));
        this.push(chunk); // Pass the data through
        callback();
      }
    });

    setupReadlineMock();
    mockInput.pipe(transformStream);
  });

  it('prompts user and correctly processes delayed input', async () => {
    enqueueInputResponse({ type: 'read', value: 'user input' });

    const options: Partial<CLIOptions> = {
        noTty: false,
        input: mockInput,
        output: mockOutput,
        minimistOpts: {
          alias: {
            v: 'version'
          }
        }
      };
    
    const app = new CLI(commands, options, {
        _: ['chains']
    });

    const expectedResult = { username: 'user input' };

    const result = await app.run();

    expect(result).toEqual(expectedResult);
    snap(writeResults);
    snap(transformResults);
  });

});
