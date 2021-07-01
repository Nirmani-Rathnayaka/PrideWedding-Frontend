import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./Gallery.css";
import Menu from "./menu";

const GalleryReact = () => {

    const [items, setItems] = useState(Menu);
    
    const filterItem = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-3 testClass">Our Partners </h1>
            <hr />
            
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-dark btn-warning" onClick={() => filterItem('hotel')}>Hotel&Catering</button>
                    <button className="btn btn-dark btn-warning" onClick={() => filterItem('saloon')}>Saloon</button>
                    <button className="btn btn-dark btn-warning" onClick={() => filterItem('photo')}>Photography</button>
                    <button className="btn btn-dark btn-warning" onClick={() => filterItem('jewel')}>Jwellary</button>
                    <button className="btn btn-dark btn-warning" onClick={() => filterItem('entertainment')}>Entertainment</button>
                    <button className="btn btn-dark btn-warning" onClick={() => filterItem('deco')}>Decorations</button>
                </div>
            </div>
            <br></br>
            <div className="menu-tab d-flex justify-content-around">
            <button className="btn btn-dark btn-block" onClick={() => setItems(Menu)}>All</button></div>

            {/* my main items section  */}
            <div className="menu-items container-fluid mt-3">
                <div className="row">
                    <div className="mx-auto">
                     
                            
                            {
                                items.map((elem) => {
                                    const { id, name, image, description, price } = elem;

                                    return (
                                    
                                       
                                            <div className="row Item-inside">
                                                {/* for images */}
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                                    <img src={image} alt={name} className="img-fluid"/>
                                                </div>

                                                {/* menu items description */}
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1>{name}</h1>
                                                        <p>{description }</p>
                                                    </div>
                                                    <div className="menu-price-book">
                                                        <div className="price-book-divide d-flex justify-content-between ">
                                                          <Link to ="/register">  
                                                            <a href="#">
                                                                <button className="btn btn-primary">More Info</button>
                                                            </a>
                                                            </Link>
                                                        </div>
                                                        <p>*Special packages available with discounts.</p>
                                                    </div>
                                                </div>
                                            </div>
                                      
                                    )
                                })
                        }

                             
                        </div>
                    </div>
                </div>
           
        </>
    )
}

export default GalleryReact