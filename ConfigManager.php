<?php

namespace simpleBrightcove;

class ConfigManager{
    private $config;

    public function __construct() {
        add_action('admin_head', array($this, 'initJsConfig'), 100);
    }

    public function getConfig(){
        if(!empty($this->config)) return $this->config;

        $this->config = apply_filters('simple_brightcove_config', new Config());

        return $this->config;
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