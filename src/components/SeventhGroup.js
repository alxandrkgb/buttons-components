import React from 'react';

function SeventhGroup () {
    return (
        <div className='GroupSeven'>
            <div>
            <p className='GrpSevenTitle'>{'<Button size=”sm” />'}</p>
            <button className='GroupSevenButton GrpSevenButtonOne'>Default</button>
            </div>

            <div>
            <p className='GrpSevenTitle'>{'<Button size=”md” />'}</p>
            <button className='GroupSevenButton GrpSevenButtonTwo'>Default</button>
            </div>

            <div>
            <p className='GrpSevenTitle'>{'<Button size=”lg” />'}</p>
            <button className='GroupSevenButton GrpSevenButtonThree'>Default</button>
            </div>
        </div>
    );
}

export default SeventhGroup;