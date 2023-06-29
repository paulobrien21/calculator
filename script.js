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
	if(operator==='+'){
		return add(num1,num2);
	}
	else if(operator==='-'){
		return minus(num1,num2);
	}
	else if(operator==='*'){
		return multiply(num1, num2)
	}
	else if(operator==='/'){
		return divide(num1, num2)
	}
}

let screenText = document.getElementById('screen-text');
let num1=null;
let num2=null;
let operator;

const calculator = document.getElementById('container');

calculator.addEventListener('click',function(event){
	if (event.target.closest('.numpad')){
		if(screenText.textContent.length > 12)return;
		if(num1 != null && screenText.textContent != '')screenText.textContent = '';
		if(event.target.textContent.includes('.') && screenText.textContent.includes('.'))return;
		const temp = event.target.textContent;
		screenText.textContent += temp;
	}
	if (event.target.closest('.operator')){
		if(screenText.textContent === '')return;
		if(num1 === null){
			num1 = parseFloat(screenText.textContent);
			operator = event.target.textContent;
			console.log(operator);
			console.log(num1);
			return;
		}
	}
	if(event.target.closest('.clear')){
		screenText.textContent = '';
	}
})