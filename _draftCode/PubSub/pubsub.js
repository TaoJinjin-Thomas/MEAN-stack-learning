var PubSub = {};
// 用于储存事件队列
var queue = {};

// 订阅接口
PubSub.on = function(event, cb) {
  if (!queue[event]) {
    queue[event] = [];
  }
  queue[event].push(cb);
};

// 退订接口
PubSub.off = function(event, cb) {
  var currentEvent = queue[event];
  var len = 0;
  if (currentEvent) {
    len = currentEvent.length;
    for (var i = len - 1; i >= 0; i--) {
      if (currentEvent[i] === cb) {
        currentEvent.splice(i, 1);
      }
    }
  }
};

// 发布接口
PubSub.emit = function(event) {
  var currentEvent = queue[event];
  if (currentEvent) {
    for (var i = 0; i < currentEvent.length; i++) {
      currentEvent[i]();
    }
  }
};

module.exports = PubSub;