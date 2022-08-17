import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

const Home = () => {
  const data = useSelector((state) => state);
  const field = useRef();
  const [laga, setLaga] = useState(screen.width / 2);

  const scroller = (e) => {
    field.current.scrollBy(screen.width / 2, 0);
    if (laga > field.current.scrollWidth) return;
    setLaga(laga + field.current.clientWidth);
  };

  const scrollerMinus = (e) => {
    field.current.scrollBy(-screen.width / 2, 0);
    if (laga === screen.width / 2) return;
    setLaga(laga - field.current.clientWidth);
  };

  return (
    <div className="my-reservations-container">
      <div className='apartments-header-texts'>
        <h1>LATEST HOUSES</h1>
        <span>Please select an apartment model</span>
      </div>
      <div onClick={scrollerMinus} className="left-button left-right-buttons" style={laga === screen.width / 2 ? { backgroundColor: '#efefefff' } : { backgroundColor: '#97c00eff' }}>
        <BiLeftArrow className="direction-icons" />
      </div>
      <div className="houses-div" ref={field}>
        {data ? data.map((i) => (
          <div key={i.id} className="hola">
            <img src={i.image} className="apartment-image" />
            <NavLink to={`/my_reservations/${i.id}`}>{i.name}</NavLink>
            <p className='apartmens-descp'>{i.description.slice(0, 70)}</p>
          </div>
        )) : <h1>Loading...</h1>}
      </div>
      <div onClick={scroller} className="right-button left-right-buttons" style={field.current && laga > field.current.scrollWidth ? { backgroundColor: '#efefefff' } : { backgroundColor: '#97c00eff' }}>
        <BiRightArrow className="direction-icons" />
      </div>
    </div>
  );
};

export default Home;
