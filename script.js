async function fetchApiUrl() {
    const response = await fetch('/api/url');
    const data = await response.json();
    return data.apiUrl;
}

async function fetchElements() {
    const response = await fetch('https://lindabackend.onrender.com/api/sendPromoteurs');
    const elements = await response.json();
    const container = document.getElementById('tableau');
    elements.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('element');

        // <img src='./MyIcon.png' alt="${element.nom}" class="image">
        div.innerHTML = `
            <img src="${element.photo}" alt="${element.nom}" class="image">
            <div class="info">
                <span class="nom">${element.nom}</span>
                <span class="code">${element.codePromo}</span>
                <span class="phone">${element.telephone}</span>
                <span class="phone">${element.email}</span>
            </div>
        `;

        container.appendChild(div);
    });
}

fetchElements();