import "./Middle.css";
import image from '../img/todo.png';
import pdp from '../img/pdp.png';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export function Middle() {

  const [feeds , setFeeds] = useState([]);

  useEffect(() => {
     const feeds = axios.get(" http://localhost:5050/feeds")
     feeds.then((res) => {
      setFeeds(res.data);
      console.log(res);
    })
    .catch((err) => {
    })
  },[])
  

    return (
      
      <div className="container">
        <div className="container-posting">
        { feeds.map((elt , k ) => (
          <div className="post-container">
            <div className="header">
              <div className="profile">
                <div className="profile-img"><img src={elt?.user.avatarURL} alt="" className="img"/></div>
                <div className="profile-name">
                  <h4>{elt?.user.name}</h4>
                  <p className="date">{elt?.postingDate}</p>
                </div>
              </div>
            </div>
            <div className="post">
              <p className="post-description">{elt?.description}</p>
              <img src={elt?.imgURL} className="post-img"/>
            </div>
          </div>
          ))}
        </div>
        <div className="credits">
          <div className="credits-container">
            <div className="title"><p>Credits</p></div>
            <div className="people-credits">
              <div className="first-credit">
                <p>Tokimahery Ramarozaka [axios]</p>
              </div>
                <div className="second-credit">
                  <p>Yume Saiko [B.practice] </p>
                </div>
              </div>
          </div>
        </div>
      </div>

    )
}