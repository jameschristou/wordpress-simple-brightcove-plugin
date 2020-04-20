import React, {useEffect} from 'react';

const BrightcovePreview = ({props}) => {
  const {attributes, className, setAttributes} = props;

  const playerId = "default";
  const accountId = "674523943001"; // should switch this over to something configurable
  //const videoId = "6146437284001";

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = `https://players.brightcove.net/${accountId}/${playerId}_default/index.js`;
    script.async = true;
  
    document.body.appendChild(script);
  }, []);

  return (
    <div className="brightcove-preview">
      <video 
          data-video-id={`${attributes.videoId}`}
          data-account={`${accountId}`}
          data-player={`${playerId}`}
          data-embed="default"
          className="video-js brightcove-preview__video"
          controls>
      </video>
    </div>
  );
}

export default BrightcovePreview;