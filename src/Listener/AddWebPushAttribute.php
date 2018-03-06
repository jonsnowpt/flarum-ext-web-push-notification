<?php

namespace DogSports\WebPush\Listener;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\Event\PrepareApiAttributes;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class AddWebPushAttribute {
	protected $settings;
	public function __construct(SettingsRepositoryInterface $settings) {
		$this->settings = $settings;
	}
	public function subscribe(Dispatcher $events) {
		$events->listen(PrepareApiAttributes::class, [$this, 'addAttributes']);
	}
	public function addAttributes(PrepareApiAttributes $event) {
		$event->attributes['dogsports_webpush_app_id'] = $this->settings->get('dogsports-webpush.onesignal_app_id');
		$event->attributes['dogsports_webpush_subdomain'] = $this->settings->get('dogsports-webpush.onesignal_subdomain');
		if ($event->isSerializer(UserSerializer::class)) {
			$event->attributes['onesignal_user_id'] = $event->model->onesignal_user_id;
		}
	}
}
