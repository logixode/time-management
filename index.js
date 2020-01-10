function showMenu() {
    document.getElementById('menu').classList.toggle('menu-mobile')
}

function addSchedule() {
    document.getElementById('dialog').classList.toggle('show-dialog')
    document.body.classList.toggle('oflow-hidden')
}

const date = new Date();
document.getElementById("date").innerHTML = date;