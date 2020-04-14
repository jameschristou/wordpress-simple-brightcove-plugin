import { registerBlockType } from '@wordpress/blocks';
import BrightcoveBlock from './BrightcoveBlock';

// https://javascriptforwp.com/wordpress-scripts-build-tool-tutorial/
 
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
        return (
            <BrightcoveBlock props={props}></BrightcoveBlock>
        );
    }
} );