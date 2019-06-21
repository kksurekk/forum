<template>
  <div class="wrap">
    <button class="btn" @click="onclickForum">我要发帖</button>
      <div class="msg-box">
        <ul class="msg">
          <li v-for="(item,index) in list" :key="index">
        <div class="pic">
            <img :src="item.icon">
         </div>
         <h3> {{item.title}}</h3>
         <p>版块: {{item.selected}} 发表时间: {{item.currentDay}} 内容: {{item.content}} </p>
        </li>
        </ul>
    </div>
    <div class="box" v-show="isShow">
      <form>
        <input type="text" class="inp" v-model="title">
        <div class="sel">所属板块：
          <select v-model="selected">
            <option>电子书籍</option>
            <option>专业知识</option>
            <option>新手问答</option>
            <option>轻松闲聊</option>
          </select>
        </div>
        <textarea class="text" v-model="content"></textarea>
        <input class="btn2" value="发布" @click="sendTie">
        <input class="btn2" value="关闭" @click="closePost">
      </form>
  </div>
  
  </div>  
</template>

<script>
export default {
  data: function() {
    return {
      isShow: false,
      selected:'',
      content:'',
      title:'',
      list:[],
      imgArry:['7.jpg','8.jpg','9.jpg','10.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg']
    }
  },
  methods: {
    onclickForum(){
        this.isShow = true;
    },
    closePost() {
      this.isShow = false
    },
    sendTie:function(){
      this.closePost();
      var day = new Date();
      var year = day.getFullYear();
      var month = day.getMonth();
      var date = day.getDate();
      var hours = day.getHours();
      var minutes = day.getMinutes();
      var currentDay =  year + "-" + (month + 1) + "-" + date + "  " + hours + ":" + minutes;
      const index = Math.floor(Math.random()*8);
      this.list.push({
        title:this.title,
        selected:this.selected,
        content:this.content,
        currentDay:currentDay ,
        icon:require("./images/"+this.imgArry[index])
      });
  },
}
}
</script>
<style>
body{
  background:#ccc;
}
  .wrap{
    width:400px;
    margin:60px auto;
    position: relative;
  }
  .btn{
    width:160px;
    height:50px;
    background:#fdc4b6;
    margin-bottom: 40px;
  }
  .btn2{
    width:80px;
    height:40px;
    background:#fdc4b6;
    text-align: center;
    line-height: 40px;
    border: none;
    border-radius: 10px;
  }
  .inp{
    height:40px;
    width: 400px;

  }
  .box{
    width:420px;
    padding:10px;
    border:1px solid #fdc4b6;
    position: absolute;
    left:0;
    top:60px;
    z-index:3;
    background:#eee;
  }
  .sel{
    margin:20px 0;
  }
  select{
     width: 200px;
     height:40px;
  }
  .text{
    width: 400px;
    height:200px;
  }
  .sub,.Close{
    width:60px;
    height:40px;
    background:#fdc4b6;
    border: none;
    border-radius: 5px;
  }
  .msg li{
    height:120px;
    padding:10px;
    list-style: none;
    border-bottom: 1px dashed #333;
  }
  .msg h3{
    margin-bottom: 20px;
  }
  .pic{
   float: left;
    margin-right: 20px;
  }
  .pic img{
    width:80px;
    height:80px;
    border-radius: 50%;
  }
  .msg-box{
    width:400px;
    position: relative;
    left:0;
    top:0;
    z-index:0;
  }
</style>

