'use strict';

System.register('dogsports/web/push/components/WebPushSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
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
                            m('input', { className: 'FormControl', bidi: this.setting('dogsports-web-push.one_signal_app_id') })
                        ), m(
                            'div',
                            { className: 'form-group' },
                            m(
                                'label',
                                null,
                                'API Key: '
                            ),
                            m('input', { className: 'FormControl', bidi: this.setting('dogsports-web-push.one_signal_api_key') })
                        ), m(
                            'div',
                            { className: 'form-group' },
                            m(
                                'label',
                                null,
                                'Subdomain (if not https): '
                            ),
                            m('input', { className: 'FormControl', bidi: this.setting('dogsports-web-push.onesignal_subdomain') })
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

System.register('dogsports/web/push/main', ['flarum/app', 'dogsports/web/push/components/WebPushSettingsModal'], function (_export, _context) {
    "use strict";

    var app, WebPushSettingsModal;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_dogsportsWebPushComponentsWebPushSettingsModal) {
            WebPushSettingsModal = _dogsportsWebPushComponentsWebPushSettingsModal.default;
        }],
        execute: function () {

            app.initializers.add('dogsports-web-push', function () {
                app.extensionSettings['dogsports-web-push'] = function () {
                    return app.modal.show(new WebPushSettingsModal());
                };
            });
        }
    };
});
