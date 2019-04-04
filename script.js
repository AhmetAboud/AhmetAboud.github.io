function OpenPage(site) {
	window.location = "sites/sig.html";
}

function ConvertSig(text, ida) {
	if (ida) {
		var mask = "";
		var words = text.split(" ");
		for (var i = 0; i < words.length; i++) {
			if (words[i] == "?") {
				mask += "?";
			}
			else {
				mask += "x";
			}
		}

		text = "\\x" + text;
		text = text.replace(/\?/g, "00"); // ? -> 00
		text = text.replace(/ /g, "\\x"); //  -> \\x

		return text + "     " + mask;
	}
	else {
		text = text.replace(/\\x/g, " "); // \x -> 
		text = text.replace(/00/g, "?"); // 00 -> ??

		return text;
	}
}
function UpdateSig() {
	if (event.keyCode != 13)
		return;

	var input = document.getElementById("sig-input").value;
	var ida = true;

	if (input.substring(0, 2) == "\\x")
		ida = false;

	document.getElementById("sig-output").value = ConvertSig(input, ida);
}