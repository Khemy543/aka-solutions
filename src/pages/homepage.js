import React,{ Component } from 'react';
import Header from "../components/header";
import CarouselView from '../components/carousel';
import "../styles/app.css";
import 'font-awesome/css/font-awesome.min.css';
import Footer from "../components/footer";
import About from '../components/about';
import Services from '../components/services';
import Contact from '../components/contact';
  



class Homepage extends Component {
    render() {
      return (
        <div>
          
              <Header />
              <main>
              
              <CarouselView />

              <About />

              <Services />
            

              <Contact />

<Footer />
              </main>
              </div>
      );
    }
}
export default Homepage;