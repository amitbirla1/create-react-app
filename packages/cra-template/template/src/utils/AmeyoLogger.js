export var LogLevel = {};
//TODO configure env variable from configuration.
export class AmeyoLogger {
    constructor(clazz = null) {
        this.localCounter = 0;
        this.MAX_RANDOM_INT = Math.pow(2, 32);
        this.AMEYO_APP_LOGGING_PREFIX = "";
        this.MAX_ALLOWED_STORAGE_SIZE = "4000";
        this.ALLOW_LOCAL_STORAGE_DUMPING = false;
        LogLevel.ERROR = "ERROR";
        LogLevel.INFO = "INFO";
        LogLevel.WARN = "WARN";
        LogLevel.DEBUG = "DEBUG";
        this.clazz = clazz;
        this.init();
    }

    init() {}

    warn(message) {
        this.log(message, LogLevel.WARN);
    }

    error(message) {
        this.log(message, LogLevel.ERROR);
    }

    info(message) {
        this.log(message, LogLevel.INFO);
    }

    debug(message) {
        this.log(message, LogLevel.DEBUG);
    }

    log(message, level) {
        var logTime = new Date();
        if (level === undefined) {
            level = LogLevel.DEBUG;
        }
        try {
            var key = this.createKeyForLog(logTime);
            var messageToLog = this.createMessageToLog(
                message,
                logTime,
                level,
                key
            );
            try {
                if (window.localStorage) {
                    window.localStorage.setItem(key, messageToLog);
                }
                this.doConsoleLog(messageToLog, level);
            } catch (e) {
                console.error("failed to add item in local storage " + e);
            }
            this.localCounter++;
        } catch (e) {
            console.info("unable to log data in storage, reason: " + e);
        }
    }

    createMessageToLog(message, logTime, level, key) {
        let fileName = "";
        if (this.clazz) {
            fileName = ", clazz: " + this.clazz;
        }
        var messageToLog =
            "[" +
            this.formatDate(logTime) +
            "] " +
            level +
            " [ "+fileName +
            "]: " +
            message;

        return messageToLog;
    }

    createKeyForLog(logTime) {
        return (
            this.AMEYO_REMOTE_LOGGING_PREFIX +
            logTime.getTime() +
            "-" +
            Math.floor(Math.random() * this.MAX_RANDOM_INT + 1) +
            "-" +
            this.localCounter
        );
    }
    formatDate(date) {
        let dformat =
            [
                date.getFullYear(),
                date.getMonth() + 1 < 10
                    ? "0" + (date.getMonth() + 1)
                    : date.getMonth() + 1,
                date.getDate()
            ].join("-") +
            " " +
            [
                date.getHours(),
                date.getMinutes() < 10
                    ? "0" + date.getMinutes()
                    : date.getMinutes(),
                date.getSeconds()
            ].join(":");
        return dformat;
    }

    doConsoleLog(message, level) {
        if (level === LogLevel.ERROR) {
            console.error(message);
        } else if (level === LogLevel.INFO) {
            // console.info(message);
        } else if (level === LogLevel.WARN) {
            console.warn(message);
        } else if (level === LogLevel.DEBUG) {
            console.debug(message);
        } else {
            //console.log(message);
        }
    }
}

export const logger = new AmeyoLogger();
