import React from 'react'
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'
import { CollectionPreview } from "../preview-collection/preview-collection"

import "./collections-overview.styles.scss"

const CollectionsOverview = ({ collections }) => (
    <div className="collections">
         {
                collections.map(({id, ...collectionProps}) => {
                    return <CollectionPreview key={id} {...collectionProps} />
                })
            }
    </div>
)

export default connect() (CollectionsOverview)