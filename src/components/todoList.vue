<template>
  <div class="todo-list">
    <h5>这是一个备忘录</h5>
    <div class="content">
      <input v-model="name" style="font:inherit"><br><span class="some-about">{{someabout}}</span>
      <span>欢迎你：{{newName}}</span><br>
      <span>新建备忘：<input v-model.lazy="todo.words" placeholder="Write down here" style="font:inherit">
        <button class="Btn" @click="addTodo">添加</button><button class="Btn" @click="removeTodo">×</button>
      </span><br>
      <span>搜索：<input v-model="keyword" placeholder="请输入关键词" style="font:inherit"></span><br>
      <span class="todo" v-for="item of filtTodoList" :key="item.id">{{item.header+item.words}}<br></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "SIyuyuko",
      todo: [
        { header: "⚪", words: "吃饭", isCompleted: false }, { header: "⚪", words: "睡觉", isCompleted: false }, { header: "⚪", words: "上班", isCompleted: false }
      ], header: "⚪", nextIsCompleted: false, someabout: "开发中如何选择key?1.最好使用每条数据的唯一标识作为key,比如手机号、邮箱等唯一值2.如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。", keyword: "", filtTodo: []
    }
  }, methods: {
    addTodo() {
      if (!this.todo.words) {
        alert("请填写内容。");
      } else {
        let newTodo = { header: this.header, words: this.todo.words, isCompleted: this.nextIsCompleted };
        return this.todo.push(newTodo);
      }
    }, removeTodo() {
      this.todo.pop();
    }
  }, computed: {
    //computed能实现的，watch都能实现，反过来不一定；优先选择computed
    newName: {
      //getter
      get: function () {
        return this.name + " in Vue";
      },
      //setter 
      set: function (newName) {
        let name = newName;
        this.name = name;
      }
    }, filtTodoList: {
      //当配置项只有get的时候才能使用简写属性，即函数形式
      get: function () {
        return this.todo.filter((p) => {
          return p.words.indexOf(this.keyword) !== -1
        });

        //列表排序
        /*
        data中定义sortType:0 0原顺序 1降序 2 升序
        let arr = this.todo.filter((p) => {
          return p.words.indexOf(this.keyword) !== -1
        });
        if (this.sortType) {
          arr.sort(p1, p2)=> {
            return this.sortType === 1 ? p2.age - p1.age : p1.age - p2.age;
          }
          return arr;
        }
        */
      }
    }
  },
  watch: {
    todo: {
      handler() {
        console.log("备忘录发生了变更。");
      }, deep: true//监听对象时，开启深度监听
    }, name: {
      handler(newValue, oldValue) {
        console.log("用户名发生了变更。" + newValue + " " + oldValue);
      }
    }, keyword: {
      immediate: true,
      handler(val) {
        this.filtTodo = this.todo.filter((p) => {
          return p.words.indexOf(val) !== -1;
        })
      }
    }
  }
}
</script>
<style>
.content {
  padding: 5px 5px;
  margin: 15px 15px;
  text-align: left;
  border: solid rgb(0, 128, 0, 0.3);
  font-weight: 600;
  font-size: large;
  color: rgb(0, 0, 0, 0.8);
  /* background-image: url("../assets/meow.gif"); */
  background-repeat: no-repeat;
  background-position: right;
  background-size: 200px auto;
  background-attachment: scroll;
  position: sticky;
}
.todo {
  text-decoration: none;
}
.Btn {
  width: 60px;
  height: 30px;
  font: inherit;
  background-color: rgb(46, 139, 87, 0.3);
  opacity: 0.8;
  border: none;
}
.some-about {
  float: right;
  width: 300px;
  height: auto;
  background-color: rgb(240, 255, 255);
  font-size: medium;
  font-weight: normal;
}
</style>
