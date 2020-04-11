<?php

namespace simpleBrightcove;

class BlocksRegister{
    static public function registerBlocks(){
        if ( ! function_exists( 'register_block_type' ) ) {
            // Gutenberg is not active.
            return;
        }

        // this asset file is generated by the front end build process
        $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

        wp_register_script(
            'simple-brightcove-blocks',
            plugins_url( 'build/index.js', __FILE__ ),
            $asset_file['dependencies'],
            '0.0.1'
        );
     
        register_block_type('simple-brightcove/brightcove-block', array(
            'editor_script' => 'simple-brightcove-blocks',
            'render_callback' => '\simpleBrightcove\BlocksRegister::render'
        ) );
    }

    static public function render($attributes, $content){
        return '<div><h2>Brightcove Test</h2></div>';
    }
}