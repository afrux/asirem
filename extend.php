<?php

/*
 * This file is part of afrux/asirem.
 *
 * Copyright (c) 2021 Sami Ilyes Mazouz.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Afrux\Asirem;

use Flarum\Extend;
use Flarum\Frontend\Document;

return [
    new \Afrux\ThemeBase\Extend\Init('afrux-asirem'),
    new \Afrux\ThemeBase\Extend\Footer,
    new \Afrux\ThemeBase\Extend\UploadableBanner,
    new \Afrux\ThemeBase\Extend\ExposeLaravelVersionToDashboard,
    (new \Afrux\ThemeBase\Extend\DashboardLayout)
        ->splitToNavAndContent()
        ->normalizeStatusWidgetStructure()
        ->normalizeAdminHeaderStructure()
        ->normalizeExtensionPageStructure()
        ->normalizeUserTable()
        ->addExtensionsPage(),

    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less')
        ->content(function (Document $document) {
            $document->layoutView = "afrux-asirem::frontend.admin";
        }),

    (new Extend\View)
        ->namespace("afrux-asirem", __DIR__."/views"),

    new Extend\Locales(__DIR__.'/locale'),
];
