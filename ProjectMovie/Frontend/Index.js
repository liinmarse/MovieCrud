const resultElement = document.getElementById('actual-result');
const getAllBtn = document.getElementById('get-all-btn');

const baseURL = 'https://localhost:7285/';
const CategoryURI = 'Category/';



const getAllCategoryAsync = async (event) => {
    console.log(event);
    event.preventDefault();
    const result = await fetch(baseURL+CategoryURI);
    const data = await result.json();
    var output = '';
    data.forEach(Category => {
        output += `
        <li>ID: ${Category.id}</li>
        <li>NAME: ${Category.name}</li>
        `;
    });
    resultElement.innerHTML = output;
}

getAllBtn.addEventListener('click', getAllCategoryAsync);








