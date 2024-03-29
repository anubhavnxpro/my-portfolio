import PagesMetaHead from "@/components/shared/PagesMetaHead"
import { projectsData } from "@/data/ProjectsData"
import Image from "next/image"
import { FiClock, FiTag } from "react-icons/fi"

const ProjectSingle = (props) => {
    // console.log(props);
    return (
        <div className="container mx-auto">
            <PagesMetaHead title={props.title} />

            {/* Header */}
            <div>
                <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                    {props.ProjectHeader.title}
                </p>


                <div className="flex">
                    <div className="flex items-center mr-10">
                        <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
                        <span className="font-general-regular ml-2 leading-none text-ternary-dark dark:text-ternary-light">
                            {props.ProjectHeader.publishDate}
                        </span>
                    </div>

                    <div className="flex items-center">
                        <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
                        <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                            {props.ProjectHeader.tags}
                        </span>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
                {
                    props.ProjectImages.map((project) => {
                        return (
                            <div className="mb-10 sm:mb-0" key={project.id}>
                                <Image
                                    src={project.img}
                                    className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                                    alt={project.title}
                                    key={project.id}
                                    layout="responsive"
                                    width={100}
                                    height={90}
                                />
                            </div>
                        )
                    })
                }
            </div>

            {/* Info */}
			<div className="block sm:flex gap-0 sm:gap-10 mt-14">
				<div className="w-full sm:w-1/3 text-left">
					{/* Single project client details */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
							{props.ProjectInfo.ClientHeading}
						</p>
						<ul className="leading-loose">
							{props.ProjectInfo.CompanyInfo.map(
								(info) => {
									return (
										<li
											className="font-general-regular text-ternary-dark dark:text-ternary-light"
											key={info.id}
										>
											<span>{info.title}: </span>
											<a
												href="tel:+18702220457"
												className={
													info.title === 'Website' ||
													info.title === 'Phone'
														? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
														: ''
												}
												aria-label="Project Website and Phone"
											>
												{info.details}
											</a>
										</li>
									);
								}
							)}
						</ul>
					</div>

					{/* Single project objectives */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{props.ProjectInfo.ObjectivesHeading}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{props.ProjectInfo.ObjectivesDetails}
						</p>
					</div>

					{/* Single project technologies */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{props.ProjectInfo.Technologies[0].title}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{props.ProjectInfo.Technologies[0].techs.join(
								', '
							)}
						</p>
					</div>
				</div>

				{/*  Single project right section details */}
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{props.ProjectInfo.ProjectDetailsHeading}
					</p>
					{props.ProjectInfo.ProjectDetails.map((details) => {
						return (
							<p
								key={details.id}
								className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
							>
								{details.details}
							</p>
						);
					})}
				</div>
			</div>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    const { id } = query;
    return {
        props: projectsData.filter((project) => project.id === parseInt(id))[0]
    }
}

export default ProjectSingle