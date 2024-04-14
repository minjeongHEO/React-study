import React from "react";

export default function Avatar({ image, isNoob }) {
    const noobCheck = isNoob || false;
    return (
        <div className='avatar'>
            <img className='photo' src={image} alt='avatar' />
            {noobCheck && <span className='noob_badge'>NEW</span>}
        </div>
    );
}
