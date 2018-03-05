import app from 'flarum/app';

import OneSignalSettingsModal from 'dogsports/web/push/components/OneSignalSettingsModal';

app.initializers.add('dogsports-web-push', () => {
    app.extensionSettings['dogsports-web-push']  = () =>  app.modal.show(new OneSignalSettingsModal());
});