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
    define(['ApiClient', 'model/JsonNode', 'model/Simulation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/JsonNode'), require('../model/Simulation'));
  } else {
    // Browser globals (root is window)
    if (!root.Peidemo) {
      root.Peidemo = {};
    }
    root.Peidemo.SimulationResourceApi = factory(root.Peidemo.ApiClient, root.Peidemo.JsonNode, root.Peidemo.Simulation);
  }
}(this, function(ApiClient, JsonNode, Simulation) {
  'use strict';

  /**
   * SimulationResource service.
   * @module api/SimulationResourceApi
   * @version 0.0.1
   */

  /**
   * Constructs a new SimulationResourceApi. 
   * @alias module:api/SimulationResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createSimulation operation.
     * @callback module:api/SimulationResourceApi~createSimulationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Simulation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Simulation
     * If id is not provided, it will be randomly generated
     * @param {module:model/Simulation} body Simulation description
     * @param {module:api/SimulationResourceApi~createSimulationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Simulation}
     */
    this.createSimulation = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSimulation");
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
      var returnType = Simulation;

      return this.apiClient.callApi(
        '/Simulations/create', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSimulation operation.
     * @callback module:api/SimulationResourceApi~deleteSimulationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Simulation
     * 
     * @param {String} id ID of Simulation
     * @param {module:api/SimulationResourceApi~deleteSimulationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSimulation = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSimulation");
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
        '/Simulations/delete/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the executeModel operation.
     * @callback module:api/SimulationResourceApi~executeModelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute a Simulation by id
     * 
     * @param {String} id model
     * @param {module:model/JsonNode} body Input body
     * @param {module:api/SimulationResourceApi~executeModelCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.executeModel = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling executeModel");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling executeModel");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/Simulations/execute/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSimulationByID operation.
     * @callback module:api/SimulationResourceApi~getSimulationByIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Simulation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Simulation by id
     * 
     * @param {String} id Simulation
     * @param {module:api/SimulationResourceApi~getSimulationByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Simulation}
     */
    this.getSimulationByID = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSimulationByID");
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
      var returnType = Simulation;

      return this.apiClient.callApi(
        '/Simulations/get/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listSimulations operation.
     * @callback module:api/SimulationResourceApi~listSimulationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Simulation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all Simulations
     * 
     * @param {module:api/SimulationResourceApi~listSimulationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Simulation>}
     */
    this.listSimulations = function(callback) {
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
      var returnType = [Simulation];

      return this.apiClient.callApi(
        '/Simulations/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSimulation operation.
     * @callback module:api/SimulationResourceApi~updateSimulationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Simulation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Simulation
     * 
     * @param {module:model/Simulation} body Simulation description
     * @param {module:api/SimulationResourceApi~updateSimulationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Simulation}
     */
    this.updateSimulation = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateSimulation");
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
      var returnType = Simulation;

      return this.apiClient.callApi(
        '/Simulations/update', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));