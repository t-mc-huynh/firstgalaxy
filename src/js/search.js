var found = false;
const result = new Array();
const school = new Array();
const glossary = new Array();
console.log(result);
console.log(school);
console.log(glossary);

// Prevents form submission for debugging purposes
var form = document.getElementById("search-form");

function handleForm(evt) {
    evt.preventDefault();
}
form.addEventListener("submit", handleForm);

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

    for (i = 0; i < LAOCcities.length; i++) {
        LAOCcities[i] = LAOCcities[i].toLowerCase();
    }

    if (LAOCcities.includes(input)) {
        console.log("City found in LA or OC county");
        found = true;
    }
}

function searchDistrict(input) {
    const LA_County_Districts = [" ABC Unified ", " Acton-Agua Dulce Unified ", " Alhambra Unified ", " Antelope Valley ROP ", " Antelope Valley Union High ", " Arcadia Unified ", " Azusa Unified ", " Baldwin Park Unified ", " Bassett Unified ", " Bellflower Unified ", " Beverly Hills Unified ", " Bonita Unified ", " Burbank Unified ", " California Advancing Pathways for Students in Los Angeles County ROC/P ", " Castaic Union ", " Centinela Valley Union High ", " Charter Oak Unified ", " Claremont Unified ", " Compton Unified ", " Compton Unified ROP ", " Covina-Valley Unified ", " Culver City Unified ", " Downey Unified ", " Duarte Unified ", " East Whittier City Elementary ", " Eastside Union Elementary ", " El Monte City ", " El Monte Union High ", " El Rancho Unified ", " El Segundo Unified ", " Garvey Elementary ", " Glendale Unified ", " Glendora Unified ", " Gorman Joint ", " Hacienda la Puente Unified ", " Hart ROP ", " Hawthorne ", " Hermosa Beach City Elementary ", " Hughes-Elizabeth Lakes Union Elementary ", " Inglewood Unified ", " Keppel Union Elementary ", " La Canada Unified ", " Lancaster Elementary ", " Las Virgenes Unified ", " Lawndale Elementary ", " Lennox ", " Little Lake City Elementary ", " Long Beach Unified ", " Long Beach Unified ROP ", " Los Angeles County Office of Education ", " Los Angeles County ROP ", " Los Angeles Unified ", " Los Angeles Unified ROCP ", " Los Nietos ", " Lynwood Unified ", " Manhattan Beach Unified ", " Monrovia Unified ", " Montebello Unified ", " Mountain View Elementary ", " Newhall ", " Norwalk-La Mirada Unified ", " Palmdale Elementary ", " Palos Verdes Peninsula Unified ", " Paramount Unified ", " Pasadena Unified ", " Pomona Unified ", " Redondo Beach Unified ", " Rosemead Elementary ", " Rowland Unified ", " San Antonio ROP ", " San Gabriel Unified ", " San Gabriel Valley Regional Occupational Program ", " San Marino Unified ", " Santa Monica-Malibu Unified ", " Saugus Union ", " SBE - Academia Avance Charter ", " SBE - Eagle Collegiate Academy ", " SBE - Los Angeles College Prep Academy ", " SBE - New West Charter ", " South Pasadena Unified ", " South Whittier Elementary ", " Southern California ROC ", " Sulphur Springs Union ", " Temple City Unified ", " Torrance Unified ", " Tri-Cities ROP ", " Valle Lindo Elementary ", " Walnut Valley Unified ", " West Covina Unified ", " Westside Union Elementary ", " Whittier City Elementary ", " Whittier Union High ", " William S. Hart Union High ", " Wilsona Elementary ", " Wiseburn Unified "];

    for (i = 0; i < LA_County_Districts.length; i++) {
        LA_County_Districts[i] = LA_County_Districts[i].trim();
        LA_County_Districts[i] = LA_County_Districts[i].toLowerCase();
    }

    if (LA_County_Districts.includes(input)) {
        console.log("Input found in LA County Districts List");
        found = true;
    }

    const Orange_County_Districts = [" Anaheim Elementary ", " Anaheim Union High ", " Brea-Olinda Unified ", " Buena Park Elementary ", " Capistrano Unified ", " Central Orange County CTE Partnership (CTEp) ", " Centralia Elementary ", " Coastline ROP ", " College and Career Advantage ", " Cypress Elementary ", " Fountain Valley Elementary ", " Fullerton Elementary ", " Fullerton Joint Union High ", " Garden Grove Unified ", " Huntington Beach City Elementary ", " Huntington Beach Union High ", " Irvine Unified ", " La Habra City Elementary ", " Laguna Beach Unified ", " Los Alamitos Unified ", " Lowell Joint ", " Magnolia Elementary ", " Newport-Mesa Unified ", " North Orange County ROP-Adult ", " Ocean View ", " Orange County Department of Education ", " Orange Unified ", " Placentia-Yorba Linda Unified ", " Saddleback Valley Unified ", " Santa Ana Unified ", " Savanna Elementary ", " SBE - Magnolia Science Academy Santa Ana ", " Tustin Unified ", " Westminster "];

    for (i = 0; i < Orange_County_Districts.length; i++) {
        Orange_County_Districts[i] = Orange_County_Districts[i].trim();
        Orange_County_Districts[i] = Orange_County_Districts[i].toLowerCase();
    }

    if (Orange_County_Districts.includes(input)) {
        console.log("Input found in Orange County Districts List");
        found = true;
    }

    const Riverside_County_Districts = [" Alvord Unified ", " Banning Unified ", " Beaumont Unified ", " California School for the Deaf-Riverside (State Special Schl) ", " Coachella Valley Unified ", " Corona-Norco Unified ", " Desert Center Unified ", " Desert Sands Unified ", " Hemet Unified ", " Jurupa Unified ", " Lake Elsinore Unified ", " Menifee Union Elementary ", " Moreno Valley Unified ", " Murrieta Valley Unified ", " Nuview Union ", " Palm Springs Unified ", " Palo Verde Unified ", " Perris Elementary ", " Perris Union High ", " Riverside County Office of Education ", " Riverside County Office Of Education ROP ", " Riverside Unified ", " Romoland Elementary ", " San Jacinto Unified ", " Temecula Valley Unified ", " Val Verde Unified "];

    for (i = 0; i < Riverside_County_Districts.length; i++) {
        Riverside_County_Districts[i] = Riverside_County_Districts[i].trim();
        Riverside_County_Districts[i] = Riverside_County_Districts[i].toLowerCase();
    }

    if (Riverside_County_Districts.includes(input)) {
        console.log("Input found in Riverside Districts List");
        found = true;
    }

    const SD_County_Districts = [" Alpine Union Elementary ", " Bonsall Unified ", " Borrego Springs Unified ", " Cajon Valley Union ", " Cardiff Elementary ", " Carlsbad Unified ", " Chula Vista Elementary ", " Coronado Unified ", " Dehesa Elementary ", " Del Mar Union Elementary ", " Encinitas Union Elementary ", " Escondido Union ", " Escondido Union High ", " Fallbrook Union Elementary ", " Fallbrook Union High ", " Grossmont Union High ", " Jamul-Dulzura Union Elementary ", " Julian Union Elementary ", " Julian Union High ", " La Mesa-Spring Valley ", " Lakeside Union Elementary ", " Lemon Grove ", " Mountain Empire Unified ", " National Elementary ", " Oceanside Unified ", " Poway Unified ", " Ramona City Unified ", " Rancho Santa Fe Elementary ", " San Diego Community College ", " San Diego County Office of Education ", " San Diego County ROP ", " San Diego Unified ", " San Dieguito Union High ", " San Marcos Unified ", " San Pasqual Union Elementary ", " San Ysidro Elementary ", " Santee ", " SBC - High Tech High ", " SBE - Baypoint Preparatory Academy San Diego ", " SBE - College Preparatory Middle ", " SBE - Grossmont Secondary ", " SBE - Sweetwater Secondary ", " SBE - Vista Springs Charter ", " Solana Beach Elementary ", " South Bay Union ", " Spencer Valley Elementary ", " Sweetwater Union High ", " Vallecitos Elementary ", " Valley Center-Pauma Unified ", " Vista Unified ", " Warner Unified "];

    for (i = 0; i < SD_County_Districts.length; i++) {
        SD_County_Districts[i] = SD_County_Districts[i].trim();
        SD_County_Districts[i] = SD_County_Districts[i].toLowerCase();
    }

    if (SD_County_Districts.includes(input)) {
        console.log("Input found in Orange County Districts List");
        found = true;
    }
}

window.onload = function() {
    /* set up XMLHttpRequest */
    var url = "src/data/datasets.xlsx";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function(e) {
        var arraybuffer = oReq.response;

        var data = new Uint8Array(arraybuffer);

        var workbook = XLSX.read(data, { type: 'array' });
        //result.push(workbook.SheetNames);
        let i = 0;
        workbook.SheetNames.forEach(function(SheetNames) {
            var roa = XLSX.utils.sheet_to_json(workbook.Sheets[SheetNames], { header: 1 });
            // result.push(roa);
            result.push([workbook.SheetNames[i], roa]);
            i++;
        });

        for (var h = 0; h < result[0][1].length; h++) {
            school.push(result[0][1][h]);
        }

        for (var k = 0; k < result[1][1].length; k++) {
            glossary.push(result[1][1][k]);
        }

        //console.log(result);
    }
    oReq.send();
};