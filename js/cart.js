
function renderCarts() {
    let cart = JSON.parse(localStorage.getItem('itemCart')) || [];
    const cartContainer = document.getElementsByClassName('cartItems')[0];
    
   
    cartContainer.innerHTML = '';
  
     
    cart.forEach((item , index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('item');
      
      cartItem.innerHTML = `
        <div class="buttons">
          <span class="delete-btn"></span>
          <span class="like-btn"></span>
        </div>
        <div class="buttons">
          <span class="delete-btn"></span>
          <span class="like-btn"></span>
        </div>
     
        <div class="image">
          <img  width="100"   src="${item.image}" alt="" />
        </div>
     
        <div class="description">
          <span>${item.name}</span>
        </div>
     
        <div class="quantity">
          <button class="plus-btn" type="button" name="button">
            <div onclick="plusQuantity(event)" id="plus">+</div>
          </button>
          <input type="text" name="name" id="quantity" value="1">
          <button class="minus-btn" type="button" name="button">
            <div>-</div>
          </button>
        </div>
     
        <div class="total-price">${item.price}</div>
        <div class="remove-btn" onclick="removeCart(${index})"><button>Remove</button></div>
      `;
      
      cartContainer.appendChild(cartItem);
     
      total();
    });
  }
  
  
  window.onload = renderCarts;


  // function checkoutShow(){
  //   const  Container = document.getElementsByClassName('cartItems')[0];
  //   if(Container.children <= 0) {
  //     document.querySelector('.checkout').style.display = 'block';
  //   } else{
  //     document.querySelector('.checkout').style.display = 'none';
  //   }
  // }

  // window.onload = checkoutShow;
   
  function total() {
    let cart = JSON.parse(localStorage.getItem('itemCart')) || [];
    let totals = 0;
  
    cart.forEach(item => {
   
      totals += parseFloat(item.price.replace(/[^\d.-]/g, ''));
    });
  
   
    document.querySelector('#subtotals').textContent =`$${totals.toFixed(2)}`;
    document.querySelector('#totals').textContent =`$${totals.toFixed(2)}`; 
  }
  
  
  function removeCart(index) {
    
    let cart = JSON.parse(localStorage.getItem('itemCart')) || [];
    cart.splice(index,1);
    localStorage.setItem('itemCart', JSON.stringify(cart));
    renderCarts();
    total();
  }




  // function plusQuantity(){
  //   let button = event.target;
  //  let input  = button.closest(".quantity").querySelector("#quantity");
  //  input.value = parseInt(input.value || 0, 10) + 1;  
  //   renderCarts(); //
  // }



