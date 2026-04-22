import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    color: '#7c3aed',
    skills: ['Python', 'SQL', 'TypeScript', 'Bash'],
  },
  {
    name: 'Data Engineering',
    color: '#06b6d4',
    skills: ['Pandas', 'NumPy', 'PySpark', 'Delta Lake', 'Medallion Architecture'],
  },
  {
    name: 'Backend',
    color: '#10b981',
    skills: ['FastAPI', 'SQLAlchemy', 'REST APIs', 'WebSockets'],
  },
  {
    name: 'Databases',
    color: '#f59e0b',
    skills: ['PostgreSQL', 'SQLite', 'Redis'],
  },
  {
    name: 'Tools & DevOps',
    color: '#ef4444',
    skills: ['Git', 'Docker', 'GitHub Actions', 'Render'],
  },
  {
    name: 'Learning',
    color: '#8b5cf6',
    skills: ['Databricks', 'Apache Spark', 'Azure', 'Kafka'],
  },
]
