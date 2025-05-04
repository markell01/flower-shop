import { NavLink } from "react-router"
import style from "./Menuitems.module.css"

export interface MenuItemsProps {
  name: string,
  link: string
}

const Menuitems: React.FC<MenuItemsProps> = ({ link, name }) => {
  return (
    <>
      <NavLink className={style.link} to={link}>{name}</NavLink>
    </>
  )
}

export default Menuitems