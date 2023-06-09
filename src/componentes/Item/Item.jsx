import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({id,nombre, precio, img}) => {
  return (
    <div className= 'cardElemento'>
      <img className='imgElemento' src= {img} alt= {nombre} />
      <h3> Nombre: {nombre} </h3>
      <p> Precio: {precio} </p>
      <p> ID: {id} </p>
      <Link className="button" to={`/item/${id}`}> VER DETALLES </Link>
    </div>
  )
}

export default Item
