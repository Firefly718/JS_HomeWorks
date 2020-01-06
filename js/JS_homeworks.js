(function() {
    'use strict';

    let logins = prompt('Введите ваш логин', "Логан");

    if (logins == "a") {
        let password = prompt('Введите ваш пароль, если вы админ', "* * * * *");
    } else {
        alert('Вход закрыт');
    }

    // if (passwrod == MainPassword) {
    //             alert("Добро пожаловать, господин Светлячок");
    //         }
})();