function calculator() {

	const mortgageType = document.querySelector('input[name="type_of_mortgage"]:checked');
	const mortgageAmount=document.getElementById('amount').value;
	const mortgageTerm=document.getElementById('term').value;
	const interestRate=document.getElementById('interest').value;
	const mRepayment=document.getElementById('monthly_repayment');
	const tRepayment=document.getElementById('total_repayment');

	if (mortgageType.value==='repayment'){
		const loanAmount=Number(mortgageAmount)
		const years=Number(mortgageTerm)
		const interest=Number(interestRate)/100
		const x=interest/12
		const y=-12*years
		const mortgage=(loanAmount*x)/(1-(1+x)**y)
		const monthlyMortgage=mortgage.toFixed(2)
		const yearly=mortgage*12*years
		const totalMortgage=yearly.toFixed(2)
		console.log(monthlyMortgage,totalMortgage)
		mRepayment.textContent = `${monthlyMortgage}`;
		tRepayment.textContent= `${totalMortgage}`

		

}
else{
	const interestonly=(Number(mortgageAmount)*Number(mortgageTerm)*Number(interestRate))/100
	mRepayment.textContent=''
	tRepayment.textContent=interestonly
	

}
}