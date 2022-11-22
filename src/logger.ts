export enum Severity {
    ERROR = 'error',
    WARN = 'warn',
    INFO = 'info',
}

export type BaseLogData = {
    message: string;
    severity: Severity;
};

export type ExtendedLogData = {
    key: string;
    moment: Date;
};

export type LogData = BaseLogData & ExtendedLogData;

export default class Logger {
    private static instance: Logger;

    private constructor() {}

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(data: Partial<LogData>): void {
        if (!data.moment) {
            data.moment = new Date();
        }
        if (!data.key) {
            data.key = 'DEFAULT';
        }
        console[data.severity || Severity.INFO](`[${data.moment}]    ${data.key.toLocaleUpperCase()}\t${data.message}`);
    }

    public error(data: Pick<LogData, 'message' | 'moment'>): void {
        this.log({ ...data, severity: Severity.ERROR });
    }

    public warn(data: Pick<LogData, 'message' | 'moment'>): void {
        this.log({ ...data, severity: Severity.WARN });
    }

    public info(data: Pick<LogData, 'message' | 'moment'>): void {
        this.log({ ...data, severity: Severity.INFO });
    }
}
