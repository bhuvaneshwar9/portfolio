export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl: string
  gradient: string
  icon: string
}

export interface SkillCategory {
  name: string
  color: string
  skills: string[]
}

export interface NavLink {
  label: string
  href: string
}
