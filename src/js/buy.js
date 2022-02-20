import { geo_location, geoloc } from "./carousel.js";
import { ip_location } from "./search.js";

"use strict";

if (geoloc) {
    console.log(geo_location);
} else {
    console.log(ip_location);
}