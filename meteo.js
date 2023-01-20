const input = document.querySelector("#cityinput");
input.addEventListener("keydown", findCity);
var ville = [];
var codeTab = [];

WEATHER = {
    0: "Soleil",
    1: "Peu nuageux",
    2: "Ciel voilé",
    3: "Nuageux",
    4: "Très nuageux",
    5: "Couvert",
    6: "Brouillard",
    7: "Brouillard givrant",
    10: "Pluie faible",
    11: "Pluie modérée",
    12: "Pluie forte",
    13: "Pluie faible verglaçante",
    14: "Pluie modérée verglaçante",
    15: "Pluie forte verglaçante",
    16: "Bruine",
    20: "Neige faible",
    21: "Neige modérée",
    22: "Neige forte",
    30: "Pluie et neige mêlées faibles",
    31: "Pluie et neige mêlées modérées",
    32: "Pluie et neige mêlées fortes",
    40: "Averses de pluie locales et faibles",
    41: "Averses de pluie locales",
    42: "Averses locales et fortes",
    43: "Averses de pluie faibles",
    44: "Averses de pluie",
    45: "Averses de pluie fortes",
    46: "Averses de pluie faibles et fréquentes",
    47: "Averses de pluie fréquentes",
    48: "Averses de pluie fortes et fréquentes",
    60: "Averses de neige localisées et faibles",
    61: "Averses de neige localisées",
    62: "Averses de neige localisées et fortes",
    63: "Averses de neige faibles",
    64: "Averses de neige",
    65: "Averses de neige fortes",
    66: "Averses de neige faibles et fréquentes",
    67: "Averses de neige fréquentes",
    68: "Averses de neige fortes et fréquentes",
    70: "Averses de pluie et neige mêlées localisées et faibles",
    71: "Averses de pluie et neige mêlées localisées",
    72: "Averses de pluie et neige mêlées localisées et fortes",
    73: "Averses de pluie et neige mêlées faibles",
    74: "Averses de pluie et neige mêlées",
    75: "Averses de pluie et neige mêlées fortes",
    76: "Averses de pluie et neige mêlées faibles et nombreuses",
    77: "Averses de pluie et neige mêlées fréquentes",
    78: "Averses de pluie et neige mêlées fortes et fréquentes",
    100: "Orages faibles et locaux",
    101: "Orages locaux",
    102: "Orages fort et locaux",
    103: "Orages faibles",
    104: "Orages",
    105: "Orages forts",
    106: "Orages faibles et fréquents",
    107: "Orages fréquents",
    108: "Orages forts et fréquents",
    120: "Orages faibles et locaux de neige ou grésil",
    121: "Orages locaux de neige ou grésil",
    122: "Orages locaux de neige ou grésil",
    123: "Orages faibles de neige ou grésil",
    124: "Orages de neige ou grésil",
    125: "Orages de neige ou grésil",
    126: "Orages faibles et fréquents de neige ou grésil",
    127: "Orages fréquents de neige ou grésil",
    128: "Orages fréquents de neige ou grésil",
    130: "Orages faibles et locaux de pluie et neige mêlées ou grésil",
    131: "Orages locaux de pluie et neige mêlées ou grésil",
    132: "Orages fort et locaux de pluie et neige mêlées ou grésil",
    133: "Orages faibles de pluie et neige mêlées ou grésil",
    134: "Orages de pluie et neige mêlées ou grésil",
    135: "Orages forts de pluie et neige mêlées ou grésil",
    136: "Orages faibles et fréquents de pluie et neige mêlées ou grésil",
    137: "Orages fréquents de pluie et neige mêlées ou grésil",
    138: "Orages forts et fréquents de pluie et neige mêlées ou grésil",
    140: "Pluies orageuses",
    141: "Pluie et neige mêlées à caractère orageux",
    142: "Neige à caractère orageux",
    210: "Pluie faible intermittente",
    211: "Pluie modérée intermittente",
    212: "Pluie forte intermittente",
    220: "Neige faible intermittente",
    221: "Neige modérée intermittente",
    222: "Neige forte intermittente",
    230: "Pluie et neige mêlées",
    231: "Pluie et neige mêlées",
    232: "Pluie et neige mêlées",
    235: "Averses de grêle",
}

function findCity(event) {

    const keyPressed = event.keyCode;
    if (keyPressed == 13) {
        document.querySelector(`#ville1`).innerHTML = "";
        document.querySelector(`#ville2`).innerHTML = "";
        document.querySelector(`#ville3`).innerHTML = "";
        document.querySelector(`#ville4`).innerHTML = "";
        document.querySelector(`#ville5`).innerHTML = "";
        document.querySelector("#ville").innerHTML = "";
        document.querySelector("#condition").innerHTML = "";



        var inputval = document.querySelector('#cityinput');

        var urlInseeApi = `https://geo.api.gouv.fr/communes?nom=${inputval.value}&fields=departement&boost=population&limit=5`

        fetch(`${urlInseeApi}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            })
            .then(res => res.json())

            .then(info => {

                for (let i = 0; i < info.length; i++) {
                    console.log(info.length)
                    ville[i] = info[i]["nom"];
                    codeTab[i] = info[i]["code"];
                }
                if (info.length >= 5) {
                    document.querySelector(`#ville1`).innerHTML = `<button onclick="buttonClickGET0()">${ville[0]}: ${codeTab[0]}`;
                    document.querySelector(`#ville2`).innerHTML = `<button onclick="buttonClickGET1()">${ville[1]}: ${codeTab[1]}`;
                    document.querySelector(`#ville3`).innerHTML = `<button onclick="buttonClickGET2()">${ville[2]}: ${codeTab[2]}`;
                    document.querySelector(`#ville4`).innerHTML = `<button onclick="buttonClickGET3()">${ville[3]}: ${codeTab[3]}`;
                    document.querySelector(`#ville5`).innerHTML = `<button onclick="buttonClickGET4()">${ville[4]}: ${codeTab[4]}`;

                } else if (info.length == 4) {
                    document.querySelector(`#ville1`).innerHTML = `<button onclick="buttonClickGET0()">${ville[0]}: ${codeTab[0]}`;
                    document.querySelector(`#ville2`).innerHTML = `<button onclick="buttonClickGET1()">${ville[1]}: ${codeTab[1]}`;
                    document.querySelector(`#ville3`).innerHTML = `<button onclick="buttonClickGET2()">${ville[2]}: ${codeTab[2]}`;
                    document.querySelector(`#ville4`).innerHTML = `<button onclick="buttonClickGET3()">${ville[3]}: ${codeTab[3]}`;
                } else if (info.length == 3) {
                    document.querySelector(`#ville1`).innerHTML = `<button onclick="buttonClickGET0()">${ville[0]}: ${codeTab[0]}`;
                    document.querySelector(`#ville2`).innerHTML = `<button onclick="buttonClickGET1()">${ville[1]}: ${codeTab[1]}`;
                    document.querySelector(`#ville3`).innerHTML = `<button onclick="buttonClickGET2()">${ville[2]}: ${codeTab[2]}`;
                } else if (info.length == 2) {
                    document.querySelector(`#ville1`).innerHTML = `<button onclick="buttonClickGET0()">${ville[0]}: ${codeTab[0]}`;
                    document.querySelector(`#ville2`).innerHTML = `<button onclick="buttonClickGET1()">${ville[1]}: ${codeTab[1]}`;

                } else {
                    document.querySelector(`#ville1`).innerHTML = `<button onclick="buttonClickGET0()">${ville[0]}: ${codeTab[0]}`;
                }

                const tab = ville.concat(codeTab);

                return tab;

            })
    }



}

//Météo

function buttonClickGET0() {

    document.querySelector(`#ville1`).innerHTML = "";
    document.querySelector(`#ville2`).innerHTML = "";
    document.querySelector(`#ville3`).innerHTML = "";
    document.querySelector(`#ville4`).innerHTML = "";
    document.querySelector(`#ville5`).innerHTML = "";
    var urlMeteoToulouse = `https://api.meteo-concept.com/api/forecast/nextHours?token=7ba998f4e67e32f30db3e0b0bb53f939353710b63cf012d84829f2ef6d15d4b1&insee=${codeTab[0]}`

    fetch(`${urlMeteoToulouse}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(res => res.json())

        .then(data => {

            console.log(data)
            var name = data["city"]["name"];
            var temp = data["forecast"][2]["temp2m"];
            var condtion = data["forecast"][2]["weather"];
            document.querySelector("#ville").innerHTML = `La température à ${name} est de ${temp}°C`;
            for (let i = 0; i < 235; i++) {
                if (condtion == i) {
                    document.querySelector("#condition").innerHTML = `${WEATHER[i]}`;

                }
            }
            console.log(name)
            console.log(temp)
        })
}

function buttonClickGET1() {

    document.querySelector(`#ville1`).innerHTML = "";
    document.querySelector(`#ville2`).innerHTML = "";
    document.querySelector(`#ville3`).innerHTML = "";
    document.querySelector(`#ville4`).innerHTML = "";
    document.querySelector(`#ville5`).innerHTML = "";
    var urlMeteoToulouse = `https://api.meteo-concept.com/api/forecast/nextHours?token=7ba998f4e67e32f30db3e0b0bb53f939353710b63cf012d84829f2ef6d15d4b1&insee=${codeTab[1]}`

    fetch(`${urlMeteoToulouse}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(res => res.json())

        .then(data => {


            console.log(data)
            var name = data["city"]["name"];
            var temp = data["forecast"][2]["temp2m"];
            var condtion = data["forecast"][2]["weather"];
            document.querySelector("#ville").innerHTML = `La température à ${name} est de ${temp}°C`;
            for (let i = 0; i < 235; i++) {
                if (condtion == i) {
                    document.querySelector("#condition").innerHTML = `${WEATHER[i]}`;

                }
            }
        })
}

function buttonClickGET2() {

    document.querySelector(`#ville1`).innerHTML = "";
    document.querySelector(`#ville2`).innerHTML = "";
    document.querySelector(`#ville3`).innerHTML = "";
    document.querySelector(`#ville4`).innerHTML = "";
    document.querySelector(`#ville5`).innerHTML = "";
    var urlMeteoToulouse = `https://api.meteo-concept.com/api/forecast/nextHours?token=7ba998f4e67e32f30db3e0b0bb53f939353710b63cf012d84829f2ef6d15d4b1&insee=${codeTab[2]}`

    fetch(`${urlMeteoToulouse}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(res => res.json())

        .then(data => {


            console.log(data)
            var name = data["city"]["name"];
            var temp = data["forecast"][2]["temp2m"];
            var condtion = data["forecast"][2]["weather"];
            document.querySelector("#ville").innerHTML = `La température à ${name} est de ${temp}°C`;
            for (let i = 0; i < 235; i++) {
                if (condtion == i) {
                    document.querySelector("#condition").innerHTML = `${WEATHER[i]}`;

                }
            }
        })
}

function buttonClickGET3() {

    document.querySelector(`#ville1`).innerHTML = "";
    document.querySelector(`#ville2`).innerHTML = "";
    document.querySelector(`#ville3`).innerHTML = "";
    document.querySelector(`#ville4`).innerHTML = "";
    document.querySelector(`#ville5`).innerHTML = "";
    var urlMeteoToulouse = `https://api.meteo-concept.com/api/forecast/nextHours?token=7ba998f4e67e32f30db3e0b0bb53f939353710b63cf012d84829f2ef6d15d4b1&insee=${codeTab[3]}`

    fetch(`${urlMeteoToulouse}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(res => res.json())

        .then(data => {


            console.log(data)
            var name = data["city"]["name"];
            var temp = data["forecast"][2]["temp2m"];
            var condtion = data["forecast"][2]["weather"];
            document.querySelector("#ville").innerHTML = `La température à ${name} est de ${temp}°C`;
            for (let i = 0; i < 235; i++) {
                if (condtion == i) {
                    document.querySelector("#condition").innerHTML = `${WEATHER[i]}`;

                }
            }
        })
}

function buttonClickGET4() {

    document.querySelector(`#ville1`).innerHTML = "";
    document.querySelector(`#ville2`).innerHTML = "";
    document.querySelector(`#ville3`).innerHTML = "";
    document.querySelector(`#ville4`).innerHTML = "";
    document.querySelector(`#ville5`).innerHTML = "";
    var urlMeteoToulouse = `https://api.meteo-concept.com/api/forecast/nextHours?token=7ba998f4e67e32f30db3e0b0bb53f939353710b63cf012d84829f2ef6d15d4b1&insee=${codeTab[4]}`

    fetch(`${urlMeteoToulouse}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(res => res.json())

        .then(data => {


            console.log(data)
            var name = data["city"]["name"];
            var temp = data["forecast"][2]["temp2m"];
            var condtion = data["forecast"][2]["weather"];
            document.querySelector("#ville").innerHTML = `La température à ${name} est de ${temp}°C`;
            for (let i = 0; i < 235; i++) {
                if (condtion == i) {
                    document.querySelector("#condition").innerHTML = `${WEATHER[i]}`;

                }
            }
        })
}