import { useState } from "react";
import thumbnail from '../../assets/showreel-image.jpeg'
import './VideoPlayer.css'; // optional styling

export default function VideoEmbed(){
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "1YiSqskUY5Lx-t4Yp_WDHkUbFzg9lG9FG"; // Replace with your ID
// Save a custom thumbnail locally or host it somewhere
  return (
    <div className="video-container">
      {!isPlaying ? (
        <div className="video-thumbnail" onClick={() => setIsPlaying(true)}>
          <img src={thumbnail} alt="Video Thumbnail" />
          <div className="overlay">
            {/* <div className="showreel-text oswald-font">SHOWREEL</div> */}
            <div className="play-icon">▶</div>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://drive.google.com/file/d/${videoId}/preview`}
          width="100%"
          height="480"
          allow="autoplay"
          allowFullScreen
          title="Drive Video"
        />
      )}
    </div>
  );
};

