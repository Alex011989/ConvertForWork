// Dati sui serbatoi
const serbatoi = {
    serbatoio1: { K: 392.15, densita: generateDensities(0.8998, 0.8640) },
    serbatoio2: { K: 392.17, densita: generateDensities(0.9000, 0.8660) },
    serbatoio3: { K: 392.08, densita: generateDensities(0.8842, 0.8543) },
    serbatoio4: { K: 392.78, densita: generateDensities(0.8998, 0.8640) },
    serbatoio5: { K: 392.50, densita: generateDensities(0.1, 1.05) },
    serbatoio6: { K: 392.31, densita: generateDensities(0.8842, 0.8543) },
    serbatoio7: { K: 729.65, densita: generateDensities(0.8842, 0.8543) },
    serbatoio8: { K: 730.17, densita: generateDensities(0.8786, 0.8500) },
    serbatoio9: { K: 729.30, densita: generateDensities(0.8998, 0.8640) },
    serbatoio10: { K: 168.20, densita: generateDensities(0.8998, 0.8640) },
    serbatoio11: { K: 168.10, densita: generateDensities(0.8690, 0.8360) },
    serbatoio12: { K: 168.43, densita: generateDensities(0.8690, 0.8360) },
    serbatoio13: { K: 89.40, densita: generateDensities(0.8281, 0.7907) },
    serbatoio14: { K: 89.40, densita: generateDensities(0.8281, 0.7907) },
    serbatoio15: { K: 94.60, densita: generateDensities(0.8690, 0.8360) },
    serbatoio16: { K: 94.47, densita: generateDensities(0.8690, 0.8360) },
    serbatoio17: { K: 94.10, densita: generateDensities(0.8814, 0.8519) },
    serbatoio18: { K: 94.31, densita: generateDensities(0.8842, 0.8543) },
    serbatoio19: { K: 94.38, densita: generateDensities(0.8842, 0.8543) },
    serbatoio20: { K: 167.84, densita: generateDensities(0.8690, 0.8360) },
    serbatoio21: { K: 167.29, densita: generateDensities(0.8690, 0.8360) },
    serbatoio22: { K: 391.60, densita: generateDensities(0.8786, 0.8500) },
    serbatoio23: { K: 392.67, densita: generateDensities(0.8786, 0.8500) },
    serbatoio24: { K: 392.27, densita: generateDensities(0.1, 1.05) },
    serbatoio25: { K: 391.05, densita: generateDensities(0.8786, 0.8500) },
    serbatoio26: { K: 466.23, densita: generateDensities(0.9655, 0.9355) },
    serbatoio27: { K: 167.53, densita: generateDensities(0.9655, 0.9355) },
    serbatoio28: { K: 94.38, densita: generateDensities(0.9775, 0.9476) },
    serbatoio29: { K: 93.93, densita: generateDensities(0.9775, 0.9476) },
    serbatoio30: { K: 94.00, densita: generateDensities(0.9775, 0.9476) },
    serbatoio31: { K: 167.79, densita: generateDensities(0.9229, 0.8930) },
    serbatoio32: { K: 167.30, densita: generateDensities(0.9229, 0.8930) },
    serbatoio33: { K: 103.70, densita: generateDensities(0.9229, 0.8930) },
    serbatoio34: { K: 467.25, densita: generateDensities(0.9229, 0.8930) },
    serbatoio35: { K: 168.02, densita: generateDensities(0.8090, 0.7750) },
    serbatoio36: { K: 167.64, densita: generateDensities(0.9229, 0.8930) },
    serbatoio37: { K: 391.10, densita: generateDensities(0.8090, 0.7750) },
    serbatoio38: { K: 314.05, densita: generateDensities(0.8090, 0.7750) },
    serbatoio39: { K: 147.80, densita: generateDensities(0.9229, 0.8930) },
    serbatoio40: { K: 147.95, densita: generateDensities(0.9229, 0.8930) },
    serbatoio41: { K: 65.67, densita: generateDensities(0.8876, 0.8595) },
    serbatoio42: { K: 65.90, densita: generateDensities(0.8814, 0.8519) },
  };
  
  // Genera una lista di densità da 0°C a 34°C
  function generateDensities(min, max) {
    const step = (max - min) / 34;
    return Array.from({ length: 35 }, (_, i) => min + step * i);
  }
  
  // Funzione per calcolare la densità in base alla temperatura
  function getDensita(serbatoio) {

   
    const temperatura = parseInt(document.getElementById('temperatura').value, 10);
    const densitaList = serbatoi[serbatoio].densita;
    return densitaList[temperatura];
  }
  
  // Elementi del DOM
  
  const serbatoioSelect = document.getElementById('serbatoio');
  const temperaturaSelect = document.getElementById('temperatura');
  const convertiButton = document.getElementById('converti');
  const risultatoDiv = document.getElementById('risultato');
  const valoreInput = document.getElementById('valore');
  const etichettaInput = document.querySelector('label[for="valore"]');
  const radioButtons = document.querySelectorAll('input[name="conversione"]');
  
// Popola il menu a tendina con valori da 0 a 34
for (let i = 0; i <= 34; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  temperaturaSelect.appendChild(option);
}

  // Funzione principale per la conversione
  const converti = () => {
    const serbatoio = serbatoioSelect.value;
    const temperatura = parseFloat(temperaturaInput.value);
    const valore = parseFloat(valoreInput.value);
    const tipoConversione = document.querySelector('input[name="conversione"]:checked').value;
  
    if (isNaN(temperatura) || isNaN(valore) || valore < 0) {
      risultatoDiv.textContent = "Inserisci valori validi.";
      return;
    }
  
    const densita = getDensita(serbatoio, temperatura);
    const K = serbatoi[serbatoio].K;
    let risultato;
  
    if (tipoConversione === 'toTonnellate') {
      // Converti mm in tonnellate
      risultato = Math.round(valore * K * densita);
      risultatoDiv.textContent = `${valore.toLocaleString()} mm equivalgono a ${risultato.toLocaleString()} Kg.`;
    } else if (tipoConversione === 'toMillimetri') {
      // Converti tonnellate in mm
      risultato = Math.round(valore / (K * densita));
      risultatoDiv.textContent = `${valore.toLocaleString()} Kg equivalgono a ${risultato.toLocaleString()} mm.`;
    }
  };

  
  const aggiornaEtichetta = () => {
    const tipoConversione = document.querySelector('input[name="conversione"]:checked').value;
  
    if (tipoConversione === 'toTonnellate') {
      etichettaInput.textContent = "Inserisci valore in Millimetri:";
      valoreInput.placeholder = "Millimetri";
    } else if (tipoConversione === 'toMillimetri') {
      etichettaInput.textContent = "Inserisci valore in Kilogrammi:";
      valoreInput.placeholder = "Kilogrammi";
    }
  };
  
  // Event listener per il cambio del radio button
  radioButtons.forEach(radio => {
    radio.addEventListener('change', aggiornaEtichetta);
  });
  
  // Imposta l'etichetta iniziale in base al radio selezionato di default
  aggiornaEtichetta();
  
  // Event listener per il pulsante di conversione
  convertiButton.addEventListener('click', converti);
  

  