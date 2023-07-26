const Pilot= document.getElementById("Pilot");
const Commander= document.getElementById("Commander");
const MissionSpecialist= document.getElementById("Mission");
const Flight= document.getElementById("Flight Engineer");


const pilotStyler = document.getElementById("pil");
const commanderStyler = document.getElementById("com");
const missionStyler = document.getElementById("Miss");
const flightStyler = document.getElementById("flight");

const role = document.getElementById("role");
const description = document.getElementById("descript");
const name = document.getElementById("Name");
const Image= document.getElementById("Photo");


Pilot.addEventListener("click", function() {
   commanderStyler.style.removeProperty("border-bottom");
    missionStyler.style.removeProperty("border-bottom");
    flightStyler.style.removeProperty("border-bottom");
    pilotStyler.style.borderBottom = "5px solid aliceblue";

    role.style.opacity="0";
    description.style.opacity="0";
    name.style.opacity="0";
    Image.style.opacity="0";
    const newImageSrc = "./assets/crew/image-victor-glover.webp";
setTimeout(function() {
   role.innerHTML = "PILOT";
   description.innerHTML="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
   name.innerHTML="Victor Glover";
    Image.src = newImageSrc;
    role.style.opacity="1";
    description.style.opacity="1";
    name.style.opacity="1";
    Image.style.opacity="1";
}, 500);


});

Commander.addEventListener("click", function() {
    pilotStyler.style.removeProperty("border-bottom");
    missionStyler.style.removeProperty("border-bottom");
    flightStyler.style.removeProperty("border-bottom");
    commanderStyler.style.borderBottom = "5px solid aliceblue";
    role.style.opacity="0";
    description.style.opacity="0";
    name.style.opacity="0";
    Image.style.opacity="0";
    const newImageSrc = "./assets/crew/image-douglas-hurley.webp";
setTimeout(function() {
    role.innerHTML = "COMMANDER";
    description.innerHTML="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    name.innerHTML="Douglas Hurley";
     Image.src = newImageSrc;
     role.style.opacity="1";
     description.style.opacity="1";
     name.style.opacity="1";
     Image.style.opacity="1";
}, 500);
});

MissionSpecialist.addEventListener("click", function() {
    pilotStyler.style.removeProperty("border-bottom");
    commanderStyler.style.removeProperty("border-bottom");
    flightStyler.style.removeProperty("border-bottom");
    missionStyler.style.borderBottom = "5px solid aliceblue";
    role.style.opacity="0";
    description.style.opacity="0";
    name.style.opacity="0";
    Image.style.opacity="0";
    const newImageSrc = "./assets/crew/image-mark-shuttleworth.webp";
setTimeout(function() {
    role.innerHTML = "MISSION SPECIALIST";
    description.innerHTML="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    name.innerHTML="Mark Shuttleworth";
     Image.src = newImageSrc;
     role.style.opacity="1";
     description.style.opacity="1";
     name.style.opacity="1";
     Image.style.opacity="1";

}, 500);
});

Flight.addEventListener("click", function() {
    pilotStyler.style.removeProperty("border-bottom");
    commanderStyler.style.removeProperty("border-bottom");
    missionStyler.style.removeProperty("border-bottom");
    flightStyler.style.borderBottom = "5px solid aliceblue";
    role.style.opacity="0";
    description.style.opacity="0";
    name.style.opacity="0";
    Image.style.opacity="0";
    const newImageSrc = "./assets/crew/image-anousheh-ansari.webp";
setTimeout(function() {
    role.innerHTML = "FLIGHT ENGINEER";
    description.innerHTML="Anousheh Ansari is an Iranian-American engineer and co-founder and chairwoman of Prodea Systems. Her previous business accomplishments include serving as co-founder and CEO of Telecom Technologies, Inc.";
    name.innerHTML="Anousheh Ansari";
     Image.src = newImageSrc;
     role.style.opacity="1";
     description.style.opacity="1";
     name.style.opacity="1";
     Image.style.opacity="1";
}
, 500);
});
