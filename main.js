const contactInfo = document.querySelector(".contact-info")
const closeContactButton = document.querySelector(".close-contact-button")
const contactMeButton = document.querySelector(".contact-me-button")
const aboutDesDiv = document.querySelector(".about-desc")

//------nav buttons-----

const onNavHomeClick = () => {
    document.querySelector("#home-container").scrollIntoView({behavior: "smooth"});
}
const onNavAboutClick = () => {
    document.querySelector("#about-container").scrollIntoView({behavior: "smooth"});
}
const onNavProjectClick = () => {
    document.querySelector("#project-container").scrollIntoView({behavior: "smooth"});
}

//-----------------------------

const contactButton = () => {
    contactInfo.style.display = "block";
    contactMeButton.style.display = "none";
    closeContactButton.style.display = "block";
}

const closeContactFn = () =>{
    contactInfo.style.display = "none";
    contactMeButton.style.display = "block";
    closeContactButton.style.display = "none";
}

//--------clipboard copy function
const copyEmail = () => {
    navigator.clipboard.writeText("karanyash1111@gmail.com")
    .then( () => {
        alert("copied to clipboard")
    })
    .catch( () => {
        alert("something went wrong!")
    })
}

const copyNumber = () => {
    navigator.clipboard.writeText("7838898851");
    alert("copied to clipboard");
}

// ------------- closing and opeing of Qualification--------- 
const onQualificationClick = () => {
    document.querySelector("#qualificationDesc").style.display = "block"
}
const onCloseQualiClick = () => {
    document.querySelector("#qualificationDesc").style.display = "none"
}

// ------------- closing and opeing of Skills--------- 
const onSkillsClick = () => {
    document.querySelector("#skillsDesc").style.display = "block"
}
const onCloseSkillClick = () => {
    document.querySelector("#skillsDesc").style.display = "none"
}

// ------------- closing and opeing of Work--------- 
const onWorkClick = () => {
    document.querySelector("#workDesc").style.display = "block"
}
const onCloseWork = () => {
    document.querySelector("#workDesc").style.display = "none"
}


