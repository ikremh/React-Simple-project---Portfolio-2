// script.js

let blueCart = [];
let blueTotal = 0;

const cartIconBlue = document.getElementById('cartIconBlue');
const shoppingCartBlue = document.getElementById('shoppingCartBlue');
const cartBodyBlue = document.getElementById('cartBodyBlue');
const totalAmountBlue = document.getElementById('totalAmountBlue');
const itemCountBlue = document.getElementById('itemCountBlue');
const submitOrderBlue = document.getElementById('submitOrderBlue');
const clientNameBlue = document.getElementById('clientNameBlue');
const clientPhoneBlue = document.getElementById('clientPhoneBlue');

// إظهار أو إخفاء السلة
cartIconBlue.onclick = () => {
  shoppingCartBlue.style.display = shoppingCartBlue.style.display === 'block' ? 'none' : 'block';
};

// إضافة منتج مع صورة
function addItemToCartBlue(name, price, image) {
  blueCart.push({ name, price, image });
  updateBlueCart();
}

// حذف منتج
function removeItemFromCartBlue(index) {
  blueCart.splice(index, 1);
  updateBlueCart();
}

// تحديث محتوى السلة
function updateBlueCart() {
  cartBodyBlue.innerHTML = '';
  blueTotal = 0;

  blueCart.forEach((item, index) => {
    blueTotal += item.price;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="cartImageCellBlue"><img src="${item.image}" alt="${item.name}"></td>
      <td>${item.name}</td>
      <td>${item.price} د</td>
      <td><button onclick="removeItemFromCartBlue(${index})">حذف</button></td>
    `;
    cartBodyBlue.appendChild(row);
  });

  totalAmountBlue.textContent = blueTotal;
  itemCountBlue.textContent = blueCart.length;

  // إظهار زر الإرسال فقط إذا كانت السلة تحتوي منتجات
  submitOrderBlue.classList.toggle('hide', blueCart.length === 0);
}

// إرسال الطلب عبر WhatsApp
submitOrderBlue.onclick = () => {
  const name = clientNameBlue.value.trim();
  const phone = clientPhoneBlue.value.trim();

  if (name === '' || phone === '') {
    alert('يرجى إدخال الاسم ورقم الهاتف');
    return;
  }

  let message = `🛒 طلب جديد\n\n👤 الاسم: ${name}\n📞 الهاتف: ${phone}\n\n📦 المنتجات:\n`;

  blueCart.forEach(item => {
    message += `- ${item.name} (${item.price} د)\n`;
  });

  message += `\n💰 المجموع: ${blueTotal} دينار`;

  // رابط WhatsApp
  const whatsappNumber = "962772413026"; // ضع رقمك هنا بدون "+"، يبدأ بـ 962
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');

  // تفريغ السلة بعد الإرسال
  blueCart = [];
  clientNameBlue.value = '';
  clientPhoneBlue.value = '';
  updateBlueCart();
};

/*
let btnopen=document.getElementById('btopen');
let btnclose =document.getElementById('btclose');
let drop=document.getElementsByClassName('drop');

btnclose.onclick = function () {
      btnclose.classList.add('hide');
drop.classList.add('hide');
      
btnopen.classList.remove('hide');
}
btnopen.onclick = function(){
    btnopen.classList.add('hide');
        this.classList.add('hide');
drop.classList.remove('hide');
}
/** 

let txt =document.getElementById('txt');
let mybtn =document.getElementById('btn');
txt.oncontextmenu= function () {
    


    txt.blur();
}
mybtn.onclick=function(){


    mybtn.style.background='#ffa';
}*/