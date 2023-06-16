const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keyup", function(event) {
    if(event.key === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q="+ input +"&rlz=1C1CHBD_enIN926IN927&oq=" +input+"&aqs=chrome.0.0i355i433i512j46i340i433i512l2j69i57j46i433i512j0i512j69i60l2.5413j0j7&sourceid=chrome&ie=UTF-8"
}
