<?php

namespace simpleBrightcove;

class VideoRenderer {
    private static $config;

    public static function init($configManager){
        $configManager = new ConfigManager();

        self::$config = $configManager->getConfig();
    }

    public function render($attributes, $content){
        $accountId = self::$config->accountId;
        // TODO: extend this by providing a filter that supports query parameters and values which can be passed onto the iframeurl
        $iframeSrc = "https://players.brightcove.net/{$accountId}/default_default/index.html?videoId={$attributes['videoId']}";

        return "
            <div id='brightcove-videoid-{rand()}' class='brightcove-container'>
                <div class='brightcove-iframe-wrapper'>
                    <iframe id='brightcove-iframe' src='{$iframeSrc}' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>
                </div>
            </div>";
    }
}