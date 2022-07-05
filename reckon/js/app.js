const date = new Date().toLocaleDateString();
document.getElementById("current_date").innerHTML = date;

function switches() {
    const x = document.querySelectorAll(".focus");
    for (let i = 0; i < x.length; i++) {
        x[i].classList.toggle('general-mod');
    }
    const y = document.querySelectorAll(".delete-input");
    for (let i = 0; i < y.length; i++) {
        y[i].classList.toggle('add-input');
    }

    const b = document.getElementsByName('hide');
    for (let i = 0; i < b.length; i++) {
        b[i].toggleAttribute("disabled");
        // b[i].disabled = true;
    }


}
document.getElementById('period').addEventListener('click', switches);

document.getElementById("personsTotal").innerHTML = "Очік";

function checkAndRepl() {
    const b = document.getElementsByTagName('input');

    function repl() {

        for (let i = 0; i < b.length; i++) {

            b[i].value = b[i].value.replace(/,/g, '.');
        }
    }
    for (let i = 0; i < b.length; i++) {
        document.getElementsByTagName('input')[i].addEventListener("change", repl);
    }
}

checkAndRepl();

function check() {
    const cwt = +document.getElementById('cwTariff').value;
    const cwc = +document.getElementById('cwCur').value;
    const cwp = +document.getElementById('cwPre').value;
    const cwu = (Math.round((cwc - cwp) * 10) / 10);
    document.getElementById("cwUsage").innerHTML = cwu;
    const cws = cwu * cwt;
    const cwss = (Math.ceil(cws * 100) / 100);
    document.getElementById("cwSum").innerHTML = cwss;

    const hwt = +document.getElementById('hwTariff').value;
    const hwc = +document.getElementById('hwCur').value;
    const hwp = +document.getElementById('hwPre').value;
    const hwu = (Math.round((hwc - hwp) * 10) / 10);
    document.getElementById("hwUsage").innerHTML = hwu;
    const hws = hwu * hwt;
    const hwss = (Math.ceil(hws * 100) / 100);
    document.getElementById("hwSum").innerHTML = hwss;

    const owt = +document.getElementById('owTariff').value;
    const owc = +document.getElementById('owCur').value;
    const owp = +document.getElementById('owPre').value;
    const owu = (Math.round((owc - owp) * 10) / 10);
    document.getElementById("owUsage").innerHTML = owu;
    const ows = owu * owt;
    const owss = (Math.ceil(ows * 100) / 100);
    document.getElementById("owSum").innerHTML = owss;

    const h = +document.getElementById('heat').value;

    document.getElementById("heats").innerHTML = h;

    const ct1 = +document.getElementById('cont1').value;
    const ct2 = +document.getElementById('cont2').value;
    const cts = (Math.ceil((ct1 + ct2) * 100) / 100);
    document.getElementById("conts").innerHTML = cts;

    const e = +document.getElementById('elec').value;
    document.getElementById("elecs").innerHTML = e;

    const g = +document.getElementById('gaz').value;
    document.getElementById("gazs").innerHTML = g;

    const k = +document.getElementById('kom').value;
    document.getElementById("koms").innerHTML = k;

    const ex = +document.getElementById('export').value;
    document.getElementById("exports").innerHTML = ex;

    const ph = +document.getElementById('phone').value;
    document.getElementById("phones").innerHTML = ph;

    const ed = +document.getElementById('edi').value;
    document.getElementById("edis").innerHTML = ed;


    const tot = (((cwss * 100 + hwss * 100 + owss * 100 + e * 100 + g * 100) - ed * 100) + h * 100 + cts * 100 + k * 100 + ex * 100 + ph * 100) / 100;

    document.getElementById("total").innerHTML = tot;

    const ps = ((cwss * 100 + hwss * 100 + owss * 100 + e * 100 + g * 100) - ed * 100) / 100;
    document.getElementById("personSum").innerHTML = ps;
    const totPers = +document.getElementById('totalPerson').value;


    const gs = (h * 100 + cts * 100 + k * 100 + ex * 100 + ph * 100) / 100;
    document.getElementById("generalSum").innerHTML = gs;
    const gd = +document.getElementById('genDevi').value;
    const gsd = (Math.ceil((gs / gd) * 100) / 100);
    document.getElementById("genSumDevi").innerHTML = gsd;

    const grp1 = +document.getElementById('group1').value;
    const grp2 = +document.getElementById('group2').value;



    if (document.getElementById('period').checked) {

        const pall = +document.getElementById('periodAll').value;
        const pab = +document.getElementById('periodAbsence').value; // period absence
        document.getElementById("copyPeriodAll").innerHTML = pall;

        const x = document.querySelectorAll(".period-mod");
        for (let i = 0; i < x.length; i++) {
            x[i].classList.add('general-mod');
        }

        const averSumPd = (Math.ceil((ps / pall) * 100) / 100); // average sum for all period
        document.getElementById("persAvrg").innerHTML = averSumPd;
        const dap = pall - pab; // dl -day all pesons present
        const avSumPdAbs = (Math.ceil((pab * averSumPd) * 100) / 100); // average sum for period absence
        const avSumPdTot = (Math.ceil((dap * averSumPd) * 100) / 100); // average sum for period total
        const absPers = +document.getElementById('absentPerson').value;
        const pl = totPers - absPers; // person left
        document.getElementById("leftPersons").innerHTML = `за ${  pab  } дні ${avSumPdAbs  } поділити на ${  pl  } осіб`;

        const devSumPerLef = (Math.ceil((avSumPdAbs / pl) * 100) / 100); // the average sum for the period of absence divided by the person left
        document.getElementById("devLeftPersons").innerHTML = devSumPerLef;
        document.getElementById("personsTotal").innerHTML = `за ${  dap  } дні ${avSumPdTot  } поділити на ${  totPers  } осіб`;
        const devSumPerAll = (Math.ceil((avSumPdTot / totPers) * 100) / 100); // the average sum for the period of total divided by the all persons
        document.getElementById("devTotPerSum").innerHTML = devSumPerAll;

        const grabs1 = +document.getElementById('groupAbs1').value;
        const grpleft1 = grp1 - grabs1;
        let pys1;
        if (grpleft1 > 0) {
            pys1 = (Math.ceil((gsd + (devSumPerAll * grp1) + (devSumPerLef * grpleft1)) * 100) / 100);
        } else if (grpleft1 === 0) {
            pys1 = (Math.ceil((gsd + (devSumPerAll * grp1)) * 100) / 100);
        }
        const grabs2 = +document.getElementById('groupAbs2').value;
        const grpleft2 = grp2 - grabs2;
        let pys2;
        if (grpleft2 > 0) {
            pys2 = (Math.ceil((gsd + (devSumPerAll * grp2) + (devSumPerLef * grpleft2)) * 100) / 100);
        } else if (grpleft2 === 0) {
            pys2 = (Math.ceil((gsd + (devSumPerAll * grp2)) * 100) / 100);
        }
        document.getElementById("paySum1").innerHTML = pys1;
        document.getElementById("paySum2").innerHTML = pys2;

    } else {
        const psd = (Math.ceil((ps / totPers) * 100) / 100);
        const x = document.querySelectorAll(".period-mod");
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove('general-mod');
        }
        document.getElementById("personsTotal").innerHTML = `Поділити на ${  totPers}`;
        document.getElementById("devTotPerSum").innerHTML = psd;

        const pys1 = (Math.ceil((gsd + (psd * grp1)) * 100) / 100);
        const pys2 = (Math.ceil((gsd + (psd * grp2)) * 100) / 100);
        document.getElementById("paySum1").innerHTML = pys1;
        document.getElementById("paySum2").innerHTML = pys2;
    }


}
const form = document.getElementById('form')
form.addEventListener('submit', event => {
    // submit event detected

    check();

    event.preventDefault()
})

function mail() {
    const x = document.querySelectorAll(".contact");
    for (let i = 0; i < x.length; i++) {
        x[i].classList.toggle('visible');
    }
}

document.getElementById('toggle').addEventListener('click', mail);