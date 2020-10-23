import React, { useState, useEffect } from 'react';
import '../assets/styles/App.css'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer';

const App = () => {

    const [videos, guardarVideo] = useState([
        {id: 1, title: 'Gatito feliz', date: 'Ayer'},
        {id: 2, title:' Gatito triste', date: 'Hoy'},
        {id: 3, title: 'Gatito normal', date: 'Hoy'},
    ]);

    return (
        <div className="App">
            <Header />
            <Search />
                <Categories title="My list">
                    <Carousel>
                        {
                            videos.map( data => <CarouselItem key={data.id} data={data}/> )    
                        }            
                    </Carousel>
                </Categories>

            <Categories title="Tendencies">
                <Carousel>
                    <CarouselItem/>
                </Carousel>
            </Categories>
            <Footer />
        </div>
    );
}

export default App;
