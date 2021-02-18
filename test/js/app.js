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
const cts = ( Math.ceil((ct1 + ct2) * 100) / 100 );
document.getElementById("conts").innerHTML = cts;

const e = +document.getElementById('elec').value;
document.getElementById("elecs").innerHTML = e ;

const k = +document.getElementById('kom').value;
document.getElementById("koms").innerHTML = k ;

const ex = +document.getElementById('export').value;
document.getElementById("exports").innerHTML = ex ;

const ph = +document.getElementById('phone').value;
document.getElementById("phones").innerHTML = ph ;

const ed = +document.getElementById('edi').value;
document.getElementById("edis").innerHTML = ed ;


const tot = (((cwss*100+hwss*100+owss*100+e*100)-ed*100)+h*100+cts*100+k*100+ex*100+ph*100)/100;

document.getElementById("total").innerHTML = tot;

const ps =((cwss*100+hwss*100+owss*100+e*100)-ed*100)/100;
document.getElementById("pers_sum").innerHTML = ps ;
const psm = +document.getElementById('pers_m').value;
const psd = ( Math.ceil((ps/psm) * 100) / 100 );
document.getElementById("pers_dev").innerHTML = psd ;

const gs = (h*100+cts*100+k*100+ex*100+ph*100)/100;
document.getElementById("gen_sum").innerHTML = gs ;
const gsm = +document.getElementById('gen_m').value;
const gsd = ( Math.ceil((gs/gsm) * 100) / 100 );
document.getElementById("gen_dev").innerHTML = gsd ;

const per1 = +document.getElementById('pers1').value;
const pys1 = ( Math.ceil((gsd + (psd*per1)) * 100) / 100 );
const per2 = +document.getElementById('pers2').value;
const pys2 = ( Math.ceil((gsd + (psd*per2)) * 100) / 100 );
document.getElementById("pay_sum1").innerHTML = pys1 ;
document.getElementById("pay_sum2").innerHTML = pys2 ;

}


// const x = document.getElementById('next');
// x.onclick = check;