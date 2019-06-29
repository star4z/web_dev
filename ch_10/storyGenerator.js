

function submitWords(form) {
    const words = document.getElementById("words");
    const story = document.getElementById("story");

    for (let i = 0; i < 5; i++) {
        let text = form.elements[i].value;
        console.log("'" + text + "'");
        console.log(story.children[i]);
        if (text == null || text === "") {
            story.children[i].innerHTML = "&lt;missing text&gt;";
        } else {
            story.children[i].innerHTML = text;
        }
    }

    form.reset();

    words.style.visibility = "collapse";
    story.style.visibility = "visible";
}

function back() {
    const words = document.getElementById("words");
    const story = document.getElementById("story");

    words.style.visibility = "visible";
    story.style.visibility = "collapse";
}