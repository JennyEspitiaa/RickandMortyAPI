export const showCards = (data, container) => {
    // console.log(data, container);

    data.forEach(characters => {
        // console.log(characters);
        const {
            name,
            status,
            species,
            origin:{name:origen},
            location:{name:locacion},
            image
        } = characters

        
    const contenedor = document.createElement('div');
    contenedor.classList.add('characters');
    contenedor.innerHTML =

        ` <img src="${image}" alt="personaje">

    <div class="information">
        <p class="name">${name}</p>

        <div class="type">
            <i class="fa-solid fa-circle fa-2xs unknown"></i>
            <p class="status">${status}</p>
            <p class="species">${species}</p>
        </div>

        <p class="tittle">Last known location:</p>
        <p class="origin">${origen}</p>
        <p class="firstSoon">First Soon in:</p>
        <p class="location">${locacion}</p>

    </div>  `

    container.appendChild(contenedor)

    });

};