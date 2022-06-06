import React from 'react'
import { useWorkListQuery } from '../queries/useWorkListQuery'
import numberToWords from 'number-to-words'
import { Link } from 'gatsby'

const WorkList = () => {
    
    const queryList = useWorkListQuery()
    const workList = queryList.allMdx.nodes

    return (
        <ul className="work-list">
            {workList.map((project, i) => {
                return (
                    <li key={project.id}>
                        <div className="work-list-link-container">
                            <p className="project-year">{"'" + project.frontmatter.date.slice(2, 4)}</p>
                            <Link to={`projects/${project.slug}` } >Project {numberToWords.toWords(i + 1)}</Link>
                        </div>
                        {/* <p className="project-description">{project.frontmatter.description}</p> */}
                    </li>
                )
            })}
        </ul>
    )
}

export default WorkList