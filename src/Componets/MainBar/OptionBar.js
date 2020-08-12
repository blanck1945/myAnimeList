import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const OptionBar = ({ header, options, max }) => {

    const [open, setOpen] = useState(false)


    const display = options.map((el, index) =>
        <Link to={el.path} key={index} className="optionItem" >
            <div className="optionNavItem" name={el}>
                {el.header}
            </div>
        </Link>
    )


    return (
        <div className={max ? "optionBox max" : "optionBox"}>
            <h4 className={open ? "optionHeader selec" : "optionHeader"}
                onMouseOver={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >{header}</h4>
            <div className={open ? "optionList solid" : "optionList"}
                onMouseLeave={() => setOpen(false)}
                onMouseOver={() => setOpen(true)} >
                {display}
            </div>
        </div>
    )
}

export default OptionBar

//onMouseLeave={() => setOpen(false)}
