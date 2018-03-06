'use strict';

System.register('dogsports/webpush/components/WebPushSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
    "use strict";

    var SettingsModal, WebPushSettingsModal;
    return {
        setters: [function (_flarumComponentsSettingsModal) {
            SettingsModal = _flarumComponentsSettingsModal.default;
        }],
        execute: function () {
            WebPushSettingsModal = function (_SettingsModal) {
                babelHelpers.inherits(WebPushSettingsModal, _SettingsModal);

                function WebPushSettingsModal() {
                    babelHelpers.classCallCheck(this, WebPushSettingsModal);
                    return babelHelpers.possibleConstructorReturn(this, (WebPushSettingsModal.__proto__ || Object.getPrototypeOf(WebPushSettingsModal)).apply(this, arguments));
                }

                babelHelpers.createClass(WebPushSettingsModal, [{
                    key: 'className',
                    value: function className() {
                        console.log('ClassNameCalled');
                        return 'WebPushSettingsModal Modal--small';
                    }
                }, {
                    key: 'title',
                    value: function title() {
                        console.log('title called');
                        return 'OneSignal Settings';
                    }
                }, {
                    key: 'form',
                    value: function form() {
                        console.log('Form Called');
                        return [m(
                            'div',
                            { className: 'form-group' },
                            m(
                                'label',
                                null,
                                'OneSignal AppID: '
                            ),
                            m('input', { className: 'FormControl', bidi: this.setting('dogsports-webpush.onesignal_app_id') })
                        ), m(
                            'div',
                            { className: 'form-group' },
                            m(
                                'label',
                                null,
                                'API Key: '
                            ),
                            m('input', { className: 'FormControl', bidi: this.setting('dogsports-webpush.onesignal_api_key') })
                        ), m(
                            'div',
                            { className: 'form-group' },
                            m(
                                'label',
                                null,
                                'Subdomain (if not https): '
                            ),
                            m('input', { className: 'FormControl', bidi: this.setting('dogsports-webpush.onesignal_subdomain') })
                        )];
                    }
                }]);
                return WebPushSettingsModal;
            }(SettingsModal);

            _export('default', WebPushSettingsModal);
        }
    };
});;
'use strict';

System.register('dogsports/webpush/main', ['flarum/app', 'dogsports/webpush/components/WebPushSettingsModal'], function (_export, _context) {
    "use strict";

    var app, WebPushSettingsModal;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_dogsportsWebPushComponentsWebPushSettingsModal) {
            WebPushSettingsModal = _dogsportsWebPushComponentsWebPushSettingsModal.default;
        }],
        execute: function () {

            app.initializers.add('dogsports-webpush', function () {
                app.extensionSettings['dogsports-webpush'] = function () {
                    return app.modal.show(new WebPushSettingsModal());
                };
            });
        }
    };
});
