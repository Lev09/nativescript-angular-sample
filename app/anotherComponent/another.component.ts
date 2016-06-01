import {Component} from "@angular/core";
import {alert} from "ui/dialogs";
import {GeoLocationService} from "../service/geoLocation.service";

@Component({
    selector: 'another-page',
    templateUrl: "../app/anotherComponent/another.xml",
    styleUrls: ["../app/anotherComponent/another.css"],
    providers: [GeoLocationService]
})
export class AnotherComponent {
    latitude: String;
    longitude: String;
    
    constructor(private geolocatonService: GeoLocationService) {
        
    }

    getLocation() {
        alert({message:"Getting your location !", okButtonText: "ok, thanks"});
        this.geolocatonService.getLocation(
            loc => {
                if (loc) {
                    this.latitude = String(loc.latitude);
                    this.longitude = String(loc.longitude);
                }
            },
            error => {
                console.log("Error: " + error.message);
            });
    }

}