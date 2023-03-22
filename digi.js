//var session = ' '
//if (hours > 12) {
//  session = 'AM';
//} else {
//  session = 'PM';
//}

//document.write(
//  hour + ':' + minutes + ':' + sec + ':' + '  ' + session);
/*setInterval(time(), 1000)

function time() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var sec = date.getSeconds();
    var tim = ' ' + '    ' + hour + ': ' + minutes + ':' + sec;
    document.getElementById('watch').innerHTML = tim;
    return;
};;*/
setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" +
        min + ":" + sec + am_pm;

    document.getElementById("clock")
        .innerHTML = currentTime;
}
showTime();