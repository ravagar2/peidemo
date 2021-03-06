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
    define(['ApiClient', 'model/LoadMCR'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LoadMCR'));
  } else {
    // Browser globals (root is window)
    if (!root.Peidemo) {
      root.Peidemo = {};
    }
    root.Peidemo.LoadMCRResourceApi = factory(root.Peidemo.ApiClient, root.Peidemo.LoadMCR);
  }
}(this, function(ApiClient, LoadMCR) {
  'use strict';

  /**
   * LoadMCRResource service.
   * @module api/LoadMCRResourceApi
   * @version 0.0.1
   */

  /**
   * Constructs a new LoadMCRResourceApi. 
   * @alias module:api/LoadMCRResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createLoadMCR operation.
     * @callback module:api/LoadMCRResourceApi~createLoadMCRCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoadMCR} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a LoadMCR
     * If id is not provided, it will be randomly generated
     * @param {module:model/LoadMCR} body LoadMCR description
     * @param {module:api/LoadMCRResourceApi~createLoadMCRCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoadMCR}
     */
    this.createLoadMCR = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createLoadMCR");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LoadMCR;

      return this.apiClient.callApi(
        '/LoadMCRs/create', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLoadMCR operation.
     * @callback module:api/LoadMCRResourceApi~deleteLoadMCRCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a LoadMCR
     * 
     * @param {String} id ID of LoadMCR
     * @param {module:api/LoadMCRResourceApi~deleteLoadMCRCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLoadMCR = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteLoadMCR");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/LoadMCRs/delete/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoadMCRByID operation.
     * @callback module:api/LoadMCRResourceApi~getLoadMCRByIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoadMCR} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a LoadMCR by id
     * 
     * @param {String} id LoadMCR
     * @param {module:api/LoadMCRResourceApi~getLoadMCRByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoadMCR}
     */
    this.getLoadMCRByID = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getLoadMCRByID");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LoadMCR;

      return this.apiClient.callApi(
        '/LoadMCRs/get/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listLoadMCRs operation.
     * @callback module:api/LoadMCRResourceApi~listLoadMCRsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LoadMCR>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all LoadMCRs
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.category category
     * @param {module:api/LoadMCRResourceApi~listLoadMCRsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LoadMCR>}
     */
    this.listLoadMCRs = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'category': opts['category'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [LoadMCR];

      return this.apiClient.callApi(
        '/LoadMCRs/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLoadMCR operation.
     * @callback module:api/LoadMCRResourceApi~updateLoadMCRCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoadMCR} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a LoadMCR
     * 
     * @param {module:model/LoadMCR} body LoadMCR description
     * @param {module:api/LoadMCRResourceApi~updateLoadMCRCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoadMCR}
     */
    this.updateLoadMCR = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateLoadMCR");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LoadMCR;

      return this.apiClient.callApi(
        '/LoadMCRs/update', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
