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



// ---------------Scroll animations-------------- //
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

// ---------------- scroll to home animation ------------- //
let onScrollToHome = new IntersectionObserver( enteries =>{
    enteries.forEach( entry => {
        if(entry.isIntersecting){
            document.getElementById("profile-image").classList.add('image-animation')
            document.getElementById("introduction-card").classList.add('introduction-card-animation')
            return
        }
        document.getElementById("introduction-card").classList.remove('introduction-card-animation')
        document.getElementById("profile-image").classList.remove('image-animation')

    })
}, options)

onScrollToHome.observe(document.getElementById("home-container"))

// ---------------- scroll to home animation end ------------- //

// ---------------- scroll to about animation ------------- //

let onScrollToAbout = new IntersectionObserver( enteries => {
    enteries.forEach(entry => {

        if(entry.isIntersecting){
            document.getElementById('qualificationBtn').classList.add('qualification-button-animation')
            document.getElementById('skillsBtn').classList.add('skills-button-animation')
            document.getElementById('workBtn').classList.add('work-button-animation')
            return
        }
        document.getElementById('qualificationBtn').classList.remove('qualification-button-animation')
        document.getElementById('skillsBtn').classList.remove('skills-button-animation')
        document.getElementById('workBtn').classList.remove('work-button-animation')
    })
}, options)
onScrollToAbout.observe(document.getElementById('about-container'))

// ---------------- scroll to home animation end ------------- //

// ---------------- scroll to project animation ------------- //

let onScrollToProject = new IntersectionObserver(enteries=>{

    enteries.forEach( entry=>{

        if(entry.isIntersecting){
            document.getElementById("project-cards").classList.add('project-animation')
            return;
        }
        document.getElementById("project-cards").classList.remove('project-animation')
    })
}, options)

onScrollToProject.observe(document.getElementById('project-container'))

// ---------------- scroll to project animation end------------- //