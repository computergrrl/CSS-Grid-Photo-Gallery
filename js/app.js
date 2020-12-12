baguetteBox.run('.gallery');

function photoSearch() {
    //declare variables
    const search = document.getElementById("search");
    const userInput = search.value.toLowerCase();
    const gallery = document.querySelectorAll(".image");

    //loop through gallery 
    for (let i = 0; i < gallery.length; i++) {
        let caption = gallery[i].getAttribute("data-caption");

        //if input in search box is empty show all pics, else show only pic which caption matches inputValue
        gallery[i].style.display = !userInput.trim() || caption.toLowerCase().includes(userInput) ? "inherit" : "none";

    }

}