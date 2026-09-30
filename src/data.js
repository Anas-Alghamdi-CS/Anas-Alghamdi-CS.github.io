// Language-neutral site data (names, URLs, tech stacks)
export const links = {
  github: 'https://github.com/Anas-Alghamdi-CS',
  linkedin: 'https://www.linkedin.com/in/anas-alghamdi-cs/',
  x: 'https://x.com/Anas_Algamdi_CS',
}

export const cvUrl = '/Anas Alghamdi - Resume.pdf'

export const projects = [
  { id: 'tripmate', stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind'], url: 'https://github.com/Anas-Alghamdi-CS/TripMate-Web-Platform' },
  { id: 'coworking', stack: ['Next.js', 'PostgreSQL', 'Tailwind', 'GitFlow'], url: 'https://github.com/Coworking-Pass-Team/Coworking_pass' },
  { id: 'hr', stack: ['CrewAI', 'Gemini API', 'Streamlit', 'Python'], url: 'https://github.com/Anas-Alghamdi-CS/AI_CV_Agent' },
]

export const metrics = [
  { id: 'engineers', value: 9, suffix: '+', decimals: 0 },
  { id: 'agents', value: 5, suffix: '', decimals: 0 },
  { id: 'hajj', value: 2, suffix: '', decimals: 0 },
  { id: 'gpa', value: 3.43, suffix: '', decimals: 2 },
]

// Skill levels (1-5) are a self-assessment; icon names map to lucide-react in Skills.jsx
export const skills = [
  { name: 'CrewAI', cat: 'ai', icon: 'Workflow', level: 4 },
  { name: 'Multi-Agent Systems', cat: 'ai', icon: 'Network', level: 4 },
  { name: 'Gemini API', cat: 'ai', icon: 'Sparkles', level: 4 },
  { name: 'Prompt Engineering', cat: 'ai', icon: 'MessageSquare', level: 4 },
  { name: 'Multimodal OCR', cat: 'ai', icon: 'ScanText', level: 3 },
  { name: 'Hugging Face NLP', cat: 'ai', icon: 'Brain', level: 3 },
  { name: 'Python', cat: 'ai', icon: 'Braces', level: 5 },
  { name: 'Streamlit', cat: 'ai', icon: 'Gauge', level: 4 },
  { name: 'Next.js', cat: 'fullstack', icon: 'Rocket', level: 4 },
  { name: 'React', cat: 'fullstack', icon: 'Atom', level: 4 },
  { name: 'Laravel', cat: 'fullstack', icon: 'Layers', level: 4 },
  { name: 'Node.js', cat: 'fullstack', icon: 'Server', level: 3 },
  { name: 'Express.js', cat: 'fullstack', icon: 'Blocks', level: 3 },
  { name: 'PHP', cat: 'fullstack', icon: 'FileCode', level: 4 },
  { name: 'JavaScript', cat: 'fullstack', icon: 'Code', level: 4 },
  { name: 'Java', cat: 'fullstack', icon: 'Cpu', level: 3 },
  { name: 'HTML5/CSS3', cat: 'fullstack', icon: 'Globe', level: 5 },
  { name: 'PostgreSQL', cat: 'fullstack', icon: 'Database', level: 4 },
  { name: 'MySQL', cat: 'fullstack', icon: 'Table', level: 4 },
  { name: 'Oracle SQL', cat: 'fullstack', icon: 'Database', level: 3 },
  { name: 'Docker', cat: 'tools', icon: 'Container', level: 4 },
  { name: 'Git & GitHub', cat: 'tools', icon: 'GitBranch', level: 5 },
  { name: 'GitFlow', cat: 'tools', icon: 'GitBranch', level: 5 },
  { name: 'Agile', cat: 'tools', icon: 'Users', level: 4 },
  { name: 'Power BI', cat: 'tools', icon: 'ChartColumn', level: 3 },
  { name: 'Data Analysis', cat: 'tools', icon: 'ChartColumn', level: 4 },
  { name: 'Linux', cat: 'tools', icon: 'Terminal', level: 4 },
]

// Payload printed by `skills --json` in the terminal
export const skillsJson = {
  ai: skills.filter((s) => s.cat === 'ai').map((s) => s.name),
  fullstack: skills.filter((s) => s.cat === 'fullstack').map((s) => s.name),
  tools: skills.filter((s) => s.cat === 'tools').map((s) => s.name),
}

// Simulated CrewAI pipeline shown by `run agent.py`
export const agentPipeline = ['manager', 'ocr_extractor', 'cv_parser', 'matcher', 'guardrail_auditor']
