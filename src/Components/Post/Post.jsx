import axios from "axios";
import '../Post/post.css';
import { useEffect } from "react";
import { useState } from "react";

export function Post() {
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
        <div className="container-posting">
        { feeds.map((elt , k ) => (
          <div key={k} className="post-container">
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
    )
}
