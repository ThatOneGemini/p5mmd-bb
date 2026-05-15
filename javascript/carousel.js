
const slides = [
    {
        image: "benedikte.webp",
        alt: "Billede af Benedikte",
        title: "Mødes med",
        paragraph: "Benedikte Brechmann",
        adresse: "Bregnør Bygade 72",
        city: "5300 Kerteminde",
        date: "26. maj",
        time: "08.15 - 09.45",
    },

    {
        image: "bibi.webp",
        alt: "Billede af Bibi",
        title: "Samtale med",
        paragraph: "Bibi Foged Rasmussen",
        adresse: "Bregnør Bygade 72",
        city: "5300 Kerteminde",
        date: "26. maj",
        time: "11.30 - 12.00",
    },

    {
        image: "gronningen.webp",
        alt: "Villa til åbent hus på Grønningen i Munkebo",
        title: "Åbent hus",
        adresse: "Grønningen 24",
        city: "5330 Munkebo",
        date: "28. maj",
        time: "09.00 til 10.00",
    },

    {
        image: "mollevej.webp",
        alt: "Villa til åbent hus på Møllevej i Marslev",
        title: "Åbent hus",
        adresse: "Møllevej 10",
        city: "5290 Marslev",
        date: "30. maj",
        time: "09.00 til 10.00",
    },
    
    {
        image: "frederik.webp",
        alt: "Billede af Frederik",
        title: "Samtale med",
        paragraph: "Frederik Brechmann",
        adresse: "Bregnør Bygade 72",
        city: "5300 Kerteminde",
        date: "31. maj",
        time: "10.30 - 11.00",
    },
];

let currentIndex = 0;

const karruselSection = document.getElementById("karrusel");

const activeSlide = slides[currentIndex];

karruselSection.textContent = activeSlide.title + " " + activeSlide.paragraph;