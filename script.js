let midbody = document.getElementById("content");
let head = document.createElement("div");
head.classList.add("mid-body-child");
midbody.append(head)

async function apiCall(){
    
  let data = await fetch("https://restcountries.com/v3.1/all");
  let output = await data.json();

//   console.log(output[0]);

  for(let i of output ){
    // console.log(i)

    let carts = document.createElement("div");
    carts.classList.add("card");
    head.append(carts);

    let carthead = document.createElement("div");
    carthead.classList.add("card-header");
    let htag = document.createElement("h1");
    // htag.classList.add("text-center");
    carthead.append(htag);
    carts.append(carthead);

    let cartbody = document.createElement("div");
    cartbody.classList.add("card-body");
    carts.append(cartbody)

    let cartfooter = document.createElement("div");
    cartfooter.classList.add("card-footer");
    carts.append(cartfooter);

    // let btn1 = document.createElement("button");
    // btn1.setAttribute("type","submit");
    // // btn1.setAttribute("id","addBtn");
    // btn1.setAttribute("onclick","add(this)");
    // btn1.classList.add("btn");
    // btn1.classList.add("btn-primary");
    // btn1.innerText="Add Fav"
    // cartfooter.append(btn1);

    // let btn2 = document.createElement("button");
    // btn2.setAttribute("type","submit");
    // btn2.setAttribute("onclick","removeFav(this)");
    // btn2.classList.add("btn");
    // btn2.classList.add("btn-danger");
    // btn2.innerText="remove Fav"
    // cartfooter.append(btn2);

    

    //name:
   
    htag.innerText = i.name.common;

    //flags:

     let img = document.createElement("img");
     img.setAttribute("src",i.flags.png);
     img.classList.add("image");
     cartbody.append(img);

    //region:
     
     let para = document.createElement("p");
     para.innerText = "Region : " + i.region;
     cartbody.append(para);

 
     //continent:

     let para1 = document.createElement("p");
     para1.innerText = "Continents : " + i.continents[0];
     cartbody.append(para1);



  } 
}

apiCall();

//     var count = 0;

//     let favBtn = document.getElementById("fav-btn");
//     favBtn.innerText="Fav " + count;

//    let add = ()=> {
//   let favBtn = document.getElementById("fav-btn");
//   favBtn.innerText="Fav " + (count+1);
// }

let formbtn = (e)=>{
//   e.preventdefault;
//   console.log(e)
 let form = document.getElementById("login")
 form.style.display = "none";
 let content = document.getElementById("content")
    content.style.display = "block"
}

let formbtn1 = (e)=>{
     let register = document.getElementById("register")
     register.style.display = "none";
     let content = document.getElementById("content")
    content.style.display = "block"
    }

let naviLogin = ()=>{
    let content = document.getElementById("content")
    content.style.display = "none"
    let form = document.getElementById("login")
    form.style.display = "block";
}

let countries = ()=>{
    let content = document.getElementById("content")
    content.style.display = "block"
    let form = document.getElementById("login")
    form.style.display = "none";
    let register = document.getElementById("register")
    register.style.display = "none";
}

let naviRegister = ()=>{
    let content = document.getElementById("content")
    content.style.display = "none"
    let form = document.getElementById("login")
    form.style.display = "none";
    let register = document.getElementById("register")
    register.style.display = "block";

}