class Book {
  constructor(id, name, author, stock, image) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.stock = stock;
    this.initialStock = stock;
    this.image = image;
    this.addedAt = new Date().toLocaleString(); 
  }

  issueBook() {
    if (this.stock > 0) {
      this.stock--;
    }
  }

  returnBook() {
    if (this.stock < this.initialStock) {
      this.stock++;
    }
  }
}

class Library {
  constructor(containerId) {
    this.books = [];
    this.container = document.getElementById(containerId);
  }

  addBook(book) {
    this.books.push(book);
    this.render();
  }

  issueBook(id) {
    const book = this.books.find(b => b.id === id);
    if (book) {
      book.issueBook();
      this.render();
    }
  }

  returnBook(id) {
    const book = this.books.find(b => b.id === id);
    if (book) {
      book.returnBook();
      this.render();
    }
  }

  deleteBook(id) {
  const book = this.books.find(b => b.id === id);

  if (!book) return;

  const confirmDelete = confirm(
    `Are you sure you want to delete this book?\n\nBook Name: ${book.name}\nAuthor: ${book.author}`
  );

  if (confirmDelete) {
    this.books = this.books.filter(b => b.id !== id);
    this.render();
  }
}

  render() {
    this.container.innerHTML = "";

    this.books.forEach(book => {
      const card = document.createElement("div");
      card.className = "bg-white p-5 rounded-2xl shadow";

      card.innerHTML = `
        <img src="${book.image}" class="w-full h-40 object-cover rounded mb-3">

        <h3 class="text-lg font-bold text-indigo-700">${book.name}</h3>
        <p class="text-gray-600">Author: ${book.author}</p>

        <p class="font-semibold text-gray-700">
          Stock: ${book.stock} / ${book.initialStock}
        </p>

        <p class="mt-1 font-semibold ${
          book.stock > 0 ? "text-green-600" : "text-red-600"
        }">
          ${book.stock > 0 ? "Available" : "Out of Stock"}
        </p>

        <p class="text-sm text-gray-500 mt-2">
          📅 Added On: ${book.addedAt}
        </p>

        <div class="mt-4 space-y-2">
          <button
            class="issueBtn w-full cursor-pointer bg-indigo-600 text-white py-2 rounded disabled:opacity-50"
            data-id="${book.id}"
            ${book.stock === 0 ? "disabled" : ""}>
            Issue
          </button>

          <button
            class="returnBtn w-full cursor-pointer bg-green-600 text-white py-2 rounded disabled:opacity-50"
            data-id="${book.id}"
            ${book.stock === book.initialStock ? "disabled" : ""}>
            Return
          </button>

          <button
            class="deleteBtn w-full cursor-pointer bg-red-500 text-white py-2 rounded"
            data-id="${book.id}">
            Delete
          </button>
        </div>
      `;

      this.container.appendChild(card);
    });

    this.attachEvents();
  }

  attachEvents() {
    document.querySelectorAll(".issueBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.issueBook(Number(btn.dataset.id));
      });
    });

    document.querySelectorAll(".returnBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.returnBook(Number(btn.dataset.id));
      });
    });

    document.querySelectorAll(".deleteBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.deleteBook(Number(btn.dataset.id));
      });
    });
  }
}

const library = new Library("bookList");

document.getElementById("addBookBtn").addEventListener("click", () => {
  const name = document.getElementById("bookName").value.trim();
  const author = document.getElementById("authorName").value.trim();
  const stock = Number(document.getElementById("bookStock").value);
  const imageInput = document.getElementById("bookImage");

  if (!name || !author || stock <= 0 || !imageInput.files[0]) {
    alert("Please fill all fields correctly");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    library.addBook(
      new Book(Date.now(), name, author, stock, reader.result)
    );
  };
  reader.readAsDataURL(imageInput.files[0]);

  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
  document.getElementById("bookStock").value = "";
  imageInput.value = "";
});
