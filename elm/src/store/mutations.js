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
    },
    getGeohash(state,v){
         state.geohash = v;
    },
    getName(state,v){
        state. getName = v;
    },
    getshopId(state,v1){
      state.id = v1;
    }
    ,
    //贺子涵
    getdanjia(state,a){
        state.danjia += a;
        state.dian ++;
        console.log(state.danjia)
    },
    datadanjia(state,a){
        state.danjia -= a;
        state.dian --;
    },
    caidan(state,obj){
        if (state.name.indexOf(obj)==-1) {
            state.name.push(obj);
        }else{
            return
        }
    },
    chuanS(state,a){
        state.sul = a;
        console.log(a)
    },
    // chuanS1(state,a){
    //     state.sul++;
    //     // console.log(a)
    // },
    // chuanS2(state,a){
    //     state.sul--;
    //     // console.log(a)
    // },
    Qingkong(state){
       for (let index = 0; index < state.name.length; index++) {
        state.name[index].__v = 0;
        
       }
        // state.name = [];
    },

    //我的部分
    // 通过store.commit('方法名'，附加参数)调用  
    // 公用数据名部分
    getInp(state,a){
      state.inputName = a;
  },
  
  // 用户图片部分
  userImg(state,a){
      state.userImages = a;
  },

  // 服务中心部分
  allServices(state,a){
      state.allService = a;
  },
  getUsers(state,a){
      state.userMsg = a;
      },
  // 经纬度的值
  allcitydatas(state,a){
      state.allcitydata=a;
  },
  chunname(state,a){
      state.cunname=a;
  },
  ciryid(state,a){
      state.cityID=a;
  },
  newadd(state,a){
      state.newname=a;
  },
  newphone(state,a){
      state.newphone=a;
  },
  allcityshu(state,a){
      state.allcityshu=a;
  },
  cunaddress(state,a){
      state.cunaddress=a;
  },
  honglength1(state,a){
      state.honglength=a;
  },
  honglength2(state,a){
      state.honglength=a;
  },
  giftamount(state,a){
    state.gift_amount=a;
    },
  }