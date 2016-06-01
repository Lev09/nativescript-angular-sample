import {Component} from "@angular/core";
import { Router } from '@angular/router-deprecated';
import {alert} from "ui/dialogs";

import {User} from "../model/user";

@Component({
    selector: "login",
    templateUrl: "../app/loginComponent/login.xml",
    styleUrls: ["../app/loginComponent/login.css"]
})
export class LoginComponent {
    user = new User("my-username", "123");
    
    constructor(private router: Router) {}
    
    public login(user: User) {
        alert("Logging in with : " + user.username).then(r => 
            this.router.navigate(['Another Page'])
        );
        
    }
    
}