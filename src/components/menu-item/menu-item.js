
import "./menu-item.style.scss"
import { withRouter } from "react-router-dom"
import { Images } from "../../assets/img"


const MenuItem = ({ title, imageUrl, size, linkUrl, history, match, bg }) => {
    var image
    switch (bg) {
        case "cap": image = Images.cap
            break;
        case "sneaker": image = Images.sneaker
            break
        case "men": image = Images.men
            break
        default:
            break;
    }
    console.log(match)
    return (
        <div className={`menu-item ${size}`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image"
                style={{
                    backgroundImage: `${bg ? `url(${image})` : `url(${imageUrl})`}`
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