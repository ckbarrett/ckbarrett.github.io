const countdown = () => {
    const countDate = new Date('June 17, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = countDate - now;

    // Units
    const second = 1000; // 1000 ms
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate units
    const textDay = Math.floor(diff / day);
    const textHour = Math.floor((diff % day) / hour);
    const textMinute = Math.floor((diff % hour) / minute);
    const textSecond = Math.floor((diff % minute) / second);

    // Update on webpage
    document.querySelector(".days").innerText = textDay;
    document.querySelector(".hours").innerText = textHour;
    document.querySelector(".minutes").innerText = textMinute;
    document.querySelector(".seconds").innerText = textSecond;
};

setInterval(countdown, 1000);