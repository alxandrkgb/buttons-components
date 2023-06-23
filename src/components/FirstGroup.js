import React from 'react';

function FirstGroup() {
    return (
        <div className='GroupOne'>
            <div>
            <p className='GrpOneTitle'>{'<Button />'}</p>
            <button className='GroupOneButton ButtonOne'>Default</button>
            </div>

            <div>
            <p className='GrpOneTitle Got'>&:hover, &:focus</p>
            <button className='GroupOneButton ButtonTwo'>Default</button>
            </div>
        </div>
    );
}

export default FirstGroup