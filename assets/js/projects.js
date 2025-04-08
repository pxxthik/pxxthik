let projects = [
  {
    title: "Real Estate Data Science Application",
    description: "Get instant price estimates using our AI-powered valuation tool 🤖",
    category: "machine learning",
    image_link: "./assets/projects/house-with-garden.jpg",
    github_link: "https://github.com/pxxthik/Real-Estate-Data-Science",
    website_link: "https://pxxthik-capstone-real-estate.hf.space/",
    date: "20 April 2024",
  },
  {
    title: "TV Shows Analysis",
    description:
      "Analyzing TV shows, revealing viewer insights and market trends.",
    category: "analysis",
    image_link: "./assets/projects/tvshowsproj.jpg",
    github_link: "https://github.com/pxxthik/TV-Shows-Analysis",
    website_link: "https://tvshows.streamlit.app/",
    date: "12 Nov 2023",
  },
  {
    title: "Book Recommender System",
    description:
      "Book recommender with Collaborative Filtering & Nearest Neighbors.",
    category: "recommender",
    image_link: "./assets/projects/bookrecproj.jpg",
    github_link: "https://github.com/pxxthik/Book-Recommender-System",
    website_link: "https://book-recommender-cf.streamlit.app/",
    date: "4 Oct 2023",
  },
];

let project_container = document.getElementById("project_container");
for (let i = 0; i < projects.length; i++) {
  project_container.innerHTML += `
  <div class="proj-card-v2">
      <div class="proj-header-v2">
          <h3 class="proj-title-v2">${projects[i].title}</h3>
      </div>
      <div class="proj-image-container">
          <img src="${projects[i].image_link}" alt="${projects[i].title}">
      </div>
      <div class="proj-body-v2">
          <p class="proj-desc-v2">${projects[i].description}</p>
          <div class="proj-footer-v2">
              <div class="proj-meta">
                  <span><i class="uil uil-calendar-alt"></i> ${projects[i].date}</span>
              </div>
              <div class="proj-links-v2">
                  <a href="${projects[i].github_link}" class="proj-link-v2">
                      <i class="uil uil-code-branch"></i>
                  </a>
                  <a href="${projects[i].website_link}" target="_blank" class="proj-link-v2">
                      <i class="uil uil-external-link-alt"></i>
                  </a>
              </div>
          </div>
      </div>
  </div>`;
}
