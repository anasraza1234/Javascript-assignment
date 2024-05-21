function todoApp(){

    let text = document.querySelector("#text");
    let para = document.querySelector("#para");
    let date = document.querySelector("#date");
    let error = document.querySelector("#error");
    if(text.value === ''){
        error.innerText = "Input field should not be empty";
    }else{
        error.innerText = '';
        let getDate = new Date().toLocaleString();
        para.innerText += `${text.value} \n`;
        date.innerText += `${getDate} \n`;
    }
    text.value = '';

}