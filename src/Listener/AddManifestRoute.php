<?php

namespace DogSports\WebPush\Listener;

use Flarum\Event\ConfigureForumRoutes;
use Illuminate\Contracts\Events\Dispatcher;

class AddManifestRoute {
	public function subscribe(Dispatcher $events) {
		$events->listen ( ConfigureForumRoutes::class, [ 
				$this,
				'configureForumRoutes' 
		] );
	}
	public function configureForumRoutes(ConfigureForumRoutes $event) {
		$event->get ( '/manifest.json', 'dogsports.webpush', 'DogSports\WebPush\WebPushManifestController' );
	}
}
