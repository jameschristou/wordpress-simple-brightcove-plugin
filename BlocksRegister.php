<?php

namespace simpleBrightcove;

class BlocksRegister{
    static public function registerBlocks(){
        if ( ! function_exists( 'register_block_type' ) ) {
            // Gutenberg is not active.
            return;
        }

        // Block editor JS
        wp_register_script(
            'simple-brightcove-blocks-js',
            plugins_url( 'dist/blocks.build.js', __FILE__ ),
            array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
            SIMPLE_BRIGHTCOVE_VERSION
        );

         // Block editor CSS
        wp_register_style(
            'simple-brightcove-blocks-css',
            plugins_url( 'dist/blocks.editor.build.css', __FILE__ ),
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            SIMPLE_BRIGHTCOVE_VERSION
        );
     
        register_block_type('simple-brightcove/brightcove-block', array(
            'editor_script' => 'simple-brightcove-blocks-js',
            'editor_style' => 'simple-brightcove-blocks-css',
            'render_callback' => '\simpleBrightcove\BlocksRegister::render'
        ) );
    }

    static public function render($attributes, $content){
        return '<div><h2>Brightcove Test</h2></div>';
    }
}