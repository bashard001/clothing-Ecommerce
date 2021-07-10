
import "./menu-item.style.scss"
import { withRouter } from "react-router-dom"


const MenuItem = ({ title, imageUrl, size, linkUrl, history, match, bg }) => {
    return (
        <div className={`menu-item ${size}`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image"
             style={{
                backgroundImage: `${bg ? `url(${bg})` : `url(${imageUrl})`}`
            }} />
            <div className="content">
                <h1 className="title">
                    {title.toUpperCase()}
                </h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)