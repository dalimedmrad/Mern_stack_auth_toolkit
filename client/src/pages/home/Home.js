import React from 'react';
import "./home.css";

const Home = () => {
   
    return (
        <div className="bod">
            
            <div class="containera">
                <div class="carousel">
                    <div class="carousel__face"><span className="spana">This is your way</span></div>
                    <div class="carousel__face"><span className="spana">Your Library</span></div>
                    <div class="carousel__face"><span className="spana">Make it a friend</span></div>
                    <div class="carousel__face"><span className="spana"> It's For you</span></div>
                    <div class="carousel__face"><span className="spana">Just try</span></div>
                    <div class="carousel__face"><span className="spana">addict to books</span></div>
                    <div class="carousel__face"><span className="spana">Raed</span></div>
                    <div class="carousel__face"><span className="spana">Enlight your path</span></div>
                    <div class="carousel__face"><span className="spana">Welcome</span></div>
                </div>
            </div>
           
            <div className="ya2">
                  <div style={{borderRadius:"25px"}} className="satal1">
                      <h1 className="hash" style={{paddingTop:"50px"}}>hello</h1>
                      <p style={{fontSize:"18px"}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.<br/></p>
                  </div>
                    <div style={{borderRadius:"25px"}} className="satal2">
                        <img style={{borderRadius:"25px"}} src="jilbert-ebrahimi.jpg"  alt="logo"/>
                    </div>
            </div> 
            <div style={{borderRadius:"25px"}} className="ya3">
                  <div className="satal3"></div>
                  <div style={{borderRadius:"25px"}} className="satal4">
                      <h1 className="hash">The books enlighting the world</h1>
                      <p style={{fontSize:"18px"}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.<br/>lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.</p>
                  </div>
              
            </div>         
        </div>
    )
}

export default Home;
