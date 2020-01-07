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

  beforeEach(function() {
    instance = new Peidemo.SubindexResourceApi();
  });

  describe('(package)', function() {
    describe('SubindexResourceApi', function() {
      describe('createSubindex', function() {
        it('should call createSubindex successfully', function(done) {
          // TODO: uncomment, update parameter values for createSubindex call and complete the assertions
          /*
          var body = new Peidemo.Subindex();
          body.id = "";
          body.name = "";
          body.description = "";
          body.weight = 0.0;
          body.children = [""];

          instance.createSubindex(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Peidemo.Subindex);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.weight).to.be.a('number');
            expect(data.weight).to.be(0.0);
            {
              let dataCtr = data.children;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteSubindex', function() {
        it('should call deleteSubindex successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteSubindex call
          /*
          var id = "id_example";

          instance.deleteSubindex(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getSubindexByID', function() {
        it('should call getSubindexByID successfully', function(done) {
          // TODO: uncomment, update parameter values for getSubindexByID call and complete the assertions
          /*
          var id = "id_example";

          instance.getSubindexByID(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Peidemo.Subindex);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.weight).to.be.a('number');
            expect(data.weight).to.be(0.0);
            {
              let dataCtr = data.children;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listSubindexs', function() {
        it('should call listSubindexs successfully', function(done) {
          // TODO: uncomment listSubindexs call and complete the assertions
          /*

          instance.listSubindexs(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Peidemo.Subindex);
              expect(data.id).to.be.a('string');
              expect(data.id).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.weight).to.be.a('number');
              expect(data.weight).to.be(0.0);
              {
                let dataCtr = data.children;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateSubindex', function() {
        it('should call updateSubindex successfully', function(done) {
          // TODO: uncomment, update parameter values for updateSubindex call and complete the assertions
          /*
          var body = new Peidemo.Subindex();
          body.id = "";
          body.name = "";
          body.description = "";
          body.weight = 0.0;
          body.children = [""];

          instance.updateSubindex(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Peidemo.Subindex);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.weight).to.be.a('number');
            expect(data.weight).to.be(0.0);
            {
              let dataCtr = data.children;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));