window.addEventListener('scroll', (event) => {  
	const navbar = document.querySelector('nav')
	// if (window.scrollY > 100) {
	// 	navbar.classList.add("nav-shadow") // as this is the classList no need to give "." (it is not there in html its there only in css)
	// } else {
	// 	navbar.classList.remove("nav-shadow")
	// }
	navbar.classList.toggle('nav-shadow', window.scrollY > 10)  // this single line does the work of above if condition.
})


////////////////////////////////////////////	 Navbar done 	////////////////////////////////////////////


var index = 0;
var prevIndex;
var direction;
const slides = document.querySelector(".slider").children;  // always all this querySelector should be at the top only (of any fn or anything)
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".Indicator");

prev.addEventListener('click', function(){
	prevslide();
	updateIndicator();
	resetTimer();
})

next.addEventListener('click', function(){
	nextslide();
	updateIndicator();
	resetTimer();
})

function nextslide(){
	direction = "right-to-left"
	prevIndex = index;
	if (index == slides.length-1) {
		index = 0;
	}
	else{
		index++;
	}
	changeslide();
}

function prevslide(){
	direction = "left-to-right"
	prevIndex = index;
	if (index == 0) {
		index = slides.length-1;
	}
	else{
		index--;
	}
	changeslide();
}

function changeslide(){
	for (var i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active", "prev-active", "right-to-left", "left-to-right");
	}
	slides[prevIndex].classList.add("prev-active", direction);
	slides[index].classList.add("active", direction);
}

function circleIndicator(){
	for (var i = 0; i < slides.length; i++) {
		const div = document.createElement("div");
		// div.innerHTML = i + 1; //(this will display count in those indicators)
		div.setAttribute('onclick', "indicatorSlide(this)")
		div.id = i;
		if (i == 0) {
			div.className = "active";
		}
		indicator.appendChild(div);
	}
}

circleIndicator();

function updateIndicator(){
	for (var i = 0; i < indicator.children.length; i++) {
		indicator.children[i].classList.remove("active");
	}
	indicator.children[index].classList.add("active");
}

// to click on circle indicators and change img.
function indicatorSlide(element){
	prevIndex = index;
	index = element.id;
	direction = "left-to-right"
	changeslide();
	updateIndicator();
	resetTimer();
}

function autoplay(){
	nextslide();
	updateIndicator();
}

let timer = setInterval(autoplay, 5000);

function resetTimer(){
	// when clicked on timer or control, stop timer
	clearInterval(timer);
	// then start the timer again.
	timer = setInterval(autoplay, 5000);
}


////////////////////////////////////////////	 carousel done 	////////////////////////////////////////////






































window.addEventListener('scroll', (event) => {  
	const go_to_top = document.querySelector('#go-to-top')  // toggle uses .add and .remove in it. so when it remove the selector(go-to-top), again it was not adding it back. so use id. or make it permanent and use show-go-to-top.
	go_to_top.classList.toggle('show-go-to-top', window.scrollY > 500)
})

function goToTop() {
	console.log("done")
	window.scrollTo(0,0);
}

// const navbar = {
// 	classList = {
// 		values: [],
// 		add(className) {
// 		}
// 		remove(className) {
// 		}
// 		toggle(className, condition) {
// 		}
// 	}
// }