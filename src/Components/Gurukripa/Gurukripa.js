// import Gant from "./Components/Gurukripa/Gant"
import GantData from "./GantData";
import Ask from './Ask'
import Request from "./Request";
import Footer from "./Footer";
import Syllabus from "./Syllabus";
import Sample from "./Sample";
// import Navbar from './Components/Gurukripa/Navbar'
import Header from "./Header1";
import Gant from './Gant'
 

function Gurukripa() {
  return (
    <>
        {/* <Navbar/> */}
        {/* <Header/> */}
        <Header/>
        <Gant/>
        <GantData/>
        <Ask/>
        <Syllabus/>
        <Sample/>
        <Request/>
        <Footer/>

          
        
    </>
  );
}

export default Gurukripa;
