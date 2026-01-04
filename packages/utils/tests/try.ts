import { createLogger } from "@/core/logging/create-logger";

const logger = createLogger({ level: "trace" });
logger.trace("This is a trace message");
logger.debug("This is a debug message");
logger.info("Hello world");
logger.warn("This is a warning");
logger.error("This is an error");
logger.fatal("This is a fatal error");
