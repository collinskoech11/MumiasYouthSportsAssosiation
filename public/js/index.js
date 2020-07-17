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

			const btnScrollToTop = document.querySelector("#btnScrollToTop");

			btnScrollToTop.addEventListener("click",function() {
				//window.scrollTo(0,0);


				window.scrollTo({
					top: 0,
					left: 0,
					behavior: "smooth"
				});

				//$("html, body").animate({ scrollTop: 0},"slow");
			});




			const more = document.querySelector("#more");

			more.addEventListener("click",function() {
				//window.scrollTo(0,0);


				window.scrollTo({
					top: 600,
					left: 0,
					behavior: "smooth"
				});

				//$("html, body").animate({ scrollTop: 0},"slow");
			});




			const moreAbout = document.querySelector("#moreAbout");

			moreAbout.addEventListener("click",function() {
				//window.scrollTo(0,0);


				window.scrollTo({
					top: 600,
					left: 0,
					behavior: "smooth"
				});

				//$("html, body").animate({ scrollTop: 0},"slow");
			});


			const contactus = document.querySelector("#contactus");

			contactus.addEventListener("click",function() {
				//window.scrollTo(0,0);


				window.scrollTo({
					top: 2000,
					left: 0,
					behavior: "smooth"
				});

				//$("html, body").animate({ scrollTop: 0},"slow");
			});


const join = document.querySelector("#join");
join.addEventListener("click",function() {
	window.scrollTo({
		top:2000,
		left:0,
		behavior:"smooth"

	});
});