import React from 'react'

function ThirdGroup() {
    return (
        <div className='GroupThree'>
            <div>
            <p className='GrpThreeTitle'>{'<Button variant=”text” />'}</p>
            <button className='GroupThreeButton GrpThreeButtonOne'>Default</button>
            </div>

            <div>
            <p className='GrpThreeTitle Got'>&:hover, &:focus</p>
            <button className='GroupThreeButton GrpTwoButtonTwo'>Default</button>
            </div>
        </div>
    );
}

export default ThirdGroup