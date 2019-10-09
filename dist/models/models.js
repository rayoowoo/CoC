"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.connectDb = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _story = _interopRequireDefault(require("./story"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connectDb = function connectDb() {
  var url = process.env.DATABASE_URL || "mongodb://localhost:27017/coc";
  return _mongoose["default"].connect(url);
};

exports.connectDb = connectDb;
var models = {
  Story: _story["default"]
};
var _default = models;
exports["default"] = _default;