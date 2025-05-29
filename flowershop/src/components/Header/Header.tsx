import style from './Header.module.css'
import Menulist from './MenuList/Menulist'
import '../../App.css'
import { IoFlowerOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <>
      <div className={`${style.header} montserrat-myfont`}>
        <div className={style.group}>
          <div className={style.iconGroup}>
            <div className={style.icon}>
              <IoFlowerOutline size={50} color={'white'}/>
            </div>
          </div>
          <Menulist />
        </div>
        <div className={style.userAndMag}>
          <NavLink to={'user'}> <FaRegUserCircle color={'white'} size={30} /> </NavLink>
          <NavLink to={'shop'}> <FaCartShopping color={'white'} size={30} /> </NavLink>
        </div>
      </div>
    </>
  )
}

export default Header