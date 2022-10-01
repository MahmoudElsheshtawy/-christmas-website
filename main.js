let searchbtn = document.querySelector('.header .search-form');
 document.querySelector('#search-btn').onclick = () =>{
    searchbtn.classList.toggle('active');
    navbar.classList.remove('active');
 }




 let navbar = document.querySelector('.header .navbar');
  document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchbtn.classList.remove('active');

 }


window.onscroll = () =>{
    searchbtn.classList.remove('active');
    navbar.classList.remove('active');
 
    if(window.scrollY > 700){
       document.querySelector('.header').classList.add('active');
    }else{
       document.querySelector('.header').classList.remove('active');
    };
    let value = window.scrollY / 10;
    document.querySelector('.home .mountain').style.bottom = `${-value}%`;
    document.querySelector('.home .content').style.bottom = `${value}%`;
    document.querySelector('.home .moon').style.marginTop = `${-value}%`;
    document.querySelector('.home .cloud-1').style.right = `${-value}%`;
    document.querySelector('.home .cloud-2').style.left = `${-value}%`;

   

};








// let value = window.scrollY / 10;
// document.querySelector('.mountain').style.bottom = -value+'%';
// document.querySelector('.content').style.bottom = value+'%';
// document.querySelector('.moon').style.marginTop = -value+'%';
// document.querySelector('.cloud-1').style.right = -value+'%';
// document.querySelector(' .cloud-2').style.left = -value+'%';
   











// let tree = document.getElementById('tree')
// let moon = document.getElementById('moon')
// let mountains =document.getElementById('mountains')
// let cloud1 =document.getElementById('cloud-1')
// let cloud2 =document.getElementById('cloud-2')



// let value = scrollY / 10;
// tree.style.bottom = -value  +'%'
// moon.style.top = -value+'%'
// mountains.style.bottom = -value  +'%'
// cloud1.style.right = -value+'%'
// cloud2.style.left = -value+'%'



   




































    // let searchBtn = document.querySelector('#search-btn');
    // let searchForm = document.querySelector('.header .search-form');

    // searchBtn.onclick = () =>{
    // searchBtn.classList.toggle('fa-times');
    // searchForm.classList.toggle('active');
    // menuBtn.classList.remove('fa-times');
    // navbar.classList.remove('active');
    // };

    // let menuBtn = document.querySelector('#menu-btn');
    // let navbar = document.querySelector('.header .navbar');

    // menuBtn.onclick = () =>{
    // menuBtn.classList.toggle('fa-times');
    // navbar.classList.toggle('active');
    // searchBtn.classList.remove('fa-times');
    // searchForm.classList.remove('active');
    // };

    // window.onscroll = () =>{
    // searchBtn.classList.remove('fa-times');
    // searchForm.classList.remove('active');
    // menuBtn.classList.remove('fa-times');
    // navbar.classList.remove('active');
    // if(window.scrollY > 650){
    //     document.querySelector('.header').classList.add('active');
    // }else{
    //     document.querySelector('.header').classList.remove('active');
    // };

    // };







