"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Moon,
  Sun,
  Menu,
  X,
  MapPin,
  Calendar,
  Code,
  Database,
  Zap,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const sections = ["about", "experience", "projects", "education", "skills", "contact"]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const skills = {
    languages: ["Python", "JavaScript/TypeScript", "C#/.NET", "SQL", "Java", "Terraform"],
    frameworks: ["React", "Node.js", "Next.js", "Google Cloud Run", "Elastic", "Docker", "Figma", "Vercel"],
    strengths: ["Problem-solving", "Documentation", "Project management", "Testing", "Adaptability"],
  }

  const experiences = [
    {
      title: "Software Engineer I",
      company: "ConstructConnect",
      location: "Remote",
      period: "May 2022 – Present",
      description: [
        "Develop and maintain a high-performance Elasticsearch-powered API used in ConstructConnect's flagship CCPI Search Page",
        "Design data pipelines that ingest from relational sources and index into Elastic",
        "Manage DevOps for Cloud Run services, Elastic deployments, and monitoring",
        "Partner with QA to build automation, end-to-end, and performance tests across API and pipelines",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "ConstructConnect",
      location: "Remote",
      period: "Previous Role",
      description: [
        "Co-designed a modern cloud-native document-processing pipeline, improving throughput and reducing manual intervention",
        "Implemented Node.js micro-services orchestrated by Google Cloud Functions, enabling hybrid operation alongside legacy systems",
      ],
    },
    {
      title: "Data Science Intern",
      company: "ConstructConnect",
      location: "Remote",
      period: "Internship",
      description: [
        "Prototyped and deployed ML models for object detection, image segmentation/classification, and text classification",
        "Led full ML lifecycle: problem discovery, data collection/cleaning, POC modeling, evaluation, and deployment",
      ],
    },
  ]

  const projects = [
    {
      title: "AI Multi-Agentic Autonomous Coder",
      description:
        "Designing an AI agent that autonomously completes development work—from picking up Jira tickets to issuing merge requests.",
      tech: ["Google ADK", "Crew AI", "Claude Code SDK"],
      details:
        "Authored a comprehensive prompt library guiding code changes, documentation updates, and test-plan creation.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Student Service Center",
      description: "Full-scale web app streamlining student services at universities.",
      tech: ["Next.js", "React", "MySQL"],
      details:
        "Conducted user research & usability testing; built responsive UI with Figma and Vercel v0. Implemented full-stack features, CI/CD, and agile collaboration best practices.",
      github: "https://github.com/CSIS-672-Student-Service-Center-Team/student-service-center",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-2xl font-bold text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              EW
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background border-t"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-4 py-2 space-y-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 rounded-md capitalize transition-colors hover:bg-accent ${
                    activeSection === section ? "text-primary bg-accent" : "text-muted-foreground"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">Eric Wnorowski</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Results-oriented engineer with 5+ years' experience building everything from high-performance data
              pipelines and APIs to user-centric web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                Charleston, SC
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                ericwnorowski@gmail.com
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection("projects")} size="lg">
                View Projects
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:ericwnorowski@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              💡 About
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto"
            >
              I specialize in modern, cloud-native solutions—leveraging Google Cloud, Elasticsearch, and containerized
              micro-services—to deliver performant, reliable products. My passion lies in bridging data engineering and
              user experience: shipping code that is both elegant under the hood and delightful to use on the surface.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              💼 Professional Experience
            </motion.h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {exp.company} • {exp.location}
                          </CardDescription>
                        </div>
                        <div className="flex items-center text-muted-foreground mt-2 sm:mt-0">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              🌟 Selected Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.title}
                        {project.github && (
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{project.details}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              🎓 Education
            </motion.h2>

            <div className="space-y-6">
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>M.S. Computer & Information Sciences (Software Engineering)</CardTitle>
                    <CardDescription>College of Charleston • 2025 (expected)</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>B.A. Computer Science, Economics Minor</CardTitle>
                    <CardDescription>Vassar College • 2023 • GPA 3.7</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              🛠️ Technical Skills
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      Languages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="h-5 w-5 mr-2 text-primary" />
                      Frameworks & Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-primary" />
                      Core Strengths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.strengths.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              ✉️ Let's Connect
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <a href="mailto:ericwnorowski@gmail.com" className="hover:text-primary transition-colors">
                      ericwnorowski@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 mr-3 text-primary" />
                    <a
                      href="https://linkedin.com/in/eric-wnorowski"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/eric-wnorowski
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild>
                    <a href="mailto:ericwnorowski@gmail.com">
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <Input placeholder="Your Name" />
                      </div>
                      <div>
                        <Input type="email" placeholder="Your Email" />
                      </div>
                      <div>
                        <Textarea placeholder="Your Message" rows={4} />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Eric Wnorowski. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
