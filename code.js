const button = document.getElementById('downloadPerson')
const cardsBox = document.querySelector('.cards')

button.addEventListener('click', () => {
  fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => {
      const userData = data.results[0]
      // Отримання даних з відповіді та їх відображення на сторінці
      const newCard = document.createElement('div')
      newCard.className = 'card'
      newCard.insertAdjacentHTML('beforeend',
      `
            <div class="card__photo">
              <img src="${userData.picture.large}" alt="${userData.name.first}'s Photo" />
            </div>
            <div class="card__name">${userData.name.first} ${userData.name.last}</div>
            <div class="card__city">City: ${userData.location.city}</div>
            <div class="card__phone">Phone: ${userData.phone}</div>
            <div class="card__cell">Cell: ${userData.cell}</div>
      ` )
      cardsBox.insertAdjacentElement('beforeend', newCard)
    })
    .catch((error) => console.log('Error fetching data:', error))
})
