// lib/topics-data.js

// 1. MASTER LIST OF ALL TOPICS (For search & reference)
export const allTopics = [
  // AI & Machine Learning
  "AI & ML", "Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Generative AI",
  // Web Development
  "Web Development", "Frontend", "Backend", "Full-Stack", "JavaScript", "React", "Vue", "Angular", "Node.js", "Django", "Spring Boot",
  // Mobile Development
  "Mobile Development", "iOS", "Android", "React Native", "Flutter",
  // Data Science
  "Data Science", "Data Analysis", "Data Visualization", "SQL", "NoSQL", "Big Data", "PySpark", "Tableau", "Power BI",
  // DevOps & Cloud
  "DevOps", "CI/CD", "Cloud", "AWS", "Azure", "Docker", "Kubernetes", "Infrastructure",
  // Blockchain
  "Blockchain", "Web3", "Smart Contracts", "Solidity", "Ethereum", "DeFi", "NFTs",
  // Cybersecurity
  "Cybersecurity", "Ethical Hacking", "Privacy", "Network Security",
  // Career & Growth
  "Career", "Interview Prep", "LeetCode", "System Design", "Resume Tips", "Freelancing", "Remote Work",
  // Programming Languages
  "Python", "JavaScript", "Java", "C++", "Go", "Rust", "TypeScript",
  // Other Categories
  "Game Dev", "Unity", "Open Source", "IoT", "Arduino", "Raspberry Pi", "Debugging", "Memes"
];

// 2. CATEGORIES FOR FILTERING (References to topics in the master list)
export const categories = {
  "Trending": ["AI & ML", "Web Development", "JavaScript", "Python", "React", "Career"],
  "AI & ML": ["AI & ML", "Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Generative AI"],
  "Web Dev": ["Web Development", "Frontend", "Backend", "Full-Stack", "JavaScript", "React", "Vue", "Angular", "Node.js"],
  "Mobile": ["Mobile Development", "iOS", "Android", "React Native", "Flutter"],
  "Data": ["Data Science", "Data Analysis", "Data Visualization", "SQL", "NoSQL", "Big Data", "Tableau"],
  "DevOps": ["DevOps", "CI/CD", "Cloud", "AWS", "Docker", "Kubernetes"],
  "Blockchain": ["Blockchain", "Web3", "Smart Contracts", "Solidity", "Ethereum", "NFTs"],
  "Security": ["Cybersecurity", "Ethical Hacking", "Privacy", "Network Security"],
  "Career": ["Career", "Interview Prep", "LeetCode", "System Design", "Resume Tips", "Remote Work"],
  "Languages": ["Python", "JavaScript", "Java", "C++", "Go", "Rust", "TypeScript"],
  "Other": ["Game Dev", "Open Source", "IoT", "Debugging", "Memes"]
};

// 3. DEFAULT TOPICS (For new user suggestions)
export const defaultTopics = ["Web Development", "JavaScript", "Python", "Career", "AI & ML"];