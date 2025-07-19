let certificates = [
    {
        title: "Data Science Mentorship Program (DSMP)",
        platform: "CampusX",
        provider_name: "Nitish Singh",
        completed_date: "20th April 2024",
        issued_date: "19th February 2025",
        description: "The CampusX Data Science Mentorship Program is designed to make you an industry-ready data scientist. The core philosophy behind the design of this program is its hands-on approach. Each module under the program consists of a plethora of assignments and projects.",
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
        image_url: "assets/certificates/dsmp1.webp",
        actions: {
            view_certificate: "https://drive.google.com/file/d/1YvogiN-iRL7BtIOz-ty-DlT4UaAwauXL/view?usp=sharing",
            course_details: "https://learnwith.campusx.in/"
        }
    },
    {
        title: "AWS Certified SysOps Administrator – Associate",
        platform: "Udemy",
        provider_name: "EDUCBA Bridging the Gap",
        completed_date: "7th June 2025",
        issued_date: "6th July 2025",
        description: "This course covers all the core topics required for the AWS Certified SysOps Administrator Associate certification. It includes comprehensive training on AWS infrastructure, monitoring, automation, troubleshooting, and deployment.",
        skills: [
            "AWS",
            "Cloud Computing",
            "EC2",
            "S3",
            "IAM",
            "Monitoring and Metrics",
            "Automation",
            "Troubleshooting",
            "Deployment",
            "SysOps"
        ],
        image_url: "assets/certificates/aws.webp",
        actions: {
            view_certificate: "https://drive.google.com/file/d/1MJ4x9nhLzsd7DlwySqDGCjeYEHSDZnEP/view?usp=sharing",
            course_details: "https://www.udemy.com/course/aws-certified-sysops-administrator-associate-c/"
        }
    },
    {
        "title": "Data Science and Machine Learning Basic to Advanced",
        "platform": "Udemy",
        "provider_name": "Raj Chhabria",
        "completed_date": "2nd January 2025",
        "issued_date": "5th July 2025",
        "description": "This course provides a comprehensive understanding of data science and machine learning, covering fundamental concepts, algorithms, and techniques. The course includes practical applications, coding in Python, and various machine learning models.",
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
        "image_url": "assets/certificates/ds-and-ml-by-raj.webp",
        "actions": {
            "view_certificate": "https://drive.google.com/file/d/1UEOwUUFXcM0V520vh4e0G5MlFR0Bq8Ti/view?usp=sharing",
            "course_details": "https://www.udemy.com/course/data-science-and-machine-learning-basic-to-advanced/"
        }
    },
    {
        "title": "Python And Django Framework For Beginners Complete Course",
        "platform": "Udemy",
        "provider_name": "Horizon Tech",
        "completed_date": "11th November 2023",
        "issued_date": "5th July 2025",
        "description": "This course offers a comprehensive introduction to Python programming and the Django web framework. It covers the basics of Python programming and helps you understand how to develop web applications using Django.",
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
        "image_url": "assets/certificates/python-django.webp",
        "actions": {
        "view_certificate": "https://drive.google.com/file/d/19yRu-Wabz3DSXcGIjQtrrRH4vWXD3oCj/view?usp=sharing",
        "course_details": "https://www.udemy.com/course/python-and-django-for-beginners/"
        }
    }
];

let currentSlide = 0;
let isAutoPlaying = true;
let autoPlayInterval;

function initializeCarousel() {
    const certificationContainer = document.getElementById("certificationContainer");
    
    // Create carousel structure
    certificationContainer.innerHTML = `
        <div class="carousel-container">
            <div class="carousel-wrapper">
                <div class="carousel-track" id="carouselTrack">
                    ${certificates.map((cert, index) => createCertSlide(cert, index)).join('')}
                </div>
            </div>
            <button class="carousel-btn carousel-btn-prev" onclick="previousSlide()">
                <i class="uil uil-angle-left"></i>
            </button>
            <button class="carousel-btn carousel-btn-next" onclick="nextSlide()">
                <i class="uil uil-angle-right"></i>
            </button>
            <div class="carousel-dots">
                ${certificates.map((_, index) => 
                    `<button class="carousel-dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></button>`
                ).join('')}
            </div>
        </div>
    `;

    updateCarousel();
    startAutoPlay();
}

function createCertSlide(cert, index) {
    return `
        <div class="carousel-slide">
            <div class="cert-card">
                <div class="cert-visual">
                    <div class="cert-icon">
                        <i class="uil uil-award"></i>
                    </div>
                    <div class="cert-image-container">
                        <img src="${cert.image_url}" alt="${cert.title}" class="cert-image">
                    </div>
                </div>
                <div class="cert-content">
                    <div class="cert-header">
                        <h3 class="cert-title">${cert.title}</h3>
                        <div class="cert-provider">
                            <span class="cert-platform">${cert.platform}</span>
                            <span class="cert-provider-name">${cert.provider_name}</span>
                        </div>
                    </div>
                    <p class="cert-description">${cert.description}</p>
                    <div class="cert-skills">
                        ${cert.skills.slice(0, 6).map(skill => `<span class="cert-skill">${skill}</span>`).join('')}
                        ${cert.skills.length > 6 ? '<span class="cert-skill-more">+' + (cert.skills.length - 6) + ' more</span>' : ''}
                    </div>
                    <div class="cert-date">Completed: ${cert.completed_date}</div>
                    <div class="cert-actions">
                        <a href="${cert.actions.view_certificate}" target="_blank" class="cert-btn cert-btn-primary">
                            <i class="uil uil-eye"></i>
                            View
                        </a>
                        <a href="${cert.actions.course_details}" target="_blank" class="cert-btn cert-btn-secondary">
                            <i class="uil uil-external-link-alt"></i>
                            Course
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % certificates.length;
    updateCarousel();
    resetAutoPlay();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + certificates.length) % certificates.length;
    updateCarousel();
    resetAutoPlay();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    resetAutoPlay();
}

let isFirstSlideLoaded = false;
function startAutoPlay() {
    if (isAutoPlaying) {
        // Check if this is the first time starting autoplay
        if (!isFirstSlideLoaded) {
            isFirstSlideLoaded = true;
            setTimeout(() => {
                autoPlayInterval = setInterval(nextSlide, 5000); // Start autoplay after 3-4 seconds
            }, 6000); // Delay the first slide for 4 seconds
        } else {
            autoPlayInterval = setInterval(nextSlide, 5000); // Regular autoplay interval
        }
    }
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Pause autoplay on hover
function pauseAutoPlay() {
    isAutoPlaying = false;
    stopAutoPlay();
}

function resumeAutoPlay() {
    isAutoPlaying = true;
    startAutoPlay();
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('certificationContainer')) {
        initializeCarousel();
        
        // Add hover events for autoplay control
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', pauseAutoPlay);
            carouselContainer.addEventListener('mouseleave', resumeAutoPlay);
        }
    }
});

// Handle keyboard navigation
document.addEventListener('keydown', function(e) {
    if (document.querySelector('.carousel-container')) {
        if (e.key === 'ArrowLeft') {
            previousSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    updateCarousel();
});
