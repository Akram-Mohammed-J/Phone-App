const addForm = document.querySelector(".add");
const list = document.querySelector(".contact");
let userName = document.querySelector(".name");
let mobile = document.querySelector(".mobile");
const search = document.querySelector(".search input");

const generateContact = (name, mobile) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <p>Name: <span> ${name}</span><br />
        Mobile: <span>${mobile}</span></p>
        <div class=" d-flex justify-self-end">
          <i class="far fa-trash-alt delete mx-2"></i>
        </div> 
    </li>
    `;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const contact = addForm.add.value.trim();
  if (userName.value.length != 0 && mobile.value.length != 0) {
    console.log(userName.value);
    generateContact(userName.value, mobile.value);
  }
});

// Delete contact
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let contact = e.target.parentNode;
    contact.parentElement.remove();
  }
});

const filterContact = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//Keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterContact(term);
});
