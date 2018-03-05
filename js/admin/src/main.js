import app from 'flarum/app';

import WebPushSettingsModal from 'dogsports/web/push/components/WebPushSettingsModal';

app.initializers.add('dogsports-web-push', () => {
    app.extensionSettings['dogsports-web-push']  = () =>  app.modal.show(new WebPushSettingsModal());
});