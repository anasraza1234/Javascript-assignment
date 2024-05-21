function passwordGenerator(){
    let passValue = document.querySelector("#text");
    let copied = document.querySelector('#copied');
    let createPass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
    let password ='';
    for (let i = 0; i < 8; i++){
        let randomPass = Math.random() * createPass.length;
        let floorPass = Math.floor(randomPass);
        let makePass = password += createPass[floorPass];
        passValue.value = makePass;
        copied.innerText = "";
    }
}

function copyPass(){
    let passValue = document.querySelector("#text");
    let confirmPass = passValue.value;
    if(passValue.value != ''){
        navigator.clipboard.writeText(confirmPass);
        let copied = document.querySelector('#copied');
        copied.innerText = "Copied";
    }else{
        copied.innerText = "password is empty"
    }

    
}

