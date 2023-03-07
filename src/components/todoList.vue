<template>
  <div class="todo-list">
    <h5>这是一个备忘录</h5>
    <div class="content">
      <input v-model="name" style="font:inherit"><br>
      <span>欢迎你：{{newName}}</span><br>
      <span>新建备忘：<input v-model="todo.words" placeholder="Write down here" style="font:inherit">
        <button class="Btn" @click="addTodo">添加</button><button class="Btn" @click="removeTodo">×</button>
      </span><br>
      <span class="todo" v-for="item of todo" :key="item.id">{{item.header+item.words}}<br></span>

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
      ], header: "⚪", nextIsCompleted: false
    }
  }, methods: {
    addTodo() {
      if (!this.todo.words) {
        alert("请填写内容。");
      } else {
        return this.todo.push({ header: this.header, words: this.todo.words, isCompleted: this.nextIsCompleted });
      }
    }, removeTodo() {
      this.todo.pop();
    }
  }, computed: {
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
    }
  },
  watch: {
    todo: {
      handler() {
        console.log("备忘录发生了变更。");
      }
    }, name: {
      handler() {
        console.log("用户名发生了变更。");
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
</style>
