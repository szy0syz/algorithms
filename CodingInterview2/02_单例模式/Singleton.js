// 方法一：对象字面量法
var mySingleton1 = {
  fisrt: 'Jerry',
  last: 'Shi',
  say: function () {
    console.log('hello world.');
  }
}

// 方法二：IIFE
var mySingleton2 = (function () {
  var cache;
  function init() {
    var privateProp = 'private';
    return {
      pubMethod: function () {
        console.log('hello ' + privateProp);
      },
      pubProp: 'public'
    };
  }

  return {
    getInstance: function () {
      if (!cache) {
        cache = init();
      };
      return cache;
    }
  }
})();