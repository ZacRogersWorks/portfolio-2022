import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/sections/Layout"
import { Seo } from "../components/Seo"
import Contact from "../components/sections/Contact"
import { useSiteContext } from "../components/context/SiteContext"

// markup
const NotFoundPage = () => {
  const currentContext = useSiteContext()

  return (
    <Layout>
      <Seo 
        title="404 Error!"
        description="Uh oh"
      />
      <Link className="back-button" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24.047" height="24.047" viewBox="0 0 24.047 24.047">
          <path fill="currentColor" id="Icon_ionic-md-arrow-back" data-name="Icon ionic-md-arrow-back" d="M30.023,16.5H11.763L20.18,8.081,18,5.977,5.977,18,18,30.023l2.1-2.1L11.763,19.5h18.26Z" transform="translate(-5.977 -5.977)" />
        </svg>
      </Link>
      <main className="four-oh-four-main">
        <h1>404 Error!</h1>
        <p>Oh no! Something must have gone wrong.
          <br />
          If you think there's an issue, please email me below.
        </p>
      </main>
      <Contact ref={currentContext?.section.refs.contact} dataId={"projectContact"}/>
    </Layout>
  )
}

export default NotFoundPage
