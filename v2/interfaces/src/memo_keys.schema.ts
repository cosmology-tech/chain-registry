export interface MemoKeys {
  $schema?: string;
  memo_keys: {
    key: string;
    description: string;
    git_repo: string;
    memo: {
      [key: string]: unknown;
    };
  }[];
}