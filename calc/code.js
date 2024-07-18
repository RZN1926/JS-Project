const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const result = document.getElementById('result')

const plus = e => {
    Num1Value = Number(num1.value),
    Num2Value = Number(num2.value)
    ResultValue = Num1Value + Num2Value
    result.textContent = ResultValue}

const minus = e => {
    Num1Value = Number(num1.value),
    Num2Value = Number(num2.value)
    ResultValue = Num1Value - Num2Value
    result.textContent = ResultValue}

const multiply = e => {
    Num1Value = Number(num1.value),
    Num2Value = Number(num2.value)
    ResultValue = Num1Value * Num2Value
    result.textContent = ResultValue}

const divide = e => {
    Num1Value = Number(num1.value),
    Num2Value = Number(num2.value)
    ResultValue = Num1Value / Num2Value
    result.textContent = ResultValue}

const PlusBtn = document.getElementById('plus')
PlusBtn.addEventListener('click', plus)

const MinusBtn = document.getElementById('minus')
MinusBtn.addEventListener('click', minus)

const MultiplyBtn = document.getElementById('multiply')
MultiplyBtn.addEventListener('click', multiply)

const DivideBtn = document.getElementById('divide')
DivideBtn.addEventListener('click', divide)
