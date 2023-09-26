const dropdownBtn = document.querySelectorAll('.dropdown__value');
const dropdownLst = document.querySelectorAll('.dropdown__list');
const dropdownItem = document.querySelector('.dropdown__item');
const arr = Array.from(dropdownItem);

arr.forEach((el, index) => {
    el.onclick = () => {
        closeList();
        dropdownBtn.textContent = arr[index].textContent;
        return false;
    }
});

function closeList() {
    dropdownLst.classList.remove('dropdown__list_active');
};

function openList() {
    dropdownLst.classList.add('dropdown__list_active');
};

dropdownBtn.addEventListener('click', openList());