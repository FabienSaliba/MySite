const input = document.querySelector("#codeBarre");
input.addEventListener("keydown", findProduct);
var nom;
var marque;
var categories;

function findProduct(event) {
    const keyPressed = event.keyCode;
    if (keyPressed == 13) {

        fetch(`https://world.openfoodfacts.org/api/v0/product/${input.value}.json`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            })
            .then(res => res.json())

            .then(info => {
                console.log(info)
                if (info["status"] == 0) {
                    document.querySelector("#resultProduit").innerHTML = `Le produit n'existe pas`
                } else {
                    nom = info["product"]["abbreviated_product_name_fr"];
                    marque = info["product"]["brands"]
                    categories = info["product"]["categories"]
                    document.querySelector("#resultProduit").innerHTML = `Le produit est: ${nom} de la marque ${marque}<br>Les catégories sont:<br>${categories}`

                }
            })
    }
}