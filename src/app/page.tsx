'use client'
import Image from "next/image"
import { Mail, FileText, Code2, Github, Linkedin, ExternalLink, Calendar } from "lucide-react"
import EnhancedBackground from "@/components/enhanced-background"
import FloatingElements from "@/components/floating-elements"
import TypingAnimation from "@/components/typing-animation"
import MouseTrail from "@/components/mouse-trail"
import FlipCard from "@/components/flip-card"
import { Footer } from "@/components/footer"

 
export default function Portfolio() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const res = await fetch("https://formspree.io/f/xzzggwll", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  const result = await res.json();

  if (result.ok || res.status === 200) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <EnhancedBackground />

      {/* Mouse Trail Effect */}
      <MouseTrail />

      {/* Floating Elements */}
      <FloatingElements />

      {/* Header */}
      <header className= "fixed top-0 left-0 w-full z-50 px-6 py-6 backdrop-blur-sm bg-black/10">
        <nav className=" max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Anjali Lodhi
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-blue-400 border-b-2 border-blue-400 pb-1 hover:text-cyan-400 transition-colors"
            >
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#education" className="text-gray-300 hover:text-blue-400 transition-colors relative group">
              Education
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-blue-400">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse -ml-3"></div>
              <span className="text-sm font-medium tracking-wider">WELCOME TO MY PORTFOLIO</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
               <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-4">
  <TypingAnimation
    text="Hi, I'm Anjali Lodhi"
    speed={150}
    className="whitespace-nowrap bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent"
  />
</h1>

                <p className="text-3xl font-medium mt-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  B.Tech Student
                </p>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                A passionate developer studying at IIIT Vadodara-Gandhinagar, with experience in web development and a
                focus on creating impactful applications that solve real-world problems.
              </p>

              <div className="flex flex-wrap gap-4">
                

                <a
               href="/resume.pdf"
               target="_blank"
               rel="noopener noreferrer"
              className="group border-2 border-cyan-400/50 hover:border-cyan-400 text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all transform hover:scale-105 hover:bg-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/25"
>
  <FileText className="w-5 h-5 group-hover:animate-pulse" />
  View Resume
</a>

              </div>

              <div className="flex items-center gap-6 pt-8">
                <a
                  href="https://github.com/ANJALILODHI2003"
                  className="group text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110"
                >
                  <div className="p-3 rounded-full border border-gray-600 group-hover:border-blue-400 group-hover:bg-blue-500/10 transition-all">
                    <Github className="w-6 h-6" />
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/anjali-lodhi-ab629a290"
                  className="group text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110"
                >
                  <div className="p-3 rounded-full border border-gray-600 group-hover:border-blue-400 group-hover:bg-blue-500/10 transition-all">
                    <Linkedin className="w-6 h-6" />
                  </div>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-400/50 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105">
                  <Image
                    src="/images/anjali-photo.jpg"
                    alt="Anjali Lodhi"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Enhanced floating elements around photo */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 p-4 rounded-full backdrop-blur-sm animate-pulse border border-blue-400/30">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping"></div>
                </div>

                <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-purple-500/30 to-blue-500/30 p-5 rounded-full backdrop-blur-sm border border-purple-400/30 hover:rotate-12 transition-transform">
                  <Code2 className="w-8 h-8 text-purple-400" />
                </div>

                <div className="absolute top-1/2 -right-12 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 p-3 rounded-full backdrop-blur-sm animate-bounce border border-cyan-400/30">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <p className="text-blue-400 text-sm font-medium tracking-wider animate-pulse">SCROLL DOWN</p>
            <div className="w-px h-16 bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent mx-auto mt-4 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-6 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                I`m a dedicated Information Technology student at IIIT Vadodara with a passion for creating innovative
                web applications. My journey in tech has been driven by curiosity and a desire to solve real-world
                problems through code.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Beyond academics, I`m actively involved in college clubs including MOD5 Dance Club and Shades Art Club,
                where I`ve developed strong leadership and teamwork skills.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20 hover:border-blue-400/50 transition-all hover:scale-105">
                  <div className="text-4xl font-bold text-blue-400 mb-2">3+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all hover:scale-105">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">2+</div>
                  <div className="text-gray-400">Years Learning</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 p-8 rounded-2xl backdrop-blur-sm hover:border-blue-400/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                <h4 className="font-semibold text-blue-400 mb-3 text-xl">Full Stack Development</h4>
                <p className="text-gray-300">
                  Experienced in MERN stack with focus on creating scalable web applications.
                </p>
              </div>
              <div className="group bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 p-8 rounded-2xl backdrop-blur-sm hover:border-purple-400/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <h4 className="font-semibold text-purple-400 mb-3 text-xl">Problem Solving</h4>
                <p className="text-gray-300">
                  Strong analytical skills with experience in data structures and algorithms.
                </p>
              </div>
              <div className="group bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 p-8 rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                <h4 className="font-semibold text-green-400 mb-3 text-xl">Leadership</h4>
                <p className="text-gray-300">
                  Active member in college clubs, contributing to cultural events and activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Flip Cards */}
      <section id="projects" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* YouTube Clone */}
            <div className="h-96">
              <FlipCard
                frontContent={
                  <div className="h-full bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-red-400/50 transition-all">
                    <div className="bg-gradient-to-br from-red-500/30 to-pink-500/30 h-48 rounded-xl flex items-center justify-center mb-6 border border-red-400/20">
                      <span className="text-6xl animate-pulse">📺</span>
                    </div>
                    <h4 className="text-2xl font-semibold mb-3 text-red-400">YouTube Clone</h4>
                    <p className="text-gray-400 text-sm">
                      Full-featured YouTube-like application with trending videos and search functionality.
                    </p>
                  </div>
                }
                backContent={
                  <div className="h-full bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
                    <h4 className="text-xl font-semibold mb-4 text-red-400">Project Details</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs border border-blue-400/30">
                          React
                        </span>
                        <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs border border-purple-400/30">
                          Redux
                        </span>
                        <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs border border-red-400/30">
                          YouTube API
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Features trending videos, category browsing, search functionality, and subscription management.
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar size={14} className="mr-1" />
                        October 2024
                      </div>
                      <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 p-2 rounded-full transition-all">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                }
              />
            </div>

            {/* iNotebook */}
            <div className="h-96">
              <FlipCard
                frontContent={
                  <div className="h-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-green-400/50 transition-all">
                    <div className="bg-gradient-to-br from-green-500/30 to-emerald-500/30 h-48 rounded-xl flex items-center justify-center mb-6 border border-green-400/20">
                      <span className="text-6xl animate-pulse">📝</span>
                    </div>
                    <h4 className="text-2xl font-semibold mb-3 text-green-400">iNotebook</h4>
                    <p className="text-gray-400 text-sm">
                      Secure note-taking application with user authentication and note management.
                    </p>
                  </div>
                }
                backContent={
                  <div className="h-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm">
                    <h4 className="text-xl font-semibold mb-4 text-green-400">Project Details</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs border border-green-400/30">
                          MERN Stack
                        </span>
                        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs border border-yellow-400/30">
                          JWT
                        </span>
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs border border-blue-400/30">
                          MongoDB
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Built with JWT authentication, secure user access, and optimized backend performance.
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar size={14} className="mr-1" />
                        September 2023
                      </div>
                      <button className="bg-green-500/20 hover:bg-green-500/30 text-green-400 p-2 rounded-full transition-all">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                }
              />
            </div>

            {/* Chatbot */}
            <div className="h-96">
              <FlipCard
                frontContent={
                  <div className="h-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-400/50 transition-all">
                    <div className="bg-gradient-to-br from-purple-500/30 to-indigo-500/30 h-48 rounded-xl flex items-center justify-center mb-6 border border-purple-400/20">
                      <span className="text-6xl animate-pulse">🤖</span>
                    </div>
                    <h4 className="text-2xl font-semibold mb-3 text-purple-400">AI Chatbot</h4>
                    <p className="text-gray-400 text-sm">
                      Interactive chatbot with natural language processing capabilities.
                    </p>
                  </div>
                }
                backContent={
                  <div className="h-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
                    <h4 className="text-xl font-semibold mb-4 text-purple-400">Project Details</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs border border-orange-400/30">
                          JavaScript
                        </span>
                        <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs border border-purple-400/30">
                          GEM AI
                        </span>
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs border border-blue-400/30">
                          HTML/CSS
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Features natural language processing and responsive UI for seamless user experience.
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar size={14} className="mr-1" />
                        January 2025
                      </div>
                      <button className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 p-2 rounded-full transition-all">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 px-6 py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30 group-hover:border-blue-400/50 transition-all group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/25">
                <span className="text-3xl group-hover:animate-bounce">💻</span>
              </div>
              <h4 className="font-semibold mb-4 text-blue-400 text-xl">Programming</h4>
              <div className="space-y-3">
                {["Java", "C++", "JavaScript", "Python"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gradient-to-r from-gray-800/50 to-blue-800/20 border border-gray-700 hover:border-blue-400/50 px-4 py-3 rounded-xl text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30 group-hover:border-green-400/50 transition-all group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-green-500/25">
                <span className="text-3xl group-hover:animate-bounce">🎨</span>
              </div>
              <h4 className="font-semibold mb-4 text-green-400 text-xl">Frontend</h4>
              <div className="space-y-3">
                {["React.js", "HTML/CSS", "JavaScript", "Bootstrap"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gradient-to-r from-gray-800/50 to-green-800/20 border border-gray-700 hover:border-green-400/50 px-4 py-3 rounded-xl text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/30 group-hover:border-purple-400/50 transition-all group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-purple-500/25">
                <span className="text-3xl group-hover:animate-bounce">⚙️</span>
              </div>
              <h4 className="font-semibold mb-4 text-purple-400 text-xl">Backend</h4>
              <div className="space-y-3">
                {["Node.js", "Express.js", "MongoDB", "MySQL"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gradient-to-r from-gray-800/50 to-purple-800/20 border border-gray-700 hover:border-purple-400/50 px-4 py-3 rounded-xl text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-orange-500/30 group-hover:border-orange-400/50 transition-all group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-orange-500/25">
                <span className="text-3xl group-hover:animate-bounce">🛠️</span>
              </div>
              <h4 className="font-semibold mb-4 text-orange-400 text-xl">Tools</h4>
              <div className="space-y-3">
                {["Git/GitHub", "Figma", "VS Code", "Postman"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gradient-to-r from-gray-800/50 to-orange-800/20 border border-gray-700 hover:border-orange-400/50 px-4 py-3 rounded-xl text-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-black/30 to-blue-900/20 border border-blue-500/30 rounded-3xl p-10 backdrop-blur-sm hover:border-blue-400/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-start gap-8">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-500/30 hover:scale-110 transition-transform">
                  <span className="text-4xl animate-pulse">🎓</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Bachelor of Technology in Information Technology
                  </h4>
                  <p className="text-blue-400 font-medium mb-3 text-xl">
                    Indian Institute of Information Technology Vadodara
                  </p>
                  <p className="text-gray-400 mb-8 text-lg">December 2022 - July 2026</p>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl border border-blue-400/20 hover:border-blue-400/50 transition-all hover:scale-105">
                      <h5 className="font-semibold mb-4 text-blue-400 text-lg">Computer Science</h5>
                      <ul className="text-gray-400 space-y-2 text-sm">
                        <li>• Data Structures</li>
                        <li>• Algorithms</li>
                        <li>• OOP</li>
                        <li>• DBMS</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border border-green-400/20 hover:border-green-400/50 transition-all hover:scale-105">
                      <h5 className="font-semibold mb-4 text-green-400 text-lg">Mathematics</h5>
                      <ul className="text-gray-400 space-y-2 text-sm">
                        <li>• Discrete Mathematics</li>
                        <li>• Statistics</li>
                        <li>• Linear Algebra</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-6 rounded-2xl border border-purple-400/20 hover:border-purple-400/50 transition-all hover:scale-105">
                      <h5 className="font-semibold mb-4 text-purple-400 text-lg">Systems</h5>
                      <ul className="text-gray-400 space-y-2 text-sm">
                        <li>• Operating Systems</li>
                        <li>• Computer Networks</li>
                        <li>• Web Technology</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-20 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let`s Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </h4>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                I`m always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and innovation.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:lodhianjali104@gmail.com"
                  className="flex items-center gap-6 text-gray-300 hover:text-blue-400 transition-all group transform hover:scale-105"
                >
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-full group-hover:bg-blue-500/30 transition-all border border-blue-400/30 group-hover:border-blue-400/50">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-lg">lodhianjali104@gmail.com</span>
                </a>

                <a
                  href="https://github.com/ANJALILODHI2003"
                  className="flex items-center gap-6 text-gray-300 hover:text-blue-400 transition-all group transform hover:scale-105"
                >
                  <div className="bg-gradient-to-br from-gray-500/20 to-blue-500/20 p-4 rounded-full group-hover:bg-gray-500/30 transition-all border border-gray-400/30 group-hover:border-gray-400/50">
                    <Github className="w-6 h-6" />
                  </div>
                  <span className="text-lg">GitHub Profile</span>
                </a>

                <a
                  href="https://linkedin.com/in/anjali-lodhi-ab629a290"
                  className="flex items-center gap-6 text-gray-300 hover:text-blue-400 transition-all group transform hover:scale-105"
                >
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-full group-hover:bg-blue-500/30 transition-all border border-blue-400/30 group-hover:border-blue-400/50">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <span className="text-lg">LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black/30 to-blue-900/20 border border-blue-500/30 p-8 rounded-3xl backdrop-blur-sm hover:border-blue-400/50 transition-all">
              <h4 className="text-2xl font-semibold mb-6 text-blue-400">Send a Message</h4>
              <form
  
  className="space-y-6"
  onSubmit={handleSubmit}
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full px-6 py-4 bg-gradient-to-r from-gray-800/50 to-blue-800/20 border border-gray-600 rounded-xl focus:outline-none focus:border-blue-400 transition-all text-white placeholder-gray-400"
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full px-6 py-4 bg-gradient-to-r from-gray-800/50 to-blue-800/20 border border-gray-600 rounded-xl focus:outline-none focus:border-blue-400 transition-all text-white placeholder-gray-400"
  />
  <textarea
    name="message"
    placeholder="Your Message"
    rows={5}
    required
    className="w-full px-6 py-4 bg-gradient-to-r from-gray-800/50 to-blue-800/20 border border-gray-600 rounded-xl focus:outline-none focus:border-blue-400 transition-all resize-none text-white placeholder-gray-400"
  ></textarea>
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 font-semibold text-lg"
  >
    Send Message
  </button>
</form>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer >
        <Footer />
      </footer>
    </div>
  )
}
