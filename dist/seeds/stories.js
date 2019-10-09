"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStories = void 0;

var _mongoose = require("mongoose");

require("core-js/stable");

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createStories =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var story1;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            story1 = new _mongoose.models.Story({
              author: "L.M.",
              content: "\n                It\u2019s been almost four years since the tow truck driver told me, \u201CYoung lady, you need to have a lot more faith in God.\u201D It was a Sunday afternoon, and I was driving back to work from a weekend road trip when my car began to smoke and broke down. By the time AAA arrived a few hours later, anxiety had set in. This was the final episode in a downward spiral of events that led me to turn to God.\n                Still worrying about how I was going to get home, I truly prayed for the first time in my life: \u201CLord I don\u2019t know if you exist, but if you do, I need to talk to you.\u201D At that moment, something inside of me burst open. The hardness and hopelessness began to melt away with the flow of tears \u2013 springs of living water quenching my thirst.\n                I don\u2019t know what I was expecting \u2013 a booming voice from heaven or perhaps nothing \u2013 but that day I learned that the Lord is so awesomely human. On the way home, the tow truck driver started talking about Jesus. For the first time I thought, \u201COh yeah, what about Jesus?\u201D I had gotten so used to seeing Him dead on the cross that I was blind to the fact that Jesus also resurrected, ascended, and is alive today ruling on the throne of God.\n                Through His simple statements and questions, the words that the tow truck driver spoke struck and exposed me. When I told him that I had been going through a \u201Cquestioning period\u201D wondering whether God existed or not, He said bluntly, \u201CYou lost faith.\u201D Next, when I told him that I wanted to believe in God with my whole heart but could not, He stated, \u201CYou either have faith or you do not. There is no in-between.\u201D\n                Finally, He asked me, \u201CWhat did you do after leaving the Catholic Church?\u201D I proudly told him that to avoid the hypocrisies of listening to the gospel without practicing it, I led community service projects. In response, He said, \u201CHow could you be so selfish?\u201D Ouch. I was humbled to see that in the process of doing God\u2019s work, I had completely forgotten about God.\n                At the end when I was thanking the tow truck driver for all his words of wisdom, He boldly stated, \u201CYou still don\u2019t get it, do you?\u201D Somewhat bewildered, I listened as He spelled it out for me: \u201CIt was not me speaking. It was God speaking through me, to you.\u201D That\u2019s when it clicked. Earlier I had earnestly pleaded, \u201CGod, I need to talk to you.\u201D He answered my prayer.\n                As I got out of the truck, the last thing He said to me was, \u201CYou don\u2019t have to worry about your car. It\u2019s fine.\u201D Still somewhat skeptical, I took the car into the shop. A few days later I received a call. \u201CMa\u2019am we\u2019ve checked everything, and there is nothing wrong with your car.\u201D That\u2019s when it hit me: it was not the car that needed towing\u2014it was me. That day the Lord saved me by being towing me back to faith."
            });
            _context.next = 3;
            return story1.save();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createStories() {
    return _ref.apply(this, arguments);
  };
}();

exports.createStories = createStories;