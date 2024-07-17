document.addEventListener("DOMContentLoaded", function() {
    const counterContainer = document.getElementById("counter-container");

    // Creazione pulsante +
    const piu = document.createElement("button");
    piu.className = "counter-btn";
    piu.id = "piu";
    piu.textContent = "+";
    counterContainer.appendChild(piu);

    // Creazione  pulsante -
    const meno = document.createElement("button");
    meno.className = "counter-btn";
    meno.id = "meno";
    meno.textContent = "-";
    counterContainer.appendChild(meno);

    // Creazione output per il contatore
    const numeroInput = document.createElement("input");
    numeroInput.className = "counter";
    numeroInput.type = "text";
    numeroInput.id = "numero";
    numeroInput.value = "0";
    counterContainer.appendChild(numeroInput);

    let numero = parseInt(numeroInput.value);

    function somma() {
      numero++;
      numeroInput.value = numero;
      temporaryColorChange(piu);
      console.log(numero);
    }

    function sottrai() {
      numero--;
      numeroInput.value = numero;
      temporaryColorChange(meno);
      console.log(numero);
    }

    function temporaryColorChange(button) {
      button.classList.add("color-change");
      setTimeout(function() {
        button.classList.remove("color-change");
      }, 200);
    }

    piu.onclick = somma;
    meno.onclick = sottrai;
  });
