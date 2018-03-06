import app from 'flarum/app';

import WebPushSettingsModal from 'dogsports/webpush/components/WebPushSettingsModal';

app.initializers.add('dogsports-webpush', () => {
    app.extensionSettings['dogsports-webpush']  = () =>  app.modal.show(new WebPushSettingsModal());
});