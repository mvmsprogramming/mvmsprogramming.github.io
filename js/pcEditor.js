document.body.onload = function(){
	if(localStorage.getItem("htmlcode") != null){
		textEditor.value = localStorage.getItem("htmlcode");
	}
}

var textEditor = document.getElementById("editText");
	textEditor.onkeydown = function(e){
		if(e.keyCode == 9){
			e.preventDefault();
			var s = this.selectionStart;
			this.value = this.value.substring(0, s) + "\t" + this.value.substring(this.selectionEnd);
			this.selectionEnd = s + 1;
		}
	};

var textClr = "";

var display = document.getElementById("display");
var runButton = document.getElementById("runButton");
	runButton.onclick = function(){
		display.srcdoc = textEditor.value;
		localStorage.setItem("htmlcode", textEditor.value);
	};
	
var pcEditor = document.getElementById("pcEditor");	

var opacityUp = 1;
var opacityDown = 0;

var minimizer = document.getElementById("minimizeButton");
	minimizer.onclick = function(){
		var mini = setInterval(function(){
			opacityUp -= .02;
			pcEditor.style.opacity = opacityUp;
			if(opacityUp <= 0) {
				pcEditor.style.opaciy = 0;
				pcEditor.style.display = "none";
			    expander.style.display = "block";
			    opacityUp = 1;
			    clearInterval(mini);
			}
		}, 15);
	};
	
var expander = document.getElementById("minimizedEditor");

	expander.onclick = function(){
		var bigi = setInterval(function(){
			opacityDown += .02;
			pcEditor.style.opacity = opacityDown;
			if(opacityDown >= 1){
				pcEditor.style.opacity = 1;
				pcEditor.style.display = "block";
				expander.style.display = "none";
				opacityDown = 0;
				clearInterval(bigi);
			}
		}, 15);
		pcEditor.style.display = "block";
		expander.style.display = "none";
	};
