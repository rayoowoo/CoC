"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var storySchema = new _mongoose["default"].Schema({
  author: {
    type: String
  },
  content: {
    type: String
  }
});

var Story = _mongoose["default"].model('Story', storySchema);

var _default = Story;
exports["default"] = _default;