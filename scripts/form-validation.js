
document.getElementById('myForm').addEventListener('submit', function (e) {
	e.preventDefault();
	validateForm();
});


function clearAll() {
	const form= document.getElementById('myForm');
	form.reset()
}



function formValidator() {
	const mortgageType = document.querySelector('input[name="type_of_mortgage"]:checked');
	const mortgageAmount=document.getElementById('amount').value;
	const mortgageTerm=document.getElementById('term').value;
	const interestRate=document.getElementById('interest').value;
	const amount=document.getElementById('amount');
	const term=document.getElementById('term');
	const rate=document.getElementById('interest');
	const amountbg=document.getElementById('amountbg');
	const termbg=document.getElementById('termbg');
	const ratebg=document.getElementById('interestbg');

	const mortgageTypeError=document.getElementById('type-error');
	const mortgageAmountError=document.getElementById('amount-error');
	const mortgageTermError=document.getElementById('term-error');
	const interestRateError=document.getElementById('interest-error');

	mortgageTypeError.textContent=''
	mortgageAmountError.textContent=''
	mortgageTermError.textContent=''
	interestRateError.textContent=''

	let isValid =true;

	if (validator.isEmpty(mortgageAmount)) {
		mortgageAmountError.textContent = 'This field is required.';
		amount.style.borderColor='red'
		amountbg.style.backgroundColor='red'
		isValid = false;
	}
	if (validator.isEmpty(mortgageTerm)) {
		mortgageTermError.textContent = 'This field is required.';
		term.style.borderColor='red'
		termbg.style.backgroundColor='red'
		isValid = false;
	}
	if (validator.isEmpty(interestRate)) {
		interestRateError.textContent = 'This field is required.';
		rate.style.borderColor='red'
		ratebg.style.backgroundColor='red'
		isValid = false;
	}
	if (!mortgageType) {
		mortgageTypeError.textContent = 'Please select a mortgage type.';
		isValid = false;
	}

	if (isValid){
		calculator()
		
	}



}