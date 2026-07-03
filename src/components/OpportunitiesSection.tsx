import React from 'react';
import { 
  Code, Brain, BarChart3, Cloud, Palette, Shield, Sparkles, ArrowUpRight 
} from 'lucide-react';

export default function OpportunitiesSection() {
  const categories = [
    {
      badge: "Build",
      badgeColor: "bg-gradient-to-r from-brand-blue to-brand-blue/80 text-white",
      hoverBorder: "hover:border-brand-blue/30 hover:shadow-brand-blue/5",
      iconBg: "bg-brand-blue/5",
      title: "Core Software & Design",
      subtitle: "Full-stack development & creative user experience design.",
      items: [
        {
          role: "Software Developer",
          description: "Build and deploy web and mobile applications using modern tech stacks.",
          icon: <Code className="h-5 w-5 text-brand-blue" />,
          tech: "React, Node.js, Python, Flutter"
        },
        {
          role: "Web Designer",
          description: "Create user-friendly, visually engaging digital experiences.",
          icon: <Palette className="h-5 w-5 text-brand-blue" />,
          tech: "Figma, TailwindCSS, Framer, Webflow"
        }
      ]
    },
    {
      badge: "Apply",
      badgeColor: "bg-gradient-to-r from-brand-gold to-brand-gold/80 text-white",
      hoverBorder: "hover:border-brand-gold/40 hover:shadow-brand-gold/5",
      iconBg: "bg-brand-gold/5",
      title: "Data & AI Systems",
      subtitle: "Designing smart algorithms and analyzing raw data.",
      items: [
        {
          role: "AI/ML Engineer",
          description: "Design intelligent systems and solve real-world problems using AI and machine learning.",
          icon: <Brain className="h-5 w-5 text-brand-gold" />,
          tech: "PyTorch, LLMs, TensorFlow, Python"
        },
        {
          role: "Data Analyst",
          description: "Turn raw data into business insights that drive smarter decisions.",
          icon: <BarChart3 className="h-5 w-5 text-brand-gold" />,
          tech: "Pandas, SQL, PowerBI, Tableau"
        }
      ]
    },
    {
      badge: "Secure",
      badgeColor: "bg-gradient-to-r from-brand-bronze to-brand-bronze/80 text-white",
      hoverBorder: "hover:border-brand-bronze/40 hover:shadow-brand-bronze/5",
      iconBg: "bg-brand-bronze/5",
      title: "Cloud & Protection",
      subtitle: "Deploying high-availability systems with robust security.",
      items: [
        {
          role: "Cloud Engineer",
          description: "Manage and optimize cloud infrastructure across leading platforms.",
          icon: <Cloud className="h-5 w-5 text-brand-bronze" />,
          tech: "AWS, Docker, Kubernetes, GCP"
        },
        {
          role: "Cybersecurity Analyst",
          description: "Protect systems, networks, and data from digital threats.",
          icon: <Shield className="h-5 w-5 text-brand-bronze" />,
          tech: "SIEM, Penetration Testing, IAM, Linux"
        }
      ]
    }
  ];

  return (
    <section id="opportunities" className="py-24 bg-gradient-to-b from-brand-offwhite via-[#edf0f2] to-brand-offwhite text-gray-900 font-sans relative overflow-hidden">
      {/* Subtle grid background to make it look premium and tech-oriented */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
      
      {/* Decorative premium ambient glows and layout grids */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-12 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-12 right-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="h-4 w-4 text-brand-blue animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-brand-blue font-display">
              Future Placement & Career Pathways
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-gray-900">
            Job Opportunities <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-gold to-brand-bronze">After BCA</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Equipping you with the practical, state-of-the-art capability to step directly into elite tech roles immediately upon graduation.
          </p>
        </div>

        {/* 3-Column Card Layout replicating the meticulous design pattern of the FDELAB mockup in Premium Light Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {categories.map((category, catIdx) => (
            <div 
              key={catIdx} 
              className={`bg-brand-offwhite/95 backdrop-blur-sm border border-gray-200 p-8 md:p-9 rounded-3xl flex flex-col justify-between transition-all duration-300 shadow-xl shadow-gray-200/25 hover:shadow-2xl hover:-translate-y-1.5 group ${category.hoverBorder}`}
            >
              <div className="space-y-8">
                
                {/* Badge Category Header */}
                <div className="flex justify-between items-center">
                  <span className={`inline-block text-[10px] font-black tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-sm ${category.badgeColor}`}>
                    {category.badge}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-300 group-hover:scale-125 transition-transform duration-300"></div>
                </div>

                {/* Card Title & Subtitle */}
                <div className="space-y-2 border-b border-gray-200 pb-5">
                  <h3 className="font-display font-extrabold text-2xl text-brand-blue tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
                    {category.subtitle}
                  </p>
                </div>

                {/* Sub items matching exact list request details and layout from ref image */}
                <div className="space-y-8">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-3 group/item">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl border border-gray-200 shrink-0 group-hover/item:border-brand-blue/20 transition-all duration-300 transform group-hover/item:scale-105 ${category.iconBg}`}>
                          {item.icon}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-extrabold text-sm sm:text-base text-gray-950 group-hover/item:text-brand-blue transition-colors flex items-center gap-1.5 duration-200 font-display">
                            {item.role}
                            <ArrowUpRight className="h-4.5 w-4.5 text-gray-300 opacity-0 group-hover/item:opacity-100 transition-all transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 duration-200" />
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Secondary tech stack pills inside the opportunities list */}
                      <div className="pl-14 flex flex-wrap gap-1.5">
                        <span className="text-[10px] font-mono font-medium bg-[#eff1f3]/80 text-gray-600 px-2.5 py-1 rounded-md border border-gray-200 group-hover/item:bg-brand-blue/10 group-hover/item:text-brand-blue transition-colors duration-200">
                          {item.tech}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer matching the "Load More" action from the reference mockup */}
              <div className="mt-10 pt-6 border-t border-gray-200 text-center">
                <a 
                  href="#inquiry-form" 
                  className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-brand-gray hover:text-brand-blue transition-colors uppercase font-bold duration-200"
                >
                  Explore Core Modules
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
