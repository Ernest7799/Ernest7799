import React from 'react';
import s from '../home/home.module.css'
const Home = () => {
    return (
        <>
            <h1 className={s.title}>Home</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Go-home.svg/1200px-Go-home.svg.png" alt="" style={{height:'400px',width:'400px'}} />
        </>
    )
}
export default Home;