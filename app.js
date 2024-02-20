//++++++++++++GET ELEMENT BY ID +++++++++++

// document.getElementById("name") //get id
// document.getElementById("name").id //get id name
// document.getElementById("name").getAttribute("id")// name
// document.getElementById("name").getAttribute("class")// heading
// title=document.getElementById("name")
// title.style.backgroundColor="green"



//+++++++++++ TEXT CONTENT AND INNER TEXT +++++++

//AGR CSS KI PROPERTY SAY KOI TEXT HIDE KRDIYA TU WO TEXT INNER TEXTMAI CHUPA HOA DEKHEGA MAGAR TEXT CONTENT M PURA TEXT DEKHEGA


//INNERHTML PURA HTML TAGS SATH DEGA
// console.log(document.getElementById("name").innerHTML)
// console.log(document.getElementById("name").innerText)





//+++++ QUERY SELECTOR ++++++
//return with div
// document.querySelector("#name").innerHTML="ayan ahmed"
//   ACCESS UL IN DOM USING QUERY SELECTOR
// let ul =document.querySelector("ul")
// ul.querySelector("li").innerHTML="changed"



//+++++ QUERY SELECTOR ALL ++++++
//hamesha aik list node dega agar multiple element hoye tu, phir indexing ki through access krna hoga but loop lg skta h
// let change= document.querySelectorAll("li")
// change[1].style.backgroundColor="green"



//++++++++++ GET ELEMENT BY CLASS NAME +++++
// let change=document.getElementsByClassName("heading") //it return HTML collection
// let arr=Array.from(change) //convert it into array
// console.log(arr)
// arr.forEach((item)=>{
//     console.log(item)

// })


//++++++++++ CREATE NEW ELEMENT IN DOM ++++++++++++
// let parent=document.querySelector(".parent")
// console.log(parent)
// console.log(parent.children) //returns html collections
// console.log(parent.children[0].innerHTML)//monday
// for (let index = 0; index < parent.children.length; index++) {
// console.log(parent.children[index].innerHTML)    
// }
// parent.children[1].style.backgroundColor='green'
// console.log(parent.firstElementChild)//return attribute 
// console.log(parent.lastElementChild)//return attribute 
  

//MOVE FROM CHILD TO PARENT
// let day=document.querySelector(".day")
// console.log(day.parentElement)

//NEXT ELEMENT SIBLING
// let mon=document.querySelector(".day")
// console.log(mon.nextElementSibling.innerHTML)//tue


//CLASS NODES
// let day=document.querySelector(".parent")
// console.log(day.childNodes)//return tree structure of parent div

//+++++  HOW TO CREATE ELEMENT
// const div=document.createElement("div")
// div.className="my-class"
// div.id="my-id"
// div.setAttribute=("titlr","this is title")
// div.innerHTML="ye wali neww div h "
// document.body.appendChild(div)
// function names(name) {
//     const li = document.createElement("li");
//     li.innerHTML = name;
//     document.querySelector(".names").appendChild(li);
// }

// names("hafiz ");
// names("ahmed ");

//++++++++ EDIT ELEMENTS +++++++++++++++
// const change = document.querySelector(".names li:nth-child(2)"); // Corrected selector
// const newli = document.createElement("li");
// newli.textContent = "edit kra h";
// change.replaceWith(newli);

//+++++++++    REMOVE ++++++++++++++++
// const remove=document.querySelector(".names li:last-child")
// console.log(remove)
// remove.remove()


//+++++++++   EVENTS IN JAVASRICPT   ++++
// document.getElementById("fir").addEventListener("click",function(e){
//     // e.preventDefault()
//     alert("first click hoa h")
// },false)

//  IMPORTANT CHEEZE  
// TYPE,TIMESTAMP,TARGET.TOELEMENT,CURRENT TARGET, SRC ELEMENT,CLIENT X,Y 
//ALT KEY CTRL KEY SHIFT KEY KECODE



//++++++   EVENT BUBBLING  +++

//AGAR AIK MAIN DIV K UNDER TEEN AUR DIV H AUR UN M SAY AIK KO ACCESS KRLIYA AUR MAIN AUR INNER DONO PR EVENT LISTENER LGAYA TU AGAR MAIN K KISI BHI DIV PR CLICK HOA TU MAIN WALA FUNCTION TU RUN HOGA HI HOGA BUT AGAR INNER WALI DIV PR KIYA TU PEHLAY INNER WALA RUN HOGA PHIR OUTTER WALA HOGA, IS M .addEventListener mai third argument mai false dena hoa (by default bhi false hota h)




//++++++   EVENT CAPTURING  +++
//event BUBBLING KA VICE VERA H INNER PR CLICK KIYA TU PEHLAY MAIN WALA PEHLAY RUN HOGA PHIR OUTER WALA BUS THIRD ARGUMENT M TRUE DENA HOGA(BY DEFAULT NH HOTA H TRUE)


//+++++ HOW TO AVOID BUBBLING AND PROPOGATION ++++
//e.stopPropagation()