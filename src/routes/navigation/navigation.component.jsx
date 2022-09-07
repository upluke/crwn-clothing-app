import { Fragment, useContext } from 'react'
import {Outlet, Link} from 'react-router-dom'
// SVGs can be imported and used directly as a React component in your React code. The image is not loaded as a separate file, instead, it’s rendered along the HTML.
// Note this approach only works with create-react-app. If you are not using create-react-app, I would recommend using other approaches. Create-react-app uses SVGR under the hood to make it possible to transform and import SVG as a React component.
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { signOutUser } from '../../utils/firebase/filebase.utils'

import './navigation.styles.scss'
 

const Navigation=()=>{
    const {currentUser} =useContext(UserContext)
    const {isCartOpen} =useContext(CartContext)
 
 

    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrownLogo className='logo' />
                </Link>
               <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    {currentUser?(
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                    ):(
                        <Link className='nav-link' to='/auth' >Sign-in</Link>
                    )}
                <CartIcon />
               </div>
               {isCartOpen && <CartDropDown/>}

            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation