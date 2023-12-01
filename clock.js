let hrsTime = document.getElementById('hrs');
let minTime = document.getElementById('min');
let secTime = document.getElementById('sec');

setInterval(() => {
    let currentTime = new Date();

    hrsTime.innerHTML = (currentTime.getHours()<10?'0':'') + currentTime.getHours();
    minTime.innerHTML = (currentTime.getMinutes()<10?'0': '') + currentTime.getMinutes();
    secTime.innerHTML = (currentTime.getSeconds()<10?'0': '') + currentTime.getSeconds();
},1000)
