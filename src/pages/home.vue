<template>
    <div>
        <h1>管理后台</h1>
        <p>{{aboutMsg}}</p>
         <p>uid={{uid}}</p>
          <p>account={{account}}</p>
            <p>avator={{avator}}</p>
              <p>sexy={{sexy}}</p>
    </div>
</template>
<script>

    export default {
        data () {
            return {
                aboutMsg: '欢迎使用本系统！',
                uid:'',
                avator:'',
                sexy:'',
                account:''
            }
        },
       created() {
    
         this.fetchData()
      
       },
       methods: {
                fetchData() {                      
                    let jwt =  localStorage.getItem('jwt');
                    console.log('jwt='+jwt)
                    var _self=this     
                    var formdata1=new FormData();// 创建form对象  

                    var headers= jwt;// headers 
                    // formdata1.append('id',_self.id);//     
                    
                    let url =  '/get_info.php'   
                    this.$post(url,formdata1,headers).then(data => { 
                            console.log(data)
                            console.log(data.result)
                        //
                        
                        _self.aboutMsg= data.msg
                        if (data.result=='401'){
                             setTimeout(() => {
                                _self.$router.push({name:'login',  }); 
                             }, 2000) //跳转
                        }
                        _self.uid=data.uid
                         _self.avator=data.avator
                           _self.sexy=data.sexy
                              _self.account=data.account
                                
                    })  //---axios  end---    
                },// ---fetchdata end
       }
    }
</script>