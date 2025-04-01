let skills = [
    {
        section: "Languages, Libraries & Frameworks",
        skills: ["Python", "SQL", "R", "Streamlit", "FastAPI", "Javascript", "NextJS", "MongoDB", "MySQL", "SQLite"],
    },
    {
        section: "ML, Data Analysis & Visualization",
        skills: ["Numpy", "Pandas", "Matplotlib", "Seaborn", "Power BI", "Plotly", "Scikit-learn", "XGBoost", "TensorFlow"],
    },
    {
        section: "Dev Tools & Workflows",
        skills: ["Docker", "Git", "DVC", "CI/CD Pipelines", "GitHub Actions", "MLflow", "AWS", "Cookiecutter", "VS Code"],
    },
]

const skillsSection = document.getElementById("skillsSection");

for (let i = 0; i < skills.length; i=i+2) {
    skillsSection.innerHTML += `
        <div class="row">
            <div class="col">
                <div class="skills-box">
                    <div class="skills-header">
                        <h3>${skills[i].section}</h3>
                    </div>
                    <div class="skills-list">
                        ${skills[i].skills.map((skill) => `<span>${skill}</span>`).join("")}
                    </div>
                </div>
            </div>
            ${skills[i + 1] ? `
            <div class="col">
                <div class="skills-box">
                    <div class="skills-header">
                        <h3>${skills[i+1].section}</h3>
                    </div>
                    <div class="skills-list">
                        ${skills[i+1].skills.map((skill) => `<span>${skill}</span>`).join("")}
                    </div>
                </div>
            </div>` : ''}
        </div>
    `;
}
