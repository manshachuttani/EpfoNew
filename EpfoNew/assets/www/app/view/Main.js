Ext.define('EpfoNew.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
	'Ext.field.*',
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Epfo',
                iconCls: 'user',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'EPFO'
                },

                html: [
"<a href=\"javascript:navigator.notification.alert('Congratulations, you are ready to work with Sencha Touch 2 and PhoneGap!')\">Click me</a>"
              ].join("")
            },
            {
                title: 'GPF',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'GPF'
                    },
                    {
                        xtype: 'textfield',
                        name: 'name',
                        label: 'Name',
                        autoCapitalize: false
                    },
                ]
            },
            {
                title: 'Contact',
                iconCls: 'user',
                xtype: 'formpanel',
                url: 'contact.php',
                layout: 'vbox',

                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Contact Us',
                        instructions: '(email address is optional)',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Name'
                            },
                            {
                                xtype: 'emailfield',
                                label: 'Email'
                            },
                            {
                                xtype: 'textareafield',
                                label: 'Message'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Send',
                        ui: 'confirm',
                        handler: function() {
                            this.up('formpanel').submit();
                        }
                    }
                ]
            }
            
        ]
    }
});
