var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("../build/d3");

tape.Test.prototype.inDelta = function(actual, expected) {
  this._assert(expected - 1e-6 < actual && actual < expected + 1e-6, {
    message: "should be in delta",
    operator: "inDelta",
    actual: actual,
    expected: expected
  });
};

tape('d3.ease("linear") returns the expected results', function(test) {
  var ease = d3.ease("linear");
  test.inDelta(ease(0.1), 0.1);
  test.inDelta(ease(0.2), 0.2);
  test.inDelta(ease(0.3), 0.3);
  test.inDelta(ease(0.4), 0.4);
  test.inDelta(ease(0.5), 0.5);
  test.inDelta(ease(0.6), 0.6);
  test.inDelta(ease(0.7), 0.7);
  test.inDelta(ease(0.8), 0.8);
  test.inDelta(ease(0.9), 0.9);
  test.equal(ease(0), 0, "exact zero");
  test.equal(ease(1), 1, "exact one");
  test.equal(ease(".9"), ease(0.9), "numeric coercion");
  test.equal(ease(-0.01), 0, "clamp below zero");
  test.equal(ease(1.01), 1, "clamp above one");
  test.end();
});

tape('d3.ease("linear-in") is an alias for d3.ease("linear")', function(test) {
  test.equal(d3.ease("linear-in"), d3.ease("linear"));
  test.end();
});

tape('d3.ease("linear-out") is an alias for d3.ease("linear")', function(test) {
  test.equal(d3.ease("linear-out"), d3.ease("linear"));
  test.end();
});

tape('d3.ease("linear-in-out") is an alias for d3.ease("linear")', function(test) {
  test.equal(d3.ease("linear-in-out"), d3.ease("linear"));
  test.end();
});

tape('d3.ease("linear-out-in") is an alias for d3.ease("linear")', function(test) {
  test.equal(d3.ease("linear-out-in"), d3.ease("linear"));
  test.end();
});

tape('d3.ease("quad") returns the expected results', function(test) {
  var ease = d3.ease("quad");
  test.inDelta(ease(0.1), 0.01);
  test.inDelta(ease(0.2), 0.04);
  test.inDelta(ease(0.3), 0.09);
  test.inDelta(ease(0.4), 0.16);
  test.inDelta(ease(0.5), 0.25);
  test.inDelta(ease(0.6), 0.36);
  test.inDelta(ease(0.7), 0.49);
  test.inDelta(ease(0.8), 0.64);
  test.inDelta(ease(0.9), 0.81);
  test.equal(ease(0), 0, "exact zero");
  test.equal(ease(1), 1, "exact one");
  test.equal(ease(".9"), ease(0.9), "numeric coercion");
  test.equal(ease(-0.01), 0, "clamp below zero");
  test.equal(ease(1.01), 1, "clamp above one");
  test.end();
});

tape('d3.ease("quad-in") is an alias for d3.ease("quad")', function(test) {
  test.equal(d3.ease("quad-in"), d3.ease("quad"));
  test.end();
});

tape('d3.ease("quad-out") returns the expected results', function(test) {
  var ease = d3.ease("quad-out");
  test.inDelta(ease(0.1), 0.19);
  test.inDelta(ease(0.2), 0.36);
  test.inDelta(ease(0.3), 0.51);
  test.inDelta(ease(0.4), 0.64);
  test.inDelta(ease(0.5), 0.75);
  test.inDelta(ease(0.6), 0.84);
  test.inDelta(ease(0.7), 0.91);
  test.inDelta(ease(0.8), 0.96);
  test.inDelta(ease(0.9), 0.99);
  test.equal(ease(0), 0, "exact zero");
  test.equal(ease(1), 1, "exact one");
  test.equal(ease(".9"), ease(0.9), "numeric coercion");
  test.equal(ease(-0.01), 0, "clamp below zero");
  test.equal(ease(1.01), 1, "clamp above one");
  test.end();
});

tape('d3.ease("quad-in-out") returns the expected results', function(test) {
  var ease = d3.ease("quad-in-out");
  test.inDelta(ease(0.1), 0.02);
  test.inDelta(ease(0.2), 0.08);
  test.inDelta(ease(0.3), 0.18);
  test.inDelta(ease(0.4), 0.32);
  test.inDelta(ease(0.5), 0.50);
  test.inDelta(ease(0.6), 0.68);
  test.inDelta(ease(0.7), 0.82);
  test.inDelta(ease(0.8), 0.92);
  test.inDelta(ease(0.9), 0.98);
  test.equal(ease(0), 0, "exact zero");
  test.equal(ease(1), 1, "exact one");
  test.equal(ease(".9"), ease(0.9), "numeric coercion");
  test.equal(ease(-0.01), 0, "clamp below zero");
  test.equal(ease(1.01), 1, "clamp above one");
  test.end();
});

tape('d3.ease("quad-out-in") returns the expected results', function(test) {
  var ease = d3.ease("quad-out-in");
  test.inDelta(ease(0.1), 0.18);
  test.inDelta(ease(0.2), 0.32);
  test.inDelta(ease(0.3), 0.42);
  test.inDelta(ease(0.4), 0.48);
  test.inDelta(ease(0.5), 0.50);
  test.inDelta(ease(0.6), 0.52);
  test.inDelta(ease(0.7), 0.58);
  test.inDelta(ease(0.8), 0.68);
  test.inDelta(ease(0.9), 0.82);
  test.equal(ease(0), 0, "exact zero");
  test.equal(ease(1), 1, "exact one");
  test.equal(ease(".9"), ease(0.9), "numeric coercion");
  test.equal(ease(-0.01), 0, "clamp below zero");
  test.equal(ease(1.01), 1, "clamp above one");
  test.end();
});

tape('d3.ease("cubic") returns the expected results', function(test) {
  var ease = d3.ease("cubic");
  test.inDelta(ease(0.1), 0.001);
  test.inDelta(ease(0.2), 0.008);
  test.inDelta(ease(0.3), 0.027);
  test.inDelta(ease(0.4), 0.064);
  test.inDelta(ease(0.5), 0.125);
  test.inDelta(ease(0.6), 0.216);
  test.inDelta(ease(0.7), 0.343);
  test.inDelta(ease(0.8), 0.512);
  test.inDelta(ease(0.9), 0.729);
  test.equal(ease(0), 0, "exact zero");
  test.equal(ease(1), 1, "exact one");
  test.equal(ease(".9"), ease(0.9), "numeric coercion");
  test.equal(ease(-0.01), 0, "clamp below zero");
  test.equal(ease(1.01), 1, "clamp above one");
  test.end();
});

tape('d3.ease("cubic-in") is an alias for d3.ease("cubic")', function(test) {
  test.equal(d3.ease("cubic-in"), d3.ease("cubic"));
  test.end();
});

tape('d3.ease("cubic-out") returns the expected results', function(test) {
  var ease = d3.ease("cubic-out");
  test.inDelta(ease(0.1), 0.271);
  test.inDelta(ease(0.2), 0.488);
  test.inDelta(ease(0.3), 0.657);
  test.inDelta(ease(0.4), 0.784);
  test.inDelta(ease(0.5), 0.875);
  test.inDelta(ease(0.6), 0.936);
  test.inDelta(ease(0.7), 0.973);
  test.inDelta(ease(0.8), 0.992);
  test.inDelta(ease(0.9), 0.999);
  test.equal(ease(0), 0, "exact zero");
  test.equal(ease(1), 1, "exact one");
  test.equal(ease(".9"), ease(0.9), "numeric coercion");
  test.equal(ease(-0.01), 0, "clamp below zero");
  test.equal(ease(1.01), 1, "clamp above one");
  test.end();
});

tape('d3.ease("cubic-in-out") returns the expected results', function(test) {
  var ease = d3.ease("cubic-in-out");
  test.inDelta(ease(0.1), 0.004);
  test.inDelta(ease(0.2), 0.032);
  test.inDelta(ease(0.3), 0.108);
  test.inDelta(ease(0.4), 0.256);
  test.inDelta(ease(0.5), 0.500);
  test.inDelta(ease(0.6), 0.744);
  test.inDelta(ease(0.7), 0.892);
  test.inDelta(ease(0.8), 0.968);
  test.inDelta(ease(0.9), 0.996);
  test.equal(ease(0), 0, "exact zero");
  test.equal(ease(1), 1, "exact one");
  test.equal(ease(".9"), ease(0.9), "numeric coercion");
  test.equal(ease(-0.01), 0, "clamp below zero");
  test.equal(ease(1.01), 1, "clamp above one");
  test.end();
});

tape('d3.ease("cubic-out-in") returns the expected results', function(test) {
  var ease = d3.ease("cubic-out-in");
  test.inDelta(ease(0.1), 0.244);
  test.inDelta(ease(0.2), 0.392);
  test.inDelta(ease(0.3), 0.468);
  test.inDelta(ease(0.4), 0.496);
  test.inDelta(ease(0.5), 0.500);
  test.inDelta(ease(0.6), 0.504);
  test.inDelta(ease(0.7), 0.532);
  test.inDelta(ease(0.8), 0.608);
  test.inDelta(ease(0.9), 0.756);
  test.equal(ease(0), 0, "exact zero");
  test.equal(ease(1), 1, "exact one");
  test.equal(ease(".9"), ease(0.9), "numeric coercion");
  test.equal(ease(-0.01), 0, "clamp below zero");
  test.equal(ease(1.01), 1, "clamp above one");
  test.end();
});

tape('d3.ease("poly") is an alias for d3.ease("cubic")', function(test) {
  test.equal(d3.ease("poly"), d3.ease("cubic"));
  test.end();
});

tape('d3.ease("poly-in") is an alias for d3.ease("cubic")', function(test) {
  test.equal(d3.ease("poly-in"), d3.ease("cubic"));
  test.end();
});

tape('d3.ease("poly-out") is an alias for d3.ease("cubic-out")', function(test) {
  test.equal(d3.ease("poly-out"), d3.ease("cubic-out"));
  test.end();
});

tape('d3.ease("poly-in-out") is an alias for d3.ease("cubic-in-out")', function(test) {
  test.equal(d3.ease("poly-in-out"), d3.ease("cubic-in-out"));
  test.end();
});

tape('d3.ease("poly-out-in") is an alias for d3.ease("cubic-out-in")', function(test) {
  test.equal(d3.ease("poly-out-in"), d3.ease("cubic-out-in"));
  test.end();
});

tape('d3.ease("poly", 2.5) returns the expected results', function(test) {
  var ease = d3.ease("poly", 2.5);
  test.inDelta(ease(0.1), 0.003162);
  test.inDelta(ease(0.2), 0.017889);
  test.inDelta(ease(0.3), 0.049295);
  test.inDelta(ease(0.4), 0.101193);
  test.inDelta(ease(0.5), 0.176777);
  test.inDelta(ease(0.6), 0.278855);
  test.inDelta(ease(0.7), 0.409963);
  test.inDelta(ease(0.8), 0.572433);
  test.inDelta(ease(0.9), 0.768433);
  test.equal(ease(0), 0, "exact zero");
  test.equal(ease(1), 1, "exact one");
  test.equal(ease(".9"), ease(0.9), "numeric coercion");
  test.equal(ease(-0.01), 0, "clamp below zero");
  test.equal(ease(1.01), 1, "clamp above one");
  test.end();
});

tape('d3.ease("poly-in", 2.5) returns the expected results', function(test) {
  var ease = d3.ease("poly-in", 2.5);
  test.inDelta(ease(0.1), 0.003162);
  test.inDelta(ease(0.2), 0.017889);
  test.inDelta(ease(0.3), 0.049295);
  test.inDelta(ease(0.4), 0.101193);
  test.inDelta(ease(0.5), 0.176777);
  test.inDelta(ease(0.6), 0.278855);
  test.inDelta(ease(0.7), 0.409963);
  test.inDelta(ease(0.8), 0.572433);
  test.inDelta(ease(0.9), 0.768433);
  test.equal(ease(0), 0, "exact zero");
  test.equal(ease(1), 1, "exact one");
  test.equal(ease(".9"), ease(0.9), "numeric coercion");
  test.equal(ease(-0.01), 0, "clamp below zero");
  test.equal(ease(1.01), 1, "clamp above one");
  test.end();
});

tape('d3.ease("poly-out", 2.5) returns the expected results', function(test) {
  var ease = d3.ease("poly-out", 2.5);
  test.inDelta(ease(0.1), 0.231567);
  test.inDelta(ease(0.2), 0.427567);
  test.inDelta(ease(0.3), 0.590037);
  test.inDelta(ease(0.4), 0.721145);
  test.inDelta(ease(0.5), 0.823223);
  test.inDelta(ease(0.6), 0.898807);
  test.inDelta(ease(0.7), 0.950705);
  test.inDelta(ease(0.8), 0.982111);
  test.inDelta(ease(0.9), 0.996838);
  test.equal(ease(0), 0, "exact zero");
  test.equal(ease(1), 1, "exact one");
  test.equal(ease(".9"), ease(0.9), "numeric coercion");
  test.equal(ease(-0.01), 0, "clamp below zero");
  test.equal(ease(1.01), 1, "clamp above one");
  test.end();
});

tape('d3.ease("poly-in-out", 2.5) returns the expected results', function(test) {
  var ease = d3.ease("poly-in-out", 2.5);
  test.inDelta(ease(0.1), 0.008944);
  test.inDelta(ease(0.2), 0.050596);
  test.inDelta(ease(0.3), 0.139427);
  test.inDelta(ease(0.4), 0.286217);
  test.inDelta(ease(0.5), 0.500000);
  test.inDelta(ease(0.6), 0.713783);
  test.inDelta(ease(0.7), 0.860573);
  test.inDelta(ease(0.8), 0.949404);
  test.inDelta(ease(0.9), 0.991056);
  test.equal(ease(0), 0, "exact zero");
  test.equal(ease(1), 1, "exact one");
  test.equal(ease(".9"), ease(0.9), "numeric coercion");
  test.equal(ease(-0.01), 0, "clamp below zero");
  test.equal(ease(1.01), 1, "clamp above one");
  test.end();
});

tape('d3.ease("poly-out-in", 2.5) returns the expected results', function(test) {
  var ease = d3.ease("poly-out-in", 2.5);
  test.inDelta(ease(0.1), 0.213783);
  test.inDelta(ease(0.2), 0.360573);
  test.inDelta(ease(0.3), 0.449404);
  test.inDelta(ease(0.4), 0.491056);
  test.inDelta(ease(0.5), 0.500000);
  test.inDelta(ease(0.6), 0.508944);
  test.inDelta(ease(0.7), 0.550596);
  test.inDelta(ease(0.8), 0.639427);
  test.inDelta(ease(0.9), 0.786217);
  test.equal(ease(0), 0, "exact zero");
  test.equal(ease(1), 1, "exact one");
  test.equal(ease(".9"), ease(0.9), "numeric coercion");
  test.equal(ease(-0.01), 0, "clamp below zero");
  test.equal(ease(1.01), 1, "clamp above one");
  test.end();
});
