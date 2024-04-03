function changeMenu() {
  const menuDiv = document.querySelectorAll('.row')[0]

  const menuDivButtonGroup = menuDiv.querySelector('.btn-group-vertical')

  menuDivButtonGroup.className = 'btn-group'

  const menuDivButtonGroupButtons = menuDivButtonGroup.querySelectorAll('button')

  menuDivButtonGroupButtons.forEach((button, index) => {
    if (index !== 0) {
      button.style.marginLeft = '4px'
    }

    button.style.borderRadius = '4px'
  })

}

function changeHeader() {
  const headerDiv = document.querySelectorAll('.row')[1]

  const newBgColor = getComputedStyle(document.documentElement).getPropertyValue('--gray');

  const headerDivContent = headerDiv.querySelector('.jumbotron')

  headerDivContent.style.background = newBgColor
  headerDivContent.style.color = 'white'
  headerDivContent.style.textAlign = 'right'
  headerDivContent.style.backgroundColor = newBgColor

  const headerDivLearnMoreButton = headerDiv.querySelector('.btn.btn-primary.btn-lg')

  headerDivLearnMoreButton.className = 'btn btn-success btn-lg'
}


function changeCards() {

  const cardContainer = document.querySelectorAll('.col-lg-3')

  const parent = cardContainer[0].parentNode

  const btn = cardContainer[0].querySelector('.btn.btn-primary')

  btn.className = 'btn btn-success'

  parent.insertBefore(cardContainer[3], cardContainer[1]);
  parent.insertBefore(cardContainer[1], cardContainer[2].nextSibling);
  parent.insertBefore(cardContainer[0], cardContainer[3].nextSibling);
}


function changeList() {
  const ul = document.querySelector(".list-group");

  const firstLi = document.querySelector('.list-group-item.active');

  firstLi.className = 'list-group-item'

  const fourthLi = document.createElement('li')
  fourthLi.className = 'list-group-item active'
  fourthLi.textContent = 'Quarto item'

  ul.appendChild(fourthLi)

  const fifthLi = document.createElement('li')
  fifthLi.className = 'list-group-item'
  fifthLi.textContent = 'Quinto item'

  ul.appendChild(fifthLi)
}

changeList()
changeCards()
changeHeader()
changeMenu()