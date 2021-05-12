<?php

/*
 * This file is part of Asirem.
 *
 * (c) Sami azouz <sychocouldy@gmail.com>
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace SychO\Asirem;

use Flarum\Http\UrlGenerator;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Filesystem\Factory;
use Illuminate\Contracts\Filesystem\Cloud;

class AddHeroImageUrlToApi
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var Cloud
     */
    protected $uploadDir;

    /**
     * @var UrlGenerator
     */
    protected $url;

    public function __construct(SettingsRepositoryInterface $settings, UrlGenerator $url, Factory $filesystemFactory)
    {
        $this->settings = $settings;
        $this->url = $url;
        $this->uploadDir = $filesystemFactory->disk('flarum-assets');
    }

    public function __invoke()
    {
        $logoPath = $this->settings->get('sycho-asirem.welcome_hero_banner');

        return $logoPath ? $this->uploadDir->url($logoPath) : null;
    }
}
