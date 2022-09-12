Ext.define('app.view.customers.FormRecord', {
    extend: "Ext.FormPanel",

    xtype:"formrecord",


    //--> layout: 'anchor',//default value

    layout:"card",


    items:[{
        xtype:"tabpanel",
        items:[{
            title:"Datos generales",
            iconCls:"x-fa fa-user",
            layout:"anchor",
            padding:15,
            defaults:{
                anchor:"100%",
                labelWidth: 120,
                labelAlign: "right"
            },

            items:[{
                xtype:'textfield',
                fieldLabel :"* Nombre",
                name: 'usuario',
                allowBlank: true
            },{
                xtype:'container',
                layout:'hbox',
                defaults:{
                    layout:"anchor",
                    defaults:{
                        labelWidth: 120,
                        anchor:"100%",
                        labelAlign: "right"
                    }
                },
                items:[{
                    flex:1,
                    layout:'anchor',
                    items:[{
                        xtype: 'textfield',
                        fieldLabel: '* Apellido Paterno',
                        allowBlank: true,
                        name: "apaterno"
                    }]
                },{width: 10},{
                    flex: 1,
                    layout:'anchor',
                    labelWidth:80,
                    items:[{
                        xtype: 'textfield',
                        fieldLabel: '* Apellido Materno',
                        name: "amaterno"
                    }]
                }]
            },{
                xtype: 'textfield',
                fieldLabel: '* Email',
                name: "email"
            }]
        },{
            iconCls:'x-fa fa-home',
            title:"Dirección",
            xtype:"gridpanel",
            columnLines: true,
            selType: 'checkboxmodel',
            columns: [
                { text: 'Name', dataIndex: 'name' },
                { text: 'Email', dataIndex: 'email', flex: 1 },
                { text: 'Phone', dataIndex: 'phone' }
            ],
            store:{
                fields:[ 'name', 'email', 'phone'],
                data: [
                    { name: 'Dirección 1', email: 'lisa@simpsons.com', phone: '555-111-1224' },
                    { name: 'Dirección 2', email: 'bart@simpsons.com', phone: '555-222-1234' },
                    { name: 'Dirección 3', email: 'homer@simpsons.com', phone: '555-222-1244' },
                    { name: 'Dirección 4', email: 'marge@simpsons.com', phone: '555-222-1254' }
                ]
            }
        }]
    },{
        padding: 20,
        html:"<h1>¡Formulario completo!</h1>"
    }]
});