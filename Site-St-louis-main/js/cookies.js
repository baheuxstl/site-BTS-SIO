document.addEventListener("DOMContentLoaded", () => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
        showCookieBanner();
    }
});

function showCookieBanner() {
    const banner = document.createElement("div");
    banner.id = "cookie-banner";

    banner.innerHTML = `
        <div class="cookie-container">
            <p>
                Ce site utilise des cookies pour améliorer votre expérience.
                <a href="/politique-confidentialite" target="_blank">En savoir plus</a>
            </p>
            <div class="cookie-buttons">
                <button id="accept-cookies">Accepter</button>
                <button id="refuse-cookies">Refuser</button>
            </div>
        </div>
    `;

    document.body.appendChild(banner);

    document
        .getElementById("accept-cookies")
        .addEventListener("click", () => setConsent("accepted"));

    document
        .getElementById("refuse-cookies")
        .addEventListener("click", () => setConsent("refused"));
}

function setConsent(choice) {
    localStorage.setItem("cookieConsent", choice);
    hideCookieBanner();
}

function hideCookieBanner() {
    const banner = document.getElementById("cookie-banner");
    if (banner) {
        banner.remove();
    }
}