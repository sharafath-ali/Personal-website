export const SkillCategories = {
  Frontend: [
    { label: "React.js", emoji: "⚛️" },
    { label: "JavaScript", emoji: "🟨" },
    { label: "TypeScript", emoji: "🔷" },
    { label: "HTML & CSS", emoji: "🌐" },
    { label: "TailwindCSS", emoji: "💨" },
    { label: "Redux Toolkit", emoji: "🔄" },
    { label: "React Router", emoji: "🗺️" },
    { label: "Framer Motion", emoji: "🎬" },
    { label: "React Query", emoji: "🔃" },
    { label: "Material-UI", emoji: "🎨" },
    { label: "Styled Components", emoji: "💅" },
    { label: "Zustand", emoji: "🐻" },
  ],
  Backend: [
    { label: "Node.js", emoji: "🟩" },
    { label: "Express.js", emoji: "⚡" },
    { label: "MongoDB", emoji: "🍃" },
    { label: "Mongoose", emoji: "🔗" },
    { label: "Socket.IO", emoji: "🔌" },
    { label: "REST APIs", emoji: "🛠️" },
    { label: "JWT Auth", emoji: "🔑" },
    { label: "bcrypt", emoji: "🔒" },
    { label: "MVC Pattern", emoji: "🏗️" },
    { label: "EJS / SSR", emoji: "📄" },
  ],
  Tools: [
    { label: "Git & GitHub", emoji: "🐙" },
    { label: "Postman", emoji: "📬" },
    { label: "Azure DevOps", emoji: "☁️" },
    { label: "SharePoint FX", emoji: "📦" },
    { label: "Linux", emoji: "🐧" },
    { label: "Cloudinary", emoji: "🖼️" },
  ],
  "Soft Skills": [
    { label: "Problem-Solving", emoji: "🧩" },
    { label: "Communication", emoji: "💬" },
    { label: "Team Work", emoji: "🤝" },
  ],
};

// Keep backward compat
export const Skills = Object.values(SkillCategories).flat().map((s) => s.label);