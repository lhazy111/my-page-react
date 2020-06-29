import React from 'react'

export const Divider = ({ sectionName, textColor }) => {
    const classes = [`page-section-heading d-inline-block text-${textColor}`,
    `divider-custom divider-${textColor}`]
    return (
        <div>
            <div>
                <h2 className={classes[0]}>{sectionName.toUpperCase()}</h2>
            </div>
            <div className={classes[1]}>
                <div className="divider-custom-line"></div>
            </div>
        </div>
    )
}
