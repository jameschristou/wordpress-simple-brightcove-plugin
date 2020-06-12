<?php

namespace simpleBrightcove;

require_once 'ConfigManager.php';

class BlocksRegister{
    private static $configManager;

    static public function registerBlocks(){
        self::$configManager = new ConfigManager();

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

        wp_register_style(
            'simple-brightcove-blocks-fe-css',
            plugins_url( 'dist/blocks.style.build.css', __FILE__ ),
            array(),
            SIMPLE_BRIGHTCOVE_VERSION
        );

        wp_enqueue_style(
            'simple-brightcove-blocks-fe-css', // Handle.
            plugins_url( 'dist/blocks.style.build.css',  __FILE__ ), // Block style CSS.
            array(),
            SIMPLE_BRIGHTCOVE_VERSION
        );
     
        register_block_type('simple-brightcove/brightcove-block', array(
            'editor_script' => 'simple-brightcove-blocks-js',
            'editor_style' => 'simple-brightcove-blocks-css',
            'render_callback' => '\simpleBrightcove\BlocksRegister::render'
        ) );
    }

    static public function render($attributes, $content){
        $config = self::$configManager->getConfig();

        return "
        <div class='brightcove-embedded-video-container'>
            <video
                class='brightcove-embedded-video'
                data-video-id='{$attributes['videoId']}'
                data-account='{$config->accountId}'
                data-player='{$config->playerId}'
                data-embed='default'
                class='vjs-tech'
                controls>
            </video>
            <script src='https://players.brightcove.net/{$config->accountId}/{$config->playerId}_default/index.js' async></script>
        </div>";
    }
}