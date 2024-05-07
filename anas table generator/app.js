
function tablehere (){
let range = document.querySelector('#range')
let number = document.querySelector('#number')
let tablerange = document.querySelector('#tablerange');
let tablenumber = document.querySelector('#tablenumber');
let error = document.querySelector('#error');

// let table = document.querySelector('#table')
//  let range = prompt('range')
//  let number = prompt('number')
for (let i = 1; i <=range.value; i++){
     document.write(`${range.value} x ${i} = ${number.value * i} </br> `)
}

if (range.value === "" && number.value === "") {
    error.innerText = "username and  commnent empty"
}
else {
    tablerange.innerText = range.value;
    tablenumber.innerText = number.value;
}
}

