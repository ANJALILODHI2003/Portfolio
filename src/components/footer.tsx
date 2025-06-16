"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Anjali Lodhi
            </h2>
            <p className="text-gray-300 leading-relaxed">
              B.Tech in Information Technology student passionate about creating innovative solutions through
              technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ANJALILODHI2003"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transform hover:scale-110 transition-all duration-300"
              >
                <Github className="h-5 w-5 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/anjali-lodhi-ab629a290"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 group-hover:text-white" />
              </a>
              <a
                href="mailto:lodhianjali104@gmail.com"
                className="group w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-500 transform hover:scale-110 transition-all duration-300"
              >
                <Mail className="h-5 w-5 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {["About", "Projects", "Skills", "Education", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase())
                    if (element) {
                      const offsetTop = element.offsetTop - 80
                      window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth",
                      })
                    }
                  }}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 lodhianjali104@gmail.com</p>
              <p>📱 (+91) 9981141099</p>
              <p>📍 Vadodara, Gujarat, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by Anjali Lodhi</span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ... Anjali Lodhi. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="border border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white px-3 py-1 rounded-md transition-all duration-300 flex items-center"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
