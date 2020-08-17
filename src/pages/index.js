import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

import TogglePlayPause from "../components/player/toggleplaypause"
import AudioSession from "../components/player/audiosession"

// import Amplitude from "../../node_modules/amplitudejs/dist/amplitude.js"



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
                    posts.allWordpressWpRadioposts.edges.map((edge, key) => {
                        
                        return (
                            
                            <li>
                                <TogglePlayPause />
                                <div className="session--info">
  					                <p className="session--title">{edge.node.title}</p>
                                    <div className="player">
                                        <AudioSession source= { edge.node.acf.audio_file.source_url } />
                                        
                                    </div>
                                </div>

                                {/* <Link to={edge.node.slug}>
                                    <h2>{</h2>
                                </Link> */}
                            </li>
                        )
                    })
                }
            </ul>


        </Layout>
    )

}

export default IndexPage