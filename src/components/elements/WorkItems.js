import React from 'react'
import { useWorkListQuery } from '../queries/useWorkListQuery'
import numberToWords from 'number-to-words'
import { Link } from 'gatsby'

const WorkList = () => {

    const queryList = useWorkListQuery()
    const workList = queryList.allMdx.nodes

    console.log(workList)

    return (
        <ul className="work-list">
            {workList.map((project, i) => {
                return (
                    <li key={project.id}>
                        <div className="work-list-link-container">

                            <Link to={`projects/${project.slug}`} title={project.title} >
                                <p className="project-year">{"'" + project.frontmatter.date.slice(2, 4)}</p>
                                {project.frontmatter.title}
                            </Link>
                        </div>
                        {/* <p className="project-description">{project.frontmatter.description}</p> */}
                    </li>
                )
            })}
        </ul>
    )
}

export default WorkList