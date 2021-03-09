"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _DATA;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ = window._;
var React = window.React;
var Scope = {
  Friendly: 0,
  Enemy: 1
};
var Target = {
  Self: 0,
  Single: 1,
  Many: 2
};

var bound = function bound(x, _ref) {
  var min = _ref.min,
      max = _ref.max;
  return Math.min(max, Math.max(min, x));
}; // Functional updating for maps


Map.prototype.update = function (key, f) {
  var x = f(this.get(key));
  return new Map(this).set(key, x);
};

var DATA0 = (_DATA = {}, _defineProperty(_DATA, 0x99, {
  // Thunder III (test)
  duration: 24,
  cooldown: 2.5,
  scope: Scope.Enemy,
  targeting: Target.Single,
  job: "blm"
}), _defineProperty(_DATA, 0x8d2, {
  // Trick Attack
  duration: 15,
  cooldown: 60,
  scope: Scope.Enemy,
  targeting: Target.Single,
  job: "nin"
}), _defineProperty(_DATA, 0x1d0c, {
  // Chain Stratagem
  duration: 15,
  cooldown: 120,
  scope: Scope.Enemy,
  targeting: Target.Single,
  job: "sch"
}), _defineProperty(_DATA, 0x40a8, {
  // Divination
  duration: 15,
  cooldown: 120,
  scope: Scope.Friendly,
  targeting: Target.Many,
  job: "ast"
}), _defineProperty(_DATA, 0x1ce4, {
  // Brotherhood
  duration: 15,
  cooldown: 90,
  scope: Scope.Friendly,
  targeting: Target.Many,
  job: "mnk"
}), _defineProperty(_DATA, 0xde5, {
  // Battle Litany
  duration: 20,
  cooldown: 180,
  scope: Scope.Friendly,
  targeting: Target.Many,
  job: "drg"
}), _defineProperty(_DATA, 0x3f44, {
  // Technical Finish (Quadruple)
  duration: 20,
  cooldown: 120,
  scope: Scope.Friendly,
  targeting: Target.Many,
  job: "dnc"
}), _defineProperty(_DATA, 0x1d88, {
  // Addle
  duration: 10,
  cooldown: 90,
  scope: Scope.Enemy,
  targeting: Target.Single,
  job: "blm"
}), _defineProperty(_DATA, 0x3e8c, {
  // Shield Samba
  duration: 15,
  cooldown: 120,
  scope: Scope.Friendly,
  targeting: Target.Many,
  job: "dnc"
}), _defineProperty(_DATA, 0x3f18, {
  // Superbolide
  duration: 8,
  cooldown: 360,
  scope: Scope.Friendly,
  targeting: Target.Self,
  job: "gnb"
}), _defineProperty(_DATA, 0x3f20, {
  // Heart of Light
  duration: 15,
  cooldown: 90,
  scope: Scope.Friendly,
  targeting: Target.Many,
  job: "gnb"
}), _DATA); // const DATA = DATA0;

var DATA = _.pick(DATA0, [0x8d2, 0x1d0c, 0x40a8, 0x1ce4, 0xde5, 0x3f44]);

var ActionIcon = /*#__PURE__*/function () {
  function ActionIcon() {
    _classCallCheck(this, ActionIcon);
  }

  _createClass(ActionIcon, null, [{
    key: "get",
    // Max 8 per second
    value: function get(actionID) {
      if (this._cache[actionID]) return this._cache[actionID];
      this.fetch(actionID);
    }
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function (actionID) {
      var _this = this;

      if (this._currentRequest || performance.now() - this._lastRequest < this.RATE) return;
      this._currentRequest = actionID;
      fetch("".concat(this.API_ROOT, "/Action/").concat(actionID, "?columns=Icon"), {
        mode: "cors"
      }).then(function (res) {
        return res.json();
      }).then(function (_ref2) {
        var Icon = _ref2.Icon;
        _this._cache[actionID] = "".concat(_this.API_ROOT, "/").concat(Icon);
        _this._currentRequest = null;
        _this._lastRequest = performance.now();
      })["catch"](function (_err) {
        _this._currentRequest = null;
        _this._lastRequest = performance.now();
      });
    })
  }]);

  return ActionIcon;
}();

_defineProperty(ActionIcon, "_cache", {});

_defineProperty(ActionIcon, "_currentRequest", null);

_defineProperty(ActionIcon, "_lastRequest", performance.now());

_defineProperty(ActionIcon, "API_ROOT", "https://xivapi.com");

_defineProperty(ActionIcon, "RATE", 1000 / 8);

var Timer = /*#__PURE__*/function (_React$Component) {
  _inherits(Timer, _React$Component);

  var _super = _createSuper(Timer);

  function Timer() {
    _classCallCheck(this, Timer);

    return _super.apply(this, arguments);
  }

  _createClass(Timer, [{
    key: "render",
    value: function render() {
      // FFXIV's buff timers use ceil(), so we do the same for consistency
      var seconds = Math.ceil(this.props.timer);
      var width = bound(this.props.percentage * 100, {
        min: 0,
        max: 100
      }).toFixed(2) + "%";
      var iconStyle = this.props.icon ? {
        backgroundImage: "url(".concat(this.props.icon, ")")
      } : null;
      return /*#__PURE__*/React.createElement("li", {
        className: "row ".concat(this.props.state, " ").concat(this.props.job)
      }, /*#__PURE__*/React.createElement("div", {
        className: "bar fast",
        style: {
          width: width
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "text-overlay"
      }, /*#__PURE__*/React.createElement("div", {
        className: "stats"
      }, seconds > 0 ? /*#__PURE__*/React.createElement("span", {
        className: "total"
      }, seconds, "s") : null), /*#__PURE__*/React.createElement("div", {
        className: "info"
      }, /*#__PURE__*/React.createElement("span", {
        className: "icon",
        style: iconStyle
      }), /*#__PURE__*/React.createElement("span", {
        className: "character-name"
      }, this.props.action, ": ", this.props.source), this.props.subText ? /*#__PURE__*/React.createElement("span", {
        className: "subtext"
      }, this.props.subText) : null)));
    }
  }]);

  return Timer;
}(React.Component);

var Timers = /*#__PURE__*/function (_React$Component2) {
  _inherits(Timers, _React$Component2);

  var _super2 = _createSuper(Timers);

  function Timers() {
    _classCallCheck(this, Timers);

    return _super2.apply(this, arguments);
  }

  _createClass(Timers, [{
    key: "render",
    value: function render() {
      var timers = [];

      var _iterator = _createForOfIteratorHelper(this.props.actions),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              action = _step$value[0],
              byAction = _step$value[1];

          var _DATA$action = DATA[action],
              duration = _DATA$action.duration,
              cooldown = _DATA$action.cooldown,
              targeting = _DATA$action.targeting,
              job = _DATA$action.job;

          var _iterator2 = _createForOfIteratorHelper(byAction),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                  source = _step2$value[0],
                  bySource = _step2$value[1];

              var _$maxBy = _.maxBy(Array.from(bySource.entries()), function (_ref5) {
                var _ref6 = _slicedToArray(_ref5, 2),
                    _ = _ref6[0],
                    castAt = _ref6[1].castAt;

                return castAt;
              }),
                  _$maxBy2 = _slicedToArray(_$maxBy, 2),
                  target = _$maxBy2[0],
                  event = _$maxBy2[1];

              var key = "".concat(source, ":").concat(target, ":").concat(action);
              var elapsed = (this.props.serverTime - event.castAt) / 1000;
              var state = void 0,
                  timer = void 0,
                  percentage = void 0;

              if (elapsed < duration) {
                state = "active";
                timer = Math.max(0, duration - elapsed);
                percentage = timer / duration;
              } else {
                state = "cooldown";
                timer = Math.max(0, cooldown - elapsed);
                percentage = elapsed / cooldown;
              }

              var subText = state === "active" ? targeting !== Target.Many ? event.target : null : null;
              var icon = ActionIcon.get(action);
              timers.push(_objectSpread({
                key: key,
                state: state,
                timer: timer,
                percentage: percentage,
                icon: icon,
                job: job,
                subText: subText
              }, event));
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var ranking = [function (_ref3) {
        var state = _ref3.state;
        return state === "active" ? 0 : 1;
      }, function (_ref4) {
        var timer = _ref4.timer;
        return timer;
      }];
      return /*#__PURE__*/React.createElement("div", {
        className: "damage-meter"
      }, _.sortBy.apply(_, [timers].concat(ranking)).map(function (timer) {
        return /*#__PURE__*/React.createElement(Timer, _extends({
          key: timer.key
        }, timer));
      }));
    }
  }]);

  return Timers;
}(React.Component);

var App = /*#__PURE__*/function (_React$Component3) {
  _inherits(App, _React$Component3);

  var _super3 = _createSuper(App);

  function App(props) {
    var _this2;

    _classCallCheck(this, App);

    _this2 = _super3.call(this, props);
    _this2.state = {
      serverTime: new Date(0),
      lastClockUpdate: null,
      actions: new Map()
    };
    return _this2;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      document.addEventListener("onLogLine", function (e) {
        return _this3.onLogLine(e);
      });
      document.addEventListener("onOverlayStateUpdate", function (e) {
        return _this3.onOverlayStateUpdate(e);
      }); // Because updates from the server are sometimes spotty, every time we do
      // change our time, we note what the local time is as well. This timer runs
      // constantly, pushing the clock forward by the difference in our local
      // time, which helps account for skew.

      setInterval(function () {
        if (_this3.state.lastClockUpdate) {
          var offset = performance.now() - _this3.state.lastClockUpdate;

          var simulatedTime = new Date(_this3.state.serverTime.getTime() + offset);

          _this3.advanceTime(simulatedTime);
        }
      }, App.TIME_RESOLUTION);
    }
  }, {
    key: "advanceTime",
    value: function advanceTime(now) {
      // We only set a new now if it advances our clock enough
      if (now - this.state.serverTime > App.TIME_RESOLUTION) {
        this.setState({
          serverTime: now,
          lastClockUpdate: performance.now()
        });
      }
    }
  }, {
    key: "onOverlayStateUpdate",
    value: function onOverlayStateUpdate(e) {
      if (!e.detail.isLocked) {
        document.documentElement.classList.add("resizable");
      } else {
        document.documentElement.classList.remove("resizable");
      }
    }
  }, {
    key: "onCast",
    value: function onCast(sourceID, sourceName, actionID, actionName, targetID, targetName) {
      actionID = parseInt(actionID, 16);

      if (actionID in DATA) {
        var payload = {
          source: sourceName,
          action: actionName,
          target: targetName,
          castAt: this.state.serverTime
        };
        var actions = this.state.actions.update(actionID, function (byAction) {
          return (byAction !== null && byAction !== void 0 ? byAction : new Map()).update(sourceID, function (bySource) {
            return (bySource !== null && bySource !== void 0 ? bySource : new Map()).update(targetID, function (_) {
              return payload;
            });
          });
        });
        this.setState({
          actions: actions
        });
      }
    }
  }, {
    key: "onLogLine",
    value: function onLogLine(e) {
      var _this4 = this;

      var _JSON$parse = JSON.parse(e.detail),
          _JSON$parse2 = _toArray(_JSON$parse),
          code = _JSON$parse2[0],
          timestamp = _JSON$parse2[1],
          message = _JSON$parse2.slice(2);

      var now = new Date(timestamp);
      this.advanceTime(now);
      var handler = {
        21: function _() {
          return _this4.onCast.apply(_this4, _toConsumableArray(message));
        },
        22: function _() {
          return _this4.onCast.apply(_this4, _toConsumableArray(message));
        }
      }[code];
      if (handler) handler();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Timers, this.state);
    }
  }]);

  return App;
}(React.Component);

_defineProperty(App, "STORAGE_KEY", "timers");

_defineProperty(App, "TIME_RESOLUTION", 50);

window.App = App;