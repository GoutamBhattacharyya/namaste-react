import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logoPath from 'url:../images/ec.png';
import { addItem } from '../../data/cartSlice';

const Header = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    return (
        <header className="w-full py-4 bg-gray-100 border-b border-gray-200">
            <div className='container flex mx-auto justify-between items-center'>
                <div className="logo">
                    <img src={logoPath} alt="logo" className='logo' />
                </div>
                <div>
                    <ul className="flex space-x-4 text-gray-700">
                        <li><a href="#" className="hover:text-cyan-500">Home</a></li>
                        <li><a href="#" className="hover:text-cyan-500">About</a></li>
                        <li><a href="#" className="hover:text-cyan-500">Contact</a></li>
                        <li><a href="#" className="hover:text-cyan-500">Cart ({cartItems.length})</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;