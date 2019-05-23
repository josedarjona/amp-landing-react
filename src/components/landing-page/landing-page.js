import React, { Component } from "react";
import { Link } from 'react-router-dom'

// import "../../styles/css/all.css";
import "../../styles/css/landing.css";
import "../../styles/css/mailchimp.css";
import "../../styles/css/carousel.css";

class LandingPage extends Component {
  

  render() {
    return (
      <div>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  
                <Link to="/contact" style={{color: 'white'}} activeStyle={{color: 'red'}}>CONTACT</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      
        <video class="banner" src="videos/amp_landing.mov" loop autoPlay/>
        <div>
       
        

        {/* <div id="outer-carousel">
            <i class="fas fa-arrow-left left" onclick="left()" />
            <div id="carousel">
              <iframe
                id="imageOne"
                frameBorder="0"
                class="video"
                height="300"
                width="300"
                allowfullscreen=""
                src="#"
              />

              <iframe
                id="imageTwo"
                frameBorder="0"
                class="video hide-when-tiny"
                height="300"
                width="300"
                allowfullscreen=""
                src="#"
              />

              <iframe
                id="imageThree"
                frameBorder="0"
                class="video hide-when-small"
                height="300"
                width="300"
                allowfullscreen=""
                src="#"
              />
            </div>
            <i class="fas fa-arrow-right" onclick="scrollRight()" />
          </div> */}
 

        <div class="wrapper">
          <div class="box">
            <form
              action="https://gmail.us20.list-manage.com/subscribe/post-json?u=500cf43f0dc12ed6d83d39375&amp;id=29e4bc9e01&c=?"
              method="get"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
            >
              <input
                type="email"
                value=""
                name="EMAIL"
                class="email"
                id="mce-EMAIL"
                placeholder="Uneté a nuestra lista de correo!!"
                required
              />
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_500cf43f0dc12ed6d83d39375_29e4bc9e01"
                  tabindex="-1"
                  value=""
                />
              </div>
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="mc-button"
              />
              <div id="subscribe-result" />
            </form>
          </div>
        </div>
        </div>
        <div class="ads-div">
          <img src="../../../public/images/300x200.jpg" alt="" class="ad-left" />

          <img src="../../../public/images/300x200.jpg" alt="" class="ad-right" />
        </div>
      </div>
    );
  }
  
}







// ReactDOM.render(<Carousel items={items} active={0}/>, document.getElementById('app'))



export default LandingPage;
