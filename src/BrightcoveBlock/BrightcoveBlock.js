import { registerBlockType } from '@wordpress/blocks';
import { Fragment, useState } from 'react';
import BrightcoveEdit from './BrightcoveEdit';
import BrightcovePreview from './BrightcovePreview';
import { pencil } from '@wordpress/icons';
import { BlockControls } from '@wordpress/block-editor';
import { Button, ToolbarGroup } from '@wordpress/components';
import './style.scss';
import './editor.scss';

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

const BrightcoveBlock = ({props}) => {
    const [isEditingUrl, setIsEditingUrl] = useState(false);
    var hasPreview = props.attributes.videoId != '';
  
    if(isEditingUrl || !hasPreview){
        return (
            <BrightcoveEdit props={props}></BrightcoveEdit>
        );
    }
  
    return (
        <Fragment>
            <BlockControls>
                <ToolbarGroup>
                    <Button
                      className="components-toolbar__control"
                      label='Edit URL'
                      icon={ pencil }
                      onClick={ evnt => setIsEditingUrl(true) } />
                </ToolbarGroup>
            </BlockControls>
            <BrightcovePreview props={props}></BrightcovePreview>
        </Fragment>
    );
}