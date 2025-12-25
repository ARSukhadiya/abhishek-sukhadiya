import { motion } from 'framer-motion'
import { Heart, Code, Rocket, Download, FileText } from 'lucide-react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A little bit about who I am and what I love doing
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg card-hover border border-gray-200 dark:border-gray-700"
          >
            <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-accent-600 dark:text-accent-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">AI/ML Specialist</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Expert in LangGraph workflows, RAG systems, and agent orchestration. I've built enterprise-grade LLM solutions 
              with 95% accuracy, optimized prompt engineering, and designed stateful multi-agent systems handling 1,000+ concurrent sessions.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg card-hover border border-gray-200 dark:border-gray-700"
          >
            <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mb-6">
              <Code className="w-8 h-8 text-accent-600 dark:text-accent-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Backend Engineering</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Built scalable Python backends managing 100M+ records, optimized SQL queries reducing latency by 50%, 
              and architected high-throughput systems meeting strict 24-hour SLAs. Expert in FastAPI, async Python, and distributed systems.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg card-hover border border-gray-200 dark:border-gray-700"
          >
            <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-accent-600 dark:text-accent-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Automation & Scale</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Designed evaluation harnesses for GenAI testing, automated validation cutting testing time by 60%, 
              and built modular automation services reducing maintenance by 30%. Always optimizing for performance and reliability.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-accent-500 to-accent-700 rounded-2xl p-8 sm:p-12 text-white"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">My Journey</h3>
              <p className="text-lg leading-relaxed opacity-95 mb-6 md:mb-0">
                As a Software Engineer with an MS in Computer Science, I specialize in Agentic AI and LangGraph workflows. 
                Currently serving as a Research Associate Scientist at San Francisco Bay University, I develop RAG-based LLM solutions 
                and mentor students on database optimization. My experience spans from building enterprise-grade LangGraph orchestrations 
                at BeProEx & Vtechys to scaling Python backends managing 100M+ records at Musikaar (Tenable). 
                I'm passionate about solving complex problems at scale, whether it's optimizing sub-second latency requirements, 
                fine-tuning LLMs for 92% accuracy, or architecting systems that handle high-concurrency workloads. 
                Let's build something impactful together! ✨
              </p>
            </div>
            <motion.a
              href="/resume.pdf"
              download="Abhishek-Sukhadiya-Resume.pdf"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl font-semibold transition-all duration-300 border-2 border-white/30 hover:border-white/50 shrink-0 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              <span className="whitespace-nowrap">Download Resume</span>
              <Download className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

