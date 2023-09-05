function calculatorMaturityAmount(){
    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate =parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    const maturityAmount = principle + (principle*interestRate*tenure)/100;

    
    document.getElementById('result').innerHTML = 'Maturity Amount :' + maturityAmount;

}
document.getElementById('calculteBtn').addEventListener('click',calculatorMaturityAmount);