export enum AlertType {
    SUCCESS = <any>"success",
    INFO = <any>"info",
    WARNING = <any>"warning",
    ERROR = <any>"danger"
}

export class AlertMessage {
    type: AlertType;
    message: string;
}