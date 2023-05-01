function toggle() {
    const checkbox = document.getElementById("checkbox");
    const body = document.body;

    checkbox.classList.toggle("active");
    if (checkbox.checked) {
        body.style.backgroundColor = "red"
    }
    else {
        body.style.backgroundColor = "blue"
    }

}