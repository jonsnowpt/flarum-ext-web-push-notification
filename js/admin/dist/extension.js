'use strict';

System.register('dogsports/onesignal/components/OneSignalSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
    "use strict";

    var SettingsModal, OneSignalSettingsModal;
    return {
        setters: [function (_flarumComponentsSettingsModal) {
            SettingsModal = _flarumComponentsSettingsModal.default;
        }],
        execute: function () {
            OneSignalSettingsModal = function (_SettingsModal) {
                babelHelpers.inherits(OneSignalSettingsModal, _SettingsModal);

                function OneSignalSettingsModal() {
                    babelHelpers.classCallCheck(this, OneSignalSettingsModal);
                    return babelHelpers.possibleConstructorReturn(this, (OneSignalSettingsModal.__proto__ || Object.getPrototypeOf(OneSignalSettingsModal)).apply(this, arguments));
                }

                babelHelpers.createClass(OneSignalSettingsModal, [{
                    key: 'className',
                    value: function className() {
                        console.log('ClassNameCalled');
                        return 'OneSignalSettingsModal Modal--small';
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
                            m('input', { className: 'FormControl', bidi: this.setting('dogsports-onesignal.one_signal_app_id') })
                        ), m(
                            'div',
                            { className: 'form-group' },
                            m(
                                'label',
                                null,
                                'API Key: '
                            ),
                            m('input', { className: 'FormControl', bidi: this.setting('dogsports-onesignal.one_signal_api_key') })
                        ), m(
                            'div',
                            { className: 'form-group' },
                            m(
                                'label',
                                null,
                                'Subdomain (if not https): '
                            ),
                            m('input', { className: 'FormControl', bidi: this.setting('dogsports-onesignal.onesignal_subdomain') })
                        )];
                    }
                }]);
                return OneSignalSettingsModal;
            }(SettingsModal);

            _export('default', OneSignalSettingsModal);
        }
    };
});;
'use strict';

System.register('dogsports/onesignal/main', ['flarum/app', 'dogsports/onesignal/components/OneSignalSettingsModal'], function (_export, _context) {
    "use strict";

    var app, OneSignalSettingsModal;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_dogsportsOnesignalComponentsOneSignalSettingsModal) {
            OneSignalSettingsModal = _dogsportsOnesignalComponentsOneSignalSettingsModal.default;
        }],
        execute: function () {

            app.initializers.add('dogsports-onesignal', function () {
                app.extensionSettings['dogsports-onesignal'] = function () {
                    return app.modal.show(new OneSignalSettingsModal());
                };
            });
        }
    };
});