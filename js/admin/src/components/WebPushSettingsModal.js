import SettingsModal from 'flarum/components/SettingsModal';

export default class WebPushSettingsModal extends SettingsModal {
    className() {
        console.log('ClassNameCalled');
        return 'WebPushSettingsModal Modal--small';
    }

    title() {
        console.log('title called');
        return 'OneSignal Settings';
    }

    form() {
        console.log('Form Called');
        return [
            <div className="form-group">
                <label>OneSignal AppID: </label>
                <input className="FormControl" bidi={this.setting('dogsports-webpush.onesignal_app_id')}/>
            </div>,
            <div className="form-group">
                <label>API Key: </label>
                <input className="FormControl" bidi={this.setting('dogsports-webpush.onesignal_api_key')}/>
            </div>,
            <div className="form-group">
                <label>Subdomain (Leave blank if website is <b>https</b>): </label>
                <input className="FormControl" bidi={this.setting('dogsports-webpush.onesignal_subdomain')}/>
            </div>
    ];
    }
}