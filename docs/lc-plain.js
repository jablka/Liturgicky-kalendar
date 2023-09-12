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
}

function naDnes() {
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

  let elem = document.getElementById(formattedDate)
  elem.style = 'outline: DodgerBlue solid 3px;'

  let pelem = document.getElementById(pformattedDate) // previous elements
  pelem.scrollIntoView({ behavior: 'smooth' });

  console.log(pformattedDate)
  console.log(formattedDate);

}
