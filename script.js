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
        desktopImage: "assets/trabacco.png",
        mobileImage: "assets/trabaccomobile.jpg"
    },
    {
        id: 2,
        title: "Point of Sale",
        desktopImage: "assets/pos.png",
        mobileImage: "assets/posmobile.jpg"
    },
    {
        id: 3,
        title: "Tabulation",
        desktopImage: "assets/tabulation.png",
        desktopImage2: "assets/tabulation1.png"
    },
    {
        id: 4,
        title: "Attendance Monitoring System",
        desktopImage: "assets/attendance.png",
        mobileImage: "assets/attendancemobile.jpg"
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
                ${project.desktopImage2
                    ? `<img class="desktop" src="${project.desktopImage2}" alt="${project.title} second image">`
                    : `<img class="mobile" src="${project.mobileImage}" alt="${project.title} mobile">`}
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