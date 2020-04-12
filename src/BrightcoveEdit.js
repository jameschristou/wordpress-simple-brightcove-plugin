import { Button, Placeholder } from '@wordpress/components';

const BrightcoveEdit = ({props}) => {
  const {attributes, className, setAttributes} = props;

  return (
    <Placeholder
        label="Brightcove Video Embed"
        className="wp-block-embed"
        instructions="Enter the Brightcove VideoId or ReferenceId"
    >
      <form onSubmit={evnt => console.log('Submit brightcove video')}>
          <input
              type="url"
              value={ attributes.videoId || '' }
              className="components-placeholder__input"
              aria-label="Brightcove VideoId"
              placeholder="Enter the VideoId or ReferenceId here"
              onChange={evnt => setAttributes({ videoId: evnt.target.value })}
          />
          <Button isSecondary type="submit">Embed</Button>
      </form>
    </Placeholder>
  );
}

export default BrightcoveEdit;