document.addEventListener("DOMContentLoaded", () =>{
    


    let spravnyVysledek;
    let chyba = 0;
    let spravne = 0;
    let timer;
    let pocetUbehnutychKol = 0;
    let pocetKol;
    let odpoved;
    const hezky = document.querySelector(".spravne");
    const spatne = document.querySelector(".chyba");
    const pole = document.querySelector(".pole");
    const form = document.querySelector(".Inbox");
    const input = document.querySelector("#odpoved");
    const priklad = document.querySelector(".priklad");

    function znamka(){
        let uspesnost = spravne/(pocetKol-1)*100;
        let znamka;
        if (uspesnost > 89) {
            znamka = 1;
        } else if (uspesnost > 74 && uspesnost < 90) {
            znamka = 2;
        } else if (uspesnost > 49 && uspesnost < 75) {
            znamka = 3;
        } else if (uspesnost > 29 && uspesnost < 50) {
            znamka = 4;
        } else {
            znamka = 5;
        }
        priklad.textContent = `znamka: ${znamka}`;
    }

    function dalsiPriklad() {
    // 1. vygenerovat příklad
    let cislo1 = Math.floor(Math.random() * 10) + 1;
    let cislo2 = Math.floor(Math.random() * 10) + 1;
    let rozhodnuti = Math.floor(Math.random() * 2)


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
        pocetUbehnutychKol++;
        setTimeout(() => {
        pole.classList.remove("chyba");
        }, 1000);
        if(pocetUbehnutychKol < pocetKol){  ///
        dalsiPriklad();
        }else{
        form.classList.add("konec");
        priklad.classList.add("znamka");
        znamka();
        }
    }, 60000);
    spatne.textContent = `chyby: ${chyba}`;
}


priklad.textContent = "napis pocet prikladu";

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(pocetUbehnutychKol === 0){
    pocetKol = Number(input.value)+1;
    pocetUbehnutychKol++;   
    input.value = "";
    dalsiPriklad();
    return;
    }
    clearTimeout(timer);

    odpoved = Number(input.value);

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
    pocetUbehnutychKol++;
    spatne.textContent = `chyby: ${chyba}`
    hezky.textContent = `spravne: ${spravne}`
    input.value = "";
    if(pocetUbehnutychKol < pocetKol){         ///
    dalsiPriklad();
    }else{
        form.classList.add("konec");
        priklad.classList.add("znamka");
        znamka();
    }

});



})

////udelat ze na zacatku si clovek zada kolik tam chce mit prikladu
////a nakonci to ohodnoti
//bonus: dole bude casovac
