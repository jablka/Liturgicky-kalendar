let savedDate = new Date().setHours(0, 0, 0, 0);

function magic() {
  const date = new Date();
  const mesiace = [
    "január",
    "február",
    "marec",
    "apríl",
    "máj",
    "jún",
    "júl",
    "august",
    "september",
    "október",
    "november",
    "december",
  ];
  const day = date.getDate();
  const month = mesiace[date.getMonth()];
  const year = date.getFullYear();

  const finalFormattedDate = `${day}. ${month} ${year}`;

  // zobrazenie modal okna:
  document.getElementById("mtext").innerHTML = `Vitajte späť!<br>Dnes je ${finalFormattedDate},<br>Stránka sa naviguje na aktuálny deň.`;
  // alert('Aktuálny dátum: '+finalFormattedDate+'\nStránka bude znovu načítaná.');
  const modal_w = document.getElementById("myModal");
  modal_w.style.display = "block";

  // zatvorenie okna kliknutím na OK:
  const ok_button = document.getElementById("mclose");
  ok_button.onclick = function () {
    // document.getElementById("myModal").style.display = "none";
    modal_w.style.display = "none";

    let outline_element = document.querySelectorAll('[style*="outline"]')[0];
    outline_element.style.removeProperty('outline');

    // window.location.reload();
    naDnesK();
  };

  // zatvorenie okna Hook:
  // When the user clicks anywhere outside of the modal, close it
  modal_w.onclick = function (event) { // predtým bolo: window.onclick = 
    // ak je otvorené modal okno, celý myModal je v popredí (z index on top)
    if (event.target == modal_w) {
      // myModal je zrejme celá obrazovka, okrem "modal content" ?
      modal_w.style.display = "none";

      let outline_element = document.querySelectorAll('[style*="outline"]')[0];
      outline_element.style.removeProperty('outline');

      // window.location.reload();
      naDnesK();
    }
  };
}

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    // Document is now visible (focused)
    console.log("Document is now focused");

    let currentDate = new Date().setHours(0, 0, 0, 0);

    if (savedDate !== currentDate) {
      magic();
      savedDate = currentDate;
      
    } else {
      console.log("dátumy sa rovnajú.");
    }
  } else {
    // Document is hidden
    console.log("Document is now hidden");
  }
});
