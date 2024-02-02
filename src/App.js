import logo from "./assets/img/hush_puppies-min.png";
import heart from "./assets/img/heart.png";
import "./App.scss";
import Carousel from "./components/carousel";
import Title from "./components/title";
import AddToCartButton from "./components/addCartButton";
import {useEffect, useState} from "react";
import {shuffleAndTake} from "./utils/utils";
import Sizes from "./components/sizes";
import {useTheme} from "./context/themeContext";

function App() {
    const [shoes, setShoes] = useState([]);
    const sizes = ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'];

    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const selectedImage = shoes?.length ? shoes[selectedImageIndex] : null

    const suggestions = shuffleAndTake(shoes, 4)

    const { isChristmasTheme, toggleTheme } = useTheme();

    useEffect(() => {
        fetch('/json/zapatos.json') // Adjust the path as needed
            .then(response => response.json())
            .then(data => setShoes(data))
            .catch(error => console.error('Error fetching JSON:', error));
    }, []);

    return (
            <div className={isChristmasTheme ? 'christmas' : ''}>
                {/*Daily Offer*/}
                <aside className="hush-bg-primary text-center text-white">
                    <h4 className={'py-2 m-0'}>HOT SALE -30% EN SANDALIAS</h4>
                </aside>

                {/*Staff Menu*/}
                <nav className={'staff-menu'}>
                    <section>
                        <ul>
                            <li>
                                <a style={{textDecoration: 'underline'}} onClick={toggleTheme} href="#">CAMBIAR TEMA</a>
                            </li>
                            <li>
                                <a href="https://www.google.com">DIRECTORIO DE TIENDAS</a>
                            </li>
                            <li>
                                <a href="https://www.google.com">SERVICIO AL CLIENTE</a>
                            </li>
                            <li>
                                <a href="https://www.google.com">MI CUENTA</a>
                            </li>
                        </ul>
                    </section>
                </nav>

                {/*Main Header*/}
                <header className={'main-header'}>
                    <aside>
                        <img src={logo} alt="logo"/>
                    </aside>
                    <section>
                        <div>
                            <input className={'basic'} type="text" placeholder="BUSCAR"/>
                        </div>
                        <div>
                            <p>ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000</p>
                        </div>
                    </section>
                </header>

                {/*Main Nav*/}
                <nav className={'main-nav'}>
                    <section className={'nav'}>
                        <ul>
                            <li>
                                <a href="https://www.google.com">HOMBRE</a>
                            </li>
                            <li>
                                <a href="https://www.google.com">MUJER</a>
                            </li>
                            <li>
                                <a href="https://www.google.com">BLOG</a>
                            </li>
                            <li>
                                <a href="https://www.google.com">HISTORIA</a>
                            </li>
                            <li>
                                <a href="https://www.google.com">TIENDAS</a>
                            </li>
                        </ul>
                    </section>
                    <section className={'shopping-cart-amount'}>
                        <p>
                            CARRITO <span>0</span>
                        </p>
                    </section>
                </nav>

                {/*Breadcumbs*/}
                <aside className="breadcrumbs">
                    <ul>
                        <li>
                            <a href="https://www.google.com">HUSHPUPPIESCO /</a>
                        </li>
                        <li>
                            <a href="https://www.google.com">CALZADO /</a>
                        </li>
                        <li>
                            <a href="https://www.google.com">ZAPATILLA HOMBRE PELIKAN</a>
                        </li>
                    </ul>
                </aside>
                <section className="product-offer-cnt">
                    <div className={"carousel"}>
                        <Carousel
                            selectedImage={selectedImage}
                            setSelectedImageIndex={setSelectedImageIndex}
                            images={shoes?.slice(0, 4)}/>
                    </div>
                    <div className="product-description">
                        <h3 className={'hush-text-muted m-0'}>{selectedImage?.nombre}</h3>
                        <h3 className={'hush-text-primary m-0'}>${selectedImage?.precio}</h3>
                        <span className={'hush-text-lgray'}>Cod. de producto zap-{selectedImage?.referencia}</span>
                        <div className="colors mt-5">
                            <h6>COLOR</h6>
                            <div>
                                <img src="https://supermallpe.vtexassets.com/arquivos/ids/642329/TALLA-41.jpg"
                                     alt="color"/>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h6>TALLA</h6>
                            <Sizes list={sizes}/>
                        </div>
                        <div className="guider-sizes my-5">
                            <h6>GUIA DE TALLAS</h6>
                        </div>
                        <div className="cart-actions">
                            <AddToCartButton/>
                            <div>
                                <img src={heart} alt="heart"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="product-info mt-5">
                    <Title>DETALLES DE PRODUCTO</Title>
                    <p className={'hush-text-muted'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus
                        dictum mi, a aliquet ante. Fusce vitae felis ac ante aliquet viverra
                        id nec dolor. Praesent sodales augue ligula, ut euismod tortor lacinia
                        non. Etiam tristique quam quis rutrum aliquam. Vestibulum in pharetra
                        sem. Etiam scelerisque accumsan suscipit. Praesent fermentum orci
                        orci, vitae dignissim turpis faucibus ac. Aenean dictum feugiat metus,
                        id maximus mauris consectetur ac.
                    </p>
                </section>
                <section className="product-tech">
                    <Title>TECNOLOGÍAS</Title>
                    <p className={'hush-text-muted'}>
                        Quisque tellus odio, varius consequat interdum at, molestie viverra
                        lacus. Donec nec tempus enim, nec pellentesque magna. Vestibulum
                        dignissim, nunc id interdum dignissim, orci ex cursus metus, ut
                        interdum tellus arcu at lorem
                    </p>
                </section>
                <section className="product-details">
                    <p className={'highligted-text'}>COMPLETA TU LOOK</p>
                    <div className="cards">
                        {
                            shoes?.map((item) => {
                                return (
                                    <div key={`item-${item?.nombre}`} className="card product-card">
                                        <div className="card-image">
                                            <img
                                                src={`/assets/img/${item.foto}`} alt="card"/>
                                        </div>
                                        {/*<div className="card_secondary_images">*/}
                                        {/*  <img src="https://www.google.com" alt="card" />*/}
                                        {/*  <img src="https://www.google.com" alt="card" />*/}
                                        {/*</div>*/}
                                        <div className="card-description">
                                            <h6>{item.nombre}</h6>
                                            <p className={'hush-text-primary'}>${item.precio}</p>
                                            <AddToCartButton>AGREGAR AL CARRITO</AddToCartButton>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className="product-recommendation">
                    <Title>PRODUCTOS RECOMENDADOS</Title>
                    <div className="cards">
                        {
                            suggestions?.map((item) => {
                                return (
                                    <div key={`option-${item?.nombre}`} className="card product-card">
                                        <div className={'card-image'}>
                                            <img src={`/assets/img/${item.foto}`} alt="card"/>
                                        </div>
                                        {/*<div className="product_recommendation_card_secondary_images">*/}
                                        {/*    <img src="https://www.google.com" alt="card"/>*/}
                                        {/*    <img src="https://www.google.com" alt="card"/>*/}
                                        {/*</div>*/}
                                        <div className="card-description">
                                            <h6>{item.nombre}</h6>
                                            <p className={'hush-text-primary'}>${item.precio}</p>
                                        </div>
                                        <hr/>
                                    </div>

                                )
                            })
                        }
                    </div>
                </section>
                <section className="pre-footer hush-bg-tertiary py-5 text-center">
                    <h2>@HUSHPUPPIESCO</h2>
                </section>
                <footer className={'main-footer'}>
                    <div>
                        <header>SERVICIO AL CLIENTE</header>
                        <ul>
                            <li>
                                <a href="#">CONTACTENOS</a>
                            </li>
                            <li>
                                <a href="#">CAMBIOS Y DEVOLUCIONES</a>
                            </li>
                            <li>
                                <a href="#">POLITICAS DE LA TIENDA</a>
                            </li>
                            <li>
                                <a href="#">POLITICAS DE DATOS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <header>MI CUENTA</header>
                        <ul>
                            <li>
                                <a href="#">MIS PEDIDOS</a>
                            </li>
                            <li>
                                <a href="#">MIS DEVOLUCIONES</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <header>RECURSOS</header>
                        <ul>
                            <li>
                                <a href="#">TIENDAS</a>
                            </li>
                            <li>
                                <a href="#">DEVOLUCIONES</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <header>NEWSLETTER</header>
                        <div>
                            <span>Regístrate para ser el primero en recibir nuestras noticias</span>
                        </div>
                        <div className={'py-3'}>
                            <input className={'basic'} type="text" placeholder="E-MAIL"/>
                        </div>
                    </div>
                </footer>
            </div>
    );
}

export default App;
