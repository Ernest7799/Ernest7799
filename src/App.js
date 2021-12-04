// import Hello from './components/Hello'
// import Button from './components/button/Button';
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
// const animals = [
//   {
//       name: 'Lion',
//       kg: 200,
//       height: 1.50,
//   },
//   {
//       name: 'Monkey',
//       kg: 12,
//       height: 0.3
//   },
//   {
//       name: 'Cat',
//       kg: 2,
//       height: 0.2,
//   }, 
//   {
//       name: 'Dog',
//       kg: 15,
//       height: 0.8,
//   }
// ]

// const App = ({animals}) => {
//   const click = () =>{
//     console.log(1)
//   }
//   const handleClick = (index) => {
//     console.log(index);
//   }
//   return (
//     // <div className="privet">
//     //   {
//     //     animals.map((v, i) =>{
//     //       return <Header 
//     //       {...v} key={i}
//     //        handleClick={() => {handleClick(i)}} />
//     //     })
//     //   }
//     //   <Footer click ={click} />





//       {/* <Footer message={"Privet"} name={"Alym"} age={"17"} />
//       <Header animals={animals[0]} />
//       <Header animals={animals[1]} />
//       <Header animals={animals[2]} />
//       <Header animals={animals[3]} /> */}     
//     // </div>
//   );
// }



// export default App;


import react from "react";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Contacts />
      <Footer />
    </>
  )
}

export default App;