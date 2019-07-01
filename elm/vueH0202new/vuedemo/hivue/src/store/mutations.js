export default {
    // 通过store.commit('方法名'，附加参数)调用  
    //创建方法 increAdd，第一个参数：接收state状态属性,第二个参数之后，是组件中调用该方法时，传递的参数
    increAdd(state,a){
    //  state.count += a;
    //  或者
       this.state.count += a;
    },
    reduce(state,n=1){//参数n默认值为1
      state.count -= n;
    }
  }