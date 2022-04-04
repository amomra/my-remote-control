import { RemoteControlService } from './remote-control.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-remote-control',
    templateUrl: './remote-control.component.html',
    styleUrls: ['./remote-control.component.css']
})
export class RemoteControlComponent {

    constructor(private remoteControlService: RemoteControlService) {
    }

    play() {
        this.remoteControlService.play();
    }

    stop() {
        this.remoteControlService.stop();
    }

    prev() {
        this.remoteControlService.prev();
    }

    next() {
        this.remoteControlService.next();
    }

    backward() {
        this.remoteControlService.backward();
    }

    forward() {
        this.remoteControlService.forward();
    }

    volumeUp() {
        this.remoteControlService.volumeUp();
    }

    volumeDown() {
        this.remoteControlService.volumeDown();
    }

    mute() {
        this.remoteControlService.mute();
    }

    fullscreen() {
        this.remoteControlService.fullscreen();
    }
}
