import { registerBlockType } from '@wordpress/blocks';
import BrightcoveEdit from './BrightcoveEdit';
import BrightcovePreview from './BrightcovePreview';

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
        const isEditingUrl = true;
        const hasPreview = false;

        if(isEditingUrl || !hasPreview){
            return (
                <BrightcoveEdit props={props}></BrightcoveEdit>
            );
        }

        return (
            <BrightcovePreview props={props}></BrightcovePreview>
        );
    }
} );