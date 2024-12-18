//Seccion donde encontrarnos de la pagina principal
import './menu.css';
import Mapa from "./mapa/mapa";
const DondeEncontrarnos = () => {
 
    return (
        <div className="container text-center mt-5">
        <h1 className="mb-4">Donde Encontrarnos</h1>
        <Mapa/>
        <p className='fs-4 fst-italic mt-4'>
        
        </p>
      </div>
    )
}
export default DondeEncontrarnos