
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

// Simple Tailwind-based Card component
function Card({ children, className }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-6 ${className || "" }`}>
      {children}
    </div>
  );
}

// Simple Tailwind-based Button component
function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition ${className || ""}`}
    >
      {children}
    </button>
  );
}

export default function Portfolio() {
  return (
  <div className="min-h-screen bg-background text-slate-dark font-sans">
      {/* Header */}
  <header className="fixed top-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-md shadow-md flex justify-between items-center z-50 border-b border-slate-light">
  <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          Mohamed Ahmed Ibrahim Hashesh
        </h1>
        <nav className="flex gap-6 font-medium">
          <a href="#about" className="hover:text-primary-dark transition-colors">About</a>
          <a href="#projects" className="hover:text-primary-dark transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary-dark transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
  <section className="pt-32 pb-20 text-center bg-gradient-to-r from-primary via-accent to-primary-dark text-white relative">
        <motion.h2 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
          Hi, I'm Mohamed Ahmed
        </motion.h2>
        <p className="mt-6 text-xl opacity-90">Computer Science Student | AI Specialist | Full Stack Developer</p>
        <div className="mt-8 flex justify-center gap-6">
          <Button className="bg-white text-primary font-semibold px-6 py-3 rounded-xl shadow hover:bg-slate-light hover:text-primary-dark transition">
            Download CV
          </Button>
          <Button className="bg-primary px-6 py-3 rounded-xl shadow hover:bg-primary-dark transition">
            Hire Me
          </Button>
        </div>
      </section>

      {/* Divider */}
  <div className="h-2 bg-gradient-to-r from-accent-light via-primary to-accent-dark w-full" />

      {/* About Section */}
      <section id="about" className="p-16 max-w-5xl mx-auto text-center bg-white rounded-3xl shadow-lg mt-12 mb-12 border border-slate-light">
        <h3 className="text-3xl font-bold mb-6 text-primary-dark">About Me</h3>
        <p className="text-lg leading-relaxed text-slate-dark">
          Motivated Computer Science student specializing in AI with strong skills in Python, Java, and the MERN stack.
          Experienced in building full-stack web applications and developing machine learning models using TensorFlow and PyTorch.
          Passionate problem-solver and team player, with 20+ certifications from top institutions.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-16 bg-slate-light/60">
        <h3 className="text-3xl font-bold mb-12 text-center text-primary-dark">Projects</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {[{
            title: "IoT Smart Home",
            desc: "Automation system using Arduino and sensor modules.",
            link: "https://github.com/Mohamed31-5-2004/IOT-Smart_Home"
          },{
            title: "MERN Job Portal",
            desc: "Full-stack portal with roles, authentication, and admin panel.",
            link: "https://github.com/Mohamed31-5-2004/MERN-Stack-job-Portal"
          },{
            title: "BERT with LoRA",
            desc: "Adapted LLMs with LoRA for NLP tasks.",
            link: "https://github.com/Mohamed31-5-2004/Bert-with-Lora-Low-Rank-Adaptation-of-Large-Language-Models-LLMs-"
          },{
            title: "AIU Course-Advising System",
            desc: "Expert system for academic course advising.",
            link: "https://github.com/Mohamed31-5-2004/Knowledge-Based-System-for-AIU-CSE-Course-Registration-Advising"
          },{
            title: "Cairo Transport System",
            desc: "Transit planner with route optimization using graph algorithms.",
            link: "https://github.com/Mohamed31-5-2004/Cairo-Transportation-System-"
          }].map((proj, idx) => (
            <motion.div key={idx} whileHover={{scale:1.05}}>
              <Card className="hover:shadow-2xl transition bg-white border border-primary-light">
                <h4 className="text-xl font-semibold mb-3 text-primary-dark text-center">{proj.title}</h4>
                <p className="text-slate-dark mb-4 text-center">{proj.desc}</p>
                <div className="text-center">
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    <Button className="rounded-full px-4 py-2 border border-primary bg-white text-primary hover:bg-primary-dark hover:text-white transition">
                      View on GitHub
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
  <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary-dark w-full" />

      {/* Contact Section */}
      <section id="contact" className="p-16 max-w-4xl mx-auto text-center bg-white rounded-3xl shadow-lg mt-12 mb-12 border border-slate-light">
        <h3 className="text-3xl font-bold mb-6 text-primary-dark">Get in Touch</h3>
        <p className="mb-8 text-slate-dark">Interested in working together? Let's connect!</p>
        <div className="flex justify-center gap-8">
          <a href="mailto:mohamed.ahmed.2023@aiu.edu.eg" className="text-slate-dark hover:text-primary-dark transition"><Mail size={32}/></a>
          <a href="https://github.com/Mohamed31-5-2004" target="_blank" className="text-slate-dark hover:text-primary-dark transition"><Github size={32}/></a>
          <a href="https://www.linkedin.com/in/mohamed-ahmed-742839271" target="_blank" className="text-slate-dark hover:text-primary-dark transition"><Linkedin size={32}/></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-white shadow-inner text-center border-t border-slate-light">
        <p className="text-sm text-slate-dark">© {new Date().getFullYear()} Mohamed Ahmed Ibrahim Hashesh. All rights reserved.</p>
      </footer>
    </div>
  );
}
