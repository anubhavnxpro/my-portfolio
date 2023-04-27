import ProjectGrid from "@/components/projects/ProjectGrid"
import PagesMetaHead from "@/components/shared/PagesMetaHead"


const Projects = () => {
  return (
    <div className="container mx-auto">
        <PagesMetaHead title='Projects' />

        <ProjectGrid />
    </div>
  )
}

export default Projects