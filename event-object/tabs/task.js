const tabs = Array.from(document.querySelectorAll('.tabs'));
const tabContent = document.querySelectorAll('.tab__contentt');

function activeMenu() {
    for (const tab of tabs) {
        tab.className = 'tab';
    }
    for (const content of tabContent) {
        content.className = 'tab__content';
    }

    let index = tabs.indexOf(this);
    tabs[index].className = 'tab tab_active';
    tabContent[index].className = 'tab__content tab__content_active';
}


for (const item of tabs) {
    item.onclick = activeMenu;
}