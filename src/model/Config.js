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
    define(['ApiClient', 'model/IHConfig', 'model/OTConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IHConfig'), require('./OTConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.Peidemo) {
      root.Peidemo = {};
    }
    root.Peidemo.Config = factory(root.Peidemo.ApiClient, root.Peidemo.IHConfig, root.Peidemo.OTConfig);
  }
}(this, function(ApiClient, IHConfig, OTConfig) {
  'use strict';

  /**
   * The Config model module.
   * @module model/Config
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Config</code>.
   * @alias module:model/Config
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Config</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Config} obj Optional instance to populate.
   * @return {module:model/Config} The populated <code>Config</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('otConfig'))
        obj.otConfig = OTConfig.constructFromObject(data['otConfig']);
      if (data.hasOwnProperty('ihConfig'))
        obj.ihConfig = IHConfig.constructFromObject(data['ihConfig']);
    }
    return obj;
  }

  /**
   * @member {module:model/OTConfig} otConfig
   */
  exports.prototype.otConfig = undefined;

  /**
   * @member {module:model/IHConfig} ihConfig
   */
  exports.prototype.ihConfig = undefined;

  return exports;

}));