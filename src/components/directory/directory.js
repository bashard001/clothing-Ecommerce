import React from "react"
import MenuItem from "../menu-item/menu-item"
import "./directory.style.scss"


class Directory extends React.Component {
    constructor(){
        super()
        this.state = {
            sections: [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'hats',
              bg: '/static/media/boxing.8c7dcad6.jpg',
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'shop/sneakers',
              bg: "/static/media/boots.26b652d3.jpg"
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              bg: "/static/media/elizeu-dias.882afaa4.jpg",
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ]
        }
    }

    render(){
        return(
     <div className="directory-menu">
         {
             this.state.sections.map( ({ id, ...sectionProps} ) =>
                (
                    <MenuItem key={id} {...sectionProps}/>
                ))
         }
     </div>
        )
    }
}
export default Directory