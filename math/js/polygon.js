sr = 0;
sw = 0;

//expression test function
function check() {
    document.getElementById('checkb').disabled = true;
    var expr = document.getElementById('expression').value;
    document.getElementById("next").focus();
    if (expr == b) {
        expression.className = "result";
        hint.innerHTML = 'Yes, result is: ' + b + '<br> press Enter to continue';
        sr = sr + 1;
        document.getElementById('score').innerHTML = 'Right:' + sr + ' Wrong:' + sw;

    } else {
        expression.className = "result1";
        hint.innerHTML = 'No, result is: ' + b + '<br> press Enter to continue';
        sw = sw + 1;
        document.getElementById('score').innerHTML = 'Right:' + sr + ' Wrong:' + sw;

    }
}

window.onload = function() {



        function count_f() {
            document.getElementById('score').innerHTML = 'Right:' + sr + ' Wrong:' + sw;
            //function for generating random numbers
            document.getElementById('checkb').disabled = false;

            function randomRange(myMin, myMax) {
                return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
            }

            // range selection for random
            var arr = [1, 10];
            var arr2 = [1, 100];
            var arr3 = [1, 1000];
            var [r1, r2] = arr;
            var [r3, r4] = arr2;
            var [r5, r6] = arr3;
            if (document.getElementById('one').checked) {
                myRandom = randomRange(r1, r2);
                secondRandom = randomRange(r1, r2);
            } else if (document.getElementById('ten').checked) {
                myRandom = randomRange(r3, r4);
                secondRandom = randomRange(r3, r4);
            } else if (document.getElementById('hundreds').checked) {
                myRandom = randomRange(r5, r6);
                secondRandom = randomRange(r5, r6);
            }

            document.getElementById('expression').value = ""; //clearing the input field
            expression.className = "result2"; //clear the background of the input field
            next.innerHTML = "Next";
            document.getElementById("expression").focus();



            if (document.getElementById('plus').checked) {
                a = myRandom + '+' + secondRandom;
                b = myRandom + secondRandom;
            } else if (document.getElementById('minus').checked) {
                a = myRandom + '-' + secondRandom;
                b = myRandom - secondRandom;
            } else if (document.getElementById('multiple').checked) {
                a = myRandom + '*' + secondRandom;
                b = myRandom * secondRandom;
            } else if (document.getElementById('divide').checked) {
                a = myRandom + '/' + secondRandom;
                b = myRandom / secondRandom;
            }

            document.getElementById('target').innerHTML = a; // visible expression
            document.getElementById('hint').innerHTML = " Press Enter to check";


        } //count
        x = document.getElementById('next');
        x.onclick = count_f;



    } //onload