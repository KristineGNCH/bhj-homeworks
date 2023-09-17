var img = document.getElementById('cookie');
let sumClick = document.getElementById('clicker__counter');
count = 0;
let imgExpanded = true;


img.onclick = function clicker() {

    if (imgExpanded) {
        img.width = 250;
        img.height = 200;
    } else {
        img.width = 200;
        img.height = 128;
    }

    imgExpanded = !imgExpanded;

    count += 1;

    sumClick.innerHTML = `${count}`;
};



