function eiduladha(){
    let show = document.querySelector("#show");
    let eidDate = new Date("17 june 2024");
    let todayDate = new Date ();
    let calculation = eidDate-todayDate;
    let sec = calculation / 1000;
    // console.log(sec)
    let minutes = sec / 60;
    // console.log(minutes)
    let hours = minutes / 60;
    // console.log(hours)
    let day = hours / 24;
    // console.log(day)
    if (day === 0 && hours === 0 && minutes === 0 && sec === 0){
        show.innerHTML = `<b>Eid<span>-ul-</span>Adha<span><br>Mubarak</span></b>`
        
    }else{
        show.innerHTML = `<b>${Math.floor(day)} Days & ${Math.floor(hours)} hours & ${Math.floor(minutes)} minutes & ${Math.floor(sec,)} second remaining in Eid-ul-adha 2024<b/>`
        // show.innerHTML = `<h1>${Math.floor(hours)} Remaining hours in Eid-ul-adha 2024</h1>`
        // show.innerHTML = `<h1>${Math.floor(minutes)} Remaining minutes in Eid-ul-adha 2024</h1>`
        // show.innerHTML = `<h1>${Math.floor(sec,)} Remaining second in Eid-ul-adha 2024</h1>`
    }
}
eiduladha()