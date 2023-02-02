import { Credits } from "../Credits/Credits";
import { Post } from "../Post/Post";
import "./Middle.css";

export function Middle() {
    return (
      <div className="container">
        <Post/>
        <Credits/>
      </div>
    )
}