<?php

/*
 Plugin Name: Simple Brightcove
 Description: Provides simple blocks for embedding brightcove videos
 Version: 0.0.1
 */

namespace simpleBrightcove;

require_once 'BlocksRegister.php';

if (!defined('POSTS_PROCESSOR_PLUGIN_PATH')){
    define('POSTS_PROCESSOR_PLUGIN_PATH', plugin_dir_path(__FILE__));
}

class EntryPoint{
    static public function register(){
        if (!is_admin()) {
            // only load this stuff if the user is on the admin pages
            return;
        }
        
        BlocksRegister::registerBlocks();
    }
    
    static public function activate(){
    }
}

add_action('init', array('\simpleBrightcove\EntryPoint', 'register'), 99);

register_activation_hook(__FILE__, array( '\simpleBrightcove\EntryPoint', 'activate'));