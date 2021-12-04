// import App from "../../App"
// import Button from "../../button/Button";

// const Header = ({name, kg, height, handleClick}) =>{
//     return(
//         <div style={{
//             display: 'flex',
//             justifyContent: 'space-around',
//             alignItems: 'center'
//         }}>
//             <h3>Name: {name} </h3>
//             <p>Kg: {kg}</p>
//             <p>Height: {height}</p>
//             <div>
//             <button onClick={handleClick}>Click</button>
//             </div>
//         </div>
//     )
// }

import s from "../header/Header.module.css";


const Header = (props) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSY9TotuP7IY3qF0bYKbavELLD_2hCT7tpQ&usqp=CAU" alt="" />
            <div className={s.title} style={{
                flexWrap: 'nowrap',
                display: 'flex',
                justifyContent: 'space-around',
                marginRight: '10px'
            }}>
                <a href="" style={{ marginRight: '10px' }}>Home</a>
                <a href="" style={{ marginRight: '10px' }}>About</a>
                <a href="">Contacts</a>
            </div>
            <button style={{backgroundColor: 'red', color:'white'}}>Logout</button>
        </div>
    )
}
export default Header;