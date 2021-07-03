import React from 'react'

import CollectionItem from '../collection/collection-item'

import "./preview-collection.styles.scss"

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item, indx) => indx < 4)
                .map(({id, ...itemProps}) => (
                    <CollectionItem key={id} {...itemProps} />
                ))}
        </div>
    </div>
)



export default CollectionPreview