import Menuitems, { MenuItemsProps } from "./MenuItems/Menuitems"
import style from './Menulist.module.css'


const links: MenuItemsProps[] = [
  {
    link: 'Home',
    name: 'Home'
  },
  {
    link: 'About_us',
    name: 'About us'
  },
  {
    link: 'Catalog',
    name: 'Catalog'
  },
]

const Menulist = () => {
  return (
    <>
    <div className={style.menuItems}>
      {links.map(el => (
        <Menuitems link={el.link} name={el.name}/>
      ))}
    </div>
    </>
  )
}

export default Menulist