const dropdownBtn = document.querySelector('.dropdown__value');
const dropdownLst = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const arr = Array.from(dropdownItem);

arr.forEach((el, index) => {
    el.onclick = () => {
        closeList();
        dropdownBtn.textContent = arr[index].textContent;
        event.preventDefault();
    }
});

function closeList() {
    dropdownLst.classList.remove('dropdown__list_active');
};

function openList() {
    dropdownLst.classList.add('dropdown__list_active');
};

dropdownBtn.addEventListener('click', openList);