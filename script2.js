const bookForm = document.getElementById('book-form')
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// let myLibrary = []

// class Book {
//   constructor(title, author, pages, hasRead) {
//     ;(this.title = title),
//       (this.author = author),
//       (this.pages = pages),
//       (this.hasRead = hasRead)
//   }
// }

// Book.prototype.markAsRead = function () {
//   if (!this.hasRead) {
//     this.hasRead = true
//   } else {
//     this.hasRead = false
//   }
// }

// //collect data from the form
// const addBookToLibrary = (event) => {
//   event.preventDefault()
//   const bookTitle = document.getElementById('book-title').value
//   const bookAuthor = document.getElementById('book-author').value
//   const bookPages = document.getElementById('book-pages').value
//   const hasRead = document.getElementById('has-read').checked
//   //push the new book object into myLibrary
//   const newBook = new Book(bookTitle, bookAuthor, bookPages, hasRead)
//   myLibrary.push(newBook)
//   displayBooks()
// }

// //index is passed in from the displayBooks function below
// const throwBookAway = (index) => {
//   for (let book in myLibrary) {
//     if (book == index) {
//       myLibrary.splice(index, 1)
//     }
//   }
//   displayBooks()
// }

// //for each read button attach a event handler
// const attachReadHandler = () => {
//   const readBtns = document.querySelectorAll('.read-btn')
//   readBtns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//       changeReadStatus(e.target)
//     })
//   })
// }

// //from the event handler above check the read status
// const changeReadStatus = (target) => {
//   console.log(target)
//   for (let bookIndex in myLibrary) {
//     //if myLibrary books index matches the target index access the book objects prototype
//     if (bookIndex == target.dataset.index) {
//       myLibrary[bookIndex].markAsRead()
//     }
//     //if my libray book = true then my target textContent = read
//     if (myLibrary[bookIndex].hasRead && bookIndex == target.dataset.index) {
//       console.log('reading', target)
//       target.textContent = 'read'
//     }
//     if (!myLibrary[bookIndex].hasRead && bookIndex == target.dataset.index) {
//       console.log('not reading')
//       target.textContent = 'not read'
//     }
//   }
// }

// const displayBooks = () => {
//   const bookShelf = document.getElementById('book-cards')
//   bookShelf.innerHTML = myLibrary
//     .map(
//       (book, index) =>
//         `<li class="card">
//             <div class="flex">
//               <h2 class="book-title">${book.title}</h2>
//               <span id="trash" data-index=${index} onclick="throwBookAway(${index})" class="material-symbols-outlined trash-can">
//                   delete
//               </span>
//             </div>
//             <hr>
//             <p>By: <em>${book.author}</em></p>
//             <p>${book.pages}</p>
//             <button class="read-btn" data-index=${index}>${
//           book.hasRead ? 'reading' : 'not reading'
//         }</button>
//           </li>`
//     )
//     .join('')
//   attachReadHandler()
// }

// bookForm.addEventListener('submit', addBookToLibrary)

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

const openModal = (modal) => {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

const closeModal = (modal) => {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
