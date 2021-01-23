/* eslint-env jquery */



function check() {
const cwt = +document.getElementById('cw-tariff').value;
const cwc = +document.getElementById('cw-cur').value;
const cwp = +document.getElementById('cw-pre').value;
const cwu = cwc - cwp;
document.getElementById("cw-usage").innerHTML = cwu;
const cws = cwu * cwt;
const cwss = ( Math.ceil(cws * 100) / 100 );
document.getElementById("cw-sum").innerHTML = cwss;

const hwt = +document.getElementById('hw-tariff').value;
const hwc = +document.getElementById('hw-cur').value;
const hwp = +document.getElementById('hw-pre').value;
const hwu = hwc - hwp;
document.getElementById("hw-usage").innerHTML = hwu;
const hws = hwu * hwt;
const hwss = ( Math.ceil(hws * 100) / 100 );
document.getElementById("hw-sum").innerHTML = hwss;

const owt = +document.getElementById('ow-tariff').value;
const owc = +document.getElementById('ow-cur').value;
const owp = +document.getElementById('ow-pre').value;
const owu = owc - owp;
document.getElementById("ow-usage").innerHTML = owu;
const ows = owu * owt;
const owss = ( Math.ceil(ows * 100) / 100 );
document.getElementById("ow-sum").innerHTML = owss;

const h = +document.getElementById('heat').value;
document.getElementById("heats").innerHTML = h;

const ct1 = +document.getElementById('cont1').value;
const ct2 = +document.getElementById('cont2').value;
const cts = ct1 + ct2;
document.getElementById("conts").innerHTML = cts;

const e = +document.getElementById('elec').value;
document.getElementById("elecs").innerHTML = e ;

const k = +document.getElementById('kom').value;
document.getElementById("koms").innerHTML = k ;

const ex = +document.getElementById('export').value;
document.getElementById("exports").innerHTML = ex ;

const ph = +document.getElementById('phone').value;
document.getElementById("phones").innerHTML = ph ;

const tot = cwss+hwss+owss+h+cts+e+k+ex+ph;

document.getElementById("total").innerHTML = tot;

}

// function check() {
// const a = 21.756;
// const b = 97.89;
// const c = 10.272;
// const a1 = ( Math.ceil(a * 100) / 100 );
// const b1 = ( Math.ceil(b * 100) / 100 );
// const c1 = ( Math.ceil(c * 100) / 100 );

// const tot = a1+b1+c1;
// document.getElementById("total").innerHTML = tot;
// }


const x = document.getElementById('next');
x.onclick = check;