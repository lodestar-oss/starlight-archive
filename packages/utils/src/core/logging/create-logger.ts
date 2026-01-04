import pino, { type Level } from "pino";
import pretty from "pino-pretty";

export function createLogger({ level = "error" }: { level?: Level }) {
  const prettyStream = pretty({
    colorize: true,
    translateTime: "SYS:HH:MM:ss",
    ignore: "pid,hostname",
  });

  const logger = pino(
    {
      level,
      timestamp: pino.stdTimeFunctions.isoTime,
    },
    prettyStream
  );

  return logger;
}
