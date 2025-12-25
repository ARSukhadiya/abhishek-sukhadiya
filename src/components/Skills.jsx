import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI/ML & LLMs',
      skills: ['LangGraph', 'Hugging Face', 'GPT-4', 'Claude', 'Llama', 'Prompt Engineering', 'RAG', 'Agent Orchestration', 'PyTorch', 'Azure OpenAI'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Backend & Cloud',
      skills: ['Python (Async)', 'FastAPI', 'REST APIs', 'Docker', 'CI/CD (Jenkins)', 'AWS (S3)', 'Azure AI Foundry', 'Azure Functions', 'Datadog', 'Linux/Unix'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Languages & Data',
      skills: ['Python', 'Java', 'JavaScript', 'C++', 'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Vector DBs (Pinecone/Chroma)', 'NoSQL'],
      color: 'from-green-500 to-emerald-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg card-hover border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                <span className="text-2xl font-bold text-white">{category.title[0]}</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                    whileHover={{ scale: 1.1, backgroundColor: '#0ea5e9' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

