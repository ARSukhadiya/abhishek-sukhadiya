import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, TrendingUp } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Research Associate Scientist',
      company: 'San Francisco Bay University',
      period: 'Aug 2025 – Dec 2025',
      location: 'San Francisco, CA',
      achievements: [
        'Developed RAG-based LLM solutions, optimizing prompt techniques to achieve high accuracy despite strict GPU memory limitations',
        'Mentored 50+ students on SQL optimization, ensuring robust database designs under 48-hour grading constraints',
      ],
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AI & Software Engineer Intern',
      company: 'BeProEx & Vtechys',
      period: 'Oct 2024 – Aug 2025',
      location: 'Remote',
      achievements: [
        'Architected LangGraph agent orchestrations for new features, optimizing stateful workflows to meet sub-second latency requirements',
        'Refined prompt engineering for high-fidelity response alignment while adhering to strict safety guardrails and token cost limits',
        'Designed evaluation harnesses for iterative GenAI testing, enabling rapid validation despite limited ground truth availability',
        'Built modular Python automation and SQL/NoSQL services, cutting maintenance by 30% while integrating with legacy systems',
      ],
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Software & AI Engineer, Backend',
      company: 'Musikaar (Vendor for Tenable)',
      period: 'Jan 2021 – Dec 2023',
      location: 'Remote',
      achievements: [
        'Developed scalable Python backends for data ingestion, managing 100M+ records within strict MySQL storage and memory constraints',
        'Optimized SQL queries reducing latency by 50%, maintaining sub-second response times despite high-volume concurrent traffic',
        'Architected Python/Java ingestion for diverse partner schemas, boosting throughput 70% to meet strict 24-hour data delivery SLAs',
        'Resolved 30+ critical C++ SDK issues, ensuring 99.9% reliability in distributed systems under high-availability requirements',
        'Fine-tuned LLMs for automated threat classification, achieving 92% accuracy while operating within strict 16GB GPU memory limits',
      ],
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Machine Learning & Backend Engineer',
      company: 'NetAnalytics',
      period: 'Jul 2020 – Nov 2020',
      location: 'Remote',
      achievements: [
        'Automated network discovery via Python/SSH, managing 1k+ nodes despite inconsistent legacy firmware and rigid firewall constraints',
        'Built secure REST APIs and Prometheus dashboards for real-time monitoring under strict data privacy and minimal infrastructure budget',
      ],
      icon: Briefcase,
      color: 'from-orange-500 to-red-500',
    },
  ]

  const education = [
    {
      degree: 'MS in Computer Science',
      school: 'San Francisco Bay University, CA',
      period: 'Graduated Dec 2025',
      gpa: 'GPA: 3.82',
      coursework: 'AI and ML, Advanced Algorithms, Software Architecture, Databases',
      icon: GraduationCap,
    },
    {
      degree: 'BS in Information Technology',
      school: 'Silver Oak College of Engineering & Technology',
      period: 'Graduated 2020',
      icon: GraduationCap,
    },
  ]

  const certifications = [
    {
      name: 'Microsoft Certified: Azure AI Engineer Associate (AI-102)',
      year: '2025',
      icon: Award,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building scalable systems, optimizing performance, and delivering impactful solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg card-hover border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-accent-600 dark:text-accent-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                          {exp.period}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                          <span className="text-accent-600 dark:text-accent-400 mt-1.5">▸</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Education & Certifications */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, idx) => {
                const Icon = edu.icon
                return (
                  <div key={idx} className="border-l-2 border-accent-500 pl-4">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-accent-600 dark:text-accent-400 font-medium mb-1">
                      {edu.school}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                      {edu.period}
                    </p>
                    {edu.gpa && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">
                        {edu.gpa}
                      </p>
                    )}
                    {edu.coursework && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        <span className="font-medium">Coursework:</span> {edu.coursework}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, idx) => {
                const Icon = cert.icon
                return (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Icon className="w-5 h-5 text-accent-600 dark:text-accent-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {cert.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.year}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience

