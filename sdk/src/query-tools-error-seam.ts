import type { GSDToolsError } from './gsd-tools-error.js';

export interface QueryTimeoutErrorFactory {
  createTimeoutError: (
    message: string,
    command: string,
    args: string[],
    stderr: string,
    timeoutMs: number,
  ) => GSDToolsError;
}

export interface QueryFailureErrorFactory {
  createFailureError: (
    message: string,
    command: string,
    args: string[],
    exitCode: number | null,
    stderr: string,
  ) => GSDToolsError;
}

export type QueryToolsErrorFactory = QueryTimeoutErrorFactory & QueryFailureErrorFactory;

export interface QueryNativeErrorFactory {
  createNativeTimeoutError: (message: string, command: string, args: string[]) => GSDToolsError;
  createNativeFailureError: (message: string, command: string, args: string[], cause: unknown) => GSDToolsError;
}
