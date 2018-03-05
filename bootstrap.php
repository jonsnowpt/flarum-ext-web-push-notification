<?php

namespace DogSports\Web\Push;

use Illuminate\Contracts\Events\Dispatcher;
use DogSports\Web\Push\Listener\AddClientAssets;
use DogSports\Web\Push\Listener\AddHeadData;
use DogSports\Web\Push\Listener\AddManifestRoute;
use DogSports\Web\Push\Listener\AddOneSignalAttribute;
use DogSports\Web\Push\Listener\SendWebPushNotification;
use DogSports\Web\Push\Listener\WhileUserUpdate;

return function (Dispatcher $events) {
    $events->subscribe(AddClientAssets::class);
    $events->subscribe(AddManifestRoute::class);
    $events->subscribe(AddHeadData::class);
    $events->subscribe(AddOneSignalAttribute::class);
    $events->subscribe(WhileUserUpdate::class);
    $events->subscribe(SendWebPushNotification::class);
};
