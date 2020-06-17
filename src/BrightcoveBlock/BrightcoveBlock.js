import { registerBlockType } from '@wordpress/blocks';
import { Fragment, useState, useEffect } from 'react';
import BrightcoveEdit from './BrightcoveEdit';
import BrightcovePreview from './BrightcovePreview';
import { Icon, pencil } from '@wordpress/icons';
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
    const [isInteractive, setIsInteractive] = useState(false);

    useEffect(() => {
        if(!props.isSelected){
            setIsInteractive(false);
        }
    }, [props.isSelected]);

    var hasPreview = props.attributes.videoId != undefined && props.attributes.videoId != '';

    const hideOverlay = () => {
		// This is called onMouseUp on the overlay. We can't respond to the `isSelected` prop
		// changing, because that happens on mouse down, and the overlay immediately disappears,
		// and the mouse event can end up in the preview content. We can't use onClick on
		// the overlay to hide it either, because then the editor misses the mouseup event, and
        // thinks we're multi-selecting blocks.
		setIsInteractive(true);
	}
  
    if(isEditingUrl || !hasPreview){
        return (
            <BrightcoveEdit props={props} onEditingCompleteHandler={() => setIsEditingUrl(false)}></BrightcoveEdit>
        );
    }

    return (
        <Fragment>
            <BlockControls>
                <ToolbarGroup>
                    <Button
                      className="components-toolbar__control"
                      label='Edit URL'
                      icon={() => ( <Icon icon={pencil} /> )}
                      onClick={() => setIsEditingUrl(true)} />
                </ToolbarGroup>
            </BlockControls>
            <BrightcovePreview props={props}></BrightcovePreview>
            {!isInteractive && (<div className="block-library-embed__interactive-overlay" onMouseUp={() => hideOverlay()}></div>)}
        </Fragment>
    );
}