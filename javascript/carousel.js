
const slides = [
    {
        image: "assets/carousel/benedikte.webp",
        alt: "Billede af Benedikte",
        title: "Mødes med",
        paragraph: "Benedikte Brechmann",
        adresse: "Bregnør Bygade 72",
        city: "5300 Kerteminde",
        date: "26. maj",
        time: "kl 08.15 - 09.45",
    },

    {
        image: "assets/carousel/bibi.webp",
        alt: "Billede af Bibi",
        title: "Samtale med",
        paragraph: "Bibi Foged Rasmussen",
        adresse: "Bregnør Bygade 72",
        city: "5300 Kerteminde",
        date: "26. maj",
        time: "kl 11.30 - 12.00",
    },

    {
        image: "assets/carousel/gronningen.webp",
        alt: "Villa til åbent hus på Grønningen i Munkebo",
        title: "Åbent hus",
        adresse: "Grønningen 24",
        city: "5330 Munkebo",
        date: "28. maj",
        time: "kl 09.00 til 10.00",
    },

    {
        image: "assets/carousel/mollevej.webp",
        alt: "Villa til åbent hus på Møllevej i Marslev",
        title: "Åbent hus",
        adresse: "Møllevej 10",
        city: "5290 Marslev",
        date: "30. maj",
        time: "kl 09.00 til 10.00",
    },
    
    {
        image: "assets/carousel/frederik.webp",
        alt: "Billede af Frederik",
        title: "Samtale med",
        paragraph: "Frederik Brechmann",
        adresse: "Bregnør Bygade 72",
        city: "5300 Kerteminde",
        date: "31. maj",
        time: "kl 10.30 - 11.00",
    },
];

let currentIndex = 0;

const karruselSection = document.getElementById("karrusel");

slides.forEach(function(slide, index) {
    
    const slideElement = document.createElement('article');
    slideElement.classList.add('karrusel__slide');
    if (index === currentIndex) {
    slideElement.classList.add('karrusel__slide--active');
    }

    const imgElement = document.createElement('img');
    imgElement.classList.add('karrusel__image');
    imgElement.src = slide.image; 
    //* imgElement. og svo eh orð eftir á er notað þegar verið er að bæta nýju properties
    imgElement.alt = slide.alt; 
    //* það sem kemur eftir = þýðir að hver mynd fær sitt eigið

    const slideOverlay = document.createElement('div');
    //* í svoganum bakvið createElement þá er það HTML tag sem ég er að búa til
    slideOverlay.classList.add('karrusel__overlay');

    const slideContent = document.createElement('div');
    slideContent.classList.add('karrusel__content');
    
    const title = document.createElement('h2');
    title.classList.add('karrusel__title');
    title.textContent = slide.title;

    const adresse = document.createElement('p');
    adresse.classList.add('karrusel__text')
    adresse.textContent = slide.adresse;

    const city = document.createElement('p');
    city.classList.add('karrusel__text')
    city.textContent = slide.city;

    const date = document.createElement('p');
    date.classList.add('karrusel__text--date')
    date.textContent = slide.date;

    const time = document.createElement('p');
    time.classList.add('karrusel__text--time')
    time.textContent = slide.time;

    slideElement.appendChild(imgElement); 
    slideElement.appendChild(slideOverlay);
    slideOverlay.appendChild(slideContent);
    slideContent.appendChild(title);
    if (slide.paragraph) {
        const paragraph = document.createElement('p');
        paragraph.classList.add('karrusel__text');
        paragraph.textContent = slide.paragraph;
        slideContent.appendChild(paragraph);
        slideContent.appendChild(adresse);
        slideContent.appendChild(city);
        slideContent.appendChild(date);
        slideContent.appendChild(time);

    }
    karruselSection.appendChild(slideElement);
    //* Ég byggi elementið fyrst með öllum child-elements, og append-a það svo inn í containerinn í lokin.

});
