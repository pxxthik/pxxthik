function toggleCertification(header) {
    const content = header.nextElementSibling;
    const accordion = header.parentElement;
    
    // Close all other accordions
    const allAccordions = document.querySelectorAll('.cert-accordion');
    allAccordions.forEach(acc => {
        if (acc !== accordion) {
            acc.querySelector('.cert-header').classList.remove('active');
            acc.querySelector('.cert-content').classList.remove('active');
        }
    });
    
    // Toggle current accordion
    header.classList.toggle('active');
    content.classList.toggle('active');
}

let certificates = [
    {
        title: "Data Science Mentorship Program (DSMP)",
        platform: "CampusX",
        provider_name: "Nitish Singh",
        completed_date: "20th April 2024",
        issued_date: "19th February 2025",
        description: "The CampusX Data Science Mentorship Program is designed to make you an industry-ready data scientist. The core philosophy behind the design of this program is its hands-on approach. Each module under the program consists of a plethora of assignments and projects. During the course, I was exposed to an industry-relevant curriculum, tools, and libraries, including real-life case studies to ensure practical learning. The program also focused on interview preparation and included doubt clearance classes for paid members. In addition, portfolio building and career counseling were prioritized to ensure a successful career transition into data science. The program helped me develop the skills and knowledge necessary to become a competent data scientist.",
        skills: [
            "Python",
            "Data Analysis",
            "EDA",
            "SQL",
            "Statistics",
            "EDA",
            "Machine Learning",
            "MLOps"
        ],
        image_url: "assets/certificates/dsmp1.png",
        actions: {
            view_certificate: "https://drive.google.com/file/d/1YvogiN-iRL7BtIOz-ty-DlT4UaAwauXL/view?usp=sharing",
            course_details: "https://learnwith.campusx.in/"
        }
    },
    {
        "title": "Data Science and Machine Learning Basic to Advanced",
        "platform": "Udemy",
        "provider_name": "Raj Chhabria",
        "completed_date": "5th July 2025",
        "issued_date": "5th July 2025",
        "description": "This course provides a comprehensive understanding of data science and machine learning, covering fundamental concepts, algorithms, and techniques. The course includes practical applications, coding in Python, and various machine learning models, making it suitable for beginners and advanced learners. The course also focuses on real-world projects to build hands-on experience and understanding of key data science concepts.",
        "skills": [
            "Python",
            "Machine Learning",
            "Data Science",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Scikit-learn",
            "Data Visualization",
            "Supervised Learning",
            "Unsupervised Learning"
        ],
        "image_url": "assets/certificates/ds-and-ml-by-raj.jpg",
        "actions": {
            "view_certificate": "https://drive.google.com/file/d/1UEOwUUFXcM0V520vh4e0G5MlFR0Bq8Ti/view?usp=sharing",
            "course_details": "https://www.udemy.com/course/data-science-and-machine-learning-basic-to-advanced/"
        }
  
    },
    {
        "title": "Python And Django Framework For Beginners Complete Course",
        "platform": "Udemy",
        "provider_name": "Horizon Tech",
        "completed_date": "5th July 2025",
        "issued_date": "5th July 2025",
        "description": "This course offers a comprehensive introduction to Python programming and the Django web framework. It covers the basics of Python programming and helps you understand how to develop web applications using Django. The course includes hands-on projects, guiding you through real-world scenarios to build fully functional web applications. It is ideal for beginners who are looking to learn Python and Django for web development.",
        "skills": [
        "Python",
        "Django",
        "Web Development",
        "HTML",
        "CSS",
        "JavaScript",
        "Backend Development",
        "Database Management",
        "RESTful APIs"
        ],
        "image_url": "assets/certificates/python-django.jpg",
        "actions": {
        "view_certificate": "https://drive.google.com/file/d/19yRu-Wabz3DSXcGIjQtrrRH4vWXD3oCj/view?usp=sharing",
        "course_details": "https://www.udemy.com/course/python-and-django-for-beginners/"
        }
    }
]

const certificationContainer = document.getElementById("certificationContainer");
for (let i = 0; i < certificates.length; i++) {
    certificationContainer.innerHTML += `
        <div class="cert-accordion">
            <div class="cert-header ${i===0 ? "active" : ""}" onclick="toggleCertification(this)">
                <div class="cert-info">
                    <h3 class="cert-title">${certificates[i].title}</h3>
                    <div class="cert-provider">
                        <span class="cert-platform">${certificates[i].platform}</span>
                        <span class="cert-provider-name">${certificates[i].provider_name}</span>
                    </div>
                    <div class="cert-date">Completed: ${certificates[i].completed_date}</div>
                </div>
                <div class="cert-toggle">
                    <i class="uil uil-angle-down"></i>
                </div>
            </div>
            <div class="cert-content ${i===0 ? "active" : ""}">
                <p class="cert-description">${certificates[i].description}</p>
                <div class="cert-skills">
                    ${certificates[i].skills.map(skill => `<span class="cert-skill">${skill}</span>`).join(' ')}
                </div>
                <div class="cert-image-container">
                    <img src="${certificates[i].image_url}"
                        alt="${certificates[i].title}" class="cert-image">
                </div>
                <div class="cert-actions">
                    <a href="${certificates[i].actions.view_certificate}" target="_blank" class="cert-btn cert-btn-primary">
                        <i class="uil uil-certificate"></i>
                        View Certificate
                    </a>
                    <a href="${certificates[i].actions.course_details}" target="_blank" class="cert-btn cert-btn-secondary">
                        <i class="uil uil-external-link-alt"></i>
                        Course Details
                    </a>
                </div>
            </div>
        </div>
    `;
}
