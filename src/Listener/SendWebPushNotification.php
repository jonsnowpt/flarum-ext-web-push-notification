<?php
namespace DogSports\OneSignal\Listener;

use Flarum\Event\NotificationWillBeSent;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use DogSports\OneSignal\OneSignalAPI;
use Flarum\Foundation\Application;

class SendWebPushNotification
{
	protected $oneSignalAPI;
	protected $settings;
	protected $applicationBaseURL;

	public function __construct(SettingsRepositoryInterface $settings, Application $application)
	{
		$this->settings = $settings;
		$this->applicationBaseURL = $application->config('url');
		$this->oneSignalAPI = new OneSignalAPI($this->settings->get('dogsports-onesignal.one_signal_app_id'), $this->settings->get('dogsports-onesignal.one_signal_api_key'));
	}

	public function subscribe(Dispatcher $events)
	{
		$events->listen(NotificationWillBeSent::class, [$this, 'sendWebPushNotification']);
	}

	public function sendWebPushNotification(NotificationWillBeSent $event)
	{
		$notificationEvent = $event->blueprint;
		$subjectModel = $notificationEvent->getSubjectModel();

		$subject = $notificationEvent->getSubject();
		if($subject == null)
			return ;
		$receiverUser = $subject->user;
		if($receiverUser == null || $receiverUser->one_signal_user_id == null)
			return ;
		$notificationType = $notificationEvent->getType();

		$senderUser = $notificationEvent->getSender();
		$postComment =  substr(strip_tags($subject->content), 0, 50);
		switch ($notificationType){
			case 'postLiked':
				$message = $senderUser->username . ' liked your comment "' . $postComment .'"';
				$heading = $senderUser->username . ' liked your post';
				$link =  $this->applicationBaseURL . '/d/' . $subject->discussion_id;
				break;
			case 'postMentioned':
				$message = $senderUser->username . ' mentioned your post in his comment "' . $postComment .'"';
				$heading = $senderUser->username . ' mentioned your post';
				$link =  $this->applicationBaseURL . '/d/' . $subject->discussion_id;
				break;
			case 'userMentioned':
				$message = $senderUser->username . ' mentioned you in his comment "' . $postComment . '"';
				$heading = $senderUser->username . ' mentioned you';
				$link =  $this->applicationBaseURL . '/d/' . $subject->discussion_id;
				break;
			case 'newPost':
				$message = $senderUser->username . ' replied to your comment "' . $postComment . '"';
				$heading = $senderUser->username . ' replied to your post';
				$link =  $this->applicationBaseURL . '/d/' . $subject->discussion_id;
				break;
			case 'discussionRenamed':
				$message = $senderUser->username . ' renamed your comment "' . $postComment . '"';
				$heading = $senderUser->username . ' renamed your post';
				$link =  $this->applicationBaseURL . '/d/' . $subject->discussion_id;
				break;
			case 'discussionLocked':
				$message = $senderUser->username . ' locked your comment "' . $postComment . '"';
				$heading = $senderUser->username . ' locked your post';
				$link =  $this->applicationBaseURL . '/d/' . $subject->discussion_id;
				break;
			default: return;
			break;
		}

		$this->oneSignalAPI->pushNotification($message,
				$receiverUser->one_signal_user_id,
				$link,
				$heading);

	}
}
