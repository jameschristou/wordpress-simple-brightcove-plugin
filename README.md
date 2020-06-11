# wordpress-simple-brightcove-plugin
Wordpress plugin which gives you a simple block for embedding brightcove videos into your content. This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

## Plugin Usage
Install the plugin (copy into your plugin folder), create the production build and then activate the plugin. A new block called 'Simple Brightcove Video' will become available.

### Brightcove Settings
You will need to implement the filter `simple_brightcove_config` in order to set your brightcove accountid and playerid.

```PHP
/*
 Plugin Name: Custom Plugin
 Version: 0.0.1
 */

namespace customPlugin;

class EntryPoint{
    static public function register(){

        add_filter('simple_brightcove_config', function($config){
            $config->accountId = '123456789';
            $config->playerId = 'default';

            return $config;
        }, 10, 3);
    }
}

add_action('init', array('\customPlugin\EntryPoint', 'register'), 99);
```

## Front End Builds
Below you will find some information on how to run scripts.

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

### Development
`npm install`
`npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

### Production
`npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

### Eject
`npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.