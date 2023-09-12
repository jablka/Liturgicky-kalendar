function init() {
  document.write(
    "<div id='offlineMenu'>"
    + "    <button id='lcToday' onclick='naDnes()' title='Prechod na dnešný deň'>&gt;&gt; Naviguj na Dnes &lt;&lt;</button>"
    // + "    <button id='lcFontSizeSmaller' onclick='fontMinus()' title='Zmenšiť písmo'>A-</button>"
    // + "    <input id='lcFontSize' onchange='setFontSize(this.value);' onclick='this.select();' "
    // + " title='Veľkosť písma' value='" + getFontSize() + "%' />"
    // + "    <button id='lcFontSizeBigger' onclick='fontPlus()' title='Zväčšiť písmo'>A+</button>"
    // + "    <button id='lcRezim' onclick='zmenRezim()' title='Režim: svetlý / tmavý'>Režim</button>"
    + "</div>");

  applyRezim();

  root = document.querySelector(':root');
  setFontSize(getFontSize());
}

function applyRezim() {
  if (jeTmavy())
    document.body.classList.add('dark');
  else document.body.classList.remove('dark');

}

function jeTmavy() {
  return localStorage.getItem('rezim') == 'dark';
}

function zmenRezim() {
  localStorage.setItem('rezim', ((jeTmavy()) ? '' : 'dark'));
  applyRezim();
}

function dig2(num) {
  return (num < 10) ? "0" + num : num;
}

function naDnes() {
  // window.location = dnes()[0]; // pôvodné

  // moje:
  // zisťujeme súčasný dátum:
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0'); // 

  // dva dni pred
  const prev_date = new Date();
  prev_date.setDate(prev_date.getDate() - 2); // Subtract 
  const pyear = prev_date.getFullYear();
  const pmonth = String(prev_date.getMonth() + 1).padStart(2, '0');
  const pday = String(prev_date.getDate()).padStart(2, '0'); // 

  var formattedDate = `${year}-${month}-${day}`; // rok-mesiac-deň
  var pformattedDate = `${pyear}-${pmonth}-${pday}`;

  // window.location.hash = formattedDate; 
  let elem = document.getElementById(formattedDate)
  elem.style = 'outline: DodgerBlue solid 3px;'

  let pelem = document.getElementById(pformattedDate) // previous elements
  pelem.scrollIntoView({ behavior: 'smooth' });

  console.log(pformattedDate)
  console.log(formattedDate);

}

function dnes() {
  var now = new Date(),
    d = dig2(now.getDate()),
    m = dig2(now.getMonth() + 1),
    r = now.getFullYear(),
    ref = r + "-" + m + "-" + d + ".html",
    datum = d + "." + m + "." + r;

  return [ref, datum];
}

var font_size_min = 40,   // percentá
  font_size_max = 500,
  font_size_krok = 10;
var root;   // = document.querySelector(':root');    -> init();

function fontMinus() {
  setFontSize(getFontSize() - font_size_krok);
}

function fontPlus() {
  setFontSize(getFontSize() + font_size_krok);
}

function getFontSize() {
  var font_size = localStorage.getItem('fontSize');
  if (!font_size) font_size = 100;
  return parseInt(font_size);
}

function setFontSize(font_size) {
  font_size = parseInt(font_size);
  if (!font_size) font_size = 100;
  font_size = Math.min(font_size_max, Math.max(font_size, font_size_min));    // do limitov
  localStorage.setItem('fontSize', font_size);
  root.style.setProperty('--zoom', font_size + '%');
  document.getElementById('lcFontSize').value = font_size + '%';
  console.log('font_size', font_size);

  return font_size;
}
