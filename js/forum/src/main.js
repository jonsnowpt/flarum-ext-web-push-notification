import app from 'flarum/app';


app.initializers.add('zurtr-onesignal', function() {
    var OneSignal = window.OneSignal || [];
    OneSignal.push(["init", {
        appId: "6d76cf93-797c-447f-9bac-1f501fc680a7",
        autoRegister: false,
        notifyButton: {
            enable: true /* Set to false to hide */
        }
    }]);
});