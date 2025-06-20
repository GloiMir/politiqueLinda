async function fetchApiUrl() {
    const response = await fetch('/api/url');
    const data = await response.json();
    return data.apiUrl;
}

async function fetchElements() {

    // Chargement des promoteurs
    const response = await fetch('https://lindabackend.onrender.com/api/sendPromoteurs');
    const elements = await response.json();

    // Ouverture du lien de téléchargement
    const openLink = (codePromo) => {
        window.open(`https://lindapp.netlify.app?codePromo=${codePromo}`, '_blank');
    };

    const container = document.getElementById('tableau');
    
    elements.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('content');
    
        // Créer le contenu sans le bouton
        div.innerHTML = `
            <div class="element">
                <img src="${element.photo}" alt="${element.nom}" class="image">
                <div class="info">
                    <span class="nom">${element.nom}</span>
                    <span class="code">Code Promo : ${element.codePromo}</span>
                    <span class="phone">${element.telephone}</span>
                    <span class="phone">${element.email}</span>
                    <span class="phone">${element.pays} / ${element.ville}</span>
                </div>
            </div>
        `;
    
        // Créer le bouton séparément
        const button = document.createElement('button');
        button.className = 'bouton';
        button.textContent = 'Créer dans son réseau';
        button.addEventListener('click', () => openLink(element.codePromo));
    
        // Ajouter le bouton à la div
        div.appendChild(button);
    
        container.appendChild(div);
    });
}

fetchElements();