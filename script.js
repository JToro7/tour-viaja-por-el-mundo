document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const imagenPrincipal = document.querySelector(".imagen_principal img");
    const titulo = document.querySelector(".info h1");
    const descripcion = document.querySelector(".info p");

    const paises = {
        "rusia.jpg": {
            nombre: "RUSIA",
            descripcion: "Rusia, el país más grande del mundo, ofrece paisajes impresionantes, desde la arquitectura icónica de Moscú hasta los paisajes nevados de Siberia."
        },
        "ee_uu.jpg": {
            nombre: "ESTADOS UNIDOS",
            descripcion: "Estados Unidos es una tierra de oportunidades, conocida por sus ciudades vibrantes, parques nacionales espectaculares y diversidad cultural."
        },
        "francia.jpg": {
            nombre: "FRANCIA",
            descripcion: "Francia es famosa por su exquisita gastronomía, arte refinado y monumentos emblemáticos como la Torre Eiffel y el Museo del Louvre."
        },
        "egipto.jpg": {
            nombre: "EGIPTO",
            descripcion: "Egipto alberga una de las civilizaciones más antiguas del mundo. Las pirámides de Giza y el Nilo son sus joyas históricas."
        },
        "india.jpg": {
            nombre: "INDIA",
            descripcion: "India es una nación vibrante y espiritual, reconocida por su rica cultura, templos sagrados y el majestuoso Taj Mahal."
        },
        "colombia.jpg": {
            nombre: "COLOMBIA",
            descripcion: "La Piedra del Peñol, también conocida como El Peñón de Guatapé,es una impresionante formación de granito que se encuentra a unos 80 kilómetros de la ciudad de Medellín. Con una altura de 220 metros, este monolito es uno de los principales atractivos turísticos del departamento de Antioquia."
        }
    };


    cards.forEach(card => {
        card.addEventListener("click", () => {
            const estilo = window.getComputedStyle(card);
            const fondo = estilo.backgroundImage;
            const url = fondo.slice(5, -2);
            const archivo = url.split("/").pop();

            imagenPrincipal.src = url;

            if (paises[archivo]) {
                titulo.textContent = paises[archivo].nombre;
                descripcion.textContent = paises[archivo].descripcion;
            }

        
        });
    });
});
