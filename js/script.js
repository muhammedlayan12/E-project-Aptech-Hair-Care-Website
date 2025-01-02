//navbar on scrolling
document.addEventListener("scroll", function() {
    let navbar = document.getElementById("navs");
    if (window.scrollY > 250) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
})


//Js for Preloader

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0"; 
    preloader.style.visibility = "hidden";  
  });
  


//Js For navigation toggle sideMenu

const navToggler =() => {
    const menu = document.getElementsByClassName("sideMenu")[0];
    menu.classList.toggle("open");
}



//Js For Menu Hovering

const Menu =() => {
    const menu = document.getElementsByClassName("dropdowns")[0];
    menu.classList.toggle("open");
}


//Discover button scroll

const scrollDown =() => {
    window.scrollTo({
        top:1500,
        behavior:"smooth",
    });
}

 


//FAQS SECTION 
const faqQuestions = document.querySelectorAll('.faq-question');

 
faqQuestions.forEach(question => {
 
    question.addEventListener('click', () => { 
        faqQuestions.forEach(item => {
            if (item !== question) {
                item.classList.remove('active');  
                item.nextElementSibling.style.maxHeight = null;  
            }
        });

     
        question.classList.toggle('active');

       
        const answer = question.nextElementSibling;

 
        if (answer.style.maxHeight) {
           
            answer.style.maxHeight = null;
        } else {
     
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

 

let productss = document.getElementsByClassName("products")[0];

let xhrs = new XMLHttpRequest();
xhrs.open("GET", "./json/treatment.json", true);

xhrs.onload = function () {
    let data = JSON.parse(xhrs.responseText);

    productss.innerHTML = data.map(items => (
        `<div id="${items.id}" data-aos="fade-up" class="product">
            <img class="" src="${items.pic}" alt="">
            <div class="position-absolute eyes">
                <i  class="fa-solid fa-eye py-2 px-2 eye" onclick="openModalProducts('${items.pic}','${items.name}','${items.title}','${items.productdec2}')"></i>
                <i onclick="wishAlert('${items.name}')" class="fa-solid fa-heart py-2 px-2 heart"></i>
            </div>
            <div class="content d-flex flex-column justify-content-start py-4 px-2">
                <h5>${items.name}</h5>
                <p>${items.title}</p>
                <span class="rating d-flex gap-1">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>
            </div>
        </div>`
           
  
    )).join('');
    
};

xhrs.send();


//Sweer alert for wishlist


function wishAlert(name) {
    Swal.fire({
        title: name  + ` Add To Wishlist`,
        icon: '',
        confirmButtonText: 'Close',
        imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/022/528/768/small_2x/cute-heart-love-logo-icon-isolated-on-white-background-png.png', 
        imageWidth: 100, 
        imageHeight: 100, 
        imageAlt: 'Heart icon', 
    });
} 


function openModalProducts (img , name , title , description){
    let modal = document.querySelector("#popups");
    modal.innerHTML = `
    <div class="popup">
        <div class="cut" onclick="closeModalProducts()">
            &#10005;
        </div>
      
     <div class="pop">
      <img src="${img}" alt=""     >
       
      <div class="content">
          <span>${name}</span>
          <h1>${title}</h1>
          <p>${description}</p>
          <div class="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span>4.5 (100 reviews)</span>
          </div>
          <a href="#" class="btn">Watch Reviews</a>
      </div>
     </div>
       
    </div>`;
    modal.style.display = "flex";
}


function closeModalProducts(){
    let modal = document.querySelector("#popups");
    modal.style.display="none";
}


//Product care of hair equipment

let equipment = document.getElementsByClassName("equipmentProducts")[0];

let xhrEquipment = new XMLHttpRequest();
xhrEquipment.open("GET", "./json/equipment.json", true);

xhrEquipment.onload = function () {
    let data = JSON.parse(xhrEquipment.responseText);

    equipment.innerHTML = data.map(items => (
        `<div id="${items.id}" data-aos="fade-up" class="product position-relative m-auto">
            <a href="../guideline.html?id=${items.id}"><img class="" src="${items.pic}" alt=""></a>
            <div class="position-absolute eyes">
                <i class="fa-solid fa-eye py-2 px-2 eye" 
                   onclick="openModalProducts('${items.pic}','${items.name}','${items.title}','${items.productdec2}')"></i>
                <i onclick="wishAlert('${items.name}')" class="fa-solid fa-heart py-2 px-2 heart"></i>
            </div>
            <div class="content d-flex flex-column justify-content-start py-4 px-2">
                <h5>${items.name}</h5>
                <p>${items.title}</p>
                <span class="rating d-flex gap-1">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>
            </div>
        </div>`
    )).join('');
};

xhrEquipment.send();
 
function wishAlert(name) {
    Swal.fire({
        title: name  + ` Add To Wishlist`,
        icon: '',
        confirmButtonText: 'Close',
        imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/022/528/768/small_2x/cute-heart-love-logo-icon-isolated-on-white-background-png.png', 
        imageWidth: 100, 
        imageHeight: 100, 
        imageAlt: 'Heart icon', 
    });
} 


//OfferModal Js Showing
function showModal (){
    let showOfferModal = document.getElementsByClassName("modalPopups")[0];
    setTimeout(() => {
        showOfferModal.style.display = "block";
       }, 2000);
}
window.addEventListener("load",function(){
 showModal();
});


//OfferModal Js Hiding
function hideModal (){
    let showOfferModal = document.getElementsByClassName("modalPopups")[0];
        showOfferModal.style.display = "none";
       
}


const xhr = new XMLHttpRequest();

const dataJson = "./json/product.json";

xhr.open("GET", dataJson, true);
xhr.onload = () => {
    if(xhr.status === 200){
        const data = JSON.parse(xhr.responseText);
        const productShop = document.getElementsByClassName("productShops")[0];
        const productCard = data.map(product => {
            return `
            <div id="${product.id}" class="productShop">
             <div class="icons">
      <i  class="fa-solid fa-heart" onclick="wishAlertPr('${product.name}')"></i> 
    </div>
     <a href="./details.html?id=${product.id}"><img src="${product.image}" alt="${product.alt}"></a>
     
          
          <div class="content">
            <div class="content1">
              
            <span>${product.category}</span>
            <h5>${product.name}</h5>
            <p>${product.price}% off<span>${product.original_price}% off</span></p>
            </div>
            <div class="content2">
            <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              
            </div>
          </div>
        </div>`;
        });
        productShop.innerHTML = productCard.join('');
    } else {
      console.error("Failed to load JSON data:", xhr.statusText);
    }
  };
     xhr.onerror = function () {
    console.error("An error occurred while fetching the JSON data.");
  };
  
   
  xhr.send();

  function wishAlertPr(name) {
    Swal.fire({
        title: name  + ` Add To Wishlist`,
        icon: 'success',
        confirmButtonText: 'Close', 
    });
} 

 






  //Js for image popup of gallery section
 
const images = document.querySelectorAll('.clickable-image');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const closePopup = document.getElementById('close-popup');
 
images.forEach(image => {
  image.addEventListener('click', () => {
    popup.style.display = 'flex';
    popupImage.src = image.src;  
  });
});

// Close popup
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});
 
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});







 

//notification after 5 second to load

function notificationLoad(){
    let notification = document.getElementById("notifications");
    setTimeout(() =>{
        notification.style.left = "1%";
    },4000)
}



window.addEventListener("load", function(){
  
        notificationLoad()
  
});


function notificationLoadCut(){
    let notification = document.getElementById("notifications");
 
        notification.style.left = "-50%";
  
}







function notificationLoad1(){
    let notification = document.getElementById("notifications1");
    setTimeout(() =>{
        notification.style.left = "1%";
    },6500)
}



window.addEventListener("load", function(){
  
        notificationLoad1()
  
});


function notificationLoadCut1(){
    let notification = document.getElementById("notifications1");
 
        notification.style.left = "-50%";
  
}

 





  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });
});




//product pages accordian
function toggleTitle(clickedItem) {
 
    const allSpans = document.querySelectorAll('.accordianShop li span');
    allSpans.forEach(span => {
        span.style.display = 'block';
    });

 
    const span = clickedItem.querySelector('span');
    span.style.display = 'none';
}

 


