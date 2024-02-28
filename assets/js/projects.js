let projects = [
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
  for(let i=0; i<projects.length; i++){
    project_container.innerHTML += `
    <div class="project-box">
        <img src="${projects[i].image_link}" alt="">
        <h3>${projects[i].title}</h3>
        <label>${projects[i].description}</label>
        <div class="featured-text-btn">
            <a href="${projects[i].github_link}" class="btn blue-btn sm-btn">Github</a>
            <a href="${projects[i].website_link}" class="btn sm-btn">Live Demo</a>
        </div>
    </div>`
  }