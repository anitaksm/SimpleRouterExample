import React from 'react'
import { Link } from 'react-router-dom'

const LinksComp = () => {
    return (
        <div>
            <h3>Links</h3>
            <ul>
                <Link to="/routeExperiment">
                    <li>
                        Route Experiment
                    </li>
                </Link>
                <Link to="/ciscoExperiment">
                    <li>
                        Cisco Experiment
                     </li>
                </Link>
            </ul>
        </div>
    )
}

export default LinksComp
