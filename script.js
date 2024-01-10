// const sortButtons = document.querySelectorAll('.catalog-header-buttons');
// const catalogItems = document.querySelectorAll('.catalog-cards');

// let activeButton = "france";

// showCatalogItems(activeButton);

// sortButtons.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         resetActiveButton();
//         showCatalogItems(btn.id);
//         btn.classList.add('active-btn');
//     })
// })

// function resetActiveButton() {
//     sortButtons.forEach((btn) => {
//         btn.classList.remove('active-btn');
//     })
// }

// function showCatalogItems(newCatalogButton) {
//     activeButton = newCatalogButton;
//     foodItems.forEach((item) => {
//         if(item.classList.contains(activeButton)) {
//             item.style.display = 'flex'
//         } else {
//             item.style.display = 'none';
//         }
//     })
// }


// Catalog cards choosing

const allFilterItems = document.querySelectorAll('.catalog-card');
const allFilterBtns = document.querySelectorAll('.radio-button');

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn')
})

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn) {
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)) {
            resetActiveBtn()
            btn.classList.add('active-btn')
            item.style.display = "flex"
        } else {
            item.style.display = "none";
        }
    })
}

function resetActiveBtn() {
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    })
}



// Hamburger menu

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('burger').addEventListener('click', () => {
        document.querySelector('.nav__list').classList.toggle('open');
    })
})