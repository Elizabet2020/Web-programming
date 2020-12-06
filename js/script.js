var X;

function execute() {
    let errors = document.getElementById("error");
    chooseX();
    let y = $('#yValue').val().replace(",", ".");
    let r = $('#rValue').val().replace(",", ".");
    if(validateX() && validateY(y) && validateR(r)){
        for (let i = document.getElementById("result_table").getElementsByTagName('tr').length-1; i; i--) {
            document.getElementById('result_table').deleteRow(i);
        }
        errors.innerHTML = "";
        $.ajax("php/server.php?x="+X+"&y="+y+"&r="+r)
            .done(function (data) {
                $('#result_table').append(data);
            });
    } else {
        errors.innerHTML = "Вы не ввели данные/ввели неверные данные.";
    }
}

function chooseX() {
    let arrayX = document.getElementsByName("x");
    for (let i=0; i<arrayX.length; i++){
        arrayX[i].onclick = function () {
            $('#change .button_fixed').removeClass('button_fixed').addClass('button_no_fixed');
            $(this).removeClass('button_no_fixed').addClass('button_fixed');
            X = arrayX[i].value;
        };
    }
}

function validateX() {
    return !(X===undefined);
}

function validateY(yValue){
    let y = yValue;
    let error = document.getElementById("errorY");
    if (y==="") {
        error.innerHTML = "Введите Y";
    } else if (isNaN(Number(y))){
        error.innerHTML = "Y должен быть числом";
    } else if (y<=-5 || y>=5){
        error.innerHTML="Y должен быть от -5 до 5";
    } else {
        error.innerHTML="";
        return true;
    }
    return false;
}

function validateR(rValue) {
    let r = rValue;
    let error = document.getElementById("errorR");
    if (r===""){
        error.innerHTML = "Введите R";
    } else if (isNaN(Number(r))) {
        error.innerHTML = "R должен быть числом";
    } else if (r <= 1 || r >= 4) {
        error.innerHTML = "R должен быть от 1 до 4";
    } else {
        error.innerHTML = "";
        return true;
    }
    return false;
}
