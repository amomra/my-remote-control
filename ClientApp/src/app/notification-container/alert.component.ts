import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AlertMessage } from '../alert-message';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

    @Input()
    model: AlertMessage;

    @Output()
    closed: EventEmitter<AlertMessage> = new EventEmitter();

    @ViewChild('closeButtonElem', { static: true })
    private closeButton: ElementRef;

    private closeTimer: any;

    constructor() {
    }

    ngOnInit(): void {
        // inicia o timer para fechar o alert após três segundos
        this.startTimer();
    }

    closeButtonClick() {
        // limpa o timer
        this.stopTimer();
        // emite o evento
        setTimeout(() => this.closed.emit(this.model), 300);
    }

    @HostListener('mouseenter') onMouseEnter() {
        // para o timer
        this.stopTimer();
    }

    @HostListener('mouseleave') onMouseLeave() {
        // inicia novamente o timer
        this.startTimer();
    }

    private startTimer() {
        // cria o timer que simula o click no botão de fechar
        this.closeTimer = setTimeout(() => {
            this.closeButton.nativeElement.click();
        }, 3000);
    }

    private stopTimer() {
        clearTimeout(this.closeTimer);
    }
}
