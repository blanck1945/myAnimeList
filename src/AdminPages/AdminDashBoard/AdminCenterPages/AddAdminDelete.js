import React from 'react'
import { Link } from "react-router-dom"
import TitleComp from "./Components/TitleComp"

import "./AdminCenterPagesStyles/AddAnimeDelete.scss"
import HeaderComp from './Components/headerComp'

const AddAdminDelete = () => {
    return (
        <div className="addFormDiv">
            <div className="centerContainer">
                <TitleComp header={"Deleting Data from out DB"} />
                <div className="deleteMsgBox">
                    <HeaderComp upHeader={"Deleting Data from the DB is a serious matter. In allmost all cases deleting is not the options to solve the problem. That´s why we take differente security measures to avoid any problem"} upHeaderColor={"warningBox"} />
                    <h3>Recommendations</h3>
                    <ul className="recommend">
                        <li>Read the adding Rules. (especialy Deleting criteria and cases - Link to =>
                <Link to="/rules" className="link">
                                <span className="rulesDelete">Deleting</span>
                            </Link>)
                </li>
                        <li>Present the case in the Admin Forum part. Other admins may found a less extreme solution to the situation</li>
                        <li>Present a detail Threat in the section Admin Forum => DB => DELETE</li>
                        <li>Deleting is undestand as a last resource action. Assuming that, it require the approval of two other Admins to procced. With 3 ASK id numbers you can post a delete request. After that, the request will be evaluate by the MAL Team (Read about time and evaluation in <span>Rules</span> => <span>Times & evaluations</span>). The desition they make is <span>definitive</span>. Read more in the <span>Rules</span> => <span>MAL Team</span> section</li>
                    </ul>
                    <div className="warningBox">
                        <p>We take security as a high priority. This long procces was make with the idea that only the necesary cases reach to te delete point. Thanks for helping us manage our DB. </p>
                    </div>
                    <button className="requestDeleteBtn">Present Delete Request</button>
                </div>
            </div>
        </div>
    )
}

export default AddAdminDelete
