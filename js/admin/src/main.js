import app from 'flarum/app';

import OneSignalSettingsModal from 'dogsports/onesignal/components/OneSignalSettingsModal';

app.initializers.add('dogsports-onesignal', () => {
    app.extensionSettings['dogsports-onesignal']  = () =>  app.modal.show(new OneSignalSettingsModal());
});