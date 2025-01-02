  
function getProductById() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));
    
   
    fetch('./json/product.json')
      .then(response => response.json())  
      .then(data => {
        
        const product = data.find(p => p.id === productId);
  
        if (product) {
          NestedPrDescription1
          
          document.getElementById("Nestedspan").textContent = product.category;
          document.getElementById("Nestedh1").textContent = product.name;
          document.getElementById("NestedPrName1").textContent = product.name1;
          document.getElementById("NestedPrPrice1").textContent =`$ ${product.price1}`;
          document.getElementById("NestedPrDescription1").textContent =`$ ${product.best1description}`;
          document.getElementById("NestedPrImg1").src =product.pic1;
          document.getElementById("nestedPrCategory1").textContent = product.category;
          document.getElementById("NestedPrName2").textContent = product.name2;
          document.getElementById("NestedPrPrice2").textContent =`$ ${product.price2}`;
          document.getElementById("NestedPrImg2").src =product.pic2;
          document.getElementById("nestedPrCategory2").textContent = product.category;
          document.getElementById("NestedPrName3").textContent = product.name3;
          document.getElementById("NestedPrPrice2").textContent =`$ ${product.price3}`;
          document.getElementById("NestedPrImg3").src =product.pic3;
          document.getElementById("nestedPrCategory3").textContent = product.category;
          document.getElementById("NestedPrName4").textContent = product.name4;
          document.getElementById("NestedPrPrice4").textContent =`$ ${product.price4}`;
          document.getElementById("NestedPrImg4").src =product.pic4;
          document.getElementById("nestedPrCategory4").textContent = product.category;
          document.getElementById("NestedPrName5").textContent = product.name5;
          document.getElementById("NestedPrPrice5").textContent =`$ ${product.price5}`;
          document.getElementById("NestedPrImg5").src =product.pic5;
          document.getElementById("nestedPrCategory5").textContent = product.category;
  
          
          document.getElementById("bestName1").textContent= product.best1name;
          document.getElementById("bestName2").textContent= product.best2name;
          document.getElementById("bestPricep1").textContent= product.best1description;
          document.getElementById("bestPricep2").textContent= product.best2description;
          document.getElementById("bestPrice1").textContent=`Start From $${ product.best1Price}`;
          document.getElementById("bestPrice2").textContent=`Start From $${ product.best2Price}`;
          document.getElementById("bestImg1").src = product.best1img;
          document.getElementById("bestImg2").src = product.best2img;
  
          document.getElementById("name").textContent = product.name;
          document.getElementById("price").textContent = `${product.price}% off`;
          document.getElementById("Productimg").src = product.image;
          document.getElementById("category").textContent = product.category;
          document.getElementById("review").textContent = product.review1;
          document.getElementById("rating").innerHTML = `${product.rating}`;
          document.getElementById("Breadcrumb").textContent = product.name;
        
  
        
          console.log(product); 
       
  
        } else {
          document.write("Product not found");
          
          document.getElementById("404").textContent = "404";
          document.getElementsByClassName("button")[0].style.display="none";
          document.getElementsByClassName("breadcrumbs").style.display="none";
        }
      })
      .catch(error => {
        console.error("Error fetching the product data:", error);
      });
  }
  
  
  
   
  window.onload = getProductById;
  
  
  function openModal1(){ 
    let modal = document.querySelector("#popups");
      let name = document.querySelector("#NestedPrName1").textContent;
      let price = document.querySelector("#NestedPrPrice1").textContent;
      let img = document.querySelector("#NestedPrImg1").src;
      let category = document.querySelector("#nestedPrCategory1").textContent;
      let description =document.querySelector("#NestedPrDescription1").textContent;
      
      modal.innerHTML = `
      <div class="popup">
          <div class="cut" onclick="closeModal()">
              &#10005;
          </div>
        
       <div class="pop">
        <img src="${img}" alt=""     >
         
        <div class="content">
            <span>${category}</span>
            <h1>${name}</h1>
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
  
  
  function openModal2(){ 
    let modal = document.querySelector("#popups");
      let name = document.querySelector("#NestedPrName2").textContent;
      let price = document.querySelector("#NestedPrPrice2").textContent;
      let img = document.querySelector("#NestedPrImg2").src;
      let category = document.querySelector("#nestedPrCategory2").textContent;
      let description =document.querySelector("#NestedPrDescription1").textContent;
      
      modal.innerHTML = `
      <div class="popup">
          <div class="cut" onclick="closeModal()">
              &#10005;
          </div>
        
       <div class="pop">
        <img src="${img}" alt=""     >
         
        <div class="content">
            <span>${category}</span>
            <h1>${name}</h1>
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
  
  
  
  
  function openModal3(){ 
    let modal = document.querySelector("#popups");
      let name = document.querySelector("#NestedPrName3").textContent;
      let price = document.querySelector("#NestedPrPrice3").textContent;
      let img = document.querySelector("#NestedPrImg3").src;
      let category = document.querySelector("#nestedPrCategory3").textContent;
      let description =document.querySelector("#NestedPrDescription1").textContent;
      
      modal.innerHTML = `
      <div class="popup">
          <div class="cut" onclick="closeModal()">
              &#10005;
          </div>
        
       <div class="pop">
        <img src="${img}" alt=""     >
         
        <div class="content">
            <span>${category}</span>
            <h1>${name}</h1>
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
  
  
  function openModal4(){ 
    let modal = document.querySelector("#popups");
      let name = document.querySelector("#NestedPrName4").textContent;
      let price = document.querySelector("#NestedPrPrice4").textContent;
      let img = document.querySelector("#NestedPrImg4").src;
      let category = document.querySelector("#nestedPrCategory4").textContent;
      let description =document.querySelector("#NestedPrDescription1").textContent;
      
      modal.innerHTML = `
      <div class="popup">
          <div class="cut" onclick="closeModal()">
              &#10005;
          </div>
        
       <div class="pop">
        <img src="${img}" alt=""     >
         
        <div class="content">
            <span>${category}</span>
            <h1>${name}</h1>
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
  
  function openModal5(){ 
    let modal = document.querySelector("#popups");
      let name = document.querySelector("#NestedPrName5").textContent;
      let price = document.querySelector("#NestedPrPrice5").textContent;
      let img = document.querySelector("#NestedPrImg5").src;
      let category = document.querySelector("#nestedPrCategory5").textContent;
      let description =document.querySelector("#NestedPrDescription1").textContent;
      
      modal.innerHTML = `
      <div class="popup">
          <div class="cut" onclick="closeModal()">
              &#10005;
          </div>
        
       <div class="pop">
        <img src="${img}" alt=""     >
         
        <div class="content">
            <span>${category}</span>
            <h1>${name}</h1>
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
  
  
  function closeModal(){
      let modal = document.querySelector("#popups");
      modal.style.display="none";
  }
  
  
  function wishAlert1() {
    let name = document.getElementById("NestedPrName1").textContent;
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
  
  function wishAlert2() {
    let name = document.getElementById("NestedPrName2").textContent;
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
  
  function wishAlert3() {
    let name = document.getElementById("NestedPrName3").textContent;
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
  
  function wishAlert4() {
    let name = document.getElementById("NestedPrName4").textContent;
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
  
  function wishAlert5() {
    let name = document.getElementById("NestedPrName5").textContent;
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
  
  
  
  function cartAlert1() {
    let name = document.getElementById("NestedPrName1").textContent;
      Swal.fire({
          title: name  + ` Add To Cart`,
          icon: 'success',
          confirmButtonText: 'Close',
      });
  } 
  
  function cartAlert2() {
    let name = document.getElementById("NestedPrName2").textContent;
      Swal.fire({
          title: name  + ` Add To Cart`,
          icon: 'success',
          confirmButtonText: 'Close',
      });
  } 
  
  function cartAlert3() {
    let name = document.getElementById("NestedPrName3").textContent;
      Swal.fire({
          title: name  + ` Add To Cart`,
          icon: 'success',
          confirmButtonText: 'Close',
      });
  } 
  
  function cartAlert4() {
    let name = document.getElementById("NestedPrName4").textContent;
      Swal.fire({
          title: name  + ` Add To Cart`,
          icon: 'success',
          confirmButtonText: 'Close',
      });
  } 
  
  function cartAlert5() {
    let name = document.getElementById("NestedPrName5").textContent;
      Swal.fire({
          title: name  + ` Add To Cart`,
          icon: 'success',
          confirmButtonText: 'Close',
      });
      
  } 

  
  // JS for add to cart
function addCart(event) {
  const button = event.target;
  const product = button.closest('.productNested');
  
  const productImage = product.querySelector(".product-image").src;
  const productName = product.querySelector(".product-name").textContent;
  const productPrice = product.querySelector(".product-price").textContent;

  const productDetails = {
    image: productImage,
    name: productName,
    price: productPrice
  };

  let cart = JSON.parse(localStorage.getItem('itemCart')) || [];
  cart.push(productDetails);
  localStorage.setItem('itemCart', JSON.stringify(cart));

  console.log(cart);
 
}

const cartBtn1 = document.querySelector("#addToCart1");
const cartBtn2 = document.querySelector("#addToCart2");
const cartBtn3 = document.querySelector("#addToCart3");
const cartBtn4 = document.querySelector("#addToCart4");
const cartBtn5 = document.querySelector("#addToCart5");

cartBtn1.addEventListener('click', addCart);
cartBtn2.addEventListener('click', addCart);
cartBtn3.addEventListener('click', addCart);
cartBtn4.addEventListener('click', addCart);
cartBtn5.addEventListener('click', addCart);

 
