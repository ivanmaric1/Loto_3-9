let odabraniBrojevi;
document.getElementById('forma').addEventListener('submit' , function(e) {
    e.preventDefault()
    document.getElementById('odabraniBrojevi').innerHTML = ''
    let odabrani = []
    if(document.getElementById('jedan').checked == true) {
        odabrani.push(1)
    }
    if(document.getElementById('dva').checked == true) {
        odabrani.push(2)
    }
    if(document.getElementById('tri').checked == true) {
        odabrani.push(3)
    }
    if(document.getElementById('četiri').checked == true) {
        odabrani.push(4)
    }
    if(document.getElementById('pet').checked == true) {
        odabrani.push(5)
    }
    if(document.getElementById('šest').checked == true) {
        odabrani.push(6)
    }
    if(document.getElementById('sedam').checked == true) {
        odabrani.push(7)
    }
    if(document.getElementById('osam').checked == true) {
        odabrani.push(8)
    }
    if(document.getElementById('devet').checked == true) {
        odabrani.push(9)
    }
    if(odabrani.length !== 3) {
        document.getElementById("odabraniBrojevi").style.color = "red";
        let greška = document.createElement('h1')
        greška.textContent = `Molimo odaberite točno tri broja!!!`
        document.querySelector('#odabraniBrojevi').append(greška)
    } else {
        document.getElementById("odabraniBrojevi").style.color = "black";
        let ispis = document.createElement('h1')
        ispis.textContent = `Odabrali ste: ${odabrani[0]} ${odabrani[1]} ${odabrani[2]}`
        document.querySelector('#odabraniBrojevi').append(ispis)
        document.getElementById("izvuci").style.backgroundColor = "red";
    }
    odabraniBrojevi = odabrani
})

document.getElementById('izvuci').addEventListener('click', function(e) {
    document.getElementById('kuglice1').innerHTML = ''
    document.getElementById('kuglice2').innerHTML = ''
    document.getElementById('kuglice3').innerHTML = ''
    function randomNum(){
        return Math.ceil(Math.random()*9)
    }
    let num1;
    let num2;
    let num3;

    do{ num1 = randomNum()
        num2 = randomNum()
        num3 = randomNum()
    } while(num1 === num2 || num2 === num3 ||num1 === num3)

    setTimeout( function() {
        let kuglica = document.createElement('h1')
        kuglica.textContent = num1
        document.querySelector('#kuglice1').append(kuglica)
    },1500)

    setTimeout( function() {
        let kuglica = document.createElement('h1')
        kuglica.textContent = num2
        document.querySelector('#kuglice2').append(kuglica)
    },3000)

    setTimeout( function() {
        let kuglica = document.createElement('h1')
        kuglica.textContent = num3
        document.querySelector('#kuglice3').append(kuglica)
    },4500)

    let brojPogodaka = 0;
    if(odabraniBrojevi.includes(num1)) {brojPogodaka += 1}
    if(odabraniBrojevi.includes(num2)) {brojPogodaka += 1}
    if(odabraniBrojevi.includes(num3)) {brojPogodaka += 1}
    
    setTimeout( function() {
        let rezultat = document.createElement('h1')
        rezultat.textContent = `Imali ste ${brojPogodaka} pogođenih brojeva!`
        document.querySelector('#izvještaj').append(rezultat)
    },5500)
})

document.getElementById('reset').addEventListener('click', function(e) {
    document.getElementById('odabraniBrojevi').innerHTML = ''
    document.getElementById('kuglice1').innerHTML = ''
    document.getElementById('kuglice2').innerHTML = ''
    document.getElementById('kuglice3').innerHTML = ''
    document.getElementById('izvještaj').innerHTML = ''
    document.getElementById("izvuci").style.backgroundColor = "white";
})