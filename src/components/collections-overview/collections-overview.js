import React from 'react'
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selectors'
import  CollectionPreview  from "../preview-collection/preview-collection"

import "./collections-overview.styles.scss"

const CollectionOverview = ({ collections }) => (
    <div className="collections">
         {
                collections.map(({id, ...collectionProps}) => {
                    return <CollectionPreview key={id} {...collectionProps} />
                })
            }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps) (CollectionOverview)