<?php

namespace DogSports\WebPush;

use Illuminate\Contracts\Events\Dispatcher;
use DogSports\WebPush\Listener\AddClientAssets;
use DogSports\WebPush\Listener\AddHeadData;
use DogSports\WebPush\Listener\AddManifestRoute;
use DogSports\WebPush\Listener\AddWebPushAttribute;
use DogSports\WebPush\Listener\SendWebPushNotification;
use DogSports\WebPush\Listener\WhileUserUpdate;

return function (Dispatcher $events) {
	$events->subscribe(AddClientAssets::class);
	$events->subscribe(AddManifestRoute::class);
	$events->subscribe(AddHeadData::class);
	$events->subscribe(AddWebPushAttribute::class);
	$events->subscribe(WhileUserUpdate::class);
	$events->subscribe(SendWebPushNotification::class);
};
