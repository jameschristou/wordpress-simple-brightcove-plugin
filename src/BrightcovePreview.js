import React, {useEffect} from 'react';

const BrightcovePreview = ({props}) => {
  const {attributes, className, setAttributes} = props;

  const playerId = "default";
  const accountId = "674523943001";
  const videoId = "6146437284001";

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = `https://players.brightcove.net/${accountId}/${playerId}_default/index.js`;
    script.async = true;
  
    document.body.appendChild(script);
  }, []);

  return (
    <div className="brightcove__video-wrapper">
      <video 
          data-video-id={`${videoId}`}
          data-account={`${accountId}`}
          data-player={`${playerId}`}
          data-embed="default"
          className="video-js inline-video"
          controls>
      </video>
    </div>
  );
}

export default BrightcovePreview;