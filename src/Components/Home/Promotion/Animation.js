import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Jersey from '../../../Resources/images/jersey.jpg';

const PromotionAnimation = () => {
    return (
        <div className="promotion_animation">
            <div className="left">
                <Zoom>
                    <div>
                        <span>Quieres</span>
                        <span>conocernos?</span>
                    </div>
                </Zoom>
            </div>
            <div className="right">
                <Zoom>
                    <div style={{background:`url(${Jersey}) no-repeat`}}></div>
                </Zoom>
            </div>
        </div>
    )
}

export default PromotionAnimation;