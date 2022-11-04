let generateMessages;

	function init() {
		message = document.getElementById("info");
		document.addEventListener("mousemove", generateMessages);
		document.addEventListener("keypress", generateMessages);
		document.addEventListener("click", generateMessages);
	}

	generateMessages = function(ev) {
		let xNav,yNav, xPag, yPag;
		xPag = ev.pageX;
		yPag = ev.pageY;
		xNav = ev.clientX;
		yNav = ev.clientY;

		switch (ev.type) {
			case "mousemove":
				message.style.backgroundColor = "#FFFFFF";
				showInformation([
					"Moviendo el ratón",
					"Posición en navegador: [" + xNav + ", " + yNav + "]",
					"Posición en página: [" + xPag + ", " + yPag + "]"
				]);
				break;
			
				case "keypress":
				message.style.backgroundColor = "#CCE6FF";
				let character = ev.charCode || ev.keyCode;
				let sign = String.fromCharCode(character);
				let code = sign.charCodeAt(0);
				showInformation([
					"Pulsando el teclado:","Carácter de la tecla pulsada: [" + sign + "]",
					"Código del carácter: [" + code + "]"
				]);
				break;
			case "click":
				message.style.backgroundColor = "#FFFFCC";
				showInformation([
					"Haciendo Click:",
					"Posición en navegador: [" + xNav + ", " + yNav + "]",
					"Posición en página: [" + xPag + ", " + yPag + "]"
				]);
				break;
		}
	};

	let showInformation = function(info) {
		message.innerHTML = "<h2>" + info[0] + "</h2>";
		for (let i = 1; i < info.length; i++) {
			message.innerHTML += "<p>" + info[i] + "</p>";
		}
	};

	document.addEventListener("DOMContentLoaded", init);
