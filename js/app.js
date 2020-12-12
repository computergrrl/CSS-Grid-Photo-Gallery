baguetteBox.run('.gallery');

function photoSearch() {
    //declare variables
    const search = document.getElementById("search");
    const userInput = search.value.toLowerCase();
    const gallery = document.querySelectorAll(".image");
    // console.log(gallery);

    //loop through gallery a
    for (let i=0; i < gallery.length; i++) {
        let caption = gallery[i].getAttribute("data-caption");

          if(caption.toLowerCase().indexOf(userInput) > -1) {
              gallery[i].style.display = " ";
          } else {
              gallery[i].style.display = "none";
          }
    }
}
