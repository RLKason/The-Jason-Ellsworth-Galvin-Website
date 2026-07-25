const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.add("fade");

    setTimeout(() => {
        document.body.classList.remove("fade");
    }, 600);

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
});

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}