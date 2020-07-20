import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import ReactAudioPlayer from 'react-audio-player'
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
                        acf {
                            audio_file {
                                source_url
                            }
                        }
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
                        let audio_sourcefile = 
                        return (
                            <li>
                                <div className="play-toggle amplitude-play-pause">
                                    <TogglePlayPause />
                                    // how to extract this?
                                    <ReactAudioPlayer
                                        src="${edge.node.acf.audio_file.source_url}"
                                    />
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