import {AppSettings, LogLevel} from '../AppSettings'

export class Logging {

    public static error(message?: string | undefined | null, ...optionalParams: any[]): boolean {
        if (AppSettings.logging.logLevel >= LogLevel.Errors) {
            if (message) {
                if (optionalParams && optionalParams.length > 0) {
                    console.error(message, optionalParams);
                } else {
                    console.error(message);
                }
            }
            return true;
        } else {
            return false;
        }
    }

    public static debug(message?: string | undefined | null, ...optionalParams: any[]): boolean {
        if (AppSettings.logging.logLevel >= LogLevel.Debug) {
            if (message) {
                if (optionalParams && optionalParams.length > 0) {
                    console.log(message, optionalParams);
                } else {
                    console.log(message);
                }
            }
            return true;
        } else {
            return false;
        }
    }

    public static trace(message?: string | undefined | null, ...optionalParams: any[]): boolean {
        if (AppSettings.logging.logLevel >= LogLevel.Trace) {
            if (message) {
                if (optionalParams && optionalParams.length > 0) {
                    console.log(message, optionalParams);
                } else {
                    console.log(message);
                }
            }
            return true;
        } else {
            return false;
        }
    }
}