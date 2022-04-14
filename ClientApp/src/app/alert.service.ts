import { EventEmitter, Injectable } from '@angular/core';
import { AlertMessage } from './alert-message';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    private alertEvent: EventEmitter<AlertMessage> = new EventEmitter();

    registerCallback(callback: (notification: AlertMessage) => void) {
        // registra a callback
        return this.alertEvent.subscribe(callback);
    }

    sendAlert(alertMessage: AlertMessage) {
        this.alertEvent.next(alertMessage);
    }
}
