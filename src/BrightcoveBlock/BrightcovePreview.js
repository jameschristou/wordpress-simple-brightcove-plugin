import React, {useEffect} from 'react';

const BrightcovePreview = ({props}) => {
  const {attributes, className, setAttributes} = props;

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = `https://players.brightcove.net/${simpleBrightcoveConfig.accountId}/default_default/index.js`;
    script.async = true;
  
    document.body.appendChild(script);
  }, []);

  return (
    <div className="brightcove-preview">
      <video 
          data-video-id={`${attributes.videoId}`}
          data-account={`${simpleBrightcoveConfig.accountId}`}
          data-player="default"
          data-embed="default"
          className="video-js brightcove-preview__video"
          controls>
      </video>
    </div>
  );
}

export default BrightcovePreview;