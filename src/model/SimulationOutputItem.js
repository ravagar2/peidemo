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
    define(['ApiClient', 'model/EkpiSimItem', 'model/SubindexSimItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EkpiSimItem'), require('./SubindexSimItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Peidemo) {
      root.Peidemo = {};
    }
    root.Peidemo.SimulationOutputItem = factory(root.Peidemo.ApiClient, root.Peidemo.EkpiSimItem, root.Peidemo.SubindexSimItem);
  }
}(this, function(ApiClient, EkpiSimItem, SubindexSimItem) {
  'use strict';

  /**
   * The SimulationOutputItem model module.
   * @module model/SimulationOutputItem
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>SimulationOutputItem</code>.
   * @alias module:model/SimulationOutputItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SimulationOutputItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SimulationOutputItem} obj Optional instance to populate.
   * @return {module:model/SimulationOutputItem} The populated <code>SimulationOutputItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('dateStart'))
        obj.dateStart = ApiClient.convertToType(data['dateStart'], 'Number');
      if (data.hasOwnProperty('dateEnd'))
        obj.dateEnd = ApiClient.convertToType(data['dateEnd'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('ekpis'))
        obj.ekpis = ApiClient.convertToType(data['ekpis'], [EkpiSimItem]);
      if (data.hasOwnProperty('subindices'))
        obj.subindices = ApiClient.convertToType(data['subindices'], [SubindexSimItem]);
      if (data.hasOwnProperty('sei'))
        obj.sei = ApiClient.convertToType(data['sei'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} dateStart
   */
  exports.prototype.dateStart = undefined;

  /**
   * @member {Number} dateEnd
   */
  exports.prototype.dateEnd = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Array.<module:model/EkpiSimItem>} ekpis
   */
  exports.prototype.ekpis = undefined;

  /**
   * @member {Array.<module:model/SubindexSimItem>} subindices
   */
  exports.prototype.subindices = undefined;

  /**
   * @member {Number} sei
   */
  exports.prototype.sei = undefined;

  return exports;

}));