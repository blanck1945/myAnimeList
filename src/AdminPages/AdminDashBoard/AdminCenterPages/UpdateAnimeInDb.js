import React, { useState } from 'react'
import TitleComp from './Components/TitleComp'
import HeaderComp from "./Components/headerComp"

import "./AdminCenterPagesStyles/AddAnimeDelete.scss"

const UpdateAnimeInDb = () => {

    const [UPD, setUPD] = useState("")

    const handlerValid = e => {
        setUPD(e.target.value)
    }

    return (
        <div className="addFormDiv">
            <div className="centerContainer">
                <TitleComp header={"Update Data from our DB"} />
                <div className="deleteMsgBox">
                    <HeaderComp upHeader={"It´s not posible to directly update a register in our DB. The only way to update a register is by requesting an 'Update ID' via a post in the Update Forum (Forum => Update) - we recommend each admin to read about Update ID and ASK. (Rules => <span>admin ID</span>)"} upHeaderColor={"updateBox"} />
                    <h3>Some Aclarations</h3>
                    <ul className="recommend">
                        <li>We understand the importance of manteining an update DB and it´s data. Updating is one of the most important aspect of the page and we put all our efforts to present the more accurate data </li>
                        <li>Each case and Data has an unique value. More popular or sensible Animes or cases will have <span>Preference</span>. Again, we understand the importance of every piece of info but due to lack of personal we have to make desitions calls. We are open to further recommendatios and advice</li>
                        <li>Admins have all the same value. There is not, we repeat that <span>There is not any difference nor preference</span> all the ultimate call of updating are made by the MAL Team (Rules => MAL Team)</li>
                    </ul>
                    <p className="UPD">Please Enter the UPD-id to Update an Anime</p>
                    <input type="number" placeholder="Valid UPD-id" value={UPD}
                        className="UPDinp" onChange={handlerValid} />
                </div>
            </div>
        </div>
    )
}

export default UpdateAnimeInDb
