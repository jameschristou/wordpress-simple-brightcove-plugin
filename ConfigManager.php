<?php

namespace simpleBrightcove;

class ConfigManager{
    public function __construct() {
        add_action('admin_head', array($this, 'initJsConfig'), 100);
    }

    private function getConfig(){
        return apply_filters('simple_brightcove_config', new Config());
    }

    public function initJsConfig()
    {
        $config = $this->getConfig();

        $scriptBlock = "
            <script type='text/javascript'>
                var simpleBrightcoveConfig = {
                    accountId: '{$config->accountId}',
                    playerId: '{$config->playerId}'
                };
            </script>
        ";

        echo $scriptBlock;
    }
}

class Config{
    public $accountId = '';
    public $playerId = '';
}