import React from 'react';

import Featured from './Featured';
import Events from './Events';
import MeetPlayers from './MeetPlayers';
import Promotion from './Promotion';

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Events/>
            <MeetPlayers/>
            <Promotion/>
        </div>
    )
}

export default Home;