var img = document.getElementById('img');

var slides = ['https://assets.gadgets360cdn.com/pricee/assets/category/202006/og-banner-lakme-1200x628_1591165125.jpg','https://images.yourstory.com/cs/4/211ccaf00e6d11e997fe8f165dce9bb1/Imageifxu-1596799036123-1601633425902.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces','https://media.istockphoto.com/id/1167515766/photo/decorative-cosmetic-for-evening-makeup-with-pink-ribbon.jpg?s=170667a&w=0&k=20&c=2BHzEw-S7Q7HfOniV77uE84bcZ8_mHnstzvMh4aMXI8=','https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/SUGAR%20Cosmetics%E2%80%99%20Air%20Kiss%20Powder%20Lipstick_INR499_1.jpg','https://static.magicpin.com/storage/blog/images/mamaearth%20cover.PNG','https://images-us.nivea.com/-/media/nivea/local/in/boday_page/3_banner_3080x806.png?rx=1304&ry=0&rw=1452&rh=805','https://lh3.googleusercontent.com/DXtUkycsgolwELfCYC_sFSJJWRyjQ-9Us95IFGcpDhN5S6BUQEHPjkhLHh6bFT-WxH3FjWKvyUkWWfbtqz59s5ZNhOVu_GuaL1ep10A2=w1000?s=300'];

var Start=0;
function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,2000);
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});




// js for product gallery //
var ProductImg= document.getElementById('ProductImg');
var SmallImg =document.getElementsByClassName('small-img');

SmallImg[0].onclick=function()
{
    ProductImg.src=SmallImg[0].src;
}
SmallImg[1].onclick=function()
{
    ProductImg.src=SmallImg[1].src;
}
SmallImg[2].onclick=function()
{
    ProductImg.src= SmallImg[2].src;
}
SmallImg[3].onclick=function()
{
    ProductImg.src= SmallImg[3].src;
}




