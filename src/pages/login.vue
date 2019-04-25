<template>
    <div id="login">
        <el-form :model="loginForm">         
            <h2>Ray商城登录</h2>
            <el-form-item>
            <el-input v-model="loginForm.username" name="username" placeholder="请输入用户名/手机号" auto-complete="on"></el-input>

               
            </el-form-item>

            <el-form-item>
                <el-input v-model="loginForm.password" name="password" placeholder="请输入密码" auto-complete="on"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="handleLogin" :disabled="isDisable">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
export default {
  name: "login",
  data() {
    return {
      isDisable: false,
      listLoading: false,
     loginForm: {
      username: '',
      password: '',
 }
    }
  },
  methods: {
     handleLogin() {
     
     this.isDisable=true
      var formdata1=new FormData();// 创建form对象  
        //formdata1.append('uid',this.$store.state.user.id);//
        formdata1.append('username',this.loginForm.username);//
        formdata1.append('password',this.loginForm.password);//
      var token='ttt';

      var headers= 'Bearer ' + token;// headers         
      //headers.append('Authorization','Bearer ' + token);//
     


      var _self=this     
      let url =  '/login.php'  
     
      
          this.$post(url,formdata1,headers).then(data => { 
                //_self.list=data.result
                console.log('formdata1='+formdata1.username)
                 console.log('headers='+headers.Authorization) 
                console.log(data)
                 console.log(data.result)
                if (data.result==="ok"){
                  console.log('login ok')
                  localStorage.setItem('jwt', data.jwt);
                   _self.$router.push({name:'home',                                 
                               });   
                  // 把token加入header里
               //  axios.defaults.headers.common['X-token'] = data.jwt;
                }else{
                    console.log('login fail')
                }
                _self.listLoading =false   
                 setTimeout(() => {
              _self.isDisable = false
            }, 2000) //防止重复提交   
 console.log('post end ')
           })  //---axios  end---
          
         
    }// ---save data end 
  }
};
</script>
<style scoped>
.el-input {
        width:300px;
}    
</style>