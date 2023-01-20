const input = document.querySelector("#cityinput");
input.addEventListener("keydown", findCity)

function findCity(event) {

    const keyPressed = event.keyCode;
    if (keyPressed == 13) {
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
                    document.querySelector(`#ville1`).innerHTML = `<button onclick="buttonClickGET()">${ville[0]}: ${codeTab[0]}`;

                }

                const tab = ville.concat(codeTab);

                return tab;

            })
    }


}

function buttonClickGET0() {

    document.querySelector(`#ville1`).innerHTML = "";
    document.querySelector(`#ville2`).innerHTML = "";
    document.querySelector(`#ville3`).innerHTML = "";
    document.querySelector(`#ville4`).innerHTML = "";
    document.querySelector(`#ville5`).innerHTML = "";
    var urlMeteoToulouse = `https://api.meteo-concept.com/api/forecast/nextHours?token=7ba998f4e67e32f30db3e0b0bb53f939353710b63cf012d84829f2ef6d15d4b1&insee=${findCity[0]}`

    fetch(`${urlMeteoToulouse}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(res => res.json())

        .then(data => {


            var name = findCity[0][0];
            var temp = data["forecast"][0]["temp2m"];
            document.querySelector("#ville").innerHTML = `La température à ${name} est de ${temp}`;
            console.log(name)
            console.log(temp)
        })
}