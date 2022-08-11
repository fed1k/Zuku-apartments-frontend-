import { useRef } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { BiRightArrow } from "react-icons/bi"
import { BiLeftArrow } from "react-icons/bi"

const Home = () => {
  const data = useSelector((state)=> state)
  const button1 = useRef()
  const button2 = useRef()

  const toggler = (e) => {
    if(e.target === button1.current) {
      button2.current.style.backgroundColor = '#97c00eff'
      e.target.style.backgroundColor = '#efefefff'
    } else if(e.target === button2.current){
      e.target.style.backgroundColor = '#efefefff'
      button1.current.style.backgroundColor = '#97c00eff'
    }
  }

  return (
    <div className="my-reservations-container">
      <h1>LATEST HOUSES</h1>
      <div className="houses-div">
        <div ref={button1} onClick={toggler} className="left-button left-right-buttons">
          <BiLeftArrow className="direction-icons"/>
        </div>
        {data.length ? data.map((i)=> (
          <div key={i.id}>
            <NavLink to={`/my_reservations/${i.id}`} >{i.title}</NavLink>
          </div>
        )) : <h1>Loading...</h1>}
        <div ref={button2} onClick={toggler} className="right-button left-right-buttons">
          <BiRightArrow className="direction-icons"/>
        </div>
      </div>
    </div>
  );
}
 
export default Home;
