let button = document.getElementById('oblicz');

const TrzechPracownikow = () => {
    
    let pracownicy = document.getElementsByClassName('pracownik');
    let czas = document.getElementsByClassName('czas');
    let listaPracownikow = [];

    for(let i=0; i<czas.length; i++) {

        let objekt = {
            name: pracownicy[i].innerHTML,
            time: czas[i].value
        }

        listaPracownikow.push(objekt);

    }

    let sortedObjekt = listaPracownikow.sort((a, b) => b.time - a.time);
    let Najlepsi = document.getElementById('najlepsi-pracownicy');
    Najlepsi.innerText = `1: ${sortedObjekt[0].name}\n 2: ${sortedObjekt[1].name}\n3: ${sortedObjekt[2].name}`;
}

/* button.addEventListener('click', TrzechPracownikow); */


const Oblicz = () => {

    let czas = document.getElementsByClassName('czas');
    let stawka = document.getElementsByClassName('stawka');

    for (let i=0; i<czas.length; i++) {

        let iloscGodzin = czas[i].value;
        let stawkaZaGodzine = stawka[i].value;

        if( iloscGodzin > 160) {

            let wyplata = 160 * stawkaZaGodzine + (iloscGodzin-160) * stawkaZaGodzine*2;
            document.getElementsByClassName('wyplata')[i].innerHTML = wyplata;

        } else if( iloscGodzin < 100) {
            
            let wyplata = stawkaZaGodzine * iloscGodzin;
            document.getElementsByClassName('wyplata')[i].innerHTML = wyplata;
            document.getElementsByClassName('pracownik')[i].classList.add('red');
        
        } else {

            let wyplata = stawkaZaGodzine * iloscGodzin;
            document.getElementsByClassName('wyplata')[i].innerHTML = wyplata;
        }
    }
    TrzechPracownikow()
}

button.addEventListener('click', Oblicz);
