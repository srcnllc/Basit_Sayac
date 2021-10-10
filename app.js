let bir_azalt = document.getElementById("azalt");
let bir_arttir = document.getElementById("arttır");
let sifirla = document.getElementById("sıfırla");

let sayi = document.getElementById("sayı");

let sayac=0;

bir_azalt.addEventListener("click",()=>{
    sayac=sayac-1;
    sayi.innerText = sayac;
});
bir_arttir.addEventListener("click",()=>{
    sayac=sayac+1;
    sayi.innerText = sayac;
});
sifirla.addEventListener("click",()=>{
    sayac=0;
    sayi.innerText= sayac;
})