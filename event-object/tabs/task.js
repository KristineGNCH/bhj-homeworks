const tabs = Array.from(document.querySelectorAll('.tabs'));
const tabContent = document.querySelectorAll('.tab__contentt');

function activeMenu() {
    for (let tab of tabs) {
        tab.className = 'tab';
    }
    for (let content of tabContent) {
        content.className = 'tab__content';
    }

    let i = tabs.indexOf(this);
    tabs[i].className = 'tab tab_active';
    tabContent[i].className = 'tab__content tab__content_active';
}


for (let item of tabs) {
    item.onclick = activeMenu;
}