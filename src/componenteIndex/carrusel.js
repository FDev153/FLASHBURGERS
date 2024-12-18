//Carrusel de imagenes en la pagina principal
import './menu.css';

const Carrusel = () => {

  return (
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src = {`${process.env.PUBLIC_URL}/${'3_pru.png'}`} class="d-block w-100" alt="slider_img1"/>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src = {`${process.env.PUBLIC_URL}/${'1_pru.png'}`} class="d-block w-100" alt="slider_img2"/>
        </div>
        <div class="carousel-item">
          <img src = {`${process.env.PUBLIC_URL}/${'2_pru.png'}`} class="d-block w-100" alt="slider_img3"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}
export default Carrusel; 