/**
 * Category.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    companyname:{type:'String'},
email: { type: 'String'} ,
jobtitle: { type: 'String'},
experience:{type:'Number'},
url:{type:"String"}


  },

};

