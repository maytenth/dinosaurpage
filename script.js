function nextImage(elem){
	if(elem.src.match("images/transparent.png")) {
		elem.src = "images/Albertosaurustext.png"
	}
	else if (elem.src.match("images/Albertosaurustext.png")){
		elem.src = "images/Ankylosaurustext.png";
	}
	else if (elem.src.match("images/Ankylosaurustext.png")){
	elem.src = "images/Brachiosaurustext.png";
	}
	else if (elem.src.match("images/Brachiosaurustext.png")){
		elem.src = "images/Brontosaurustext.png";
	}
	else if (elem.src.match("images/Brontosaurustext.png")){
		elem.src = "images/Giganotosaurustext.png";
	}
	else if (elem.src.match("images/Giganotosaurustext.png")){
		elem.src = "images/Plateosaurustext.png";
	}
	else if (elem.src.match("images/Plateosaurustext.png")){
		elem.src = "images/Spinosaurustext.png";
	}
	else if (elem.src.match("images/Spinosaurustext.png")){
		elem.src = "images/Triceratopstext.png";
	}
	else if (elem.src.match("images/Triceratopstext.png")){
		elem.src = "images/Velociraptortext.png";
	}

	else if (elem.src.match("images/Velociraptortext.png")){
		elem.src = "images/Albertosaurustext.png";
	}
	else {
	}
}

function showAlert() {

var dinoone = document.getElementById ('one')
var dinotwo = document.getElementById ('two')
var dinothree = document.getElementById ('three')

if (dinoone.src.match("images/Triceratopstext.png") && dinotwo.src.match("images/Brachiosaurustext.png") && dinothree.src.match("images/Velociraptortext.png")) {

alert ("Correct!");
document.location.href = "https://mellamocasamundo.github.io/Phase-8/";
}

else {

alert ("Try Again");

}

}
