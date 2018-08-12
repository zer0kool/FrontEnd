import React, { Component } from "react";
import {vcard} from "react-materialize";
import "./bio.css" 
import Chat from "./chat";

class Mybio extends Component {
	render() {
		return (
            <div id="v-card-holder" className={"bio section"}>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>


            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">

                         <div id="v-card" class="card">

                            <div id="profile" class="right">
                                <img alt="profile-image" id="profilepic" class="img-responsive" src="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-knives-ninja.png" />
                                <div class="slant"></div>

         
                                <div id="button-holder" class="btn-holder">
                                    <div id="play-btn" class="btn-floating btn-large btn-play">
                                        <i id="icon-play" class="material-icons">play_arrow</i>
                                    </div>
                                </div>
                            </div>
                         
                            <div id="close-btn" class="btn-floating icon-close">
                                <i class="fa fa-close"></i>
                            </div>

                            <div class="card-content">

                           
                                <div class="info-headings">
                                    <h4 class="text-uppercase left">Netflix</h4>
                                    <br/>
                                    <p className="title green-text">Online</p>
                                        <div id="modal1" class="modal" style={{zIndex:10000}}>
                                           <Chat/>
                                        </div>
                                    <button id="follow" class="btn btn-default btn-primary blue follow-button left modal-trigger" href="#modal1" type="button">Lets Connect</button>

                                </div>

                                 <div class="infos">
                                    <ul class="profile-list">
                                        <li class="clearfix">
                                            <span class="title"><i class="material-icons">email</i></span>
                                            <span class="content">info@Netflix.com</span>
                                        </li>
                                        <li class="clearfix">
                                            <span class="title"><i class="material-icons">place</i></span>
                                            <span class="content">Los Gatos, Ca</span>
                                        </li>

                                    </ul>
                                </div>

                                <div class="links">
                                    <a href="#" id="first_one" class="social btn-floating indigo"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="social  btn-floating blue"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="social  btn-floating red"><i class="fa fa-google-plus"></i></a>
                                    <a href="#" class="social  btn-floating blue darken-3"><i class="fa fa-linkedin"></i></a>
                                    <a href="#" class="social  btn-floating orange darken-3"><i class="fa fa-rss"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		);
	}
}

export default Mybio;
