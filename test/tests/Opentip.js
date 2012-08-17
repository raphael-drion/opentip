// Generated by CoffeeScript 1.3.3

describe("Opentip", function() {
  describe("debug()", function() {
    var consoleDebug;
    consoleDebug = console.debug;
    beforeEach(function() {
      return sinon.stub(console, "debug");
    });
    afterEach(function() {
      return console.debug.restore();
    });
    return it("should only debug when debugging == true", function() {
      Opentip.debugging = false;
      Opentip.prototype.debug("test");
      expect(console.debug.called).to.be["false"];
      Opentip.debugging = true;
      Opentip.prototype.debug("test");
      return expect(console.debug.called).to.be["true"];
    });
  });
  describe("constructor()", function() {
    return describe("arguments", function() {
      return it("should be optional", function() {
        var opentip;
        opentip = new Opentip("div", "content");
        expect(opentip.content).to.equal("content");
        expect(opentip.triggerElement).to.equal("div");
        opentip = new Opentip("div", "content", "title", {
          hideOn: "click"
        });
        expect(opentip.content).to.equal("content");
        expect(opentip.triggerElement).to.equal("div");
        expect(opentip.options.hideOn).to.equal("click");
        expect(opentip.options.title).to.equal("title");
        opentip = new Opentip("div", {
          hideOn: "click"
        });
        expect(opentip.triggerElement).to.equal("div");
        expect(opentip.options.hideOn).to.equal("click");
        expect(opentip.content).to.equal("");
        return expect(opentip.options.title).to.equal(void 0);
      });
    });
  });
  return describe("setContent()", function() {
    return it("should update the content if tooltip currently visible", function() {
      var opentip, stub;
      opentip = new Opentip("div", "content");
      stub = sinon.stub(opentip, "updateElementContent");
      opentip.visible = false;
      opentip.setContent("TEST");
      opentip.visible = true;
      opentip.setContent("TEST2");
      return expect(stub.callCount).to.equal(1);
    });
  });
});
