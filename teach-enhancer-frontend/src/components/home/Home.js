import React from "react";
import Hero from "../hero/Hero";

const Home  = ({enhancements}) => {
    return (
        <div>
            <h1>Welcome to Teach Enhancer</h1>
            <p>This is the home page of the Teach Enhancer application.</p>
            <Hero enhancements={enhancements}></Hero>
        </div>
    );
}

export default Home;