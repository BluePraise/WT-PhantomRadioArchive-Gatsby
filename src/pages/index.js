import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
            {/*<Head title = "Posts" />*/}
            <h1>A result of Phantom Radio Archive Posts.</h1>
            <ul>
                {
                    posts.allWordpressWpRadioposts.edges.map((edge) => {
                        return (
                            <li>
                                <Link to={edge.node.slug}>
                                    <h2>{edge.node.title}</h2>

                                    <p>{edge.node.date}</p>
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


