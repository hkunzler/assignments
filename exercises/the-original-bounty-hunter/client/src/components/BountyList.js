import React from 'react';
import Bounty from './Bounty.js'
import {withBounty} from '../context/BountyProvider.js'

const BountyList = (props) => {
    console.log(props);
    return (
        <div>
            {props.bounty.map(bounty => <Bounty
                handleDelete={props.handleDelete}
                key={bounty._id}
                {...bounty}
            />)}
        </div>
    );
};

export default withBounty(BountyList);