document.addEventListener("DOMContentLoaded", () =>{
    


    let spravnyVysledek;
    let chyba = 0;
    let spravne = 0;
    let timer;
    const hezky = document.querySelector(".spravne");
    const spatne = document.querySelector(".chyba");
    const pole = document.querySelector(".pole");
    const form = document.querySelector(".Inbox");
    const input = document.querySelector("#odpoved");

    function dalsiPriklad() {
    // 1. vygenerovat příklad
    let cislo1 = Math.floor(Math.random() * 10) + 1;
    let cislo2 = Math.floor(Math.random() * 10) + 1;
    let rozhodnuti = Math.floor(Math.random() * 2)

    const priklad = document.querySelector(".priklad");
    // 2. uložit správný výsledek
    if(rozhodnuti === 0){
        spravnyVysledek = Math.floor(cislo1 * cislo2);
        priklad.textContent = `${cislo1} . ${cislo2}`;
    }
    else if(rozhodnuti === 1){
        spravnyVysledek = Math.floor(cislo1 / cislo2);
        priklad.textContent = `${cislo1} : ${cislo2}`;
    }
        // 4. spustit 60s timer
    timer = setTimeout(() => {
        pole.classList.add("chyba");
        chyba++;
        setTimeout(() => {
        pole.classList.remove("chyba")
        }, 1000);
        dalsiPriklad();
    }, 60000);
    spatne.textContent = `chyby: ${chyba}`
}


dalsiPriklad();

form.addEventListener("submit", (event) => {
    event.preventDefault();

    clearTimeout(timer);

    let odpoved = Number(input.value);

    if (odpoved === spravnyVysledek) {
        pole.classList.add("spravne");
        spravne++;
        setTimeout(() => {
        pole.classList.remove("spravne")
        }, 500);
    } else {
        pole.classList.add("chyba");
        chyba++;
        setTimeout(() => {
        pole.classList.remove("chyba")
        }, 500);
    }
    spatne.textContent = `chyby: ${chyba}`
    hezky.textContent = `spravne: ${spravne}`
    input.value = "";

    dalsiPriklad();
});



})


