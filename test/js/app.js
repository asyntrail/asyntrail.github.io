/* eslint-env jquery */





function check() {
const cwt = document.getElementById('cw-tariff').value;
const cwc = document.getElementById('cw-cur').value;
const cwp = document.getElementById('cw-pre').value;
const cwu = cwc - cwp;
document.getElementById("cw-usage").innerHTML = cwu;
const cws = cwu * cwt;
document.getElementById("cw-sum").innerHTML = cws.toFixed(2);

const hwt = document.getElementById('hw-tariff').value;
const hwc = document.getElementById('hw-cur').value;
const hwp = document.getElementById('hw-pre').value;
const hwu = hwc - hwp;
document.getElementById("hw-usage").innerHTML = hwu;
const hws = hwu * hwt;
document.getElementById("hw-sum").innerHTML = hws.toFixed(2);

const owt = document.getElementById('ow-tariff').value;
const owc = document.getElementById('ow-cur').value;
const owp = document.getElementById('ow-pre').value;
const owu = owc - owp;
document.getElementById("ow-usage").innerHTML = owu;
const ows = owu * owt;
document.getElementById("ow-sum").innerHTML = ows.toFixed(2);

}
const x = document.getElementById('next');
x.onclick = check;