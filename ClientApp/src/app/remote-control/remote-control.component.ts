import { RemoteControlService } from './remote-control.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-remote-control',
    templateUrl: './remote-control.component.html',
    styleUrls: ['./remote-control.component.css']
})
export class RemoteControlComponent implements OnInit {

    constructor(private remoteControlService: RemoteControlService) {
    }

    ngOnInit() {
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
