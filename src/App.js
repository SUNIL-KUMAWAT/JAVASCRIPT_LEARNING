// import { Box, VStack } from '@chakra-ui/react';
// import { Link } from "react-router-dom";
// import React from 'react'
// import {Route, BrowserRouter, Routes} from 'react-router-dom'
// import About from './Components/CreateLink/About'
// import Contact from './Components/CreateLink/Contact';
// import Info from './Components/CreateLink/Info';
// import { ROUTES } from './constants';
import Gurukripa from "./Components/Gurukripa/Gurukripa";
// import Request from "./Components/Gurukripa/Request";
// import Syllabus from "./Components/Gurukripa/Syllabus";
// import Sample from "./Components/Gurukripa/Sample";
// import NewLink from "./Components/CreateLink/NewLink";

function App() {
    return (<>
     <Gurukripa/>
      {/* <BrowserRouter>
        
        <Routes>
          
                <Route path="/"
                   element={<Gurukripa/>}/>
               <Route path={ROUTES.SYLLABUS}
                   element={<Syllabus/>}/>
               <Route path={ROUTES.TESTCITIES}
                   element={<Request/>}/>
               <Route path={ROUTES.SAMPLEPAPER}
                   element={<Sample/>}/>
           
       </Routes>
   </BrowserRouter> */}
   </>
      
      //   <BrowserRouter>
      //    <VStack>
      // <Link to="/about">About</Link>  
      // <Link to="/contact">Contact</Link>
      // <Link to="/info">Info</Link>
      // </VStack>
      //       <Routes>
               
      //               <Route path="/"
      //                   element={<Box>router study</Box>}/>
      //               <Route path={ROUTES.ABOUT}
      //                   element={<About/>}/>
      //               <Route path={ROUTES.CONTACT}
      //                   element={<Contact/>}/>
      //               <Route path={ROUTES.INFO}
      //                   element={<Info/>}/>
                
      //       </Routes>
      //   </BrowserRouter>
        
    );
}

export default App;
