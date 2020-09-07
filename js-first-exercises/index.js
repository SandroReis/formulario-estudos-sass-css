function convertCelsiusToFarenheit (celsius) {
  const farenheit = +celsius
    ? `${(+celsius * 9) / 5 + 32} °F`
    : 'Por favor digite um numero'
  return farenheit
}

function countSubString (str, substr) {
  const regexPattern = new RegExp(substr, 'g')
  const matches = str.match(regexPattern || [])
  return (matches && matches.length) || 0
}

function getBiggestWord (str) {
  const arrayOfStr = str.split(' ')
  const biggestWord = arrayOfStr.reduce((bigWorld, word) => {
    bigWorld = word.length > bigWorld.length ? word : bigWorld
    return bigWorld
  })
  return biggestWord
}

function handleConvertToFarenheit () {
  const inputToConvert = document.getElementById('convert-to-farenheit').value
  const farenheitValue = convertCelsiusToFarenheit(inputToConvert)
  document.getElementById(
    'convert-to-farenheit-span'
  ).innerHTML = farenheitValue
}

function handleHowManySubstrings () {
  const stringToCount = document.getElementById('string-of-second-exercise')
    .value
  const subStringToCount = document.getElementById(
    'substring-of-second-exercise'
  ).value
  const count = countSubString(stringToCount, subStringToCount)
  document.getElementById('second-exercise-span').innerHTML = count
}

function handleTheBiggestString () {
  const stringToSearch = document.getElementById('string-of-third-exercise')
    .value
  const biggestWord = getBiggestWord(stringToSearch)
  document.getElementById(
    'third-exercise-span'
  ).innerHTML = `Maior palavra: ${biggestWord} ${biggestWord.length} caracteres`
}
function sumNumbersInArray (numbers) {
  let numbersToConvert = numbers.replace(/\[/g, '')
  numbersToConvert = numbersToConvert.replace(/\]/g, '')
  const arrayOfNumbers = numbersToConvert.split(',')
  const sum = arrayOfNumbers.reduce((total, number) => {
    total = +number ? +(+total) + +number : +total
    return total
  }, 0)

  return sum
}

function handleTheArraysOfNumbers () {
  const stringToSearch = document.getElementById('string-of-fourth-exercise')
    .value
  const sum = sumNumbersInArray(stringToSearch)
  document.getElementById('fourth-exercise-span').innerHTML = sum
}

function formatDate ({ inputDate, inputHour }) {
  const arrDate = inputDate.split('/')
  const arrHour = inputHour.split(':')
  const bornDate = new Date(
    arrDate[2],
    arrDate[1] - 1,
    arrDate[0],
    arrHour[0],
    arrHour[1]
  )
  return bornDate
}
function formatFinalDate (milliseconds) {
  const seconds = (milliseconds / 1000).toFixed(1)
  const minutes = (milliseconds / (1000 * 60)).toFixed(1)
  const hours = (milliseconds / (1000 * 60 * 60)).toFixed(1)
  const days = (milliseconds / (1000 * 60 * 60 * 24)).toFixed(1)
  const years = (milliseconds / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1)

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    years: years
  }
}

function handleBornDate () {
  const inputDate = document.getElementById('born-date').value
  const inputHour = document.getElementById('born-date-hour').value

  const bornDate = formatDate({ inputDate, inputHour })
  const ageInMilliseconds = Date.now() - bornDate
  const finalDate = formatFinalDate(ageInMilliseconds)
  document.getElementById(
    'fiveth-exercise-span'
  ).innerHTML = `Parabéns, você viveu <br>${finalDate.days} dias.<br>${finalDate.hours} horas
  <br>${finalDate.minutes} minutos <br>${finalDate.seconds} segundos e <br>${finalDate.years} anos`
}

function formatTable (num1, num2) {
  document.getElementById('calc-soma').innerHTML = `${num1} + ${num2}`
  document.getElementById('calc-soma-result').innerHTML = +num1 + +num2
  document.getElementById('calc-subtrai').innerHTML = `${num1} - ${num2}`
  document.getElementById('calc-subtrai-result').innerHTML = +num1 - +num2
  document.getElementById('calc-multiplica').innerHTML = `${num1} * ${num2}`
  document.getElementById('calc-multiplica-result').innerHTML = +num1 * +num2
  document.getElementById('calc-divide').innerHTML = `${num1} / ${num2}`
  document.getElementById('calc-divide-result').innerHTML = +num1 / +num2
  document.getElementById('calc-table').classList.remove('to-hide')
}

function handleTable () {
  const primaryNumber = document.getElementById('number-calc').value
  const secondNumber = document.getElementById('second-number-calc').value

  formatTable(primaryNumber, secondNumber)
}

function bottomSalary (salary) {
  return +salary <= 280
}
function midBottomSalary (salary) {
  return +salary > 280 && +salary <= 700
}

function midSalary (salary) {
  return +salary > 700 && +salary <= 1500
}
function highSalary (salary) {
  return +salary > 1500
}

function handleSalaryAdjust () {
  const salary = document.getElementById('salary').value
  const adjustedSalary = bottomSalary(salary)
    ? salary * 1.2
    : midBottomSalary(salary)
    ? salary * 1.15
    : midSalary(salary)
    ? salary * 1.1
    : highSalary(salary)
    ? salary * 1.05
    : 'Valor invalido'

  document.getElementById('seventh-exercise-span').innerHTML = adjustedSalary
}

function handleShortDate () {
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  const date = document.getElementById('short-date').value
  const arrDate = date.split('/')
  document.getElementById('eigth-exercise-span').innerHTML = `${arrDate[0]} de ${
    meses[+arrDate[1] - 1]
  } de ${arrDate[2]}`
}

const GLOBALARRAY = []
let flagAdd = 0
function handleMedia () {
  const numberToAdd = document.getElementById('input-ex-9').value
  if(flagAdd) {
    alert('Recarregue a pagina para recomeçar')
    document.getElementById('input-ex-9').value = ''
    return
  }
  if(numberToAdd == 0) {
    flagAdd = 1
    document.getElementById('input-ex-9').value = ''
    return
  }
  GLOBALARRAY.push(numberToAdd)
  let media = 0

  for(let item of GLOBALARRAY) {
    media = media + +item
  }
  console.log('media', media)
  console.log('GLOBALARRAY.length', GLOBALARRAY.length)
  document.getElementById('array-of-numbers').innerHTML = JSON.stringify(GLOBALARRAY)
  document.getElementById('nineth-exercise-span').innerHTML = `
  Média: ${media / GLOBALARRAY.length}
`
  document.getElementById('input-ex-9').value = ''
}

const GLOBALPERSONARRAY = []
function handleTallPerson() {
  const name = document.getElementById('input-nome-pessoa').value
  const heigth = document.getElementById('input-altura-pessoa').value
  GLOBALPERSONARRAY.push({name,heigth})

  let tallPerson = {name: '', heigth: ''}
  for (const iterator of GLOBALPERSONARRAY) {
    const tallPersonHeigth = tallPerson.heigth.replace(/[^0-9]+/g,'')
    const iteratorHeigth = iterator.heigth.replace(/[^0-9]+/g,'')
    tallPerson = tallPersonHeigth > iteratorHeigth ? tallPerson : iterator
  }

 
  document.getElementById('input-ex-9').value = ''
  document.getElementById('tenth-exercise-span').innerHTML = `A pessoa mais alta cadastrada é ${tallPerson.name}: ${tallPerson.heigth}m`
}