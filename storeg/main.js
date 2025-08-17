/*عمل زر اخر الصفحة
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
});*/
//location.assign()//تحتفظ بلبيانات//location.replace()//no
/*let hello=setTimeout(function () {
    console.log('helii');
},4000)
clearTimeout(hello)//ايقاف المدة لمرة واحده فقط
*/
/*
let i=0;
let hello=setInterval(function () {
    console.log(i++);
    if(i==4){


        clearInterval(hello)
    }
},4000)
*/
/*
if (localStorage.length>0) {
    
        document.body.style.background=localStorage.color ;

}
function setcolor (color) {
    localStorage.setItem('color',color)

    document.body.style.background=color ;
    
}*/


   
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mod ='create';
let di;
function gettotal() {
  if (price.value !== '') {
    // استخدام القيم الافتراضية 0 عند الحاجة
    let result =
      (+price.value || 0) +
      (+taxes.value || 0) +
      (+ads.value || 0) -
      (+discount.value || 0);

    total.innerHTML =  + result;
    total.style.backgroundColor = 'green';
  } else {
    total.innerHTML = ' إدخال السعر';
    total.style.backgroundColor = 'red';
  }
}


//creat produ/
let datapro ;
if(localStorage.proudct!=null){
    datapro=JSON.parse(localStorage.proudct)
}else{
    datapro=[];
}

submit.onclick =function (){
    
let newpro ={
    title:title.value ,
    price:price.value ,
    ads:ads.value ,
    discount:discount.value ,
    taxes:taxes.value ,
    total:total.innerHTML ,
    count:count.value,
    category:category.value,
}
if(title.value!=''
    &&price.value!=''
&&category.value!=''
&&newpro.count<100){
if(mod==='create'){
if (newpro.count>1) {
    for(let i=0; i<newpro.count;i++){

        datapro.push(newpro) 
    
    }
} else {
    datapro.push(newpro) 

}
}else{
cleardata()
}




    datapro[di]=newpro;
    submit.innerHTML='create';
    count.style.display= 'blocke';

}


cleardata()
//sav localstorg
localStorage.setItem('proudct', JSON.stringify(datapro))

showadata()
}



//clear input
function cleardata() {
     title.value ='';
    price.value ='';
    ads.value ='';
    discount.value='' ;
    taxes.value ='';
    total.innerHTML='';
    count.value='';
    category.value='';
}


//read


function showadata(){
    gettotal()
let table ='';
for (let i = 0; i < datapro.length; i++) {
   table+= `
   
   <tr>


    <td>${i+1}</td>
        <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxes}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
    <td>${datapro[i].total}</td>
    <td>${datapro[i].category}</td>
       <td><button onclick="ubdatedata(${i})" id="update">update</butoon></td>
<td><button onclick="deletedata(${i}  )" id="delete">delete</butoon></td>

</tr>
`}
document.getElementById('tbody').innerHTML=table;
 let btndeleteall=document.getElementById('deleteall');
if (datapro.length>0) {
  btndeleteall.innerHTML=` <button onclick="deleteall()" >delete all(${datapro.length})</butoon>`
    
}else{
btndeleteall.innerHTML='';

}


}showadata()



//delete
function deletedata(i){
datapro.splice(i,1)
localStorage.proudct=JSON.stringify(datapro)
showadata()
}
function deleteall() {
    localStorage.clear()
    datapro.splice(0)
  showadata()  
}


//count


//update
function ubdatedata(i) {
    
    title.value =datapro[i].title;
    price.value =datapro[i].price;
 ads.value =datapro[i].ads;
   discount.value =datapro[i].discount;
   taxes.value =datapro[i].taxes;
gettotal()
 category.value =datapro[i].category;
 count.style.display='none';
 submit.innerHTML='تعديل';
 mod='ubdate';
 di=i;
 scroll(
    {
        top:0,
        behavior:'smooth',

    })

}


// /search
let searchmood ='title';
function getsearchmood(id){
    let search =document.getElementById('search');
if(id==='searchtitle')
{
searchmood ='title';

}else{
    searchmood ='category';
}
search.Placeholder='search by '+searchmood;
search.focus()
search.value='';
showadata()    
}


function searchdata(value){
let table='';
    if (searchmood=='title') {

for (let i = 0; i < datapro.length; i++) {
if (datapro[i].title.includes(value)) {
     table+= `
   
   <tr>


    <td>${i}</td>
        <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxes}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
    <td>${datapro[i].total}</td>
    <td>${datapro[i].category}</td>
       <td><button onclick="ubdatedata(${i})" id="update">update</butoon></td>
<td><button onclick="deletedata(${i}  )" id="delete">delete</butoon></td>

</tr>
    `
}
    
}







    
} else {
    
for (let i = 0; i < datapro.length; i++) {
if (datapro[i].title.includes(value)) {
     table+= `
   
   <tr>


    <td>${i}</td>
        <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxes}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
    <td>${datapro[i].total}</td>
    <td>${datapro[i].category}</td>
       <td><button onclick="ubdatedata(${i})" id="update">update</butoon></td>
<td><button onclick="deletedata(${i}  )" id="delete">delete</butoon></td>

</tr>
    `
}
    
}

}

document.getElementById('tbody').innerHTML=table;
}
//clean data
