import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";

import { LoginComponent } from './loginComponent/login.component';
import { AnotherComponent } from './anotherComponent/another.component';

@Component({
    selector: "my-app",
    directives: [ROUTER_DIRECTIVES, NS_ROUTER_DIRECTIVES],
    templateUrl: "app.xml",
})
@RouteConfig([
    { path: '/login', component: LoginComponent, name: 'Login screen', useAsDefault: true},
    { path: '/userDetails', component: AnotherComponent, name: 'Another Page' },
    //{ path: '/users', component: UsersComponent, name: 'Users' },
])
export class AppComponent {
    
}
