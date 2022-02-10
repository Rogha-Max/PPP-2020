const réponse = document.querySelectorAll('input');
const fin = document.querySelectorAll('p');
let journalist = 0;
let cyber = 0;
let based = 0;
let miner = 0;
let analyst = 0;
let scientist = 0;
let manque = 0;

réponse[réponse.length - 1].addEventListener('click', function () {
  if (réponse[0].checked) {
    journalist += 1;
    cyber += 1;
  }
  if (réponse[1].checked) {
    cyber += 1;
    based += 1;
  }
  if (réponse[2].checked) {
    based += 1;
    journalist += 1;
  }

  if (réponse[3].checked) {
    miner += 1;
  }
  if (réponse[4].checked) {
    analyst += 1;
  }
  if (réponse[5].checked) {
    scientist += 1;
  }

  if (réponse[6].checked) {
    journalist += 1;
  }
  if (réponse[7].checked) {
    based += 1;
  }
  if (réponse[8].checked) {
    cyber += 1;
  }

  if (réponse[9].checked) {
    scientist += 1;
  }
  if (réponse[10].checked) {
    analyst += 1;
  }
  if (réponse[11].checked) {
    miner += 1;
  }
  if (réponse[12].checked) {
    based += 1;
  }

  if (réponse[13].checked) {
    cyber += 1;
  }
  if (réponse[14].checked) {
    journalist += 1;
  }
  if (réponse[15].checked) {
    scientist += 1;
  }
  if (réponse[16].checked) {
    analyst += 1;
  }
  if (réponse[17].checked) {
    miner += 1;
  }
  if (réponse[18].checked) {
    journalist += 1;
  }
  if (réponse[19].checked) {
    based += 1;
  }
  if (réponse[20].checked) {
    journalist += 1;
  }
  if (réponse[21].checked) {
    cyber += 1;
  }
  if (réponse[22].checked) {
    analyst += 1;
    scientist += 1;
    miner += 1;
  }
  if (réponse[23].checked) {
    analyst += 1;
  }
  if (réponse[24].checked) {
    miner += 1;
  }
  if (réponse[25].checked) {
    scientist += 1;
  }
  if (réponse[26].checked) {
    journalist += 1;
  }
  if (réponse[27].checked) {
    cyber += 1;
  }
  if (réponse[28].checked) {
    based += 1;
  }
  if (réponse[29].checked) {
    analyst += 1;
  }
  if (réponse[30].checked) {
    miner += 1;
  }
  if (réponse[31].checked) {
    scientist += 1;
  }
  if (réponse[32].checked) {
    based += 1;
  }
  if (réponse[33].checked) {
    journalist += 1;
  }
  if (réponse[34].checked) {
    cyber += 1;
  }

  if (
    !réponse[0].checked &&
    !réponse[1].checked &&
    !réponse[2].checked &&
    !réponse[3].checked &&
    !réponse[4].checked &&
    !réponse[5].checked
  ) {
    alert('question 1 incomplete');
    manque = 1;
  }
  if (
    !réponse[6].checked &&
    !réponse[7].checked &&
    !réponse[8].checked &&
    !réponse[9].checked &&
    !réponse[10].checked &&
    !réponse[11].checked
  ) {
    alert('question 2 incomplete');
    manque = 1;
  }
  if (
    !réponse[12].checked &&
    !réponse[13].checked &&
    !réponse[14].checked &&
    !réponse[15].checked &&
    !réponse[16].checked &&
    !réponse[17].checked
  ) {
    alert('question 3 incomplete');
    manque = 1;
  }
  if (
    !réponse[18].checked &&
    !réponse[19].checked &&
    !réponse[20].checked &&
    !réponse[21].checked &&
    !réponse[22].checked
  ) {
    alert('question 4 incomplete');
    manque = 1;
  }
  if (
    !réponse[23].checked &&
    !réponse[24].checked &&
    !réponse[25].checked &&
    !réponse[26].checked &&
    !réponse[27].checked &&
    !réponse[28].checked
  ) {
    alert('question 5 incomplete');
    manque = 1;
  }
  if (
    !réponse[29].checked &&
    !réponse[30].checked &&
    !réponse[31].checked &&
    !réponse[32].checked &&
    !réponse[33].checked &&
    !réponse[34].checked
  ) {
    alert('question 6 incomplete');
    manque = 1;
  }
  if (manque === 0) {
    if (
      journalist > based &&
      journalist > cyber &&
      journalist > miner &&
      journalist > scientist &&
      journalist > analyst
    ) {
      fin[0].textContent = 'vous etes fait pour le métier de Data Journalist';
    }
    if (
      based > journalist &&
      based > cyber &&
      based > miner &&
      based > scientist &&
      based > analyst
    ) {
      fin[0].textContent =
        'vous etes fait pour le métier d\'Administrateur de base des données';
    }
    if (
      cyber > based &&
      cyber > journalist &&
      cyber > miner &&
      cyber > scientist &&
      cyber > analyst
    ) {
      fin[0].textContent =
        'vous etes fait pour le métier d\'Expert cybersécurité';
    }
    if (
      miner > scientist &&
      miner > analyst &&
      miner > journalist &&
      miner > based &&
      miner > cyber
    ) {
      fin[1].textContent = 'le métier de Data Miner peut vous intéresser';
    }
    if (
      analyst > scientist &&
      analyst > miner &&
      analyst > journalist &&
      analyst > based &&
      analyst > cyber
    ) {
      fin[1].textContent = 'le métier de Data Analist peut  vous intéresser';
    }
    if (
      scientist > analyst &&
      scientist > miner &&
      scientist > journalist &&
      scientist > based &&
      scientist > cyber
    ) {
      fin[1].textContent = 'le métier de Data Analist peut  vous intéresser';
    }
  }
});