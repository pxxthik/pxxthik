let experiences = [
    {
        icon: "uil uil-chart-bar",
        expDate: "Dec 2024 - Jan 2025",
        expTitle: "Data Analytics Internship",
        expCompany: "Tekkybench",
        expSkills: ["Python", "Numpy", "Pandas", "PowerBI"],
        expLists: [
            "Analyzed large datasets to uncover trends and insights, enhancing data-driven decision-making.",
            "Performed data cleaning, preprocessing, and visualization using Python and SQL.",
            "Created interactive dashboards and reports to present key metrics and business insights.",
            "Applied statistical techniques to identify patterns, correlations, and anomalies in data.",
            "Worked with cross-functional teams to interpret data and provide actionable recommendations."
        ]
    },
    {
        icon: "uil uil-brain",
        expDate: "Jun 2024 - July 2024",
        expTitle: "Machine Learning Internship",
        expCompany: "Codsoft",
        expSkills: ["NLP", "EDA", "Model Building"],
        expLists: [
            "Developed an NLP model for Movie Genre Classification using text preprocessing, feature extraction, and model evaluation",
            "Built a machine learning model for Credit Card Fraud Detection, applying anomaly detection techniques and data balancing strategies.",
            " Implemented Customer Churn Prediction by exploring feature engineering techniques and developing predictive models to reduce churn rates.",
            "Created a Spam SMS Detection system using NLP pipelines and classification models, enhancing secure communication."
        ]
    },
    {
        icon: "uil uil-award",
        expDate: "Feb 2024",
        expTitle: "Kaggle Competition",
        expCompany: "Kaggle",
        expSkills: ["Machine Learning", "Deep Learning", "MLP"],
        expLists: [
            `Achieved 3rd place in Kaggle's <a target="_blank" href="https://www.kaggle.com/competitions/yamunas-odyssey-a-dream-to-conquer-iit-jammu/leaderboard">Yamuna's Odyssey</a> competition`,
            "Utilizing a Multi-Layer Perceptron (MLP) model to predict student success in competitive exams",
            "Achieved 3rd place with 97.2% Accuracy."
        ]
    }
]

const expTimeline = document.getElementById("expTimeline");

for (let i = 0; i < experiences.length; i++) {
    expTimeline.innerHTML += `
        <div class="exp-item">
            <div class="exp-icon">
                <i class="${experiences[i].icon}"></i>
            </div>
            <div class="exp-content">
                <span class="exp-date">${experiences[i].expDate}</span>
                <h3>${experiences[i].expTitle}</h3>
                <span class="exp-company">${experiences[i].expCompany}</span>
                <div class="exp-skills">
                    ${experiences[i].expSkills.map((skill) => `<span>${skill}</span>`).join("")}
                </div>
                <ul class="exp-list">
                    ${experiences[i].expLists.map((list) => `<li>${list}</li>`).join("")}
                </ul>
            </div>
        </div>
    `;
}
