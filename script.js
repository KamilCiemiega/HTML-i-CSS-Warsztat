// let product = document.getElementById('product');

//  function sprawdz (){
//     if (product.value < 0 ) {
//         product.setCustomValidity('wprowadz liczbe dodatnia');
//     } else{

//     }
// }

const dropDown = $('.text');
const text = $('.text')
const form = $(".form");
const inputTypeText = $("input[type=text]").eq(0);
const formContainer = $(".form-container");
const pElement = $('.dropDown p')
const arrowUp = $('.fa-arrow-circle-up');
const arrowDown = $('.fa-arrow-circle-down');

// input text/////
arrowUp.hide();
dropDown.on("click", function () {
    $(this).next().slideToggle(1000);
    arrowUp.slideToggle();
    arrowDown.slideToggle();
});

const package = $("#package");
const calcDiv3 = $('.calcDiv3');
const calcDivP3 = calcDiv3.find('p');

pElement.on('click', function () {
    const pText = $(this).text();
    inputTypeText.attr('placeholder', pText);
    if (pText == 'Basic') {
        calcDivContainer.css('display', 'block');
        calcDiv3.css('display', 'flex');
        calcDivP3.eq(1).text('Basic');
        calcDivP3.eq(2).text('$20');
    }
    else if (pText == "Premium") {
        calcDivContainer.css('display', 'block');
        calcDiv3.css('display', 'flex');
        calcDivP3.eq(1).text('Premium');
        calcDivP3.eq(2).text('$60');
    }
    else if (pText == 'Professional') {
        calcDivContainer.css('display', 'block');
        calcDiv3.css('display', 'flex');
        calcDivP3.eq(1).text('Professional');
        calcDivP3.eq(2).text('$120');
    }
    totalCounter()
});

// input type///////
const product = $("#product");
const calcDiv2 = $('.calcDiv2');
const calcDivP2 = calcDiv2.find('p');

product.on("change", function () {
    if(product.val() < 0){
        alert('Podaj liczbę większą od 0')
    }else{
    calcDivContainer.css('display', 'block');
    calcDiv2.css('display', 'flex');
    const counter = product.val() * 0.5;
    calcDivP2.eq(1).text(`${product.val()} * $0.5`);
    calcDivP2.eq(2).text(`$${counter}`);

    totalCounter();
    }
});

const inputNumber = $("#estimated");
const calcDiv = $('.calcDiv');
const calcDivP = calcDiv.find('p');
const calcDivContainer = $('.calcDivContainer')

inputNumber.on("change", function () {
    if(inputNumber.val() < 0)
    {
        alert('podaj liczbę większą od 0')
    }else{
    calcDivContainer.css('display', 'block');
    calcDiv.css('display', 'flex');
    const counter = inputNumber.val() * 0.25;
    calcDivP.eq(1).text(`${inputNumber.val()} * $0.25`);
    calcDivP.eq(2).text(`$${counter}`);

    totalCounter();
    }

});
// checboxes//////////
const myCheck = $('#myCheck');
const calcDiv4 = $('.calcDiv4');

myCheck.change(function () {
    if ($(this).prop('checked')) {
        calcDivContainer.css('display', 'block');
        calcDiv4.css('display', 'flex');
    } else {
        calcDiv4.hide();
    }
    totalCounter();
});

const myCheckSecond = $('#myCheckSecond');
const calcDiv5 = $('.calcDiv5');

myCheckSecond.change(function () {
    if ($(this).prop('checked')) {
        calcDivContainer.css('display', 'block');
        calcDiv5.css('display', 'flex');

    } else {
        calcDiv5.hide();
    }
    totalCounter();
});

// sumCounter///
const total = $('.total p').eq(1);

function totalCounter() {
    const counter = product.val() * 0.5;
    const counter2 = inputNumber.val() * 0.25;
    if (myCheckSecond.prop('checked') && myCheck.prop('checked') && package.attr('placeholder') == 'Basic') {
        total.text(`$${counter + counter2 + 60}`)
    }
    else if (myCheckSecond.prop('checked') && myCheck.prop('checked') && package.attr('placeholder') == 'Premium') {
        total.text(`$${counter + counter2 + 100}`)
    }
    else if (myCheckSecond.prop('checked') && myCheck.prop('checked') && package.attr('placeholder') == 'Professional') {
        total.text(`$${counter + counter2 + 160}`)
    }
    else if (myCheckSecond.prop('checked') && myCheck.prop('checked')) {
        total.text(`$${counter + counter2 + 40}`);
    }
    else if (myCheckSecond.prop('checked') && package.attr('placeholder') == 'Basic') {
        total.text(`$${counter + counter2 + 25}`);
    }
    else if (myCheckSecond.prop('checked') && package.attr('placeholder') == 'Premium') {
        total.text(`$${counter + counter2 + 65}`);
    }
    else if (myCheckSecond.prop('checked') && package.attr('placeholder') == 'Professional') {
        total.text(`$${counter + counter2 + 125}`);
    }
    else if (myCheck.prop('checked') && package.attr('placeholder') == 'Basic') {
        total.text(`$${counter + counter2 + 55}`);
    }
    else if (myCheck.prop('checked') && package.attr('placeholder') == 'Premium') {
        total.text(`$${counter + counter2 + 95}`);
    }
    else if (myCheck.prop('checked') && package.attr('placeholder') == 'Professional') {
        total.text(`$${counter + counter2 + 155}`);
    }else if (myCheck.prop('checked')) {
        total.text(`$${counter + counter2 + 35}`);
    } 
    else if (package.attr('placeholder') == 'Basic') {
        total.text(`$${counter + counter2 + 20}`);
    }else if (package.attr('placeholder') == 'Premium') {
        total.text(`$${counter + counter2 + 60}`);
    }else if (package.attr('placeholder') == 'Professional') {
        total.text(`$${counter + counter2 + 120}`);
    }
     else if (myCheckSecond.prop('checked')) {
        total.text(`$${counter + counter2 + 5}`);
    } else {
        total.text(`$${counter + counter2}`)
    }
}


