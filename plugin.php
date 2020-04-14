<?php

/*
 Plugin Name: Simple Brightcove
 Description: Provides simple blocks for embedding brightcove videos
 Version: 0.0.1
 */

namespace simpleBrightcove;

require_once 'BlocksRegister.php';

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if (!defined('SIMPLE_BRIGHTCOVE_PLUGIN_PATH')){
    define('SIMPLE_BRIGHTCOVE_PLUGIN_PATH', plugin_dir_path(__FILE__));
}

// This constant should be set dynamically by the automated build when building and deploying the plugin.
// It should always be in sync with the plugin version defined in the plugin comments
if (!defined('SIMPLE_BRIGHTCOVE_VERSION')){
    define('SIMPLE_BRIGHTCOVE_VERSION', "0.0.1");
}

class EntryPoint{
    static public function register(){
        // if (!is_admin()) {
        //     // only load this stuff if the user is on the admin pages
        //     return;
        // }
        
        BlocksRegister::registerBlocks();
    }
    
    static public function activate(){
    }
}

add_action('init', array('\simpleBrightcove\EntryPoint', 'register'), 99);

register_activation_hook(__FILE__, array( '\simpleBrightcove\EntryPoint', 'activate'));