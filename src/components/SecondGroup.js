import React from 'react'

function SecondGroup() {
    return (
        <div className='GroupTwo'>
            <div>
            <p className='GrpTwoTitle'>{'<Button variant=”outline” />'}</p>
            <button className='GroupTwoButton GrpTwoButtonOne'>Default</button>
            </div>

            <div>
            <p className='GrpTwoTitle Got'>&:hover, &:focus</p>
            <button className='GroupTwoButton GrpTwoButtonTwo'>Default</button>
            </div>
        </div>
    );
}

export default SecondGroup