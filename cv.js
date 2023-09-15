//** abriri y cerrar el div con la informacion  */
let btnabrir=document.getElementById("inf");
btnabrir.addEventListener("click", () => {
  let div=document.getElementById("Personal");
  div.style.display="";
  })
let btncerrar=document.getElementById("inf_out").addEventListener("click", ()=> {
let cerrardiv=document.getElementById("Personal").style.display="none";
})
//** abriri y cerrar el div con la informacion  */

let btnabrir1=document.getElementById("form").addEventListener("click", () => {
  let div=document.getElementById("Academica").style.display="";
  })
let btncerrar1=document.getElementById("acad_out").addEventListener("click", ()=> {
let cerrardiv=document.getElementById("Academica").style.display="none";
})
//** abriri y cerrar el div con la informacion  */
let btnabrir2=document.getElementById("lab").addEventListener("click", () => {
  let div=document.getElementById("Laboral").style.display="";
  })
let btncerrar2=document.getElementById("lab_out").addEventListener("click", ()=> {
let cerrardiv=document.getElementById("Laboral").style.display="none";
})
