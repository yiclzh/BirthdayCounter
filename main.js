$(document).ready(function() {
    $(".button").click(function() {
        const result = document.getElementById("result");

        const today = new Date();


        var m = document.getElementById("month");
        const month = m.value;
        var d = document.getElementById("day");
        const bDay = d.value;
        const birthday = new Date(month + "/" + bDay + "/" + today.getFullYear());
        console.log(today.getFullYear());

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24; //milliseconds
        let timerId

        function countDown() {
            const today = new Date();
            const timeSpan = birthday - today;
            if (timeSpan <= -day) {
                result.innerHTML = "Hope you had a good birthday!";
                clearInterval(timerId);
                return;
            } else if (timeSpan <= 0) {
                result.innerHTML = "Happy Birthday";
                clearInterval(timerId);
                return;
            }    

            const days = Math.floor(timeSpan / day);
            const hours = Math.floor((timeSpan % day) / hour);
            const minutes = Math.floor((timeSpan % hour) / minute);
            const seconds = Math.floor((timeSpan % minute) / second);

            result.innerHTML = days + 'days' + hours + 'hours' + minutes + 'min' + seconds + "seconds";
        }
        timerId = setInterval(countDown, second);
    });

})

