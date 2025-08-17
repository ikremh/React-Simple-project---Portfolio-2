
const cartIconBlue = document.getElementById('cartIconBlue');
const cartBlue = document.getElementById('shoppingCartBlue');
const cartBodyBlue = document.getElementById('cartBodyBlue');
const totalAmountBlue = document.getElementById('totalAmountBlue');
const itemCountBlue = document.getElementById('itemCountBlue');
const submitOrderBlue = document.getElementById('submitOrderBlue');

// عرض السلة عند الضغط
cartIconBlue.onclick = () => {
  cartBlue.style.display = cartBlue.style.display === 'block' ? 'none' : 'block';
};

// إضافة منتج
function addItemToCartBlue(name, price, img) {
  const row = document.createElement('tr');
  row.innerHTML = `<td><img src="${img}" width="40"></td>
                   <td>${name}</td>
                   <td>${price} د</td>
                   <td><button onclick="removeItemBlue(this, ${price})">حذف</button></td>`;
  cartBodyBlue.appendChild(row);
  updateTotalBlue(price);
  updateCountBlue();
  submitOrderBlue.classList.remove('hide');
}

function removeItemBlue(button, price) {
  button.closest('tr').remove();
  updateTotalBlue(-price);
  updateCountBlue();
  if (cartBodyBlue.children.length === 0) {
    submitOrderBlue.classList.add('hide');
  }
}

function updateTotalBlue(amount) {
  const current = parseFloat(totalAmountBlue.textContent);
  totalAmountBlue.textContent = (current + amount).toFixed(2);
}

function updateCountBlue() {
  itemCountBlue.textContent = cartBodyBlue.children.length;
}

// المودال
function openProductModalBlue(name, desc, price, img) {
  document.getElementById('modalImgBlue').src = img;
  document.getElementById('modalTitleBlue').textContent = name;
  document.getElementById('modalDescBlue').textContent = desc;
  document.getElementById('modalPriceBlue').textContent = `${price} د`;
  const btn = document.getElementById('modalAddBtnBlue');
  btn.textContent = 'أضف للسلة';
  btn.onclick = () => {
    addItemToCartBlue(name, price, img);
    closeProductModalBlue();
  };
  document.getElementById('productModalBlue').classList.remove('hide');
}

function closeProductModalBlue() {
  document.getElementById('productModalBlue').classList.add('hide');
}

// الأقسام
const toggleCategoryMenuBlue = document.getElementById('toggleCategoryMenuBlue');
const categoryListBlue = document.getElementById('categoryListBlue');

toggleCategoryMenuBlue.onclick = () => {
  categoryListBlue.classList.toggle('hide');
};

function updateCategoryCountsBlue() {
  const categories = {};
  document.querySelectorAll('.productCardBlue').forEach(card => {
    const cat = card.getAttribute('data-category');
    if (cat) {
      categories[cat] = (categories[cat] || 0) + 1;
    }
  });

  categoryListBlue.innerHTML = '';
  const allLi = document.createElement('li');
  allLi.textContent = `الكل (${document.querySelectorAll('.productCardBlue').length})`;
  allLi.onclick = () => {
    filterByCategoryFromListBlue('all');
    categoryListBlue.classList.add('hide');
  };
  categoryListBlue.appendChild(allLi);

  for (let cat in categories) {
    const li = document.createElement('li');
    li.textContent = `${cat} (${categories[cat]})`;
    li.onclick = () => {
      filterByCategoryFromListBlue(cat);
      categoryListBlue.classList.add('hide');
    };
    categoryListBlue.appendChild(li);
  }
}

function filterByCategoryFromListBlue(selectedCat) {
  document.querySelectorAll('.productCardBlue').forEach(card => {
    const cat = card.getAttribute('data-category');
    card.style.display = (selectedCat === 'all' || cat === selectedCat) ? 'block' : 'none';
  });
  updateVisibleProductCountBlue();
}

// الفلترة المزدوجة
function applyCombinedFiltersBlue() {
  const selectedCat = document.getElementById('categoryFilterBlue').value;
  const selectedPrice = document.getElementById('priceFilterBlue').value;

  document.querySelectorAll('.productCardBlue').forEach(card => {
    const cat = card.getAttribute('data-category');
    const priceText = card.querySelector('p').textContent;
    const price = parseFloat(priceText.match(/\d+/)[0]);

    let show = true;

    if (selectedCat !== 'all' && cat !== selectedCat) show = false;

    if (selectedPrice === 'lt10' && price >= 10) show = false;
    else if (selectedPrice === '10to15' && (price < 10 || price > 15)) show = false;
    else if (selectedPrice === 'gt15' && price <= 15) show = false;

    card.style.display = show ? 'block' : 'none';
  });

  updateVisibleProductCountBlue();
}

function updateVisibleProductCountBlue() {
  const visible = [...document.querySelectorAll('.productCardBlue')]
    .filter(card => card.style.display !== 'none');
  document.getElementById('visibleCountBlue').textContent = visible.length;
}

// إرسال الطلب (عرض نافذة التأكيد)
submitOrderBlue.onclick = () => {
  document.getElementById('confNameBlue').textContent = document.getElementById('clientNameBlue').value;
  document.getElementById('confPhoneBlue').textContent = document.getElementById('clientPhoneBlue').value;
  document.getElementById('confCartListBlue').innerHTML = '';
  [...cartBodyBlue.children].forEach(row => {
    const name = row.children[1].textContent;
    const li = document.createElement('li');
    li.textContent = name;
    document.getElementById('confCartListBlue').appendChild(li);
  });
  document.getElementById('confTotalBlue').textContent = totalAmountBlue.textContent;
  document.getElementById('orderConfirmBlue').classList.remove('hide');
};

function sendOrderToWhatsAppBlue() {
  const name = document.getElementById('confNameBlue').textContent;
  const phone = document.getElementById('confPhoneBlue').textContent;
  const items = [...document.getElementById('confCartListBlue').children]
    .map(li => li.textContent).join(', ');
  const total = document.getElementById('confTotalBlue').textContent;
  const msg = \`طلب جديد من: \${name}%0Aرقم: \${phone}%0Aمنتجات: \${items}%0Aالإجمالي: \${total} د\`;
  window.open(\`https://wa.me/?text=\${msg}\`);
}
