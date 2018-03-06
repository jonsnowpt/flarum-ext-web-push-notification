<?php

namespace DogSports\Web\Push;

use Illuminate\Contracts\Events\Dispatcher;
use DogSports\Web\Push\Listener\AddClientAssets;
use DogSports\Web\Push\Listener\AddHeadData;
use DogSports\Web\Push\Listener\AddManifestRoute;
use DogSports\Web\Push\Listener\AddWebPushAttribute;
use DogSports\Web\Push\Listener\SendWebPushNotification;
use DogSports\Web\Push\Listener\WhileUserUpdate;

return function (Dispatcher $events) {
$events->subscribe(AddClientAssets::class);
$events->subscribe(AddHeadData::class);
$events->subscribe(AddManifestRoute::class);
$events->subscribe(AddWebPushAttribute::class);
$events->subscribe(SendWebPushNotification::class);
$events->subscribe(WhileUserUpdate::class);
};
