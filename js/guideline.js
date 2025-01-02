function getData(){
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));
    fetch("./json/guideline.json")
    .then(responce => responce.json())
    .then(data => {
        const product = data.products.find(p => p.id === productId);
        if(product){
            console.log(data);
            document.getElementById("name").textContent = `Guidlines For Use Of ${product.name}`;
            document.getElementById("img").src = product.pic;
            document.getElementById("use").innerHTML = product.manual.howToUse;
            document.getElementById("maintenance").innerHTML = product.manual.maintenance;
            document.getElementById("boiler").innerHTML = product.manual.troubleshooting;
        }
        else{
            console.log("Product not found");
        }
    });
}

window.onload = getData;