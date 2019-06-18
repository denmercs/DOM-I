let time = 0;
let started = 0;

function start() {
    if(started === 0) {
        started = 1;
        increment();
        document.getElementById("start").innerHTML = "Pause";
    } else {
        started = 0;
        document.getElementById("start").innerHTML = "Resume";
    }
}

function reset() {
    started = 0;
    time = 0;
    document.getElementById("start").innerHTML = "Start";
    increment();
}

function increment() {
    if(started === 1) {
        setTimeout(function() {
            time++;
    
            let sec = Math.floor(time / 10);
            let tenth = time % 10;

            if(sec < 10) {
                sec = "0" + sec;
            } else if (sec % 60 === 0) {
                sec = 0;
            }

            if(tenth < 10) {
                tenth = "0" + tenth;
            }
    
            document.getElementById("seconds").innerHTML = sec;
            document.getElementById("milli").innerHTML = tenth;
            increment();

            if(sec === 10) {
                started = 0;
                document.getElementById("seconds").style.color = "red";
                document.getElementById("colon").style.color = "red";
                document.getElementById("milli").style.color = "red";

            }
        }, 100);
    }
}