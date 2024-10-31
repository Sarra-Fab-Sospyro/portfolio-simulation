document
	.getElementById("menu-toggle")
	.addEventListener("click", function (event) {
		event.stopPropagation(); // Ferma la propagazione dell'evento
		document.querySelector(".sidebar-menu").classList.add("active");
	});

const turnOff = (event) => {
	const sidebar = document.querySelector(".sidebar-menu");
	// Controlla se il click è avvenuto al di fuori della sidebar
	if (!sidebar.contains(event.target) && sidebar.classList.contains("active")) {
		sidebar.classList.remove("active");
	}
};

document.body.addEventListener("click", turnOff);
