function buttonClickGET() {
    document.querySelector(`#ville1`).innerHTML = "";
    document.querySelector(`#ville2`).innerHTML = "";
    document.querySelector(`#ville3`).innerHTML = "";
    document.querySelector(`#ville4`).innerHTML = "";
    document.querySelector(`#ville5`).innerHTML = "";


    var ville = [];
    var codeTab = [];
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
                document.querySelector(`#ville1`).innerHTML = `<button onclick="getMeteo()">${ville[0]}: ${codeTab[0]}</button>`;
                document.querySelector(`#ville2`).innerHTML = `<button onclick="getMeteo()">${ville[1]}: ${codeTab[1]}`;
                document.querySelector(`#ville3`).innerHTML = `<button onclick="getMeteo()">${ville[2]}: ${codeTab[2]}`;
                document.querySelector(`#ville4`).innerHTML = `<button onclick="getMeteo()">${ville[3]}: ${codeTab[3]}`;
                document.querySelector(`#ville5`).innerHTML = `<button onclick="getMeteo()">${ville[4]}: ${codeTab[4]}`;

            } else if (info.length == 4) {
                document.querySelector(`#ville1`).innerHTML = `<button onclick="getMeteo()">${ville[0]}: ${codeTab[0]}`;
                document.querySelector(`#ville2`).innerHTML = `<button onclick="getMeteo()">${ville[1]}: ${codeTab[1]}`;
                document.querySelector(`#ville3`).innerHTML = `<button onclick="getMeteo()">${ville[2]}: ${codeTab[2]}`;
                document.querySelector(`#ville4`).innerHTML = `<button onclick="getMeteo()">${ville[3]}: ${codeTab[3]}`;
            } else if (info.length == 3) {
                document.querySelector(`#ville1`).innerHTML = `<button onclick="getMeteo()">${ville[0]}: ${codeTab[0]}`;
                document.querySelector(`#ville2`).innerHTML = `<button onclick="getMeteo()">${ville[1]}: ${codeTab[1]}`;
                document.querySelector(`#ville3`).innerHTML = `<button onclick="getMeteo()">${ville[2]}: ${codeTab[2]}`;
            } else if (info.length == 2) {
                document.querySelector(`#ville1`).innerHTML = `<button onclick="getMeteo()">${ville[0]}: ${codeTab[0]}`;
                document.querySelector(`#ville2`).innerHTML = `<button onclick="getMeteo()">${ville[1]}: ${codeTab[1]}`;

            } else {
                var code = info[0]["code"]

            }

        })
}

function getMeteo(nom,code) {
    
    var urlMeteoToulouse = `https://api.meteo-concept.com/api/forecast/nextHours?token=7ba998f4e67e32f30db3e0b0bb53f939353710b63cf012d84829f2ef6d15d4b1&insee=${code}`

    fetch(`${urlMeteoToulouse}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(res => res.json())

        .then(data => {


            var name = data["city"]["name"];
            var temp = data["forecast"][0]["temp2m"];
            var weather =
                document.querySelector("#ville").innerHTML = `La température à ${name} est de ${temp}`;
            console.log(name)
            console.log(temp)
        })
}