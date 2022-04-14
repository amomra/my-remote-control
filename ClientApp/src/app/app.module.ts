import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { QRCodeModule } from 'angularx-qrcode';
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { AlertComponent } from './notification-container/alert.component';

@NgModule({
    declarations: [
        AppComponent,
        RemoteControlComponent,
        NotificationContainerComponent,
        AlertComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        QRCodeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
