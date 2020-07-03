import React from 'react'

const Divider = ({ sectionName, textColor }) => {
    const classes = [
        `page-section-heading d-inline-block text-${textColor}`,
        `divider-custom divider-${textColor}`,
        `divider-custom-line`]
    return (
        <div>
            <div>
                <h2 className={classes[0]}>{sectionName}</h2>
            </div>
            <div className={classes[1]}>
                <div className={classes[2]}></div>
            </div>
        </div>
    )
}

export default Divider
