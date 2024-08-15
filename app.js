const items = [
  {
    img: "imaages/2.jpg",
    type: 'waffele',
    tittle: 'waffle with berries',
    salary: 6
  },

  {
    img: "imaages/1.jpg",
    type: 'waffele',
    tittle: 'cheese cake',
    salary: 10
  },

  {
    img: "imaages/3.jpg",
    type: 'waffele',
    tittle: 'white cake',
    salary: 20

  },

  {
    img: "imaages/4.jpg",
    type: 'waffele',
    tittle: 'waffle with gatoo',
    salary: 61

  },
  {
    img: "imaages/5.jpg",
    type: 'waffele',
    tittle: 'waffle with berries',
    salary: 63

  },
  {
    img: "imaages/6.jpg",
    type: 'waffele',
    tittle: 'waffle with berries',
    salary: 16

  },
  {img: "imaages/8.jpg",
    type: 'waffele',
    tittle: 'waffle with berries',
    salary: 6

  }
  ,
  {
    img: "imaages/9.jpg",
    type: 'waffele',
    tittle: ' berries',
    salary: 50

  }
  ,
  {
    img: "imaages/10.jpg",
    type: 'waffele',
    tittle: 'cheese with berries',
    salary: 66
  }


];

const cartsContainer = document.querySelector('.carts');

items.forEach(element => {
  const item = document.createElement('div');
  item.innerHTML = `
          <div class="img-buton">
            <div class="dessert-img">
              <img src="${element.img}" class="dessert-1" alt="">
            </div>
            <div class="button-info">
              <button onclick='addToCart(${JSON.stringify(element)})'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-garden-cart" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d53c3c" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M17.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
                    <path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" />
                    <path d="M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" />
                  </svg>
                </span>
                <span>Add To Cart</span>
              </button>
            </div>
          </div>

          <div class="cart-content">
            <h6>${element.type}</h6>
            <h5>${element.tittle}</h5>
            <span>$${element.salary}</span>
          </div>`;
  cartsContainer.appendChild(item);
});

var cartItems=[];
var appendItems=document.querySelector('.appendItems');
var cartCounter=document.querySelector('.cart-counter');
var compute=document.querySelector('.compute');
var totalSalary=document.querySelector('.total-salary');
function addToCart(el) {
  var totalPrice=0;
   var noCardContent=document.querySelector('.noCartContent');
 cartItems.push(el);
 console.log(cartItems);
 cartCounter.innerHTML=cartItems.length;
//  cartItems.unshift(el);
 var newCart=document.createElement('div');
  newCart.innerHTML=`      <div class="d-flex space-between justify-content-center b-bottom p-5">
  <span>
      <h6>${el.tittle}</h6>
  <p class="text-gray mt-1">${el.salary}</p>
  </span>
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M10 10l4 4m0 -4l-4 4" />
    </svg>

</div> `;
 appendItems.appendChild(newCart);
if(cartItems.length > 0){
  noCardContent.style.display='none';
  compute.style.display='block';
}
cartItems.forEach(element => {//{img,salary,title}
  console.log(element.salary);
  totalPrice+=element.salary;
  console.log(totalPrice);
});
totalSalary.innerHTML=totalPrice;
};

