<template>
  <div>
    <h1>{{siteName}}</h1>
    <div class="name" v-for="post in postNameList" :key="post">
      <div class="num">{{ post }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      siteName: "milky",
      postNameList: [],
    }
  },
  beforeMount() {
    fetch('api/blog-list?username=zhangxiaoogu')
      .then(resp => resp.json())
      .then(o => {
        console.log(this.$data);
        console.log(o);
        this.$data.siteName = o.siteName;
        this.$data.postNameList = o.postNameList;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name {
  margin-top: 70px;
  font-size: 14px;
}
.num {
  width: 300px;
  height: 200px;
  margin-left: 250px;
  margin-top: 30px;
  margin-bottom: 30px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
