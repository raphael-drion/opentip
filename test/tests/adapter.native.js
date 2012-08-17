// Generated by CoffeeScript 1.3.3
var $;

$ = ender;

describe("Native adapter", function() {
  var adapter;
  it("should add itself to Opentip.adapters.native", function() {
    return expect(Opentip.adapters["native"]).to.be.ok();
  });
  adapter = Opentip.adapters["native"];
  describe("domReady()", function() {
    return it("should call the callback", function(done) {
      return adapter.domReady(done);
    });
  });
  return describe("DOM", function() {
    describe("clone()", function() {
      return it("should create a shallow copy", function() {
        var obj, obj2;
        obj = {
          a: 1,
          b: 2,
          c: {
            d: 3
          }
        };
        obj2 = adapter.clone(obj);
        expect(obj).to.not.equal(obj2);
        expect(obj).to.eql(obj2);
        obj2.a = 10;
        expect(obj).to.not.eql(obj2);
        expect(obj.a).to.equal(1);
        obj2.c.d = 30;
        return expect(obj.c.d).to.equal(30);
      });
    });
    describe("create()", function() {
      return it("should properly create DOM elements from string", function() {
        var elements;
        elements = adapter.create("<div class=\"test\"><span>HI</span></div>");
        expect(elements).to.be.an("object");
        expect(elements.length).to.equal(1);
        return expect(elements[0].className).to.equal("test");
      });
    });
    describe("wrap()", function() {
      return it("should just return the element", function() {
        var element, element2;
        element = document.createElement("div");
        element2 = adapter.wrap(element);
        return expect(element).to.equal(element2);
      });
    });
    describe("tagName()", function() {
      return it("should return the tagName of passed element", function() {
        var element;
        element = document.createElement("div");
        return expect(adapter.tagName(element)).to.equal("DIV");
      });
    });
    return describe("attr()", function() {
      return it("should return the attribute of passed element", function() {
        var element;
        element = document.createElement("a");
        element.setAttribute("class", "test-class");
        element.setAttribute("href", "http://link");
        expect(adapter.attr(element, "class")).to.equal("test-class");
        return expect(adapter.attr(element, "href")).to.equal("http://link");
      });
    });
  });
});
