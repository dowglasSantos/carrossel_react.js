import { useRef } from 'react'
import './App.css'

import {useFetch} from './hooks/useFetch';

const App = () => {
  const carrosel = useRef(null);
  const {data, loading} = useFetch();


  const onScrollLeft = (e) => {
    e.preventDefault();
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth // Diminuindo o valor
  };

  const onScrollRight = (e) => {
    e.preventDefault();
    carrosel.current.scrollLeft += carrosel.current.offsetWidth // Somando o valor
  };

  return (
    <div>
      <div className='logo'>
        <img src='/static/images/super-shoes.png' alt='Super Shoes Logo' />
      </div>
      <div className="container" ref={carrosel}>
        {data.map(item => {
          const {id, image, name, oldPrice, price} = item;
          return (
            <div className='item' key={id}>
              <div className='imageItem'>
                <img src={image} alt={name} />
              </div>
              <div className='description'>
                <span>{name}</span>
                <span>U$ {oldPrice}</span>
                <span>U$ {price}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className='containerButtons'>
        <button onClick={onScrollLeft}><img src='/static/images/left-arrow.png' alt='Arrow Left'/></button>
        <button onClick={onScrollRight}><img src='/static/images/right-arrow.png' alt='Arrow Right'/></button>
      </div>
    </div>
  )
}

export default App