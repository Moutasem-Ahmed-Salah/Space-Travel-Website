const LaunchVehicle = document.getElementById("vehicle");
const capsule = document.getElementById("capsule");
const SpacePort = document.getElementById("spaceport");

const title = document.getElementById("Title");
const description = document.getElementById("Description");
const image = document.getElementById("Image");

function handleButtonClick(event) {

    document.querySelectorAll(".toggle-button").forEach(button => {
        button.classList.remove("hover");
    });


    event.target.classList.add("hover");


    if (event.target.id === "capsule") {
        title.style.opacity = "0";
        description.style.opacity = "0";
        image.style.opacity = "0";

        const newImageSrc = "./assets/technology/image-space-capsule-portrait.jpg";

        image.style.opacity = "0";

        setTimeout(function () {
            image.src = newImageSrc;
            image.style.opacity = "1";
            title.innerHTML = "Space Capsule";
            description.innerHTML =
                "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
            title.style.opacity = "1";
            description.style.opacity = "1";
        }, 500);
    }

    else if(event.target.id==="vehicle") {
        title.style.opacity = "0";
        description.style.opacity = "0";
        image.style.opacity = "0";

        const newImageSrc = "./assets/technology/image-spaceport-portrait.jpg";

        image.style.opacity = "0";

        setTimeout(function () {
            image.src = newImageSrc;
            image.style.opacity = "1";
            title.innerHTML = "Launch Vehicle";
            description.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
            title.style.opacity = "1";
            description.style.opacity = "1";
        }, 500);

    }

    else if(event.target.id==="spaceport") {
        title.style.opacity = "0";
        description.style.opacity = "0";
        image.style.opacity = "0";

        const newImageSrc = "./assets/technology/image-spaceport-portrait.jpg";

        image.style.opacity = "0";

        setTimeout(function () {
image.src = newImageSrc;
            image.style.opacity = "1";
            title.innerHTML = "Spaceport";
            description.innerHTML =
                "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            title.style.opacity = "1";
            description.style.opacity = "1";
        }, 500);

        }


}

// Attach the click event listener to each button
document.querySelectorAll(".toggle-button").forEach(button => {
    button.addEventListener("click", handleButtonClick);
});



