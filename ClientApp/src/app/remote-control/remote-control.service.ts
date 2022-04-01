import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RemoteControlService {

    get baseEndpoint(): string {
        return 'api/remotecontrol';
    }

    constructor(private httpClient: HttpClient) {
    }

    play() {
        return this.httpClient.post(`${this.baseEndpoint}/play`, {}).toPromise();
    }

    stop() {
        return this.httpClient.post(`${this.baseEndpoint}/stop`, {}).toPromise();
    }

    prev() {
        return this.httpClient.post(`${this.baseEndpoint}/prev`, {}).toPromise();
    }

    next() {
        return this.httpClient.post(`${this.baseEndpoint}/next`, {}).toPromise();
    }

    volumeUp() {
        return this.httpClient.post(`${this.baseEndpoint}/volumeUp`, {}).toPromise();
    }

    volumeDown() {
        return this.httpClient.post(`${this.baseEndpoint}/volumeDown`, {}).toPromise();
    }

    mute() {
        return this.httpClient.post(`${this.baseEndpoint}/mute`, {}).toPromise();
    }

    fullscreen() {
        return this.httpClient.post(`${this.baseEndpoint}/fullscreen`, {}).toPromise();
    }
}
