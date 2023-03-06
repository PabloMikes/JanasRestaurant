const mainBack = document.getElementById("mainBack");
const grilBack = document.getElementById("grilBack");
const grilwmeatBack = document.getElementById("grilwmeatBack");
const buildBack = document.getElementById("buildBack");
const gril = document.getElementById("gril");
const odha = document.getElementById("odha");
const build = document.getElementById("build");
const main = document.getElementById("main");
const intro = document.getElementById("intro");
const play = document.getElementById("play");
const grildemeat = document.getElementById("grildemeat");
const takedemeat = document.getElementById("takedemeat");
const progress = document.getElementById("progress");
const vyber = document.getElementById("vyber");
const vyber1 = document.getElementById("vyber1");
const vyber2 = document.getElementById("vyber2");
const vyber3 = document.getElementById("vyber3");
const vyber4 = document.getElementById("vyber4");
const ingre = document.getElementsByClassName("ingre");
const ingre2 = document.getElementsByClassName("ingre2");
const zakos = document.getElementsByClassName("zakos");
const place = document.getElementById("place");
const place2 = document.getElementById("place2");
const menu = document.getElementById("menu");
const nabidka = document.getElementById("nabidka");
const objednavka = document.getElementById("objednavka");
const kos = document.getElementById("kos");
const serve = document.getElementById("serve");
const counter = document.getElementById("counter");
const meatCounter = document.getElementById("meatCounter");

let check = false;
let check2 = false;
let check3 = false;
let check4 = false;
let progres = 0;
let meat = 0;
let burgir = 0;
let randomZakos = 0;
let randomObjednavka = 0;
let happy = 0;

odha.onclick = () => {
  check3 = false;
  mainBack.style.display = "block";
  grilBack.style.display = "none";
  buildBack.style.display = "none";
  grildemeat.style.display = "none";
  grilwmeatBack.style.display = "none";
  progress.style.display = "none";
  takedemeat.style.display = "none";
  vyber.style.display = "none";
  place.style.display = "none";
  place2.style.display = "block";
  menu.style.display = "block";
};

gril.onclick = () => {
  check3 = true;
  mainBack.style.display = "none";
  buildBack.style.display = "none";
  vyber.style.display = "none";
  place.style.display = "none";
  menu.style.display = "none";
  place2.style.display = "none";
  if (check2) {
    takedemeat.style.display = "block";
    grilwmeatBack.style.display = "block";
  } else if (check) {
    grilwmeatBack.style.display = "block";
    progress.style.display = "block";
  } else {
    grilBack.style.display = "block";
    grildemeat.style.display = "block";
  }
};

build.onclick = () => {
  check3 = false;
  mainBack.style.display = "none";
  grilBack.style.display = "none";
  buildBack.style.display = "block";
  grildemeat.style.display = "none";
  grilwmeatBack.style.display = "none";
  progress.style.display = "none";
  takedemeat.style.display = "none";
  vyber.style.display = "flex";
  place.style.display = "flex";
  menu.style.display = "none";
  place2.style.display = "none";
};

play.onclick = () => {
  intro.style.display = "none";
  main.style.display = "block";
  document.body.style.background = "bisque";
  randomZakos = Math.floor(Math.random() * 4);
  randomObjednavka = Math.floor(Math.random() * 4);
  zakos[randomZakos].style.display = "block";
  console.log(randomObjednavka);
};

objednavka.onclick = () => {
  switch (randomObjednavka) {
    case 0:
      objednavka.innerHTML = `Burgir plz`;
      break;
    case 1:
      objednavka.innerHTML = `Chese burgur plz`;
      break;
    case 2:
      objednavka.innerHTML = `Kornelovo pokuseni plz`;
      break;
    case 3:
      objednavka.innerHTML = `Pickle big plz`;
      break;
  }
};

grildemeat.onclick = () => {
  grildemeat.style.display = "none";
  grilBack.style.display = "none";
  grilwmeatBack.style.display = "block";
  progress.style.display = "block";
  check = true;
  const cookin = setInterval(() => {
    if (progres < 100) {
      progres++;
      progress.innerHTML = `${progres}%`;
    } else {
      clearInterval(cookin);
      check2 = true;
      progress.style.display = "none";
      if (check3) {
        takedemeat.style.display = "block";
        grilwmeatBack.style.display = "block";
      }
    }
  }, 100);
};

takedemeat.onclick = () => {
  check2 = false;
  check = false;
  takedemeat.style.display = "none";
  grilwmeatBack.style.display = "none";
  grilBack.style.display = "block";
  grildemeat.style.display = "block";
  progres -= progres;
  meat++;
  meatCounter.innerHTML = meat;
};

ingre[0].onclick = () => {
  vyber1.style.display = "none";
  vyber2.style.display = "block";
  ingre2[0].style.display = "block";
  ingre2[0].style.height = "100px";
  ingre[2].style.width = "120px";
};
ingre[1].onclick = () => {
  if (meat != 0) {
    vyber2.style.display = "none";
    vyber3.style.display = "flex";
    ingre2[0].style.display = "none";
    ingre2[1].style.display = "block";
    meat--;
    meatCounter.innerHTML = meat;
  }
};
ingre[2].onclick = () => {
  vyber3.style.display = "none";
  vyber4.style.display = "block";
  burgir = 1;
};
ingre[3].onclick = () => {
  vyber3.style.display = "none";
  vyber4.style.display = "block";
  ingre2[1].style.display = "none";
  ingre2[3].style.display = "block";
  burgir = 2;
};
ingre[4].onclick = () => {
  vyber3.style.display = "none";
  vyber4.style.display = "block";
  ingre2[1].style.display = "none";
  ingre2[7].style.display = "block";
  burgir = 3;
};
ingre[5].onclick = () => {
  vyber3.style.display = "none";
  vyber4.style.display = "block";
  ingre2[1].style.display = "none";
  ingre2[5].style.display = "block";
  burgir = 4;
};
ingre[6].onclick = () => {
  vyber4.style.display = "none";
  ingre2[3].style.display = "none";
  ingre2[7].style.display = "none";
  ingre2[5].style.display = "none";
  kos.style.display = "block";
  serve.style.display = "block";
  if (burgir == 1) {
    ingre2[1].style.display = "none";
    ingre2[2].style.display = "block";
  } else if (burgir == 2) {
    ingre2[4].style.display = "block";
  } else if (burgir == 4) {
    ingre2[6].style.display = "block";
  } else if (burgir == 3) {
    ingre2[8].style.display = "block";
  }
};

menu.onclick = () => {
  if (check4) {
    mainBack.style.display = "none";
    odha.style.display = "none";
    gril.style.display = "none";
    build.style.display = "none";
    check4 = false;
    nabidka.style.display = "block";
    place2.style.display = "none";
  } else {
    mainBack.style.display = "block";
    odha.style.display = "block";
    gril.style.display = "block";
    build.style.display = "block";
    check4 = true;
    nabidka.style.display = "none";
    place2.style.display = "block";
  }
};
kos.onclick = () => {
  burgir = 0;
  vyber1.style.display = "block";
  vyber4.style.display = "none";
  ingre2[2].style.display = "none";
  ingre2[4].style.display = "none";
  ingre2[6].style.display = "none";
  ingre2[8].style.display = "none";
  kos.style.display = "none";
  serve.style.display = "none";
};
serve.onclick = () => {
  vyber1.style.display = "block";
  vyber4.style.display = "none";
  ingre2[2].style.display = "none";
  ingre2[4].style.display = "none";
  ingre2[6].style.display = "none";
  ingre2[8].style.display = "none";
  kos.style.display = "none";
  serve.style.display = "none";
  if (burgir == randomObjednavka + 1) {
    happy++;
    burgir = 0;
    console.log(happy);
    zakos[randomZakos].style.display = "none";
    counter.innerHTML = happy;
    randomZakos = Math.floor(Math.random() * 4);
    randomObjednavka = Math.floor(Math.random() * 4);
    zakos[randomZakos].style.display = "block";
    objednavka.innerHTML = `Klik me`
  } else {
    happy--;
    burgir = 0;
    console.log(happy);
    zakos[randomZakos].style.display = "none";
    counter.innerHTML = happy;
    randomZakos = Math.floor(Math.random() * 4);
    randomObjednavka = Math.floor(Math.random() * 4);
    zakos[randomZakos].style.display = "block";
    objednavka.innerHTML = `Klik me`
    if(happy < 0){
        alert("bankrot kys");
        window.close();
    }
  }
};
