let flagStars = 0
let contador = 0
function createTableStars1 () {
  if (!flagStars) {
    flagStars++
    const main = document.getElementById('main')
    const div = document.createElement('div')
    const span = document.createElement('span')
    const table = document.createElement('table')

    span.setAttribute('id','contador')
    div.appendChild(span)
    for (let i = 0; i <= 10; i++) {
      const linha = document.createElement('tr')
      for (let i = 0; i <= 10; i++) {
        const coluna = document.createElement('td')
        const imagem = document.createElement('img')
        imagem.setAttribute(
          'src',
          'https://baldochi.unifei.edu.br/COM222/stars/star_off.gif'
        )
        imagem.addEventListener('click', lightItUp, true)
        coluna.appendChild(imagem)
        linha.appendChild(coluna)
      }
      table.appendChild(linha)
    }
    div.appendChild(table)
    main.appendChild(div)
  }
}

function lightItUp (img) {
  const atributo = img.target.getAttribute('src')
  if (atributo === 'https://baldochi.unifei.edu.br/COM222/stars/star_on.gif') {
    lightDown(img)
  } else {
    contador++
    const count = document.getElementById('contador')
    count.innerText = String(contador)
    img.target.setAttribute(
      'src',
      'https://baldochi.unifei.edu.br/COM222/stars/star_on.gif'
    )
  }
}
function lightDown (img) {
  contador--
  const count = document.getElementById('contador')
  count.innerText = String(contador)
  img.target.setAttribute(
    'src',
    'https://baldochi.unifei.edu.br/COM222/stars/star_off.gif'
  )
}