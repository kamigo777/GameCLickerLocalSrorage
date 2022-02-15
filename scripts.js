window.onload = function(){
    function a(){
        let div3 = document.querySelector('.some3');
        div3.innerHTML = 'этот текст сгенерирован самой обычной функциев названой а';
    }
    a()
    let div = document.querySelector('.some');/*присвоили переменной див обьект дома с класом сом*/

    div.innerHTML = 'Див всеравно будет работать даже если ' +
        'сврипт обьявлен перед тегом бади';/*меняем обьекту дом свойство иннер ащтиэмэл*/
    ( function (){
        let div2 = document.getElementById('some2');
        div2.innerHTML = 'это текст безымянной функции что сама себя вызывет'
    })()
    let b = function(){
        let div4 = document.querySelector('.some4');
        div4.innerHTML = 'это функциия что присвоенная переменной b'
    }
    b()
    function SomeName() {
        let div5 = document.querySelector('.some5');
        div5.innerHTML = 'сдесь будет текст который вызывается двумя способами'
    }
    SomeName();
    //window.onload = SomeName;
}


    window.addEventListener('load', function(){
        let div6 = document.querySelector('.some6');
        div6.innerHTML = 'сдесь функция вложенная в функцию что выполняется по событию загрузки'
    })



