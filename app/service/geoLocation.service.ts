import {Injectable} from "@angular/core"
import geolocation = require("nativescript-geolocation");

@Injectable()
export class GeoLocationService {
    getLocation(onSucess, onError) {
        this.enableLocationRequest();
        let options = { desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000 };
        var location = geolocation.getCurrentLocation(options)
            .then(onSucess, onError);
    }
    
    enableLocationRequest() {
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
        }
    }
}