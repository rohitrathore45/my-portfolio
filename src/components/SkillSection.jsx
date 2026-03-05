import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 90, category: "frontend", icon: "🎨" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "⚡" },
  { name: "React", level: 90, category: "frontend", icon: "⚛️" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "🔷" },
  { name: "Java", level: 95, category: "backend", icon: "☕" },
  { name: "Spring Boot", level: 95, category: "backend", icon: "🍃" },
  { name: "PostgreSQL", level: 85, category: "backend", icon: "🐘" },
  { name: "Redis", level: 80, category: "backend", icon: "🔴" },
  { name: "Apache Kafka", level: 80, category: "backend", icon: "📨" },
  { name: "Git/GitHub", level: 90, category: "tools", icon: "🐙" },
  { name: "Docker", level: 80, category: "tools", icon: "🐳" },
  { name: "AWS", level: 75, category: "tools", icon: "☁️" },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground/60 hover:text-primary hover:border-primary/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card border border-border rounded-xl px-5 py-4 card-hover flex items-center gap-3"
            >
              <span className="text-xl">{skill.icon}</span>
              <span className="font-medium text-sm text-foreground/90">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;