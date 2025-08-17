const cartIconBlue = document.getElementById('cartIconBlue');
const cartBlue = document.getElementById('shoppingCartBlue');
const cartBodyBlue = document.getElementById('cartBodyBlue');
const totalAmountBlue = document.getElementById('totalAmountBlue');
const itemCountBlue = document.getElementById('itemCountBlue');
const submitOrderBlue = document.getElementById('submitOrderBlue');

// عرض أو إخفاء السلة عند الضغط على الأيقونة
cartIconBlue.onclick = () => {
  cartBlue.style.display = cartBlue.style.display === 'block' ? 'none' : 'block';
};

// إضافة منتج إلى السلة
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

// حذف منتج من السلة
function removeItemBlue(button, price) {
  button.closest('tr').remove();
  updateTotalBlue(-price);
  updateCountBlue();
  if (cartBodyBlue.children.length === 0) {
    submitOrderBlue.classList.add('hide');
  }
}

// تحديث الإجمالي
function updateTotalBlue(amount) {
  const current = parseFloat(totalAmountBlue.textContent);
  totalAmountBlue.textContent = (current + amount).toFixed(2);
}

// تحديث عداد عدد المنتجات
function updateCountBlue() {
  itemCountBlue.textContent = cartBodyBlue.children.length;
}

// فتح نافذة المنتج (المودال)
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

// إغلاق نافذة المودال
function closeProductModalBlue() {
  document.getElementById('productModalBlue').classList.add('hide');
}

// زر الأقسام - إظهار/إخفاء القائمة
const toggleCategoryMenuBlue = document.getElementById('toggleCategoryMenuBlue');
const categoryListBlue = document.getElementById('categoryListBlue');

toggleCategoryMenuBlue.onclick = () => {
  categoryListBlue.classList.toggle('hide');
};

// توليد قائمة الفئات وعددها
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

// ✅ دالة الفلترة حسب الفئة

function filterByCategoryFromListBlue(selectedCat) {
  document.querySelectorAll('.productCardBlue').forEach(card => {
    const cat = card.getAttribute('data-category');
    card.style.display = (selectedCat === 'all' || cat === selectedCat) ? 'block' : 'none';
  });
  updateVisibleProductCountBlue();
}

// ✅ الفلترة حسب الفئة والسعر معًا
/** 
function applyCombinedFiltersBlue() {
  const selectedCat = document.getElementById('categoryFilterBlue').value;
  const selectedPrice = document.getElementById('priceFilterBlue').value;

  document.querySelectorAll('.productCardBlue').forEach(card => {
    const cat = card.getAttribute('data-category');
    const priceText = card.querySelector('p').textContent;
    const priceMatch = priceText.match(/\\d+(\\.\\d+)?/);
const price = priceMatch ? parseFloat(priceMatch[0]) : 0;


    let show = true;

    if (selectedCat !== 'all' && cat !== selectedCat) show = false;

    if (selectedPrice === 'lt10' && price >= 10) show = false;
    else if (selectedPrice === '10to15' && (price < 10 || price > 15)) show = false;
    else if (selectedPrice === 'gt15' && price <= 15) show = false;

    card.style.display = show ? 'block' : 'none';
  });

  updateVisibleProductCountBlue();
}
*/

// ✅ عداد المنتجات المعروضة
function updateVisibleProductCountBlue() {
  const visible = [...document.querySelectorAll('.productCardBlue')]
    .filter(card => card.style.display !== 'none');
  document.getElementById('visibleCountBlue').textContent = visible.length;
}

// ✅ عرض نافذة تأكيد الطلب
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

// ✅ إرسال الطلب إلى واتساب
function sendOrderToWhatsAppBlue() {
  const name = document.getElementById('confNameBlue').textContent;
  const phone = document.getElementById('confPhoneBlue').textContent;
  const items = [...document.getElementById('confCartListBlue').children]
    .map(li => li.textContent).join(', ');
  const total = document.getElementById('confTotalBlue').textContent;
  const msg = `طلب جديد من: ${name}%0Aرقم: ${phone}%0Aمنتجات: ${items}%0Aالإجمالي: ${total} د`;
  window.open(`https://wa.me/?text=${msg}`);
}

    
//scroll
document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById('btn');

    window.onscroll = function () {
        if (window.scrollY >= 400) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    };

    btn.onclick = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
});


   document.getElementById('toggleViewBtn').addEventListener('click', function () {
      const productGrid = document.getElementById('productsListBlue');
      productGrid.classList.toggle('large-view');
    });






    function searchProductsBlue() {
  const searchInput = document.getElementById("searchInputBlue").value.trim().toLowerCase();
  const allProducts = document.querySelectorAll("#productsListBlue .productCardBlue");

  allProducts.forEach(card => {
    const title = card.querySelector("h4")?.textContent.toLowerCase() || "";
    if (title.includes(searchInput)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });

  updateVisibleProductCountBlue(); // لتحديث العداد الحي بعد البحث
}


  let currentIndexBlue = 0;
  const slidesBlue = document.querySelectorAll(".slideBlue");

  function showNextSlideBlue() {
    slidesBlue.forEach(slide => slide.classList.remove("active"));
    currentIndexBlue = (currentIndexBlue + 1) % slidesBlue.length;
    slidesBlue[currentIndexBlue].classList.add("active");
  }

  setInterval(showNextSlideBlue, 5000);


/* زر الأقسام - إظهار/إخفاء القائمة
const toggleCategoryMenuBlue = document.getElementById('toggleCategoryMenuBlue');
const categoryListBlue = document.getElementById('categoryListBlue');

toggleCategoryMenuBlue.onclick = () => {
  categoryListBlue.classList.toggle('hide');
};*/

// مكتبة الصور وقفها حاليا لتستخدمها بعدين
/*
const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('dotsContainer');
  let current = 0;
  let interval;

  // إنشاء النقاط
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function updateSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    updateSlides();
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides();
  }

  function goToSlide(index) {
    current = index;
    updateSlides();
  }

  function startAutoPlay() {
    interval = setInterval(nextSlide, 3000);
  }

  function stopAutoPlay() {
    clearInterval(interval);
  }

  // ابدأ العرض التلقائي
  startAutoPlay();

  // وقف المؤقت عند التفاعل
  document.querySelector('.slideshow-container').addEventListener('mouseover', stopAutoPlay);
  document.querySelector('.slideshow-container').addEventListener('mouseout', startAutoPlay);


*/
