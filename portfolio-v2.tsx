"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import siukimage from './public/Assests/siuk.png'
import pharmacyImage from './public/Assests/pharmacyproject.png'
import cuihrportal from './public/Assests/cuihrportal.png'
import taskhero from './public/Assests/taskhero.png'
import adzysGoods from './public/Assests/adzysgoods.png'
import {
  Code,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Moon,
  Sun,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioV2() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  // Cambiar tema claro/oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Cambiar sección activa basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: <Code size={18} /> },
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={18} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={18} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
    { id: "contact", label: "Contact", icon: <Mail size={18} /> },
  ]

  const skills = [
    {
      category: "Data Engineering & Arch",
      items: ["ETL/ELT", "Data Lakehouse (Delta Lake)", "Data Modeling (Star/Snowflake)", "SCD Type I & II", "Partitioning", "Clustering"]
    },
    {
      category: "Big Data & Distributed Processing",
      items: ["Apache Spark (PySpark, Scala)", "Structured Streaming", "Hadoop (HDFS, Hive, MapReduce)", "Apache Flink", "Apache Beam", "Dask"]
    },
    {
      category: "Streaming & CDC",
      items: ["Apache Kafka", "Kafka Streams", "Kafka Connect", "Debezium", "AWS Kinesis", "Google Pub/Sub", "Event-Driven Arch"]
    },
    {
      category: "Cloud Platforms",
      items: ["AWS (Glue, EMR, Redshift, Athena)", "Azure (ADF, Databricks, Synapse)", "GCP (BigQuery, Dataflow, Composer)"]
    },
    {
      category: "Orchestration & Analytics",
      items: ["Apache Airflow", "dbt", "Prefect", "Dagster", "Tableau", "Power BI", "Superset"]
    },
    {
      category: "Programming & Databases",
      items: ["Python", "SQL", "Scala", "Java", "Bash", "Snowflake", "PostgreSQL", "MongoDB", "Cassandra", "Oracle"]
    },
    {
      category: "DevOps & Automation",
      items: ["CI/CD (GitHub Actions, Jenkins)", "Terraform", "Docker", "Kubernetes", "IaC"]
    },
    {
      category: "Governance & Security",
      items: ["IAM/RBAC", "HIPAA/GDPR", "Great Expectations", "Data Lineage", "Audit Logging", "Encryption"]
    }
  ];


  const projects = [
    {
      title: "Real-Time Patient Monitoring Platform",
      description: "HIPAA-compliant platform processing 40K+ events/min from EHR & IoT systems. Reduced alert latency from 15 mins to <30s using Kafka and Spark Structured Streaming.",
      technologies: ["Kafka", "Spark Structured Streaming", "Delta Lake", "Databricks", "Snowflake", "AWS", "Terraform"],
      image: siukimage,
      github: "#",
      demo: "#",
      unavailableMessage: "Enterprise project, source code not public."
    },
    {
      title: "Enterprise Data Lake Migration",
      description: "Migrated 15+ years of legacy data to a modern Azure Lakehouse using ADF and Databricks. Reduced nightly batch runtimes by 60%.",
      technologies: ["Azure Data Factory", "Databricks", "ADLS Gen2", "Synapse", "PySpark"],
      image: pharmacyImage,
      github: "#",
      demo: "#",
      unavailableMessage: "Enterprise project, source code not public."
    },
    {
      title: "CDC-Based Data Replication Framework",
      description: "Built a framework using Debezium and Kafka Connect to replicate PostgreSQL and MySQL data to Snowflake, reducing latency to <2 mins.",
      technologies: ["Debezium", "Kafka Connect", "PostgreSQL", "MySQL", "Snowflake"],
      image: cuihrportal,
      github: "#",
      demo: "#",
      unavailableMessage: "Enterprise project, source code not public."
    },
    {
      title: "Data Quality & Observability Platform",
      description: "Implemented automated quality checks with Great Expectations and Airflow, covering 120+ rules. Reduced data quality incidents by 70%.",
      technologies: ["Great Expectations", "Airflow", "Python", "Databricks", "Grafana"],
      image: taskhero,
      github: "#",
      demo: "#",
      unavailableMessage: "Enterprise project, source code not public."
    },
    {
      title: "Cloud-Native Lakehouse Platform",
      description: "Architected a 20TB+/month Lakehouse platform using Delta Lake and Databricks. Enabled both batch and real-time analytics with full CI/CD automation.",
      technologies: ["Delta Lake", "Databricks", "GitHub Actions", "Docker", "Terraform"],
      image: adzysGoods,
      github: "#",
      demo: "#",
      unavailableMessage: "Enterprise project, source code not public."
    }
  ]

  const education = [
    {
      period: "—",
      title: "Bachelor's in Computer Science",
      institution: "University",
      marks: "Specialized in Distributed Systems and Cloud Computing."
    }
  ];


  const experience = [
    {
      period: "12/2022 - Present",
      title: "Lead Data Engineer",
      company: "AGIT",
      description: "Architected a 20TB+/month cloud-native Lakehouse platform. Led cross-functional teams, standardized observability layers, and implemented FinOps strategies reducing costs. Enforced HIPAA/GDPR compliance.",
      technologies: ["Databricks", "Delta Lake", "Kafka", "Snowflake", "Terraform", "GitHub Actions"]
    },
    {
      period: "11/2020 - 11/2022",
      title: "Senior Data Engineer",
      company: "Mountainise",
      description: "Designed scalable ETL/ELT pipelines on AWS integrating 50+ data sources. Built CDC ingestion pipelines reducing latency to <2 mins. Optimized Spark workloads for 40% performance gains.",
      technologies: ["AWS Glue", "Lambda", "EMR", "Snowflake", "Kafka", "Airflow", "dbt"]
    },
    {
      period: "10/2018 - 10/2020",
      title: "Data Engineer",
      company: "SA Data Global",
      description: "Migrated legacy SQL Server pipelines to Azure (ADF, Databricks, ADLS). Designed enterprise data warehouse schemas and tuned complex SQL queries reducing report runtimes by 70%.",
      technologies: ["Azure Data Factory", "Azure Databricks", "ADLS Gen2", "SQL Server", "Azure DevOps"]
    },
    {
      period: "04/2016 - 09/2018",
      title: "Associate Data Engineer",
      company: "Blue Peak",
      description: "Built data ingestion pipelines using Python and Airflow. Worked with Hadoop ecosystem (HDFS, Hive). Supported GCP migration initiatives using BigQuery and Dataflow.",
      technologies: ["Python", "Airflow", "Hadoop", "Hive", "GCP BigQuery", "Dataflow"]
    },
    {
      period: "03/2015 - 03/2016",
      title: "Data Analyst",
      company: "Weston Chase",
      description: "Developed SQL reports and Power BI dashboards. Performed data cleansing and transformation for ETL workflows. Delivered ad-hoc analytics and business insights.",
      technologies: ["SQL", "Power BI", "ETL", "Data Analysis"]
    }
  ];


  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/RESUME.pdf';
    link.download = 'Hason_Shok_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleSubmitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  }

  const handleProjectLink = (link: string, message: string | null) => {
    if (link === "#") {
      alert(message || "This link is currently unavailable.");
      return;
    }
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-white font-bold">
              HS
            </div>
            <span className="font-bold"> Hason Shok </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">

            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>


          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0f172a] pt-16"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">{item.icon}</div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-5">
        {/* Hero Section */}
        <main className=" bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 opacity-20"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl mx-auto"
                >
                  <Badge className="mb-4 bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400 mx-auto">
                    Lead Data Engineer
                  </Badge>
                  <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                    Lead / Principal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Data Engineer</span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Results-driven Lead / Principal Data Engineer with 8+ years of experience designing, building, and optimizing enterprise-scale data platforms, lakehouse architectures, and real-time streaming systems across AWS, Azure, and GCP.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Button
                      onClick={handleDownloadResume}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      Download Resume
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => {
                        const projectsSection = document.getElementById('projects');
                        if (projectsSection) {
                          projectsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Explore Projects
                    </Button>
                  </div>
                  <div className="flex justify-center gap-6">
                    <a
                      href="https://github.com/Alexander-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors z-20"
                      aria-label="GitHub Profile"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors z-20"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="mailto:hassonshok@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors z-20"
                      aria-label="Send Email"
                    >
                      <Mail size={24} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge className="mb-4 bg-green-500/10 text-green-500 dark:bg-green-400/10 dark:text-green-400">
                  About Me
                </Badge>
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  Principal Data Engineer
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Proven ability to lead cross-functional engineering teams, modernize legacy data ecosystems, and deliver secure, scalable, high-performance analytics solutions.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-blue-500 dark:text-blue-400">My Expertise</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Deep expertise in ETL/ELT pipelines, cloud-native data engineering, distributed systems, CDC, big data processing, and workflow orchestration. Strong background in SQL performance tuning, CI/CD automation, Infrastructure as Code (IaC), data governance, data SLAs/SLOs, and cost optimization.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-purple-500 dark:text-purple-400">My Approach</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      I focus on designing metadata-driven frameworks, enforcing data quality/observability, and ensuring security/compliance (HIPAA, GDPR) to build trust in data. I believe in empowering teams through mentorship and standardized engineering practices.
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                    <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Tech Stack</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                      {[
                        "Delta Lake",
                        "Databricks",
                        "Snowflake",
                        "Apache Spark",
                        "Kafka",
                        "Airflow",
                        "dbt",
                        "AWS",
                        "Azure",
                        "GCP",
                        "Terraform",
                        "SQL",
                        "Python",
                        "CI/CD",
                        "Docker",
                        "Kubernetes"
                      ].map((tech, index) => (
                        <div
                          key={tech}
                          className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center gap-3 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 text-white shadow-lg transform hover:scale-105 transition-all duration-300">
                      <div className="text-4xl font-bold mb-2">8+</div>
                      <div className="text-sm uppercase tracking-wide">Years of Experience</div>
                    </div>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 text-white shadow-lg transform hover:scale-105 transition-all duration-300">
                      <div className="text-4xl font-bold mb-2">40+</div>
                      <div className="text-sm uppercase tracking-wide">Projects Completed</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Projects, Experience, Education, and Contact sections would follow here, 
            styled similarly with gradients, animations, and improved layouts */}
        </main>

        {/* About Section */}


        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                Experience
              </Badge>
              <h2 className="text-3xl font-bold mb-4">My Experience</h2>
              <p className="text-gray-600 dark:text-gray-300">
                My professional experience and achievements.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 mb-12 last:mb-0"
                >
                  <div className="hidden sm:block pt-1">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></div>
                    </div>
                    {index !== experience.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-6 mt-2"></div>
                    )}
                  </div>

                  <Card className="flex-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                Projects
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Here are some of my recent projects that showcase my skills and experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="aspect-video rounded-lg bg-gray-100 dark:bg-gray-700 mb-6">
                        <Image src={project.image} alt={project.title} width={800} height={500} className=" w-full h-full object-fill" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleProjectLink(project.github, project.unavailableMessage)}
                        >
                          <div className="flex items-center">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </div>
                        </Button>
                        <Button
                          className="flex-1 bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white"
                          onClick={() => handleProjectLink(project.demo, project.unavailableMessage)}
                        >
                          <div className="flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </div>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-100 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                Education
              </Badge>
              <h2 className="text-3xl font-bold mb-4">My Academic Background</h2>
              <p className="text-gray-600 dark:text-gray-300">
                My educational journey and professional training.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 mb-12 last:mb-0"
                >
                  <div className="hidden sm:block pt-1">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></div>
                    </div>
                    {index !== education.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-6 mt-2"></div>
                    )}
                  </div>

                  <Card className="flex-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{item.institution}</p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{item.marks}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                Contact
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Let's Talk</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Interested in working together or have any questions?
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 bg-gradient-to-br from-teal-500 to-indigo-500 p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <p className="mb-8 opacity-90">
                      Fill out the form and I'll get back to you as soon as possible.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-white/20">
                          <Mail size={20} />
                        </div>
                        <span>hassonshok@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-white/20">
                          <User size={20} />
                        </div>
                        <span>(567) 654-3996 | Madera, CA</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-white/20">
                          <Linkedin size={20} />
                        </div>
                        <span></span>
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 opacity-10">
                      <Code size={180} />
                    </div>
                  </div>

                  <div className="md:col-span-3 p-8">
                    <form onSubmit={handleSubmitContact} className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0">
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                HS
              </div>
              <span className="font-bold">Hason Shok</span>
            </div>

            <div className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Hason Shok. All rights reserved.
            </div>

            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://github.com/Alexander-app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hassonshok@gmail.com"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
