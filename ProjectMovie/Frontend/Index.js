const resultElement = document.getElementById('actual-result');
const getAllBtn = document.getElementById('get-all-btn');
const NameCategory = document.getElementById('NameCategory');
const formCreate= document.querySelector('.FormCreate');
const formDelete=document.querySelector('.FormDelete')
const IdToDelete=document.getElementById('IdToDElete');


const baseURL = 'https://localhost:7285/';
const CategoryURI = 'Category/';



const getAllCategoryAsync = async (event) => {
    //console.log(event);
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



const CreateCategoryAsync = async (event) => {
    event.preventDefault();
    const Name = NameCategory.value;
   
    await fetch( `https://localhost:7285/Category?name=${Name}`,
    {
        method:'POST'});
        document.getElementById('NameCategory').value='';
    }

formCreate.addEventListener('submit', CreateCategoryAsync);



const DeleteCategoryByID =async(event)=>{
    event.preventDefault();

    await fetch(`https://localhost:7285/Category/${IdToDelete.value}`,
        { 
            method: 'DELETE'
        })
     document.getElementById('IdToDElete').value='';
   
}
formDelete.addEventListener('submit', DeleteCategoryByID);








