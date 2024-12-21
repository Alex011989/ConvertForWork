// Elementi del DOM

const serbatoioSelect = document.getElementById('serbatoio');
const temperaturaSelect = document.getElementById('temperatura');
// const convertiButton = document.getElementById('converti');
const risultatoDiv = document.getElementById('risultato');
const kValueDisplay = document.getElementById('kValue');
const valoreInput = document.getElementById('valore');
const etichettaInput = document.querySelector('label[for="valore"]');
const radioButtons = document.querySelectorAll('input[name="conversione"]');





// Dati sui serbatoi
const serbatoi = {
  serbatoio1: { K: 392.15, densita: generateDensities(0.8998, 0.8472) },
  serbatoio2: { K: 392.17, densita: generateDensities(0.9000, 0.8500) },
  serbatoio3: { K: 392.08, densita: generateDensities(0.8842, 0.8402) },
  serbatoio4: { K: 392.78, densita: generateDensities(0.8998, 0.8472) },
  serbatoio5: { K: 392.50, densita: generateDensities(1, 1) },
  serbatoio6: { K: 392.31, densita: generateDensities(0.8842, 0.8402) },
  serbatoio7: { K: 729.65, densita: generateDensities(0.8842, 0.8402) },
  serbatoio8: { K: 730.17, densita: generateDensities(0.8786, 0.8366) },
  serbatoio9: { K: 729.30, densita: generateDensities(0.8998, 0.8472) },
  serbatoio10: { K: 168.20, densita: generateDensities(0.8998, 0.8472) },
  serbatoio11: { K: 168.10, densita: generateDensities(0.8690, 0.8205) },
  serbatoio12: { K: 168.43, densita: generateDensities(0.8690, 0.8205) },
  serbatoio13: { K: 89.40, densita: generateDensities(0.8281, 0.7731) },
  serbatoio14: { K: 89.40, densita: generateDensities(0.8281, 0.7731) },
  serbatoio15: { K: 94.60, densita: generateDensities(0.8690, 0.8205) },
  serbatoio16: { K: 94.47, densita: generateDensities(0.8690, 0.8205) },
  serbatoio17: { K: 94.10, densita: generateDensities(0.8814, 0.8380) },
  serbatoio18: { K: 94.31, densita: generateDensities(0.8842, 0.8402) },
  serbatoio19: { K: 94.38, densita: generateDensities(0.8842, 0.8402) },
  serbatoio20: { K: 167.84, densita: generateDensities(0.8690, 0.8205) },
  serbatoio21: { K: 167.29, densita: generateDensities(0.8690, 0.8360) },
  serbatoio22: { K: 391.60, densita: generateDensities(0.8786, 0.8366) },
  serbatoio23: { K: 392.67, densita: generateDensities(0.8786, 0.8366) },
  serbatoio24: { K: 392.27, densita: generateDensities(1, 1) },
  serbatoio25: { K: 391.05, densita: generateDensities(0.8786, 0.8366) },
  serbatoio26: { K: 466.23, densita: generateDensities(0.9655, 0.9214) },
  serbatoio27: { K: 167.53, densita: generateDensities(0.9655, 0.9214) },
  serbatoio28: { K: 94.38, densita: generateDensities(0.9775, 0.9214) },
  serbatoio29: { K: 93.93, densita: generateDensities(0.9775, 0.9335) },
  serbatoio30: { K: 94.00, densita: generateDensities(0.9775, 0.9335) },
  serbatoio31: { K: 167.79, densita: generateDensities(0.9229, 0.8789) },
  serbatoio32: { K: 167.30, densita: generateDensities(0.9229, 0.8789) },
  serbatoio33: { K: 103.70, densita: generateDensities(0.9229, 0.8789) },
  serbatoio34: { K: 467.25, densita: generateDensities(0.9229, 0.8789) },
  serbatoio35: { K: 168.02, densita: generateDensities(0.8090, 0.7590) },
  serbatoio36: { K: 167.64, densita: generateDensities(0.9229, 0.8789) },
  serbatoio37: { K: 391.10, densita: generateDensities(0.8090, 0.7590) },
  serbatoio38: { K: 314.05, densita: generateDensities(0.8090, 0.7590) },
  serbatoio39: { K: 147.80, densita: generateDensities(0.9229, 0.8789) },
  serbatoio40: { K: 147.95, densita: generateDensities(0.9229, 0.8789) },
  serbatoio41: { K: 65.67, densita: generateDensities(0.8876, 0.8463) },
  serbatoio42: { K: 65.90, densita: generateDensities(0.8814, 0.8380) },
};

// Genera una lista di densità da 0°C a 50°C
function generateDensities(min, max) {
  const step = (max - min) / 50;
  return Array.from({ length: 51 }, (_, i) => min + step * i);
}

// Funzione per calcolare la densità 
function getDensita(serbatoio) {
 
  const temperatura = parseInt(document.getElementById('temperatura').value, 10);
  const densitaList = serbatoi[serbatoio].densita;

  return densitaList[temperatura];
}

// Popola il menu a tendina con valori da 0 a 50
for (let i = 0; i <= 50; i++) {
const option = document.createElement('option');
option.value = i;
option.textContent = i;
temperaturaSelect.appendChild(option);
}

// Fa comparire il K del serbatoio selezionato
const aggiornaK = () => {
  const serbatoioSelezionato = serbatoioSelect.value;
  const valoreK = serbatoi[serbatoioSelezionato]?.K; // Recupera il valore di K 
  kValueDisplay.textContent = `${valoreK} (L/mm)`;
};

//Fa comparire la densità 
const aggiornaDensita = () => {
  const serbatoioSelezionato = serbatoioSelect.value;
  const temperatura = parseInt(temperaturaSelect.value, 10);

  // Recupera il serbatoio e i suoi dati
  const serbatoio = serbatoi[serbatoioSelezionato];
  if (!serbatoio || isNaN(temperatura) || temperatura < 0 || temperatura > 50) {
    document.getElementById("densitaDisplay").textContent = "-";
    return;
  }

  // Recupera la densità
  const densita = serbatoio.densita[temperatura];

  // Mostra la densità nel div dedicato
  document.getElementById("densitaDisplay").textContent = `Densità: ${densita.toFixed(4)} kg/L`;
};






// Funzione principale per la conversione
const converti = () => {
  const serbatoio = serbatoioSelect.value;
  const valore = parseFloat(valoreInput.value);
  const tipoConversione = document.querySelector('input[name="conversione"]:checked').value;

  if (isNaN(valore) || valore < 0) {
    risultatoDiv.textContent = "Inserisci un valore valido.";
    return;
  }

  const densita = getDensita(serbatoio);
  const K = serbatoi[serbatoio].K;
  let risultato;

  if (tipoConversione === 'toTonnellate') {
    risultato = valore * K * densita;
    risultato = Math.round(risultato);
    risultatoDiv.textContent = `${valore.toLocaleString()} mm equivalgono a ${risultato.toLocaleString()} kg.`;
  } else if(tipoConversione === 'toMillimetri') {
    risultato = valore / (K * densita);
    risultatoDiv.textContent = `${valore.toLocaleString()} kg equivalgono a ${risultato.toLocaleString('it-IT', { maximumFractionDigits: 2 })} mm.`;
  }
    else if (tipoConversione === 'toLt') {
    risultato = valore / K;
    risultatoDiv.textContent = `${valore.toLocaleString()} L equivalgono a ${risultato.toLocaleString('it-IT', { maximumFractionDigits: 2 })} mm.`;
  }
    else if (tipoConversione === 'toMm') {
    risultato = valore * K;
    risultatoDiv.textContent = `${valore.toLocaleString()} mm equivalgono a ${risultato.toLocaleString('it-IT', { maximumFractionDigits: 2 })} L.`;
  }
};



//Aggiorna etichetta
const aggiornaEtichetta = () => {
  const tipoConversione = document.querySelector('input[name="conversione"]:checked').value;

  if (tipoConversione === 'toTonnellate') {
    etichettaInput.textContent = "Inserisci valore in Millimetri:";
    valoreInput.placeholder = "mm";
  } else if (tipoConversione === 'toMillimetri') {
    etichettaInput.textContent = "Inserisci valore in Kilogrammi:";
    valoreInput.placeholder = "kg";
  }
  else if (tipoConversione === 'toMm') {
   etichettaInput.textContent = "Inserisci valore in Millimetri:";
   valoreInput.placeholder = "mm";
  }
  else if (tipoConversione === 'toLt') {
   etichettaInput.textContent = "Inserisci valore in Litri:";
   valoreInput.placeholder = "L";
  }
};

// Event listener per il cambio del radio button
radioButtons.forEach(radio => {
  radio.addEventListener('change', aggiornaEtichetta);
  radio.addEventListener('change', converti);
});

// Imposta l'etichetta iniziale in base al radio selezionato di default
aggiornaEtichetta();

// Event listener di conversione
// convertiButton.addEventListener('click', converti);
temperaturaSelect.addEventListener('change', converti);
serbatoioSelect.addEventListener('change', converti);
valoreInput.addEventListener('input', converti);  

// Seleziona il pulsante o l'icona
const infoButton = document.getElementById('info-icon');
serbatoioSelect.addEventListener('change', aggiornaK);
aggiornaK();


// Aggiungi l'evento click
infoButton.addEventListener('click', () => {
alert('Per qualunque informazione chiedere a Ceraso');
});

serbatoioSelect.addEventListener("change", aggiornaDensita);
temperaturaSelect.addEventListener("change", aggiornaDensita);
aggiornaDensita();