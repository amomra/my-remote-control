import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    get applicationUrl(): string {
        // pega a URL que foi usada para acessar a página
        return window.location.href;
    }
}
