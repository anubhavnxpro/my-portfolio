import React from 'react'
import SkillsItem from './SkillsItem'
import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutMeSkills = () => {
    return (
        <div className='mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm'>
            <div className='container'>
                <motion.h1 className='text-3xl sm:text-4xl text-primary-dark dark:text-primary-light text-center py-2'>Skills</motion.h1>
            </div>

            {/* Languages */}
            <div className='container'>
                <motion.p className='text-primary-dark dark:text-primary-light'>Languages</motion.p>
            </div>
            <div className="font-general-medium container mx-auto block sm:flex items-center paddingBottom">
                <SkillsItem
                    skills='C++'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/c++logo.png' />}
                />

                <SkillsItem
                    skills='JAVA'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/java.png' />}
                />

                <SkillsItem
                    skills='Python'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/python.png' />}
                />

                <SkillsItem
                    skills='PHP'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/php.png' />}
                />

                <SkillsItem
                    skills='TypeScript'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/typescript.png' />}
                />

                <SkillsItem
                    skills='Javascript (ES6+)'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/javascript.png' />}
                />
            </div>

            {/* Technologies */}
            <div className='container'>
                <motion.p className='text-primary-dark dark:text-primary-light'>Technologies</motion.p>
            </div>
            <div className="font-general-medium container mx-auto block sm:flex items-center paddingBottom">
                <SkillsItem
                    skills='Node.js'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/nodejs.png' />}
                />

                <SkillsItem
                    skills='Next.js'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/reactjs.png' />}
                />

                <SkillsItem
                    skills='React.js'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/reactjs.png' />}
                />

                <SkillsItem
                    skills='Angular.js'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/angular.png' />}
                />

                <SkillsItem
                    skills='FireBase'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/firebase.png' />}
                />
            </div>

            {/* DataBases */}
            <div className='container'>
                <motion.p className='text-primary-dark dark:text-primary-light'>DataBases</motion.p>
            </div>
            <div className="font-general-medium container mx-auto block sm:flex items-center paddingBottom">
                <SkillsItem
                    skills='MongoDB'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/mongodb.png' />}
                />

                <SkillsItem
                    skills='My SQL'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/mysql.png' />}
                />
            </div>


            {/* Others */}
            <div className='container'>
                <motion.p className='text-primary-dark dark:text-primary-light'>Others</motion.p>
            </div>
            <div className="font-general-medium container mx-auto block sm:flex items-center paddingBottom">
                <SkillsItem
                    skills='CSS'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/css.png' />}
                />

                <SkillsItem
                    skills='GIT'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/git.png' />}
                />

                <SkillsItem
                    skills='HTML'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/html.png' />}
                />

                <SkillsItem
                    skills='Github'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/github.png' />}
                />
            </div>

            {/* Additional Skills */}
            <div className='container'>
                <motion.p className='text-primary-dark dark:text-primary-light'>Some skills that i'm working on</motion.p>
            </div>
            <div className="font-general-medium container mx-auto block sm:flex items-center paddingBottom">
                <SkillsItem
                    skills='Algorithms'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/algo.png' />}
                />

                <SkillsItem
                    skills='Data Structures'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/datastructure.png' />}
                />

                <SkillsItem
                    skills='AI / ML'
                    icon={<Image alt='logo' width={25} height={25} src='/images/skills/ml.png' />}
                />
            </div>
        </div>
    )
}

export default AboutMeSkills