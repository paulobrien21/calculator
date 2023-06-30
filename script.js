function add(num1, num2){
	return num1 + num2;
}
function minus(num1, num2){
	return num1 - num2;
}
function multiply(num1, num2){
	return num1 * num2;
}
function divide(num1, num2){
	return num1/num2;
}
function operate(num1, num2, operator){
	let result;
	if(operator==='+'){
		result = add(num1,num2);
	}
	else if(operator==='-'){
		result = minus(num1,num2);
	}
	else if(operator==='x'){
		result = multiply(num1, num2)
	}
	else if(operator==='/'){
		result = divide(num1, num2)
	}
	if(result === Infinity | result === -Infinity){
		console.log('infinity check');
		result = 'boobies';
	}
	console.log(typeof result)
	return result;
}
//below function fixes screen overflow by rounding etc
function cleanResult(arg){
	console.log('enter clean function')
	if (arg.toString().length <= 11) {
    	return arg;
	}
	let cut = arg.toString().length - 11;
	arg = parseFloat(arg.toString().slice(0, -cut));
	if (Math.floor(arg) === arg | (/e/.test(arg.toString()))) {
		console.log('cut result ' + arg);
		return arg + '...'
  	}
	else{
		return arg;
	}
}

let screenText = document.getElementById('screen-text');
let num1=null;
let num2=null;
let operator;
let screenControl = 0; //this helps keep the text on screen when an operator is pressed, until the user starts typing the next number.

const calculator = document.getElementById('container');

calculator.addEventListener('click',function(event){
	if (event.target.closest('.numpad')){
		if(screenText.textContent.length > 10 && screenControl === 0)return;
		if(screenControl === 1){
			screenText.textContent = '';
			screenControl = 0;
		}
		if(event.target.textContent.includes('.') && screenText.textContent.includes('.'))return;
		const temp = event.target.textContent;
		screenText.textContent += temp;
	}
	if (event.target.closest('.operator')){
		if(screenText.textContent === '')return;
		if(num1 === null){
			num1 = parseFloat(screenText.textContent);
		}
		operator = event.target.textContent;
		screenControl = 1;
		console.log(operator);
		console.log(num1);
	}
	if(event.target.closest('.equals')){
		if(num1 === null)return;
		if(num2 === null){
			num2 = parseFloat(screenText.textContent);
			console.log(num1 + operator + num2);
			num1 = operate(num1, num2, operator);
			console.log('result: '+num1);
			screenText.textContent = cleanResult(num1);
			num2 = null;
			screenControl = 1;
		}
	}
	if(event.target.closest('.clear')){
		screenText.textContent = '';
		num1 = null;
		num2 = null;
		operator = null;
	}
	if(event.target.closest('.backspace')){
		screenText.textContent = screenText.textContent.slice(0,-1);
	}
	if(event.target.closest('.clear-entry')){
		screenText.textContent = '';
	}
})