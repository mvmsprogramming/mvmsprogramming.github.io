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

var colors = document.getElementsByClassName("color");
	for(var i = 0;i < colors.length; i++){
		colors[i].onclick = function(){
				if(this.id == "topBlack") { textClr = "#404040"; }
				if(this.id == "topBlue") { textClr = "#75a3d1"; }
				if(this.id == "topGreen") { textClr = "#58d178"; }
				if(this.id == "topRed") { textClr = "#ee4b3e"; }
				if(this.id == "topOrange") { textClr = "#f59c62"; }
				if(this.id == "topPurple") { textClr = "#8065b3"; }
				console.log(textClr);
				textEditor.style.color = textClr;
				textEditor.focus();
		}
	}
	
var display = document.getElementById("display");
var runButton = document.getElementById("runButton");
	runButton.onclick = function(){
		display.srcdoc = textEditor.value;
	};
	
var pcEditor = document.getElementById("pcEditor");	

var minimizer = document.getElementById("minimizeButton");
	minimizer.onclick = function(){
		pcEditor.style.display = "none";
		expander.style.display = "block";
		console.log("minimize");
	};
var expander = document.getElementById("minimizedEditor");
	expander.onclick = function(){
		pcEditor.style.display = "block";
		expander.style.display = "none";
	};