<?php

/**
 *
 */

namespace SychO\Asirem;

use Flarum\Foundation\Application;
use Flarum\Frontend\Document;
use Flarum\Settings\SettingsRepositoryInterface;
use Packagist\Api\Client;

class CheckFlarumUpdates
{
    /**
     * @var SettingsRepositoryInterface
     */
    private $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(Document $document)
    {
        $lastCheck = $this->settings->get('sycho-asirem.last-update-check');

        if ($lastCheck) {
            $lastCheck = json_decode($lastCheck, true);
            $lastCheck['time'] = (int) $lastCheck['time'];
        }

        if (! $lastCheck || $this->isTimeToCheck($lastCheck)) {
            $lastCheck = $this->checkForUpdates($lastCheck);
        }

        if (version_compare(str_replace('v', '', $lastCheck['version']), Application::VERSION) === 1) {
            $document->payload['updateAvailable'] = $lastCheck['version'];
        }
    }

    public function checkForUpdates($lastCheck)
    {
        $client = new Client();

        $package = $client->get('flarum/core');

        $versions = array_keys($package->getVersions());
        $versions = array_filter($versions, function ($version) {
            return substr($version, 0, 4) !== "dev-";
        });

        $lastCheck = [
            "time" => time(),
            "version" => array_values($versions)[0]
        ];

        $this->settings->set('sycho-asirem.last-update-check', json_encode($lastCheck));

        return $lastCheck;
    }

    public function isTimeToCheck(array $lastCheck): bool
    {
        // Check every 4 to 7 hours.
        if (time() - $lastCheck['time'] <= (rand(4, 7)*60*60*1000)) {
            return false;
        }

        return true;
    }
}
