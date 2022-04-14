import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertMessage } from '../alert-message';
import { AlertService } from '../alert.service';

@Component({
    selector: 'app-notification-container',
    templateUrl: './notification-container.component.html',
    styleUrls: ['./notification-container.component.css']
})
export class NotificationContainerComponent implements OnInit, OnDestroy {

    alertMessages: AlertMessage[] = [];

    private alertServiceCallbackSubscribe: Subscription;

    constructor(private alertService: AlertService) {
    }

    ngOnInit(): void {
        // registra a callback que recebe os alertas gerados
        this.alertServiceCallbackSubscribe = this.alertService.registerCallback((alertMessage) => {
            // adiciona a mensagem
            this.alertMessages.push(alertMessage);
        });
    }

    ngOnDestroy(): void {
        this.alertServiceCallbackSubscribe.unsubscribe();
    }

    removeAlert(alertMessage: AlertMessage) {
        // busca a posição do alerta na lista e remove
        const idx = this.alertMessages.indexOf(alertMessage);
        if (idx !== -1) {
            this.alertMessages.splice(idx, 1);
        }
    }
}
