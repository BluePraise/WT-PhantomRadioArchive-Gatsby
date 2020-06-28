import React from "react"
import { Link} from "gatsby"

const Aside = () => {

  return (

        <aside>
           <div className="branding">
                <div className="logo">

                </div>
               {/*<!-- <h1 class="title">PHANTOM RADIO <br>WERKPLAATS <br>TYPOGRAFIE</h1> --> */}
            </div>
            <p>PHANTOM RADIO IS A (G)HOSTED SOUND DEPARTMENT IN A FORMER RADIO DISTRIBUTION STATION IN ARNHEM, THE NETHERLANDS, NOW KNOWN AS WERKPLAATS TYPOGRAFIE.</p>

            <Link to={"#"} className="button">AN PHANTOM VOICES</Link>
            <Link to={"#"} className="button two">FOOD POETICS</Link>
        </aside>

    )
}

export default Aside
