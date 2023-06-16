let filteredProducts=[...products];
console.log(filteredProducts);

const productsContainer=document.querySelector('.products-container');

const displayProducts=()=>{

    if(filteredProducts.length<1){
        productsContainer.innerHTML=`<h6>Sorry, no products matched your search</h6>`
        return;
    }
    productsContainer.innerHTML=filteredProducts.map(({id,title,image,price})=>{
        // console.log(product);
        return `<article class="product" data-id=${id}>
        <img src="${image}" class="product-img img"/>

        <footer>
            <h5 class="product-name">
                ${title}
            </h5>
            <span class="product-price">
                $${price}
            </span>
        </footer>
    </article>`
    }).join('')
};

displayProducts();

const form=document.querySelector('.input-form');
const searchInput=document.querySelector('.search-input');

form.addEventListener('keyup',()=>{
    const inputValue=searchInput.value;
    // console.log(inputValue);
    filteredProducts=products.filter((product)=>{
        return product.title.toLowerCase().includes(inputValue)
        // console.log(product.title,key);
    });
    displayProducts();
});

//Filter Buttons

const companiesDOM=document.querySelector('.companies');

const displayButtons=()=>{
    const buttons=['all',...new Set(products.map((product)=>{
       return product.company
    }))];
    console.log(buttons);
    companiesDOM.innerHTML=buttons.map((company)=>{
        return `<button class="company-btn" data-id="${company}">
        ${company}
    </button>`
    }).join('')
}

displayButtons();

companiesDOM.addEventListener('click',(e)=>{
    // console.log(e.target);
    // console.log(e.currentTarget);
    const el=e.target
    if(el.classList.contains('company-btn')){
       
        if(el.dataset.id==='all'){
            filteredProducts=[...products];
            // console.log(el.classList.contains('company-btn'));
        }
        else{
            console.log(el.classList.contains('company-btn'));
            filteredProducts=products.filter((product)=>{
                return product.company===el.dataset.id;
            })
        }
        searchInput.value='';
        displayProducts();
    }
});