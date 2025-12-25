import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Agent Orchestration Framework',
      description: 'Engineered a LangGraph multi-agent system with Checkpointers, maintaining persistent state under tight memory constraints. Orchestrated Coder/Reviewer agents, boosting accuracy 30% via iterative loops while optimizing for strict LLM token budgets. Designed stateful graph workflows ensuring reliable enterprise automation for 1,000+ concurrent user sessions.',
      image: '/static/media/ai_advisor.165a4d8835c354d928c8.jpeg',
      tags: ['LangGraph', 'Python', 'Multi-Agent Systems', 'Stateful Workflows', 'Enterprise AI'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ARSukhadiya',
      featured: true,
    },
    {
      title: 'Digital Sage (Gujarati RAG System)',
      description: 'Developed a Gujarati RAG system using LangChain, overcoming severe data scarcity in low-resource languages via custom embeddings. Achieved 95% accuracy using citation-first prompts and eval harnesses, eliminating hallucinations for sensitive enterprise data. Built OCR and normalization pipeline for semantic search.',
      image: '/static/media/web_crawler.12b7f47e1c77e2a5093b.jpeg',
      tags: ['LangChain', 'RAG', 'NLP', 'Vector DBs', 'OCR'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ARSukhadiya/Digital-Sage',
      featured: true,
    },
    {
      title: 'Gemini CLI Turbo',
      description: 'Built an enterprise-grade Python CLI for LLM APIs, cutting latency 60% while managing strict rate limits and high token costs. Implemented fault-tolerance via circuit breakers and semantic caching to ensure 99.9% uptime despite unstable third-party APIs. Designed scalable Docker-based architecture optimizing resource utilization.',
      image: '/static/media/scaleEvv.fcfc5e168ee6fe53d030.jpg',
      tags: ['Python', 'CLI', 'Docker', 'Circuit Breakers', 'Semantic Caching', 'Performance'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ARSukhadiya/Gemini-CLI-Turbo',
      featured: true,
    },
    {
      title: 'Scalable Data Ingestion System',
      description: 'Developed scalable Python backends for data ingestion, managing 100M+ records within strict MySQL storage constraints. Optimized SQL queries reducing latency by 50%, maintaining sub-second response times. Architected Python/Java ingestion for diverse partner schemas, boosting throughput 70%.',
      image: '/static/media/i_Detect.f254e6d0cc7ca19f2e84.jpg',
      tags: ['Python', 'Java', 'MySQL', 'SQL Optimization', 'Data Engineering', 'High Concurrency'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ARSukhadiya',
      featured: false,
    },
    {
      title: 'LLM Threat Classification System',
      description: 'Fine-tuned LLMs for automated threat classification, achieving 92% accuracy while operating within strict 16GB GPU memory limits. Built evaluation harnesses for iterative GenAI testing, enabling rapid validation. Automated validation cutting testing time by 60%.',
      image: '/static/media/heirList.eeeabadcd1eec807e121.jpg',
      tags: ['LLM Fine-tuning', 'PyTorch', 'MLOps', 'Threat Detection', 'GPU Optimization'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ARSukhadiya',
      featured: false,
    },
    {
      title: 'Network Discovery Automation',
      description: 'Automated network discovery via Python/SSH, managing 1k+ nodes despite inconsistent legacy firmware and rigid firewall constraints. Built secure REST APIs and Prometheus dashboards for real-time monitoring under strict data privacy requirements.',
      image: '/static/media/reactNative.3a040dec1d00d18a1409.jpg',
      tags: ['Python', 'Automation', 'REST APIs', 'Prometheus', 'Network Engineering'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ARSukhadiya',
      featured: false,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Some of my recent work that I'm excited to share with you
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-200 dark:border-gray-700 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent-500 to-accent-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl !== '#' && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-medium transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl !== '#' && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 hover:border-accent-600 dark:hover:border-accent-400 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/ARSukhadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-full font-semibold shadow-lg shadow-accent-500/50 hover:shadow-xl hover:shadow-accent-500/60 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More on GitHub
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

