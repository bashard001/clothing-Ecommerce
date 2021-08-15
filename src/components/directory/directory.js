import React from "react"
import MenuItem from "../menu-item/menu-item"
import "./directory.style.scss"
import { connect } from "react-redux"


const Directory = ({sections}) => {
    
   
        return(
     <div className="directory-menu">
         {
             sections.map( ({ id, ...sectionProps} ) =>
                (
                    <MenuItem key={id} {...sectionProps}/>
                ))
         }
     </div>
        )
    
}
export default Directory