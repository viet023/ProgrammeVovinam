var theParent = document.querySelector("#position");
theParent.addEventListener("click", OpenModalPosition, false);

function OpenModalPosition(e) {
  var clickedItem = e.target.id;
    // Get the modal
    var modal = document.querySelector("#modal"+e.target.id);
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function() {
      modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
}
