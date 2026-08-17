const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// Project data
const projects = [
    {
        id: 1,
        title: "Trabacco: An Application for Tracking and Monitoring of Tobacco Production with Geo-Mapping",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desktopImage: "assets/trabacco.png",
        mobileImage: "assets/trabaccomobile.jpg"
    },
    {
        id: 2,
        title: "Project X",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desktopImage: "assets/profile.JPG",
        mobileImage: "assets/profile.JPG"
    },
    {
        id: 3,
        title: "Project X",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desktopImage: "assets/profile.JPG",
        mobileImage: "assets/profile.JPG"
    }
];

function openModal(projectId){
    const project = projects.find(p => p.id === projectId);
    if (project) {
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = `
            <div class="btnClose" onclick="closeModal()">
                <i class="fa-solid fa-x"></i>
            </div>
            <h1>${project.title}</h1>
            <div class="modal-images">
                <img class="desktop" src="${project.desktopImage}" alt="${project.title}">
                <img class="mobile" src="${project.mobileImage}" alt="${project.title} mobile">
            </div>
        `;
        document.getElementById("modal").classList.add("show");
    }
}

function closeModal(){
    document.getElementById("modal").classList.remove("show");
}

// Close modal when clicking on the backdrop
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});