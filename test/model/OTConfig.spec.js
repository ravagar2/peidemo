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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Peidemo);
  }
}(this, function(expect, Peidemo) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('OTConfig', function() {
      beforeEach(function() {
        instance = new Peidemo.OTConfig();
      });

      it('should create an instance of OTConfig', function() {
        // TODO: update the code to test OTConfig
        expect(instance).to.be.a(Peidemo.OTConfig);
      });

      it('should have the property serviceUrl (base name: "serviceUrl")', function() {
        // TODO: update the code to test the property serviceUrl
        expect(instance).to.have.property('serviceUrl');
        // expect(instance.serviceUrl).to.be(expectedValueLiteral);
      });

      it('should have the property apiKey (base name: "apiKey")', function() {
        // TODO: update the code to test the property apiKey
        expect(instance).to.have.property('apiKey');
        // expect(instance.apiKey).to.be(expectedValueLiteral);
      });

    });
  });

}));
