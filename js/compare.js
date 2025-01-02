// comparision between products
var firstDropDown = document.getElementById("firstDropDown")
let option
var secondDropDown = document.getElementById("secondDropDown")
let option2
firstDropDown.addEventListener("change", (e) => {
    option = e.target.value
})
secondDropDown.addEventListener("change", (e) => {
    option2 = e.target.value
})

window.addEventListener("DOMContentLoaded", () => {
    fetch("../json/SearchProduct.json")
        .then(response => response.json())
        .then((data) => {
            data.forEach((r) => {
                firstDropDown.innerHTML += `<option>${r.name}</option>`
                secondDropDown.innerHTML += `<option>${r.name}</option>`
            })
        })
})



function searchProduct1() {
    event.preventDefault();
    console.log(firstDropDown)
    const inputName1 = option


    fetch("../json/SearchProduct.json")

        .then(responce => responce.json())
        .then(data => {
            const name = data.find(n => n.name === inputName1);
            document.querySelector("#img1").src = name.image;
            document.querySelector("#name1").textContent = name.name;
            document.querySelector("#specialization11").textContent = name.specialization1;
            document.querySelector("#specialization12").textContent = name.specialization2;
            document.querySelector("#specialization13").textContent = name.specialization3;
            document.querySelector("#specialization14").textContent = name.specialization4;
            document.querySelector("#rating1").textContent = name.rating;
            document.querySelector("#stock1").textContent = name.stock;
            if (name.stock === "in stock") {
                document.querySelector("#stock1").style.color = "green";

            } else {
                document.querySelector("#stock1").style.color = "red";
            }
        });
}





function searchProduct2() {
    event.preventDefault();
    // const inputName = document.querySelector("#searchName2").value;
    const inputName =option2


    fetch("../json/SearchProduct.json")

        .then(responce => responce.json())
        .then(data => {
            const name = data.find(n => n.name === inputName);
            document.querySelector("#img2").src = name.image;
            document.querySelector("#name2").textContent = name.name;
            document.querySelector("#specialization21").textContent = name.specialization1;
            document.querySelector("#specialization22").textContent = name.specialization2;
            document.querySelector("#specialization23").textContent = name.specialization3;
            document.querySelector("#specialization24").textContent = name.specialization4;
            document.querySelector("#rating2").textContent = name.rating;
            document.querySelector("#stock2").textContent = name.stock;
            if (name.stock === "in stock") {
                document.querySelector("#stock2").style.color = "green";

            } else {
                document.querySelector("#stock2").style.color = "red";
            }

        });
}


