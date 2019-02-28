import React from 'react'
import NameBadge from './NameBadge.js'

const NameBadgeList = props => {

    const mappedBadges = props.badges.map((badge, i) => <NameBadge {...badge} key={i}/>)

    return (
        <div>
            {mappedBadges}
        </div>
    )
}

export default NameBadgeList