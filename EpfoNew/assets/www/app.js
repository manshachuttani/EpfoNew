
Ext.application({
    name: 'EpfoNew',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main'],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
       var form = Ext.create('EpfoNew.view.Main'); 
       Ext.Viewport.add(form);
       
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
