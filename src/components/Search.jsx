import React from 'react';
import '../assets/styles/components/Search.css'
import cat from '../assets/static/catwalking.png'

const Search = () => (
    <section className="main">
        <img className="main__img" src={cat} alt="one cat walking below letters"/>
        <h2 className="main__title">Are your looking for a cat?</h2>
        <input className="main__input" type="text" placeholder="Search cute cats"/>
    </section>
);

export default Search;