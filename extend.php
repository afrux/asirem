<?php

/*
 * This file is part of sycho/flarum-asirem.
 *
 * Copyright (c) 2021 Sami Ilyes Mazouz.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace SychO\Asirem;

use Flarum\Extend;
use Flarum\Frontend\Document;
use SychO\Asirem\Api\Controller\UploadHeroImageController;
use SychO\Asirem\Api\Controller\DeleteHeroImageController;

return [
    new \SychO\UiKit\Extend\Register,

    new \Afrux\ThemeBase\Extend\Init('sycho-asirem'),
    new \Afrux\ThemeBase\Extend\Footer,

    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less')
        ->content(function (Document $document) {
            $document->layoutView = "sycho-asirem::frontend.admin";
        })
        ->content(CheckFlarumUpdates::class),

    (new Extend\Settings)
        ->serializeToForum('welcomeHeroBanner', 'sycho-asirem.welcome_hero_banner', AddHeroImageUrlToApi::class)
        ->serializeToForum('welcomeHeroBannerPosition', 'sycho-asirem.welcome_hero_banner_position'),

    (new Extend\Routes('api'))
        ->post('/asirem_banner', 'sycho-asirem.banner.upload', UploadHeroImageController::class)
        ->delete('/asirem_banner', 'sycho-asirem.banner.remove', DeleteHeroImageController::class),

    (new Extend\View)
        ->namespace("sycho-asirem", __DIR__."/views"),

    new Extend\Locales(__DIR__.'/locale'),
];
