import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/profile'

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          index="03"
          label="Selected Works"
          title={<>4개의<br /><span className="italic">프로젝트.</span></>}
          sub="React 기반 팀 프로젝트와 풀스택 사이드 프로젝트. 카드를 펼치면 트러블슈팅 기록을 볼 수 있습니다."
        />

        <div className="border-b border-line">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
