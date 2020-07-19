import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import TogglePlayPause from "../components/toggleplaypause"

const IndexPage = () => {

    const posts = useStaticQuery( graphql`
        query {
            allWordpressWpRadioposts {
                edges {
                    node {
                        title
                        slug
                        date
                    }
                }
            }
        }
    `)

    return (

        <Layout>
            <ul className="playlist">
                {
                    posts.allWordpressWpRadioposts.edges.map((edge) => {
                        return (
                            <li>
                                <div className="play-toggle amplitude-play-pause">
                                    <TogglePlayPause />
  					            </div>
                                <Link to={edge.node.slug}>
                                    <h2>{edge.node.title}</h2>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </Layout>
    )

}

export default IndexPage