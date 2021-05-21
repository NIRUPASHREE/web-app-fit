import React from 'react'
import NavigationBar from '../NavigationBar /NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import './Home.css';

function App() {
    return (
        <div>
            <div>
                <NavigationBar />
            </div>

    
            <Carousel >
                    <Carousel.Item >
                        <img
                            class='carousel-img'
                            src={"assets/2.jpg"}

                            alt=""
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            class='carousel-img'
                            src={"assets/1.png"}
                            alt="" 
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            class='carousel-img'
                            src={"assets/3.jpeg"}
                            alt="" 
                        />


                    </Carousel.Item>
                </Carousel>
           
            
            <br></br>

            {/* For cards */}
            <div style={{ background: 'white', textAlign: 'center', height: '500px', paddingTop: '80px', width:'1750px', margin:'auto', display:'block' }} >
                <h1 style={{ fontFamily: '-moz-initial', fontWeight: 800, fontSize: 50 }}>Welcome!</h1>
                <br></br>
                <p style={{ fontFamily: '-moz-initial', fontSize: 30 }}>TabeteFit is the best space to workout at home by choosing from a wide range of fitness workouts and stay in shape, all in a relaxed, motivated and positive atmosphere.</p>
                <p style={{ fontFamily: '-moz-initial', fontSize: 30 }}>You can even schedule the workouts based on your convenience too!!
Explore our website to learn more.</p>
                <p style={{ fontFamily: '-moz-initial', fontSize: 30 }}> Happy Lifestyle!!</p>
            </div>
            <br></br>

            <div>
                <marquee behavior="scroll" direction="left" style={{ background: 'rgb(226, 139, 8)', height: '70px', width: '1750px', margin: 'auto', display: 'block', paddingTop: '8px' }}><h1 style={{ textAlign: 'center', fontFamily: '-moz-initial', color: 'black', fontWeight: 800 }}>COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT - COMMIT TO FIT </h1></marquee>
            </div>
            <br></br>

            <div style={{ background: 'white', textAlign: 'center', height: '70px', paddingTop: '10px', width: '1750px', margin: 'auto', display: 'block' }}>
                <h1 style={{ fontWeight: 600, fontFamily: '-moz-initial', color:'rgb(226, 139, 8)'}}>WHY TABETEFIT?</h1>
            </div>
            
            <div id="container">
   
                <div class="box box1">
                    <img class="block-icon" src="assets/convi.jpg"/>
                    <p class="block-img" >Super-convinient</p>
                </div>
                
                <div class="box box2">
                    <img class="block-icon" src="assets/healthyfit.jpg" />
                    <p class="block-img">Health and Fitness</p>
                </div>
                
                <div class="box box3">
                    <img class="block-icon" style={{ height: '135px' }} src="assets/tastymeets.jpg" />
                    <p class="block-img">Tasty meets Healthy</p>
                </div>
                
                <div class="box box4">
                    <img class="block-icon" style={{height:'135px'}} src="assets/widerange.jpg" />
                    <p class="block-img">Wide range to select from</p>
                </div>
                
            </div>
                        
            <br></br>

            <div class="zoom card mb-3 mx-auto d-flex justify-content-center">
                <div class="row no-gutters">
                    <div class="col-md-6 col-md-6 col-md-6 col-md-6">
                        <img class="card-img" src=" assets/meditation.png" alt="..." />
                    </div>
                    <div class="col-md-6 col-md-6 col-md-6 col-md-6 " style={{ paddingRight: '5em', background: 'white' }}>
                        
                            <div style={{ padding: '5em', paddingTop: '10em' }}>
                                <h5 class="card-title" >Want to improve your concentration?</h5>
                                <br></br>
                                <br></br>
                                <p class="card-text">A short practice for settling the mind through meditation goes a long way in the path concentration. Learn more through the different meditation videos we have for you, that is going to enhance mental health along with improving your concentration.</p>

                            </div>
                        
                    </div>
                </div>
            </div>

            <div class="zoom card mb-3 mx-auto d-flex justify-content-center" >
                <div class="row no-gutters">

                    <div class="col-md-6 col-md-6 col-md-6 col-md-6">
                        

                            <div style={{ padding: '5em', paddingTop: '10em' }}>
                                <h5 class="card-title" >Craving for healthy food?</h5>
                                <br></br>
                                <br></br>
                                <p class="card-text" >Positive pranic foods uplift and enhance your energy levels, fulfill your health needs and actually help your body to retain positive energy. Select from the wide range of restaurants serving healthy food near you now!  </p>

                            </div>
                       
                    </div>
                    <div class="col-md-6 col-md-6 col-md-6 col-md-6">
                        <img src="assets/restaurant.jpeg" class="card-img d-flex justify-content-center" alt="..." />
                    </div>
                </div>
            </div>

            <div class="zoom card mb-3 mx-auto d-flex justify-content-center">
                <div class="row no-gutters">
                    <div class="col-md-6 col-md-6 col-md-6 col-md-6" >
                        <img src="assets/youtube.png" class="card-img" alt="..." />
                    </div>
                    <div class="col-md-6 col-md-6 col-md-6 col-md-6">
                     
                            <div style={{ padding: '5em', paddingTop: '10em' }}>
                                <h5 class="card-title" >Looking for a good fitness workout regime at your convinient time?</h5>
                                <br></br>
                                <br></br>
                                <p class="card-text" >Time and health are two precious assets that we don't recognize and appreciate until they are depleted. We bring to you a way of scheduled workout session at your convinient time that is going to keep you motivated. Start scheduling now! </p>

                            </div>

                    </div>
                </div>
            </div>
            <br></br>

            {/* For feedback form 
            <form>
                <input name="name" type="text" class="feedback-input" placeholder="Name" />
                <input name="email" type="text" class="feedback-input" placeholder="Email" />
                <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
                <input type="submit" value="SUBMIT" />
            </form>
            */}
            <div style={{background:'black'}}>
                <h4 style={{ color: 'white', textAlign: 'center', fontSize: '45px', fontFamily:'monospace',fontWeight:'800' }}>
                    Contact Us
                </h4>
                <p style={{ color: 'white', textAlign: 'center', fontSize: '23px', fontFamily:'monospace' }}>
                    team.athena@gmail.com 
                    <br></br>
                    +91 9976598609 | +91 7659879076
                </p>
                <h5 style={{ color: 'white', textAlign: 'center', fontSize: '22px', fontFamily: 'monospace' }}>
                    Copyright © 2021 All rights reserved
                </h5>
                <p style={{ color: 'white', textAlign: 'center', fontSize: '25px', fontFamily: 'monospace' }}>
                   | <a href="#" style={{ color: 'white' }}>Team Athena</a> |
                </p>
            </div>
            
        </div>


    )

}


export default App;