let blogs = [
  {
    title: "Making ML Workflows Easier with DVC: Versioning, Pipelines & Experiment Tracking",
    description:
      "Introduction: Machine Learning (ML) is no longer just about building models — it’s about building reproducible, scalable, and collaborative...",
    category: "mlops",
    link: "https://pxxthik.medium.com/making-ml-workflows-easier-with-dvc-versioning-pipelines-experiment-tracking-19ec5b28de6c",
    image_link:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*OzeqGxMCpLXbmeeeZPj9tw.png",
    date: "4 Apr 2025",
  },
  {
    title: "🔍 Exploring Engineering Graduate Salaries: A Case Study",
    description:
      "Introduction: Welcome to our case study exploring the factors influencing salaries among engineering graduates! In this analysis, we...",
    category: "case-study",
    link: "https://pxxthik.medium.com/exploring-engineering-graduate-salaries-a-case-study-25e9e79eae73",
    image_link:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*CKEHXuFkVZtsOZwZm4wPAA.jpeg",
    date: "20 Feb 2024",
  },
  {
    title: "Decoding the Skies: An SQL Odyssey with Flights Dataset Case-study",
    description:
      "Introduction Embark on a data-driven adventure with our SQL Flights Dataset case study! Download the dataset and join us in decoding the...",
    category: "sql",
    link: "https://pxxthik.medium.com/decoding-the-skies-an-sql-odyssey-with-flights-dataset-case-study-8cb541ded4a7",
    image_link:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*cQgFKk4v36rM-thJgrmlKw.jpeg",
    date: "10 Dec 2023",
  },
  {
    title:
      "Navigating the Numbers: A Deep Dive into US Accidents Through Data Analysis",
    description:
      "Introduction: Accidents on the road can have profound and far-reaching consequences, affecting lives, property, and overall societal..",
    category: "eda",
    link: "https://pxxthik.medium.com/navigating-the-numbers-a-deep-dive-into-us-accidents-through-data-analysis-dae140d002d5",
    image_link:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*SOgAK-xVXxvTwhcR59Zu6w.jpeg",
    date: "17 Nov 2023",
  },
  {
    title: "Unlocking Insights: A Smartphone Case Study Data Analysis",
    description:
      "Introduction Smartphones have become an indispensable part of our daily lives, revolutionizing the way we communicate, work, and play...",
    category: "eda",
    link: "https://pxxthik.medium.com/unlocking-insights-a-smartphone-case-study-data-analysis-dcc2f512fcde",
    image_link:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*1jEeZ4YIea_ltCSNyy_N_A.jpeg",
    date: "6 Nov 2023",
  },
  {
    title:
      "Titanic Data Analysis: Unveiling the Stories of Survival and Tragedy",
    description:
      "Introduction The sinking of the RMS Titanic is one of the most infamous maritime disasters in history, capturing the imagination of...",
    category: "eda",
    link: "https://pxxthik.medium.com/titanic-data-analysis-unveiling-the-stories-of-survival-and-tragedy-3b18c2326a18",
    image_link:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*DNEtaD25SVZQXcdoBssCMw.jpeg",
    date: "3 Nov 2023",
  },
];

let blog_container = document.getElementById("blog_container");
for (let i = 0; i < blogs.length; i++) {
  blog_container.innerHTML += `
    <div class="item-${i === 0 ? "1" : i + 1}">
        <a href="${blogs[i].link}" class="card">
        <div class="thumb" style="background-image: url(${
          blogs[i].image_link
        });"></div>
        <article>
            <h1>${blogs[i].title}</h1>
            <span>${blogs[i].category}</span>
        </article>
        </a>
    </div>`;
}