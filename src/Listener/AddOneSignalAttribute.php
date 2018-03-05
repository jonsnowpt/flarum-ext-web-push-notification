<?php

namespace DogSports\Web\Push\Listener;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\Event\PrepareApiAttributes;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class AddOneSignalAttribute {
	protected $settings;
	public function __construct(SettingsRepositoryInterface $settings) {
		$this->settings = $settings;
	}
	public function subscribe(Dispatcher $events) {
		$events->listen ( PrepareApiAttributes::class, [ 
				$this,
				'addAttributes' 
		] );
	}
	public function addAttributes(PrepareApiAttributes $event) {
		$event->attributes ['dogsports_web_push_app_id'] = $this->settings->get ( 'dogsports-web-push.one_signal_app_id' );
		$event->attributes ['dogsports_web_push_subdomain'] = $this->settings->get ( 'dogsports-web-push.onesignal_subdomain' );
		if ($event->isSerializer ( UserSerializer::class )) {
			$event->attributes ['one_signal_user_id'] = $event->model->one_signal_user_id;
		}
	}
}