
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', app.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        var p = document.querySelector('#device p');
        p.innerHTML = device.cordova + '<br/>' +
            device.platform + '<br/>' +
            device.model + '<br/>' +
            device.uuid + '<br/>' +
            device.version + '<br/>' +
            device.manufacturer + '<br/>' +
            device.isVirtual + '<br/>' +
            device.serial + '<br/>'
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();