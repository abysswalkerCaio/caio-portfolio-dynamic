<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['GET', 'POST', 'PUT', 'DELETE'],

    'allowed_origins' => ['http://localhost:3000', 'https://www.caio-costa-portfolio.com.br'],

    'allowed_origins_patterns' => ['/(.*)\.com.br/'],

    'allowed_headers' => ['content-type', 'accept', 'x-custom-header'],

    'exposed_headers' => ['x-custom-response-header'],

    'max_age' => 60,

    'supports_credentials' => false,

];
