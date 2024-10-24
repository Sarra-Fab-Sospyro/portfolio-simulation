window.onload = () => {
	// Ottieni i parametri della query string
	const queryParams = new URLSearchParams(window.location.search);
	const path = queryParams.get("path"); // Ottieni il valore del parametro 'path'

	// Se non ci sono parametri, carica la home
	if (!path) {
		loadPage("home");
	} else {
		// Elenco dei percorsi validi
		const validPaths = [
			"home",
			"about",
			"contact",
			"articles",
			"photography",
			"stories",
			"sports-articles",
		];
		if (validPaths.includes(path)) {
			loadPage(path); // Carica la pagina richiesta
		} else {
			loadPage("404"); // Se il path non è valido, carica la pagina 404
		}
	}

	// Gestisci i click sui menu
	document.addEventListener("click", (event) => {
		const item = event.target.closest(".menu_item");
		if (item) {
			const path = item.getAttribute("value");
			loadPage(path);
			// Aggiorna l'URL con la query string
			window.history.pushState("", "", `?path=${path}`);
		}
	});

	function loadPage($path) {
		if ($path === "") return;

		const container = document.getElementById("container");

		const request = new XMLHttpRequest();
		request.open("GET", "pages/" + $path + ".html");
		request.send();

		request.onload = function () {
			if (request.status === 200) {
				container.innerHTML = request.responseText;
				document.title = "Emily's blog " + $path;

				// Controlla se il carosello esiste prima di inizializzarlo
				if (document.querySelector(".carousel")) {
					initializeCarousel();
				}
			} else if (request.status === 404) {
				loadPage("404"); // Carica la pagina 404 se il file non è trovato
			}
		};
	}
};
