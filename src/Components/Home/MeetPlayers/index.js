import React, { Component } from 'react';

import Stripes from '../../../Resources/images/stripes.png';
import { Tag } from '../../ui/misc';

class MeetPlayers extends Component {

    state = {

    }

  render() {
    return (
      <div 
        className="home_meetplayers"
        style={{background:`#ffffff url(${Stripes})`}}
      >  
        <div className="container">
            <div className="home_meetplayers_wrapper">
                <div className="home_card_wrapper">
                    Card
                </div>
                <div className="home_text_wrapper">
                    <div>
                        <Tag bck="#0e1731" size="70px" color="#ffffff"
                            add={{
                                display:'inline-block',
                                marginBottom: '20px',
                            }}
                        >
                            Conoce
                        </Tag>
                    </div>
                    <div>
                        <Tag bck="#0e1731" size="70px" color="#ffffff"
                            add={{
                                display:'inline-block',
                                marginBottom: '20px',
                            }}
                        >
                            a nuestros
                        </Tag>
                    </div>
                    <div>
                        <Tag bck="#0e1731" size="80px" color="#ffffff"
                            add={{
                                display:'inline-block',
                                marginBottom: '30px',
                            }}
                        >
                            instructores
                        </Tag>
                    </div>
                    <div>
                        <Tag bck="#ffffff" size="30px" color="#0e1731" link={true} linkto="/the_members"
                            add={{
                                display:'inline-block',
                                marginBottom: '30px',
                                border: '1px solid #0e1731'
                            }}
                        >
                            pinchando este enlace
                        </Tag>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default MeetPlayers;
