import readline from 'readline';
import { Readable, Transform, Writable } from 'stream';
import stripAnsi from 'strip-ansi';

export const KEY_SEQUENCES = {
    ENTER: '\u000d',
    UP_ARROW: '\u001b[A',
    DOWN_ARROW: '\u001b[B',
    SPACE: ' '
};

interface InputResponse {
    type: 'key' | 'read';
    value: string;
}

interface MockReadline {
    question: (questionText: string, cb: (input: string) => void) => void;
    close: () => void;
}

export interface TestEnvironment {
    mockInput: Readable;
    mockOutput: Writable;
    writeResults: string[];
    transformResults: string[];
    enqueueInputResponse: (input: InputResponse) => void;
}

function setupReadlineMock(inputQueue: InputResponse[], currentInputIndex: number): void {
    readline.createInterface = jest.fn().mockReturnValue({
        question: (questionText: string, cb: (input: string) => void) => {
            const nextInput = inputQueue[currentInputIndex++];
            if (nextInput && nextInput.type === 'read') {
                setTimeout(() => cb(nextInput.value), 350);
            }
        },
        close: jest.fn(),
    } as MockReadline);
}

export function setupTests(): () => TestEnvironment {
    let mockWrite: jest.Mock;
    let mockInput: Readable;
    let mockOutput: Writable;
    let transformStream: Transform;

    let writeResults: string[] = [];
    let transformResults: string[] = [];

    let inputQueue: InputResponse[] = [];
    let currentInputIndex = 0;

    const beforeEachSetup = (): TestEnvironment => {
        jest.clearAllMocks();
        mockWrite = jest.fn();
        writeResults = [];
        transformResults = [];

        mockInput = new Readable({ read(size) {} });
        (mockInput as any).setRawMode = jest.fn();

        mockOutput = new Writable({
            write: (chunk, encoding, callback) => {
                const str = chunk.toString();
                writeResults.push(stripAnsi(str));
                mockWrite(str);
                callback();
            }
        });

        transformStream = new Transform({
            transform(chunk, encoding, callback) {
                const data = chunk.toString();
                transformResults.push(stripAnsi(data));
                this.push(chunk);
                callback();
            }
        });

        setupReadlineMock(inputQueue, currentInputIndex);
        mockInput.pipe(transformStream);

        return {
            mockInput,
            mockOutput,
            writeResults,
            transformResults,
            enqueueInputResponse: (input: InputResponse) => {
                if (input.type === 'key') {
                    setTimeout(() => mockInput.push(input.value), 350);
                } else {
                    inputQueue.push(input);
                }
            }
        };
    };

    return beforeEachSetup;
}
