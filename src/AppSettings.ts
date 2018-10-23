export enum LogLevel {
    None,
    Errors,
    Debug,
    Trace
}

export class AppSettings {

    public static readonly logging = {
        logLevel: LogLevel.Trace,
    };

}