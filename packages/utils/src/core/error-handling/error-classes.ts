export interface BaseErrorType {
  code: string;
  message: string;
  cause?: unknown;
  context?: Record<string, unknown>;
}

export class BaseError extends Error implements BaseErrorType {
  public readonly code: string;
  public readonly context?: Record<string, unknown>;

  constructor(options: BaseErrorType) {
    super(options.message, { cause: options.cause });
    this.name = this.constructor.name;
    this.code = options.code;
    this.context = options.context;
  }
}

export class ExpectedError extends BaseError {
  constructor(
    message: string,
    options?: { cause?: unknown; context?: Record<string, unknown> }
  ) {
    super({
      code: "EXPECTED_ERROR",
      message,
      cause: options?.cause,
      context: options?.context,
    });
  }
}

export class UnexpectedError extends BaseError {
  constructor(
    message: string,
    options?: { cause?: unknown; context?: Record<string, unknown> }
  ) {
    super({
      code: "UNEXPECTED_ERROR",
      message,
      cause: options?.cause,
      context: options?.context,
    });
  }
}
