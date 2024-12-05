
const btnEL = document.getElementById("calculate")
const billinput = document.getElementById("bill")
const vatinput =  document.getElementById("vat")
const totalspan = document.getElementById("total")



function calculatetotal()
{
      const billvalue = billinput.value;
      const vatvalue = vatinput.value;
      const total_value = (billvalue * (1 + vatvalue / 100)) - billvalue;

      totalspan.innerText = total_value.toFixed(2);
}

btnEL.addEventListener("click",calculatetotal)