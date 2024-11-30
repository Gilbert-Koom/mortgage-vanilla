function calculator() {

	const mortgageType = document.querySelector('input[name="type_of_mortgage"]:checked');
	const mortgageAmount=document.getElementById('amount').value;
	const mortgageTerm=document.getElementById('term').value;
	const interestRate=document.getElementById('interest').value;
	const mRepayment=document.getElementById('monthly_repayment');
	const tRepayment=document.getElementById('total_repayment');
	const line=document.getElementById('hr');
	const mon=document.getElementById('mon');

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
		tRepayment.textContent= `${totalMortgage}`;
		mRepayment.scrollIntoView();
		const empty=document.getElementById('empty');
		const completed=document.getElementById('completed');
		empty.style.display = "none";
		completed.style.display='initial'

		

}
else{
	const interestonly=(Number(mortgageAmount)*Number(mortgageTerm)*Number(interestRate))/100
	mRepayment.style.display='none'
	mon.textContent=''
	line.style.display='none'
	tRepayment.textContent=interestonly
	tRepayment.scrollIntoView()

}
}