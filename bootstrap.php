<?php

/**
 * @author Vivex <contact@viveksoni.net>
 */
namespace DogSports\OneSignal;

use Illuminate\Contracts\Events\Dispatcher;
use DogSports\OneSignal\Listener\AddClientAssets;
use DogSports\OneSignal\Listener\AddHeadData;
use DogSports\OneSignal\Listener\AddManifestRoute;
use DogSports\OneSignal\Listener\AddOneSignalAttribute;
use DogSports\OneSignal\Listener\SendWebPushNotification;
use DogSports\OneSignal\Listener\WhileUserUpdate;

return function (Dispatcher $events) {
	$events->subscribe(AddClientAssets::class);
    $events->subscribe(AddManifestRoute::class);
    $events->subscribe(AddHeadData::class);
    $events->subscribe(AddOneSignalAttribute::class);
    $events->subscribe(WhileUserUpdate::class);
    $events->subscribe(SendWebPushNotification::class);
};