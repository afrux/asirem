<?php

/*
 * This file is part of Asirem.
 *
 * (c) Sami Mazouz <sychocouldy@gmail.com>
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace SychO\Asirem\Api\Controller;

use Flarum\Api\Controller\UploadImageController;
use Intervention\Image\Image;
use Intervention\Image\ImageManager;
use Psr\Http\Message\UploadedFileInterface;

class UploadHeroImageController extends UploadImageController
{
    protected $filePathSettingKey = 'sycho-asirem.welcome_hero_banner';

    protected $filenamePrefix = 'asirem_banner';

    /**
     * {@inheritDoc}
     */
    protected function makeImage(UploadedFileInterface $file): Image
    {
        $manager = new ImageManager();

        $encodedImage = $manager->make($file->getStream())->encode('png');

        return $encodedImage;
    }
}
