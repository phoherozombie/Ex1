function calculateTax(amount, taxRate){
    return amount*taxRate;

}
const taxRate={
    usa:0.1,
    canada:0.15,
    germany:0.2
}
const usaTax= calculateTax(100,taxRate.usa);
const canadaTax= calculateTax(100,taxRate.canada);
const germanyTax= calculateTax(100,taxRate.germany);
console.log(usaTax,canadaTax,germanyTax);