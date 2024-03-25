let count = 0;

document.getElementById('add').onclick = function () {count++;

    document.getElementById('zero').innerHTML = count;

}


document.getElementById('reset').onclick = function () {count = 0;

    document.getElementById('zero').innerHTML = count;

}