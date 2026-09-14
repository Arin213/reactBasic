/**
 * Challenge: Build the Header component in a separate file
 * and render it here in the App component
 */

import Header from "./components/Header";
import Main from "./components/Main";
// import data from "./data";


export default function App() {
  // const header = data.map(entry => {
  //   // console.log("this is", entry);
  //   return <Header 
  //             key={entry.id}
  //             {...entry}
  //         />
      
    

  // });


  return (
    <div className="container">
      {/* <p>Challenge: Build the Header component in a separate file and render it here in the App component</p> */}
      <Header />
      <Main />
    </div>
  )
}
