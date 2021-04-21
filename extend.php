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

return [
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

    (new Extend\View)
        ->namespace("sycho-asirem", __DIR__."/views"),

    new Extend\Locales(__DIR__.'/locale'),
];
