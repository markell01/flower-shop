import { GiFlowerPot } from 'react-icons/gi'
import style from './Home.module.css'

const Home = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.mainText}>
          <div style={{marginLeft: '90px'}}>
            <GiFlowerPot size={150}/>
          </div>
          <h1>Flowers by markel</h1>
          <p style={{margin: '0px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Accusantium, dolore cupiditate quasi iste eaque ipsum dolorem sit fugiat optio quo labore tempora.</p>
        </div>
        <div className={style.cards}>

        </div>
      </div>
    </>
  )
}

export default Home