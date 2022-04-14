import { RemoteControlService } from './remote-control.service';
import { Component } from '@angular/core';
import { AlertService } from '../alert.service';
import { AlertType } from '../alert-message';

@Component({
    selector: 'app-remote-control',
    templateUrl: './remote-control.component.html',
    styleUrls: ['./remote-control.component.css']
})
export class RemoteControlComponent {

    constructor(private remoteControlService: RemoteControlService,
        private alertService: AlertService) {
    }

    play() {
        this.remoteControlService.play().catch(this.showError.bind(this));
    }

    stop() {
        this.remoteControlService.stop().catch(this.showError.bind(this));
    }

    prev() {
        this.remoteControlService.prev().catch(this.showError.bind(this));
    }

    next() {
        this.remoteControlService.next().catch(this.showError.bind(this));
    }

    backward() {
        this.remoteControlService.backward().catch(this.showError.bind(this));
    }

    forward() {
        this.remoteControlService.forward().catch(this.showError.bind(this));
    }

    volumeUp() {
        this.remoteControlService.volumeUp().catch(this.showError.bind(this));
    }

    volumeDown() {
        this.remoteControlService.volumeDown().catch(this.showError.bind(this));
    }

    mute() {
        this.remoteControlService.mute().catch(this.showError.bind(this));
    }

    fullscreen() {
        this.remoteControlService.fullscreen().catch(this.showError.bind(this));
    }

    private showError(_error: any) {
        // envia a notificação de erro
        this.alertService.sendAlert({
            message: 'An error occurred while trying to communicate with the service. Check if it is running',
            type: AlertType.ERROR
        });
    }
}
