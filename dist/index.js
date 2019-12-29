"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "prevScroll", 0);

    _defineProperty(_assertThisInitialized(_this), "handleScrollerRef", function (reference) {
      _this.scroller = reference;
    });

    _defineProperty(_assertThisInitialized(_this), "handleHorizontalScroll", function () {
      var _this$scroller = _this.scroller,
          firstChild = _this$scroller.firstChild,
          lastChild = _this$scroller.lastChild,
          scrollLeft = _this$scroller.scrollLeft,
          offsetLeft = _this$scroller.offsetLeft,
          offsetWidth = _this$scroller.offsetWidth;
      var _this$props = _this.props,
          onReachRight = _this$props.onReachRight,
          onReachLeft = _this$props.onReachLeft;
      var leftEdge = firstChild.offsetLeft;
      var rightEdge = lastChild.offsetLeft + lastChild.offsetWidth;
      var scrolledLeft = scrollLeft + offsetLeft;
      var scrolledRight = scrolledLeft + offsetWidth;

      if (scrolledRight >= rightEdge) {
        onReachRight();
      } else if (scrolledLeft <= leftEdge) {
        onReachLeft();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleVerticalScroll", function () {
      var _this$scroller2 = _this.scroller,
          firstChild = _this$scroller2.firstChild,
          lastChild = _this$scroller2.lastChild,
          scrollTop = _this$scroller2.scrollTop,
          offsetTop = _this$scroller2.offsetTop,
          offsetHeight = _this$scroller2.offsetHeight;
      var _this$props2 = _this.props,
          onReachTop = _this$props2.onReachTop,
          onReachBottom = _this$props2.onReachBottom;
      var topEdge = firstChild.offsetTop;
      var bottomEdge = lastChild.offsetTop + lastChild.offsetHeight;
      var scrolledUp = scrollTop + offsetTop;
      var scrolledDown = scrolledUp + offsetHeight;

      if (scrolledDown >= bottomEdge) {
        onReachBottom();
      } else if (scrolledUp <= topEdge) {
        onReachTop();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var _this$props3 = _this.props,
          horizontal = _this$props3.horizontal,
          onScroll = _this$props3.onScroll;
      var scrolledTo = 0;

      if (horizontal) {
        _this.handleHorizontalScroll();

        scrolledTo = _this.scroller.scrollLeft;
      } else {
        _this.handleVerticalScroll();

        scrolledTo = _this.scroller.scrollTop;
      }

      onScroll(scrolledTo, _this.prevScroll);
      _this.prevScroll = scrolledTo;
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var position = this.props.position;

      if (position) {
        this.setScrollPosition(position);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var position = this.props.position;

      if (position !== prevProps.position) {
        this.setScrollPosition(position);
      }
    }
  }, {
    key: "setScrollPosition",
    value: function setScrollPosition() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.props.horizontal) {
        this.scroller.scrollLeft = position;
      } else {
        this.scroller.scrollTop = position;
      }

      this.prevScroll = position;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          horizontal = _this$props4.horizontal;
      var whiteSpace = horizontal ? "nowrap" : "normal";
      return _react["default"].createElement("div", {
        ref: this.handleScrollerRef,
        style: {
          overflow: "auto",
          height: "inherit",
          width: "inherit",
          WebkitOverflowScrolling: "inherit",
          whiteSpace: whiteSpace
        },
        onScroll: this.handleScroll
      }, children);
    }
  }]);

  return _default;
}(_react.Component);

exports["default"] = _default;

_defineProperty(_default, "defaultProps", {
  horizontal: false,
  onReachBottom: function onReachBottom(f) {
    return f;
  },
  onReachTop: function onReachTop(f) {
    return f;
  },
  onReachLeft: function onReachLeft(f) {
    return f;
  },
  onReachRight: function onReachRight(f) {
    return f;
  },
  onScroll: function onScroll(f) {
    return f;
  },
  position: 0
});