// When the user scrolls the page, execute headerPosFunction
window.onscroll = function () {
  headerPosFunction();
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function headerPosFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



const contact = document.querySelector("#contact");

			contact.addEventListener("click",function() {
				


				window.scrollTo({
					top: 2000,
					left: 0,
					behavior: "smooth"
				});

				
			});
		

		const various = document.querySelector("#various");

			various.addEventListener("click",function() {
				


				window.scrollTo({
					top: 550,
					left: 0,
					behavior: "smooth"
				});

				
			});