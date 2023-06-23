import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function SixthGroup () {
    return (
        <div className='GroupSix'>
            <div>
            <p className='GrpSixTitle'>{'<Button startIcon=”local_grocery_store” />'}</p>
            <button className='GroupSixButton GrpSixButtonOne'><span className='iconStyle'><AddShoppingCartIcon />  Disabled</span></button>
            </div>

            <div>
            <p className='GrpSixTitle'>{'<Button endIcon=”local_grocery_store” />'}</p>
            <button className='GroupSixButton GrpSixButtonTwo'><span className='iconStyle'>Disabled  <AddShoppingCartIcon /></span></button>
            </div>
        </div>
    );
}

export default SixthGroup;