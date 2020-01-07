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
    define(['ApiClient', 'model/Subindex'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Subindex'));
  } else {
    // Browser globals (root is window)
    if (!root.Peidemo) {
      root.Peidemo = {};
    }
    root.Peidemo.SubindexResourceApi = factory(root.Peidemo.ApiClient, root.Peidemo.Subindex);
  }
}(this, function(ApiClient, Subindex) {
  'use strict';

  /**
   * SubindexResource service.
   * @module api/SubindexResourceApi
   * @version 0.0.1
   */

  /**
   * Constructs a new SubindexResourceApi. 
   * @alias module:api/SubindexResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createSubindex operation.
     * @callback module:api/SubindexResourceApi~createSubindexCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subindex} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Subindex
     * If id is not provided, it will be randomly generated
     * @param {module:model/Subindex} body Subindex description
     * @param {module:api/SubindexResourceApi~createSubindexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subindex}
     */
    this.createSubindex = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSubindex");
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
      var returnType = Subindex;

      return this.apiClient.callApi(
        '/Subindexs/create', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSubindex operation.
     * @callback module:api/SubindexResourceApi~deleteSubindexCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Subindex
     * 
     * @param {String} id ID of Subindex
     * @param {module:api/SubindexResourceApi~deleteSubindexCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSubindex = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSubindex");
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
        '/Subindexs/delete/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubindexByID operation.
     * @callback module:api/SubindexResourceApi~getSubindexByIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subindex} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Subindex by id
     * 
     * @param {String} id Subindex
     * @param {module:api/SubindexResourceApi~getSubindexByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subindex}
     */
    this.getSubindexByID = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubindexByID");
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
      var returnType = Subindex;

      return this.apiClient.callApi(
        '/Subindexs/get/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listSubindexs operation.
     * @callback module:api/SubindexResourceApi~listSubindexsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Subindex>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Subindexs
     * 
     * @param {module:api/SubindexResourceApi~listSubindexsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Subindex>}
     */
    this.listSubindexs = function(callback) {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Subindex];

      return this.apiClient.callApi(
        '/Subindexs/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSubindex operation.
     * @callback module:api/SubindexResourceApi~updateSubindexCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subindex} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Subindex
     * 
     * @param {module:model/Subindex} body Subindex description
     * @param {module:api/SubindexResourceApi~updateSubindexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subindex}
     */
    this.updateSubindex = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateSubindex");
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
      var returnType = Subindex;

      return this.apiClient.callApi(
        '/Subindexs/update', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));