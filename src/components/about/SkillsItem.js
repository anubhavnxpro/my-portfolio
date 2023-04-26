import React from 'react'

const SkillsItem = ({ skills, icon }) => {
    return (
        <div className="mb-20 sm:mb-0 skills">
            <span className='text-ternary-dark dark:text-ternary-light'>{skills}</span>
            {icon}
        </div>
    )
}

export default SkillsItem