import React, { useState, useEffect } from 'react';
import '../assets/styles/App.css'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer';

const App = () => {

    const [ videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/initialState')
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => {
                console.log(error)
            })
    }, []);

    console.log(videos.trends.length)

    return (
        <div className="App">
            <Header />
            <Search />
                <Categories title="My list">
                    <Carousel>
                        <CarouselItem />
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
