// pages/home/home.js
// getApp()可以获取app.js产生的实例对象
const app = getApp();
const name = app.globalData.name;
const age = app.globalData.age;
console.log(name,age)

Page({
  data: {
    name: "Jiw",
    age: 23,
    students: [
      {id: 111, name: "aaa", age: 21},
      {id: 222, name: "bbb", age: 22},
      {id: 333, name: "ccc", age: 23}
    ],
    counter: 0
  },
  handIncreaseClick() {
    // 实时更新界面上数据this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handRecreaseClick() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  // 获取用户信息
  handleUserInfo(event) {
    console.log(event)
  }

})