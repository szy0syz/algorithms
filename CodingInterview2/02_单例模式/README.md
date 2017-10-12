## 面试题02：实现Singleton模式

**题目：设计一个类，我们只能生成该类的一个实例。**

### JavaScript实现版

#### 方法一：对象字面量法

最近单的实现方法，将需要单利生成对象的属性全丢花括号内就行。但有个缺点，没有自己的私有属性！

```js
var mySingleton = {
  fisrt: 'Jerry',
  last: 'Shi',
  say: function() { //函数内你想用个私有比那
    console.log('hello world.');
  }
}
```

#### 方法二：IIFE

IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

就是传说中的闭包了，JS里想到私有属性，肯定要用闭包嘛。

```js
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
```

### C#实现版(原书作者写的)