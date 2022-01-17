import { school } from "./data.js";
var found = false;
//console.log(school);

// Prevents form submission for debugging purposes
var form = document.getElementById("search-form");
var submitBtn = document.querySelector(".main-button");

function handleForm(evt) {
    evt.preventDefault();
}
form.addEventListener("submit", handleForm);

form.addEventListener('keydown', runSearches, true);
submitBtn.addEventListener("click", runSearches, true);

function runSearches(e) {
    if (window.event) {
        // User still typing
        console.log(e.which);

        if (e.which == 13 || e.which == 1) {
            // User pressed enter 
            var input;
            input = document.querySelector(".searchText").value;
            console.log(input);
            input = input.toLowerCase();
            input = input.trim();

            if (input.includes("school district")) {
                input = input.replace("school district", "");
                input = input.trim();
                console.log(input);
            }

            searchCity(input);
            searchDistrict(input);

            // Done running all the searches 
            if (found == false) {
                console.log("User input was not found in our data");
            }
        }

    }


}

function searchCity(input) {
    const LAOCcities = ["Acton", "Adams - Normandie", "Agoura Hills", "Agua Dulce", "Alhambra", "Aliso Viejo", "Alondra Park", "Altadena", "Anaheim", "Antelope Acres", "Arcadia", "Arleta", "Arlington Heights", "Artesia", "Athens", "Atwater Village", "Avalon", "Avocado Heights", "Azusa", "Baldwin Hills", "Baldwin Park", "Bandini", "Bassett", "BelAir", "Bell", "Bell Gardens", "Bellflower", "Beverly Crest", "Beverly Glen", "Beverly Grove", "Beverly Hills", "Beverlywood", "Bouquet Canyon", "Boyle Heights", "Bradbury", "Brea", "Brentwood", "Broadway-Manchester", "BuenaPark", "Burbank", "Calabasas", "CanogaPark", "CanyonCountry", "Carson", "Carthay", "Castaic", "Central Avenue", "Cerritos", "Charter Oak", "Chatsworth", "Chinatown", "Citrus", "City of Industry", "Claremont", "Commerce", "Compton", "CostaMesa", "CotodeCaza", "Covina", "Crenshaw", "Crystalaire", "Cudahy", "CulverCity", "Cypress", "DanaPoint", "DelAire", "DelSur", "DiamondBar", "Downey", "Duarte", "EagleRock", "East Los Angeles", "East Pasadena", "East Rancho Dominguez", "East San Gabriel", "Echo Park", "El Camino Village", "El Monte", "El Segundo", "El Sereno", "Elizabeth Lake", "Encino", "Expo Park", "Fairmont", "Firestone Park", "Florence", "Fountain Valley", "Fullerton", "Garden Grove", "Gardena", "Glassell Park", "Glendale", "Glendora", "Gorman", "Graham", "Granada Hills", "Green Meadows", "Green Valley", "Hacienda Heights", "Hancock Park", "Harbor City", "Hawaiian Gardens", "Hawthorne", "Hermosa Beach", "Hi Vista", "Hidden Hills", "Highland Park", "Hollywood", "Huntington Beach", "Huntington Park", "Inglewood", "Irvine", "Irwindale", "Juniper Hills", "Kagel Canyon", "Kinneloa Mesa", "Koreatown", "La Canada Flintridge", "La Crescenta", "La Habra", "La Habra Heights", "La Mirada", "La Palma", "La Puente", "La Verne", "Ladera Heights", "Ladera Ranch", "Laguna Beach", "Laguna Hills", "Laguna Niguel", "Laguna Woods", "Lake Balboa", "Lake Forest", "Lake Hughes", "Lake Los Angeles", "Lake View Terrace", "Lakewood", "Lancaster", "Las Flores", "Lawndale", "Lennox", "Leona Valley", "Lincoln Heights", "Littlerock", "Llano", "Lomita", "Long Beach", "Los Alamitos", "Los Angeles", "Los Feliz", "Los Nietos", "Lynwood", "Malibu", "Manhattan Beach", "Mar Vista", "Marina Del Rey", "Maywood", "Midway City", "Mid-Wilshire", "Mint Canyon", "Miracle Mile", "Mission Hills", "Mission Viejo", "Monrovia", "Monte Nido", "Montebello", "Montecito Heights", "Monterey Park", "Montrose", "Mount Washington", "Newhall", "NewportBeach", "NorthElMonte", "NorthHills", "NorthHollywood", "NorthTustin", "NorthWhittier", "NortheastAntelopeValley", "Northridge", "NorthwestPalmdale", "Norwalk", "Orange", "Pacific Palisades", "Pacoima", "Palmdale", "Palms", "Palos Verdes Estates", "Palos Verdes Peninsula", "Panorama City", "Paramount", "Pasadena", "Pearblossom", "PicoRivera", "Pico-Robertson", "Pico-Union", "Placentia", "Playa Del Rey", "Playa Vista", "Pomona", "Porter Ranch", "Quartz Hill", "Ramona", "Rancho Dominguez", "Rancho Palos Verdes", "Rancho Park", "Rancho Santa Margarita", "Redondo Beach", "Reseda", "Rolling Hills", "Rolling Hills Estates", "Rosemead", "Rowland Heights", "San Clemente", "San Dimas", "San Fernando", "San Gabriel", "San Juan Capistrano", "San Marino", "San Pasqual", "San Pedro", "Santa Ana", "Santa Clarita", "Santa Fe Springs", "Santa Monica", "Sawtelle", "Seal Beach", "Shadow Hills", "Sherman Oaks", "Sierra Madre", "Signal Hill", "Silver Lake", "South El Monte", "South Gate", "South Park", "South Pasadena", "South San Gabriel", "South San Jose Hills", "South Whittier", "Southeast Antelope Valley", "Stanton", "Stevenson Ranch", "Studio City", "Sun Valley", "Sun Village", "Sunland", "Sylmar", "Tarzana", "Temple City", "Toluca Lake", "Topanga", "Torrance", "Tujunga", "Tujunga Canyons", "Tustin", "Unincorporated Catalina Island", "Unincorporated Santa Monica Mountains", "Universal City", "University Park", "Val Verde", "Valencia", "Valinda", "Valley Glen", "Valley Village", "Valyermo", "Van Nuys", "Venice", "Verdugo City", "Vermont Knolls", "Vermont Square", "Vermont Vista", "Vermont-Slauson", "Vernon", "View Park-Windsor Hills", "Villa Park", "Vincent", "Walnut", "Walnut Park", "Watts", "West Athens", "West Carson", "West Compton", "West Covina", "West Hills", "West Hollywood", "West Los Angeles", "West Puente Valley", "West Whittier", "Westchester", "Westlake", "Westlake Village", "Westminster", "Westmont", "Westwood", "Whittier", "Willowbrook", "Wilmington", "Winnetka", "Woodland Hills", "Yorba Linda"];

    for (let i = 0; i < LAOCcities.length; i++) {
        LAOCcities[i] = LAOCcities[i].toLowerCase();
    }

    if (LAOCcities.includes(input)) {
        console.log("City found in LA or OC county");
        found = true;
    }
}

function searchDistrict(input) {
    for (let i = 1; i < school.length; i++) {
        if (input == school[i][5].toLowerCase()) {
            found = true;
            console.log("Input found is district list");
            break;
        }
    }
}

export { runSearches };