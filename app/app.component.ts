import {Component} from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div><h1> {{pageTitle}}</h1>
        <pm-closet></pm-closet>
    </div>
`
})

export class AppComponent {
    pageTitle: string = 'What Should I Wear Home';
}
