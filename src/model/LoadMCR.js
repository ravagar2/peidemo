/*
 * PEIDEMO
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.11
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Peidemo) {
      root.Peidemo = {};
    }
    root.Peidemo.LoadMCR = factory(root.Peidemo.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LoadMCR model module.
   * @module model/LoadMCR
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>LoadMCR</code>.
   * @alias module:model/LoadMCR
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>LoadMCR</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoadMCR} obj Optional instance to populate.
   * @return {module:model/LoadMCR} The populated <code>LoadMCR</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], 'String');
      if (data.hasOwnProperty('port'))
        obj.port = ApiClient.convertToType(data['port'], 'Number');
      if (data.hasOwnProperty('manouvring'))
        obj.manouvring = ApiClient.convertToType(data['manouvring'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} category
   */
  exports.prototype.category = undefined;

  /**
   * @member {Number} port
   */
  exports.prototype.port = undefined;

  /**
   * @member {Number} manouvring
   */
  exports.prototype.manouvring = undefined;

  return exports;

}));
