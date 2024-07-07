const Mars = document.getElementById("Mars");
const Titan = document.getElementById("Titan");
const Europa = document.getElementById("Europa");
const Moon = document.getElementById("Moon");
const MoonStyler = document.getElementById("mon");
const EuropaStyler = document.getElementById("euro");
const TitanStyler = document.getElementById("tita");
const MarsStyler = document.getElementById("mar");



const description = document.getElementById("Description"); // Corrected the ID here
const distance = document.getElementById("distance");
const travel = document.getElementById("Travel"); // Corrected the ID here
const PlanetName = document.getElementById("PlanetName");
const image = document.getElementById("Image");

Mars.addEventListener("click", function() {
    PlanetName.style.opacity="0";
    distance.style.opacity="0";
    travel.style.opacity="0";
    description.style.opacity="0";
    const newImageSrc = "./assets/destination/image-mars.webp";

    // Apply the transition by changing the opacity of the image
    image.style.opacity = "0";

    // Set a short timeout to update the image source after the transition begins
    setTimeout(function() {
        image.src = newImageSrc;
        image.style.opacity = "1";
        description.innerHTML =  "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest,Can you hear the call of the wild?";
        PlanetName.innerHTML = "MARS"; // Also set the planet name when Mars is clicked
        distance.innerHTML = "225 KM";
        travel.innerHTML = "9 Months";
        PlanetName.style.opacity="1";
        distance.style.opacity="1";
        travel.style.opacity="1";
        description.style.opacity="1";
    }, 500);
    MoonStyler.style.removeProperty("border-bottom");
    EuropaStyler.style.removeProperty("border-bottom");
    TitanStyler.style.removeProperty("border-bottom");
    MarsStyler.style.borderBottom = "5px solid aliceblue";
});

Titan.addEventListener("click", function() {
    PlanetName.style.opacity="0";
    distance.style.opacity="0";
    travel.style.opacity="0";
    description.style.opacity="0";
    const newImageSrc = "./assets/destination/image-titan.webp";

    // Apply the transition by changing the opacity of the image
    image.style.opacity = "0";

    // Set a short timeout to update the image source after the transition begins
    setTimeout(function() {
        image.src = newImageSrc;
        image.style.opacity = "1";
        description.innerHTML =  "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn";
        PlanetName.innerHTML = "TITAN"; // Also set the planet name when Titan is clicked
        distance.innerHTML = "1.6 Billion KM";
        travel.innerHTML = "7 Years";
        PlanetName.style.opacity="1";
        distance.style.opacity="1";
        travel.style.opacity="1";
        description.style.opacity="1";
    }, 500);
    MoonStyler.style.removeProperty("border-bottom");
    EuropaStyler.style.removeProperty("border-bottom");
    MarsStyler.style.removeProperty("border-bottom");
    TitanStyler.style.borderBottom = "5px solid aliceblue";

});

Europa.addEventListener("click", function() {
    PlanetName.style.opacity="0";
    distance.style.opacity="0";
    travel.style.opacity="0";
    description.style.opacity="0";
    const newImageSrc = "./assets/destination/image-europa.webp";

    // Apply the transition by changing the opacity of the image
    image.style.opacity = "0";

    // Set a short timeout to update the image source after the transition begins
    setTimeout(function() {
        image.src = newImageSrc;
        image.style.opacity = "1";
        PlanetName.innerHTML = "EUROPA"; // Also set the planet name when Moon is clicked
        PlanetName.style.opacity="1";
        distance.innerHTML = "628 KM";
        distance.style.opacity="1";
        travel.innerHTML = "3 Years";
        travel.style.opacity="1";
        description.innerHTML ="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
        description.style.opacity="1";
    }, 500);
    MoonStyler.style.removeProperty("border-bottom");
    MarsStyler.style.removeProperty("border-bottom");
    TitanStyler.style.removeProperty("border-bottom");
    EuropaStyler.style.borderBottom = "5px solid aliceblue";
});

Moon.addEventListener("click", function() {
    PlanetName.style.opacity="0";
    distance.style.opacity="0";
    travel.style.opacity="0";
    description.style.opacity="0";
    const newImageSrc = "./assets/destination/image-moon.webp";

    // Apply the transition by changing the opacity of the image
    image.style.opacity = "0";

    // Set a short timeout to update the image source after the transition begins
    setTimeout(function() {
        image.src = newImageSrc;
        image.style.opacity = "1";
        PlanetName.innerHTML = "MOON"; // Also set the planet name when Moon is clicked
        PlanetName.style.opacity="1";
        distance.innerHTML = "384,400 KM";
        distance.style.opacity="1";
        travel.innerHTML = "3 Days";
        travel.style.opacity="1";
        description.innerHTML = "The Moon is an astronomical body orbiting Earth as its only natural satellite. It is the fifth-largest satellite in the Solar System, and by far the largest among planetary satellites relative to the size of the planet that it orbits.";
        description.style.opacity="1";
    }, 500);
    EuropaStyler.style.removeProperty("border-bottom");
    MarsStyler.style.removeProperty("border-bottom");
    TitanStyler.style.removeProperty("border-bottom");
    MoonStyler.style.borderBottom = "5px solid aliceblue";
});



