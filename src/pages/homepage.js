import React,{ Component } from 'react';
import Header from "../components/header";
import CarouselView from '../components/carousel';
import "../styles/app.css";
import 'font-awesome/css/font-awesome.min.css';
import Footer from "../components/footer";
  



class Homepage extends Component {
    render() {
      return (
        <div>
          
              <Header />
              <main>
              
              <CarouselView />
            

              <section>
            <h2>About Us</h2>
            <div>
             <p>We provide highly qualified and skilled trades personnel for the construction industry. Temporary or permanent placements. We are a recruitment business.We offer skilled and highly qualified staff with competitive rates with a personalised customer service.

</p>

            </div>
           
        </section>

        <div className="section">
        <div className="container">
             <div className="row">
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon">
                            <i className="fa fa-pencil"></i>
                        </div>
                        <h3>Sales</h3>
                        <p className="description">We make our design perfect for you. Our adjustment turn our clothes into your clothes.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon">
                            <i className="fa fa-book"></i>
                        </div>
                        <h3>Content</h3>
                        <p className="description">We create a persona regarding the multiple wardrobe accessories that we provide..</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="info-icon">
                        <div className="icon">
                            <i className="fa fa-music"></i>
                        </div>
                        <h3>Music</h3>
                        <p className="description">We like to present the world with our work, so we make sure we spread the word regarding our clothes.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    
    

<Footer />
              </main>
              </div>
      );
    }
}
export default Homepage;