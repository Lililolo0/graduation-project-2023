// кнопка CONFIRM для передачи текста из модального окна с формой в саму карточку

const confirmCardContentElement = document.querySelector('#confirmCardContent')
const inputTitleElement = document.querySelector('#inputTitleElement')
const inputContentElement = document.querySelector('#inputContentElement')
const addCardElement = document.querySelector('.col__cards')

confirmCardContentElement.addEventListener('click', handleClickCreateCard)

function handleCreateCard(title, content, date) {
  return `
<div class="card">
<div class="card-body">
  <h5 class="card-title">${title}</h5>
  <div class="date">${date}</div>
  <p class="card-text">${content}</p>
  <div class="card-user">User</div>
  <div class="card__footer">
    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
      <option selected>Select status</option>
      <option value="1">Todo</option>
      <option value="2">In progress</option>
      <option value="3">Done</option>
    </select>
    <button type="button" class="btn btn-primary">Edit</button>
    <button id="deleteCardElement" type="button" class="btn btn-danger" data-bs-toggle="modal"
      data-bs-target="#exampleModal">Remove</button>
  </div>
`
}

function handleClickCreateCard(event) {
  event.preventDefault()
  const title = inputTitleElement.value
  const content = inputContentElement.value

  const dateInstance = new Date()
  const date = dateInstance.toLocaleString()

  const addNewCard = handleCreateCard(title, content, date) // это текст из шаблона с введенными новыми данными

  function render(newListItem = '') {
    addCardElement.innerHTML += newListItem
  }
  render(addNewCard)

}





// кнопка для удаления карточки с модальным окном
// const deleteCardElement = document.querySelector('#deleteCardElement')

// function handleDeleteCard () {

// }

// deleteCardElement.addEventListener('click', )
