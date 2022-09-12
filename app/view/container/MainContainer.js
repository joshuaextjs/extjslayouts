Ext.define('app.view.container.MainContainer', {
    extend:"Ext.Container",
    layout: 'border',

    xtype:"maincontainer",
    items: [{
        region: 'north',
        html: '<h1 class="x-panel-header">Page Title</h1>',
        border: false,
        margin: '0 0 5 0'
    }, {
        region: 'west',
        collapsible: true,
        title: 'Navigation',
        width: 300,
        // could use a TreePanel or AccordionLayout for navigational items,
        layout: 'accordion',
        defaults: {
            bodyPadding: 10
        },
        style:'border-right: 1px solid #dedede',
        items: [{
            // See Grids / Basic Grid example for this view.
            xtype: 'grid',
            title: 'Basic Grid (Click or tap header to collapse)',
            bodyPadding: 0
        }, {
            title: 'Accordion Item 2',
            html: 'Empty'
        }, {
            title: 'Accordion Item 3',
            html: 'Empty'
        }, {
            title: 'Accordion Item 4',
            html: 'Empty'
        }, {
            title: 'Accordion Item 5',
            html: 'Empty'
        }]
    }, {
        region: 'south',
        title: 'South Panel',
        collapsible: true,
        html: 'Information goes here',
        split: true,
        height: 100,
        minHeight: 100
    }, {
        region: 'east',
        title: 'East Panel',
        collapsible: true,
        split: true,
        width: 150
    }, {
        region: 'center',
        xtype: 'tabpanel', // TabPanel itself has no title
        activeTab: 0,      // First tab active by default
        items: {
            title: 'Child Tab',
            tbar:[{
                text:"Agregar registro",
                handler: function (b){
                    Ext.create("Ext.Window", {
                        title:"Agregar registro",
                        iconCls:"x-fa fa-plus-circle",
                        animateTarget : b.id,
                        width:700,
                        height:270,
                        autoShow: true,
                        modal: true,
                        resizable: false,

                        tools:[{
                            type:'refresh',
                            tooltip: 'Refresh form Data',
                            // hidden:true,
                            handler: function(event, toolEl, panelHeader) {
                                // refresh logic
                            }
                        },
                            {
                                type:'help',
                                tooltip: 'Get Help',
                                callback: function(panel, tool, event) {
                                    // show help here
                                }
                            }],


                        header: {
                            itemPosition: 1, // after title before collapse tool
                            items: [{
                                xtype: 'button',
                                text: 'Export to ...',
                                menu: {
                                    items: [{
                                        text:   'Excel xlsx'
                                    },{
                                        text: 'Excel xml'
                                    },{
                                        text:   'CSV'
                                    },{
                                        text:   'TSV'
                                    },{
                                        text:   'HTML'
                                    }]
                                }
                            }]
                        },

                        layout:"fit",

                        items:[{
                            xtype:"formrecord"
                        }],

                        buttonAlign:"right",
                        buttons:[{
                            iconCls:'x-fa fa-arrow-left',
                            text:"Anterior",
                            disabled: true,
                            handler: function (b){
                                b.disable();
                                let windo= b.up("window");
                                let form = windo.down("form");
                                form.layout.setActiveItem(0);
                                windo.down("button[text=Siguiente]").enable();
                            }
                        },{
                            iconCls:'x-fa fa-arrow-right',
                            text:"Siguiente",
                            handler: function (b){
                                b.disable();
                                let windo= b.up("window");
                                let form = windo.down("form");
                                form.layout.setActiveItem(1);
                                windo.down("button[text=Anterior]").enable();
                            }
                        },{
                            iconCls:'x-fa fa-save',
                            text:"Guardar"
                        },{
                            iconCls:'x-fa fa-times',
                            text:"Cancelar",
                            handler: function (b){
                                b.disable();
                                let windo= b.up("window");
                                windo.close();
                            }
                        }]
                    });
                }
            }],
            html: 'The first tab\'s content. Others may be added dynamically'
        }
    }]
});
