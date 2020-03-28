/**
 * Projects.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    id: {
        type: 'number',
        autoIncrement: true
    },
    app_type: {
        required: true,
        type: 'string'
    },
    deployed_url: {
        type: 'string'
    },
    description: {
        required: true,
        type: 'string'
    },
    game_file: {
        type: 'string'
    },
    git_url: {
        required: true,
        type: 'string'
    },
    icon_file: {
        required: true,
        type: 'string'
    },
    style_file: {
        type: 'string'
    },
    title: {
        required: true,
        type: 'string'
    }

    // WASM
    // deployed_url: {
    //     required: true,
    //     type: 'string'
    // }
    
  },
  datastores: 'adapter'
};

