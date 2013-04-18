Ext.define('EpfoNew.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
    'Ext.field.*',
    'Ext.util.DelayedTask',
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
"<a href=\"javascript:navigator.notification.alert('Congratulations, you are ready to work with Sencha Touch 2 and PhoneGap!', null, 'OK','OK')\">Click me</a>"
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
                layout: 'vbox',
                id:'contactForm',  
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Contact Us',
                        instructions: '(email address is optional)',                                            
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Name',
                                id: 'fname',
                                name: 'fname',
                            },
                            {
                                xtype: 'emailfield',
                                label: 'Email',
                                placeHolder: 'abc@def.com',
                                id: 'femail',
                                name: 'femail',
                            },
                            {
                                xtype: 'textareafield',
                                label: 'Message'
                            }
                        ]
                    },{
                        xtype: 'toolbar',
                        layout: {
                            pack: 'center'
                        }, // layout
                        ui: 'plain',
                        items: [ {
                                xtype: 'button',
                                text: 'Send',
                                ui: 'confirm',
                                handler: function() {
                                    var fnameval= Ext.getCmp('fname').getValue();
                                    var femailval= Ext.getCmp('femail').getValue();
                                    
                                    var task = Ext.create('Ext.util.DelayedTask', function () {                                     

                                        Ext.getCmp('fname').setValue('');
                                        Ext.getCmp('femail').setValue('');
                                    });

                                    task.delay(500);
                                    
                                    var contactform = Ext.getCmp('contactForm');
                                    contactform.setMasked({
                                        xtype: 'loadmask',
                                        message: 'Submitting...'
                                    });

                                    Ext.Ajax.request({
                                        url: 'http://members.epfoservices.in/index.php',
                                        method: 'post',
                                        params: {
                                            user: fnameval,
                                            pwd: femailval
                                        },
                                        success: function (response) {

                                            var loginResponse = response.responseText;
                                            alert(loginResponse);
                                          
                                          
                                        },
                                        failure: function (response) {
                                            
                                            alert('Login failed. Please try again later.');
                                        }
                                    });
                                   
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'Reset',
                                ui:'decline',
                                handler:function(){
                                    this.up('main').reset();
                                }
                            }]
                    },
                ]
            }
            
        ]
    },
    /**
     * Resets all fields in the form back to their original values.
     * @return {Ext.form.Panel} This form.
     */
    reset: function() {
     
        this.getFieldsAsArray().forEach(function(field) {
            field.reset();
        });
        return this;
    },
    
    signInSuccess: function () {
        alert('Signed in.');      

    },

    singInFailure: function (message) {
       
        alert(message);
       
    },

    /**
     * @private
     */
    getFieldsAsArray: function() {
        var fields = [],
            getFieldsFrom = function(item) {
                if (item.isField) {
                    fields.push(item);
                }

                if (item.isContainer) {
                    item.getItems().each(getFieldsFrom);
                }
            };

        this.getItems().each(getFieldsFrom);

        return fields;
    }

});