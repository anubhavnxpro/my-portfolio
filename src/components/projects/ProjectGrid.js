import { projectsData } from '@/data/ProjectsData'
import { useState } from 'react'
import ProjectSingle from './ProjectSingle'

const ProjectGrid = () => {
  const [selectProject, setSelectProject] = useState()

  const selectProjectsByCategory = projectsData.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectProject);
	});
  return (
    <section className='py-5 sm:py-10 mt-5 sm:mt-10'>
        <div className='text-center'>
            <p className='font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light'>
                Projects Portfolio
            </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 sm:gap-5'>
          {
            selectProject ? selectProjectsByCategory.map((project, i) => {
              return <ProjectSingle key={i} {...project} />
            })
            : projectsData.map((project, i) => (
              <ProjectSingle key={i} {...project} />
            ))
          }
        </div>
    </section>
  )
}

export default ProjectGrid