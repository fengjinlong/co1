function EventEmitter(this: any) {
  this.__events = {};
}

EventEmitter.VERSION = "1.0.0";
EventEmitter.prototype.on = function (eventName, listener) {
  if (!eventName || !listener) {
    return;
  }
  let events = this.__events;
  let listeners = (events[eventName] = events[eventName] || []);

  let listenerIswrappped = typeof listener === "object";

  if (listenerIndex(listeners, listener) === -1) {
    listeners.push(
      listenerIswrappped
        ? listener
        : {
            listener,
            once: false,
          }
    );
  }
};
EventEmitter.prototype.emit = function (eventName, args) {
  let listeners = this.__events[eventName];
  if (!listeners) return;
  for (let i = 0; i < listeners.length; i++) {
    let listener = listeners[i];
    if (listener) {
      listener.listener.call(this, args || []);
      if (listener.once) {
        this.off(eventName, listener.listener);
      }
    }
  }
};

EventEmitter.prototype.off = function (eventName: string, listener) {
  let listeners = this.__events[eventName];
  if (!listeners || listeners.length === 0) {
    return;
  }
  let index;
  for (let i = 0; i < listeners.length; i++) {
    if (listeners[i] && listeners[i].listener === listener) {
      index = i;
    }
  }
  if (index != undefined) {
    listeners.splice(index, 1);
  }
};

EventEmitter.prototype.once = function (eventName, listener) {
  return this.on(eventName, {
    listener,
    once: true,
  });
};
EventEmitter.prototype.allOff = function (eventName) {
  if (eventName && this.__events[eventName]) {
    this.__events[eventName] = [];
    this.__events[eventName].length = 0;
  } else {
    this.__events = {};
  }
};

function listenerIndex(array, item) {
  let index = -1;
  item = typeof item === "object" ? item.listener : item;
  for (let i = 0; i < array.length; i++) {
    if (array[i].listener === item) {
      index = i;
      break;
    }
  }
  return index;
}

export const events = new EventEmitter();
