/**
 * Funzione per configurare i listener degli eventi sul link "back-home".
 * Controlla se il link esiste e aggiunge i listener per gli eventi mouseenter e mouseleave.
 */
const setupEventListeners = () => {
    // Seleziona l'elemento con la classe "back-home"
    const backHomeLink = document.querySelector(".back-home");
    
    // Controlla se l'elemento è stato trovato
    if (backHomeLink) {
        // Seleziona l'icona all'interno del link
        const houseIcon = backHomeLink.querySelector("i");
        
        // Rimuovi eventi esistenti per evitare duplicati
        backHomeLink.removeEventListener("mouseenter", handleMouseEnter);
        backHomeLink.removeEventListener("mouseleave", handleMouseLeave);

        // Aggiungi nuovi listener per gli eventi mouseenter e mouseleave
        backHomeLink.addEventListener("mouseenter", handleMouseEnter);
        backHomeLink.addEventListener("mouseleave", handleMouseLeave);
    }
};

/**
 * Gestisce l'evento mouseenter.
 * Aggiunge la classe "fa-bounce" all'icona della casa per attivare l'animazione.
 * 
 * @param {Event} event - L'evento che ha attivato il listener.
 */
const handleMouseEnter = (event) => {
    // Seleziona l'icona della casa all'interno dell'elemento corrente
    const houseIcon = event.currentTarget.querySelector("i");
    // Aggiungi la classe per attivare l'animazione
    houseIcon.classList.add("fa-bounce");
};

/**
 * Gestisce l'evento mouseleave.
 * Rimuove la classe "fa-bounce" dall'icona della casa per fermare l'animazione.
 * 
 * @param {Event} event - L'evento che ha attivato il listener.
 */
const handleMouseLeave = (event) => {
    // Seleziona l'icona della casa all'interno dell'elemento corrente
    const houseIcon = event.currentTarget.querySelector("i");
    // Rimuovi la classe per fermare l'animazione
    houseIcon.classList.remove("fa-bounce");
};

// Usa un MutationObserver per osservare cambiamenti nel DOM
const observer = new MutationObserver(() => {
    // Configura i listener ogni volta che c'è una mutazione
    setupEventListeners();
});

// Inizia a osservare il body per nodi aggiunti
observer.observe(document.body, { childList: true, subtree: true });

// Configurazione iniziale dei listener
setupEventListeners();
