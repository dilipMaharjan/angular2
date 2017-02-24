import {Component} from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    constructor() {
        this.firstName = "Dilip";
        this.lastName = "Maharjan";
        this.username = "crazyers";
        this.email = "email@email.com";
    }
}
