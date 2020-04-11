import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/editor';
import { Button, Text } from '@wordpress/components';

// https://javascriptforwp.com/wordpress-scripts-build-tool-tutorial/
 
const blockStyle = {
    backgroundColor: '#900',
    color: '#fff',
    padding: '20px',
};
 
registerBlockType( 'simple-brightcove/brightcove-block', {
    title: 'Brightcove Block',
    icon: 'universal-access-alt',
    category: 'embed',
    attributes: {
        videoId: {
            type: 'string',
            attribute: 'video-id',
        },
        accountId: {
            type: 'string',
            attribute: 'account-id',
        }
    },
    example: {},
    edit(props) {
        const {attributes, className, setAttributes} = props;

        return (
            <div className={className}>
                {/* <Text variant="body">Embed Brightcove Video</Text>
                <Text variant="body">Enter the Brightcove VideoId or ReferenceId</Text> */}
                <RichText
                    value={attributes.videoId}
                    onChange={value => setAttributes({ videoId: value })}
                    tagName="input"
                    placeholder="VideoId"
                />
                <Button isSecondary>Update</Button>
            </div>
        );
    }
} );