import React from "react"
import CollectionOverview from "../../components/collections-overview/collections-overview"
import { Route } from "react-router-dom"
import CollectionPage from "../collection/collection"
import "./shop-page.style.css"



const ShopPage =  ({ match }) => {
    console.log(match)
        
        return (<div className="shop-page">
           <Route exact path={`${match.path}`} component={ CollectionOverview }/>
           <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
        </div>)
    }


export default ShopPage