document.write("Hello World!");

const h1 = document.getElementById("head1");
let para = document.getElementsByClassName("mypara");
console.log(para);

function changeH1() {
    h1.style.color = "red";
    h1.style.fontSize = "50px";
    h1.style.textAlign = "center";
    // h1.innerHTML = "<u>DOM</u> - Document Object Model <button onclick='changeColor()'>Click Me </button>";
    // h1.innerText = "DOM - Document Object Model";
    h1.textContent = "DOM - Document Object Model";
}

function changeTitle() {

    document.title = "Document Object Model";
}

function changeColor() {

    document.body.style.backgroundColor = "lightblue";
}

function changebgcolor() {
    document.body.style.backgroundColor = "lightgreen";
}