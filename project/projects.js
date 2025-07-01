// Projects data
const projects = [
    {
        title: "Modular Group Expense Manager in C++",
        techStack: ["C++ STL", "OOP", "Design Patterns"],
        features: [
            "Built a group expense manager with Equal, Exact, and Percentage splits",
            "Used Strategy, Observer, Factory, Singleton, and Facade design patterns",
            "Added debt simplification using greedy matching to reduce settlements"
        ],
        link: "https://github.com/akro-kgp/SplitWiseLLD",
        linkText: "View on GitHub"
    },
    {
        title: "C++ Dictionary Using TRIES",
        techStack: ["C++", "Tries", "File I/O"],
        features: [
            "Implemented Trie-based search for dictionary meanings and rhyming words",
            "Used CSV parsing to process 100,000+ word entries with meanings and parts of speech",
            "Designed rhyming matcher based on pronunciation suffixes"
        ],
        link: "https://github.com/akro-kgp/TRIE_BASED_DICTN",
        linkText: "View on GitHub"
    },
    {
        title: "Medical Chatbot with Custom RAG",
        techStack: ["Python", "FAISS", "HuggingFace","Langchain"],
        features: [
            "Built domain-specific chatbot using custom RAG pipeline",
            "Parsed 600+ pages of clinical data into semantic chunks",
            "Integrated quantized LLM (Gemma-2B) with top-k retrieval"
        ],
        link: "https://github.com/akro-kgp",
        linkText: "Hit me up for details!"
    },
    {
        title: "Interactive Movie Search App with Live Trends",
        techStack: ["React.js","Tailwind CSS", "OMDB API", "Appwrite (BaaS)"],
        features: [
            "Built a responsive React app to fetch and search movie details",
            "Used OMDB API and real-time BaaS to log and display search queries",
            "Homepage ranks top 3 searched movies dynamically"
        ],
        link: "https://github.com/akro-kgp/Movies_BaaS",
        linkText: "View on GitHub"
    },
    {
        title: "MERN ThinkBoard",
        techStack: ["React.js", "Tailwind CSS", "Express.js", "MongoDB", "Redis","Node.js"],
        features: [
            "Built a fullstack note-taking app with 3-page interface for CRUD ops",
            "Created REST APIs and modular Express middleware for routing",
            "Integrated Redis-based rate limiting using Upstash"
        ],
        link: "https://github.com/akro-kgp/Think_Board",
        linkText: "View on GitHub"
    }
];

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tech">
                    ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            <ul class="project-features">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <a href="${project.link}" target="_blank" class="project-link">
                <i class="fas fa-external-link-alt"></i>
                ${project.linkText}
            </a>
        </div>
    `;
}

// Function to render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
    }
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);