import { Button, Placeholder } from '@wordpress/components';
import { useState } from 'react';

const BrightcoveEdit = ({props, onEditingCompleteHandler}) => {
  const {attributes, className, setAttributes} = props;
  const [videoId, setVideoId] = useState(attributes.videoId);

  return (
    <Placeholder
        label="Brightcove Video Embed"
        className="wp-block-embed simple-brightcove-edit"
        instructions="Enter the Brightcove VideoId or ReferenceId"
    >
      <form onSubmit={evnt => {
        evnt.preventDefault();
        setAttributes({videoId: videoId});
        onEditingCompleteHandler();
        }}>
          <input
              type="text"
              value={ videoId || '' }
              className="components-placeholder__input"
              aria-label="Brightcove VideoId"
              placeholder="Enter the VideoId or ReferenceId here"
              onChange={evnt => setVideoId(evnt.target.value)}
          />
          <Button isSecondary type="submit">Embed</Button>
      </form>
      <div className="cancel">
        <Button className="cancel__button" isLink onClick={evnt => onEditingCompleteHandler()}>Cancel</Button>
      </div>
    </Placeholder>
  );
}

export default BrightcoveEdit;