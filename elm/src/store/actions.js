export default {
    // 异步操作
      // context 形参 接收store对象
       asyReduce(context){
         //调用
        context.commit("reduce",2);
       }
  }