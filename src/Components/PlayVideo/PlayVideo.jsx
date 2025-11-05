import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

function PlayVideo() {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Youtube Channel To learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 Days Ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />
            10
          </span>
          <span>
            <img src={share} alt="" />5
          </span>
          <span>
            <img src={save} alt="" />
            20
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="publisher" />
        <div>
          <p>Greatstack</p>
          <span>1M Subscribers</span>
        </div>
        <button>subscribe</button>
      </div>
      <div className="vid-description">
        <p>Chanel that makes learning easy</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quisquam!
        </p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicolson <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              esse quo beatae nostrum sunt, minima ducimus? Quo sunt possimus
              doloremque.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicolson <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              esse quo beatae nostrum sunt, minima ducimus? Quo sunt possimus
              doloremque.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo;
