<template>
    <div id="record_top">
        <div id="common_head">
            <img @click="goBack()" src="../../src/components/imgs/back.png" alt="">
            <span id="common_use">历史红包</span>
        </div>
        <div class="youhui_head">
            <div class="youhui_three">
                <div class="img_one">
                    <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                </div>
                <div class="youhui_four">
                    <div class="youhui_five">
                        <span>￥</span>
                        <span>{{this.datas[0].amount}}</span>
                        <p>{{this.datas[0].description_map.sum_condition}}</p>
                    </div>
                    <div class="youhui_six">
                        <span>{{this.datas[0].name}}</span>
                        <img id="img_first" src="../../src/components/imgs/guoqi.png" alt="">
                        <p class="you_first">{{this.datas[0].description_map.validity_periods}}</p>
                        <p class="you_second">{{this.datas[0].description_map.phone}}</p>
                        
                    </div>
                </div>
            </div>

            <div class="record_wrap">
                <div class="youhui_seven">
                    <div class="img_two">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                    </div>
                    <div class="youhui_eight">
                        <div class="youhui_nine">
                            <span>￥</span>
                            <span>{{this.datas[1].amount}}</span>
                            <p>{{this.datas[1].description_map.sum_condition}}</p>
                        </div>
                        <div class="youhui_ten">
                            <span>{{this.datas[1].name}}</span>
                            <img id="img_second" src="../../src/components/imgs/guoqi.png" alt="">
                            <p class="you_third">{{this.datas[1].description_map.validity_periods}}</p>
                            <p class="you_forth">{{this.datas[1].description_map.phone}}</p>
                            
                        </div>
                    </div>                    
                </div>
                <div class="record_body">{{this.datas[1].limit_map.restaurant_flavor_ids}}</div>
            </div>

            <div class="record_wrap">
                <div class="youhui_seven">
                    <div class="img_two">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                    </div>
                    <div class="youhui_eight">
                        <div class="youhui_nine">
                            <span>￥</span>
                            <span>{{this.datas[2].amount}}</span>
                            <p>{{this.datas[2].description_map.sum_condition}}</p>
                        </div>
                        <div class="youhui_ten">
                            <span>{{this.datas[2].name}}</span>
                            <img id="img_third" src="../../src/components/imgs/guoqi.png" alt="">
                            <p class="you_third">{{this.datas[2].description_map.validity_periods}}</p>
                            <p class="you_forth">{{this.datas[2].description_map.phone}}</p>
                            
                        </div>
                    </div>                    
                </div>
                <div class="record_body">{{this.datas[2].limit_map.restaurant_flavor_ids}}</div>
            </div>

            <div class="record_wrap">
                <div class="youhui_seven">
                    <div class="img_two">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                    </div>
                    <div class="youhui_eight">
                        <div class="youhui_nine">
                            <span>￥</span>
                            <span>{{this.datas[3].amount}}</span>
                            <p>{{this.datas[3].description_map.sum_condition}}</p>
                        </div>
                        <div class="youhui_ten">
                            <span>{{this.datas[3].name}}</span>
                            <img id="img_forth" src="../../src/components/imgs/guoqi.png" alt="">
                            <p class="you_third">{{this.datas[3].description_map.validity_periods}}</p>
                            <p class="you_forth">{{this.datas[3].description_map.phone}}</p>
                            
                        </div>
                    </div>                    
                </div>
                <div class="record_body">{{this.datas[3].limit_map.restaurant_flavor_ids}}</div>
            </div>
            
            <div class="record_wrap">
                <div class="youhui_seven">
                    <div class="img_two">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                    </div>
                    <div class="youhui_eight">
                        <div class="youhui_nine">
                            <span>￥</span>
                            <span>{{this.datas[4].amount}}</span>
                            <p>{{this.datas[4].description_map.sum_condition}}</p>
                        </div>
                        <div class="youhui_ten">
                            <span>{{this.datas[4].name}}</span>
                            <img id="img_fiveth" src="../../src/components/imgs/guoqi.png" alt="">
                            <p class="you_third">{{this.datas[4].description_map.validity_periods}}</p>
                            <p class="you_forth">{{this.datas[4].description_map.phone}}</p>
                            
                        </div>
                    </div>                    
                </div>
                <div class="record_body">{{this.datas[4].limit_map.restaurant_flavor_ids}}</div>
            </div>

             <div class="youhui_three">
                <div class="img_one">
                    <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                </div>
                <div class="youhui_four">
                    <div class="youhui_five">
                        <span>￥</span>
                        <span>{{this.datas[5].amount}}</span>
                        <p>{{this.datas[5].description_map.sum_condition}}</p>
                    </div>
                    <div class="youhui_six">
                        <span>{{this.datas[5].name}}</span>
                        <img id="img_sixth" src="../../src/components/imgs/guoqi.png" alt="">
                        <p class="you_first">{{this.datas[5].description_map.validity_periods}}</p>
                        <p class="you_second">{{this.datas[5].description_map.phone}}</p>
                        
                    </div>
                </div>
            </div>

            <div class="youhui_three">
                <div class="img_one">
                    <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                </div>
                <div class="youhui_four">
                    <div class="youhui_five">
                        <span>￥</span>
                        <span>{{this.datas[6].amount}}</span>
                        <p>{{this.datas[6].description_map.sum_condition}}</p>
                    </div>
                    <div class="youhui_six">
                        <span>{{this.datas[6].name}}</span>
                        <img id="img_seventh" src="../../src/components/imgs/guoqi.png" alt="">
                        <p class="you_first">{{this.datas[6].description_map.validity_periods}}</p>
                        <p class="you_second">{{this.datas[6].description_map.phone}}</p>
                        
                    </div>
                </div>
            </div>

            <div class="record_wrap">
                <div class="youhui_seven">
                    <div class="img_two">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                    </div>
                    <div class="youhui_eight">
                        <div class="youhui_nine">
                            <span>￥</span>
                            <span>{{this.datas[7].amount}}</span>
                            <p>{{this.datas[7].description_map.sum_condition}}</p>
                        </div>
                        <div class="youhui_ten">
                            <span>{{this.datas[7].name}}</span>
                            <img id="img_eighth" src="../../src/components/imgs/guoqi.png" alt="">
                            <p class="you_third">{{this.datas[7].description_map.validity_periods}}</p>
                            <p class="you_forth">{{this.datas[7].description_map.phone}}</p>
                            
                        </div>
                    </div>                    
                </div>
                <div class="record_body">{{this.datas[7].limit_map.restaurant_flavor_ids}}</div>
            </div>

            <div class="record_wrap">
                <div class="youhui_seven">
                    <div class="img_two">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                    </div>
                    <div class="youhui_eight">
                        <div class="youhui_nine">
                            <span>￥</span>
                            <span>{{this.datas[8].amount}}</span>
                            <p>{{this.datas[8].description_map.sum_condition}}</p>
                        </div>
                        <div class="youhui_ten">
                            <span>{{this.datas[8].name}}</span>
                            <img id="img_nineth" src="../../src/components/imgs/guoqi.png" alt="">
                            <p class="you_third">{{this.datas[8].description_map.validity_periods}}</p>
                            <p class="you_forth">{{this.datas[8].description_map.phone}}</p>
                            
                        </div>
                    </div>                    
                </div>
                <div class="record_body">{{this.datas[8].limit_map.restaurant_flavor_ids}}</div>
            </div>

             <div class="youhui_three">
                <div class="img_one">
                    <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                </div>
                <div class="youhui_four">
                    <div class="youhui_five">
                        <span>￥</span>
                        <span>{{this.datas[9].amount}}</span>
                        <p>{{this.datas[9].description_map.sum_condition}}</p>
                    </div>
                    <div class="youhui_six">
                        <span>{{this.datas[9].name}}</span>
                        <img id="img_tenth" src="../../src/components/imgs/guoqi.png" alt="">
                        <p class="you_first">{{this.datas[9].description_map.validity_periods}}</p>
                        <p class="you_second">{{this.datas[9].description_map.phone}}</p>
                        
                    </div>
                </div>
            </div>

            <div class="record_wrap">
                <div class="youhui_seven">
                    <div class="img_two">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                    </div>
                    <div class="youhui_eight">
                        <div class="youhui_nine">
                            <span>￥</span>
                            <span>{{this.datas[10].amount}}</span>
                            <p>{{this.datas[10].description_map.sum_condition}}</p>
                        </div>
                        <div class="youhui_ten">
                            <span>{{this.datas[10].name}}</span>
                            <img id="img_eleth" src="../../src/components/imgs/guoqi.png" alt="">
                            <p class="you_third">{{this.datas[10].description_map.validity_periods}}</p>
                            <p class="you_forth">{{this.datas[10].description_map.phone}}</p>
                            
                        </div>
                    </div>                    
                </div>
                <div class="record_body">{{this.datas[10].limit_map.restaurant_flavor_ids}}</div>
            </div>

            <div class="record_wrap">
                <div class="youhui_seven">
                    <div class="img_two">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                    </div>
                    <div class="youhui_eight">
                        <div class="youhui_nine">
                            <span>￥</span>
                            <span>{{this.datas[11].amount}}</span>
                            <p>{{this.datas[11].description_map.sum_condition}}</p>
                        </div>
                        <div class="youhui_ten">
                            <span>{{this.datas[11].name}}</span>
                            <img id="img_tweth" src="../../src/components/imgs/guoqi.png" alt="">
                            <p class="you_third">{{this.datas[11].description_map.validity_periods}}</p>
                            <p class="you_forth">{{this.datas[11].description_map.phone}}</p>
                            
                        </div>
                    </div>                    
                </div>
                <div class="record_body">{{this.datas[11].limit_map.restaurant_flavor_ids}}</div>
            </div>

            <div class="record_wrap">
                <div class="youhui_seven">
                    <div class="img_two">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                    </div>
                    <div class="youhui_eight">
                        <div class="youhui_nine">
                            <span>￥</span>
                            <span>{{this.datas[12].amount}}</span>
                            <p>{{this.datas[12].description_map.sum_condition}}</p>
                        </div>
                        <div class="youhui_ten">
                            <span>{{this.datas[12].name}}</span>
                            <img id="img_treeth" src="../../src/components/imgs/guoqi.png" alt="">
                            <p class="you_third">{{this.datas[12].description_map.validity_periods}}</p>
                            <p class="you_forth">{{this.datas[12].description_map.phone}}</p>
                            
                        </div>
                    </div>                    
                </div>
                <div class="record_body">{{this.datas[12].limit_map.restaurant_flavor_ids}}</div>
            </div>

            

            <div class="youhui_three">
                <div class="img_one">
                    <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                <img src="../../src/components/imgs/guo.png" alt="">
                </div>
                <div class="youhui_four">
                    <div class="youhui_five">
                        <span>￥</span>
                        <span>{{this.datas[13].amount}}</span>
                        <p>{{this.datas[13].description_map.sum_condition}}</p>
                    </div>
                    <div class="youhui_six">
                        <span>{{this.datas[13].name}}</span>
                        <img id="img_fouth" src="../../src/components/imgs/guoqi.png" alt="">
                        <p class="you_first">{{this.datas[13].description_map.validity_periods}}</p>
                        <p class="you_second">{{this.datas[13].description_map.phone}}</p>
                        
                    </div>
                </div>
            </div>

            <div class="record_wrap">
                <div class="youhui_seven">
                    <div class="img_two">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                        <img src="../../src/components/imgs/guo.png" alt="">
                    </div>
                    <div class="youhui_eight">
                        <div class="youhui_nine">
                            <span>￥</span>
                            <span>{{this.datas[14].amount}}</span>
                            <p>{{this.datas[14].description_map.sum_condition}}</p>
                        </div>
                        <div class="youhui_ten">
                            <span>{{this.datas[14].name}}</span>
                            <img id="img_fiveth" src="../../src/components/imgs/guoqi.png" alt="">
                            <p class="you_third">{{this.datas[14].description_map.validity_periods}}</p>
                            <p class="you_forth">{{this.datas[14].description_map.phone}}</p>
                            
                        </div>
                    </div>                    
                </div>
                <div class="record_body">{{this.datas[14].limit_map.restaurant_flavor_ids}}</div>
            </div>




        </div>
    </div>
</template>
<script>
export default {
    name:'hongrecord',
    data(){
        return{
            datas:[]
        }
    },
    created(){
        this.getrecord();
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        getrecord(){
            const api = "https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0";
            this.$http({
                url:api,
                method:'get',
                withCredentials:true
            }).then(res => {//请求返回的数据res
                console.log("打印过期红包数据成功");
                console.log(res);
                this.datas = res.data;
                
            })
        }
    }
}
</script>
<style scoped>
#common_head{
    width: 3.75rem;
    height: 0.5rem;
    background-color: rgb(49, 144, 232);
    position: fixed;
    top: 0rem;
    left: 0rem;
    z-index: 2;
}
#common_head img{
    display: inline-block;
    width: 0.18rem;
    height: 0.23rem;
    margin-left: 0.2rem;
    margin-top: 0.13rem;
}
#common_use{
    color: white;
    font-size: 0.25rem;
    font-weight: bold;
    text-align: center;
    line-height: 0.5rem;
    margin-left: 1rem;
}
.youhui_head{
    /* border: 1px solid red; */
    margin: 0 auto;
    margin-top: 0.6rem;
    width: 93%;    
}
.youhui_three{
    /* border: 1px solid red; */
    border-radius: 10px;
    margin-top: 0.2rem;
    overflow: hidden;
    background-color: #fff;
}
.img_one img{
    width: 0.15rem;
    float: left;
}
.youhui_four{
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-around;
    margin-top: 0.2rem;
    margin-bottom: 0.15rem;
    margin-left: 0.1rem;
}

.youhui_five span:nth-child(1){
    color: rgb(145, 143, 143);
    font-weight: bold;
    font-size: 0.2rem;
}
.youhui_five span:nth-child(2){
    color: rgb(145, 143, 143);
    font-weight: 540;
    font-size: 0.5rem;
}
.youhui_five p{
    color: gray;
    
}
.youhui_six{
    border-left: 1px dashed rgb(131, 131, 131);
}
.youhui_six span:nth-child(1){
    font-size: 0.22rem;
    margin-left: 0.15rem;
}
.you_first{
    font-size: 0.15rem;
    margin-left: 0.15rem;
    /* border: 1px solid red; */
    margin-top: 0.05rem;
    margin-bottom: 0.05rem;
}
.you_second{
    font-size: 0.15rem;
    margin-left: 0.15rem;
    /* border: 1px solid red; */
}
#img_first{
    position: absolute;
    top: 0.67rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
}

.record_wrap{
    background-color: rgb(226, 225, 225);
    border-radius: 10px;
    height: 1.4rem;
    margin-top: 0.18rem;
    /* border: 1px solid red; */
}
.youhui_seven{
    /* border: 1px solid red; */
    margin-top: 0.1rem;
    overflow: hidden;
    background-color: #fff;
}
.img_two img{
    width: 0.15rem;
    float: left;
}
.youhui_eight{
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-around;
    margin-top: 0.2rem;
    margin-bottom: 0.15rem;
    margin-left: 0.1rem;
}
.youhui_nine span:nth-child(1){
    color: rgb(145, 143, 143);
    font-weight: bold;
    font-size: 0.2rem;
}
.youhui_nine span:nth-child(2){
    color: rgb(145, 143, 143);
    font-weight: 540;
    font-size: 0.5rem;
}
.youhui_nine p{
    color: gray;
    
}
.youhui_ten{
    border-left: 1px dashed rgb(131, 131, 131);
}
.youhui_ten span:nth-child(1){
    font-size: 0.22rem;
    margin-left: 0.15rem;
}
.youhui_ten span:nth-child(2){
    font-size: 0.22rem;
    margin-left: 0.6rem;
    color: rgb(255, 38, 0);
}
.you_third{
    font-size: 0.15rem;
    margin-left: 0.15rem;
    /* border: 1px solid red; */
    margin-top: 0.05rem;
    margin-bottom: 0.05rem;
}
.you_forth{
    font-size: 0.15rem;
    margin-left: 0.15rem;
    /* border: 1px solid red; */
}
.record_body{
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    margin-left: 0.1rem;
    color: rgb(116, 116, 116);
    font-size: 0.16rem;
}
#img_second{
    position: absolute;
    top: 1.85rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
}
#img_third{
    position: absolute;
    top: 3.45rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
}
#img_forth{
    position: absolute;
    top: 5.05rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
}
#img_fiveth{
    position: absolute;
    top: 6.6rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
}
#img_sixth{
    position: absolute;
    top: 8.2rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
}

#img_seventh{
    position: absolute;
    top: 9.45rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
}
#img_eighth{
    position: absolute;
    top: 10.6rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
} 
#img_nineth{
    position: absolute;
    top: 12.2rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
} 
#img_tenth{
    position: absolute;
    top: 13.8rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
} 
#img_eleth{
    position: absolute;
    top: 15rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
}
#img_tweth{
    position: absolute;
    top: 16.58rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
}
#img_treeth{
    position: absolute;
    top: 18.16rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
    /* border: 1px solid red; */
}
#img_fouth{
    position: absolute;
    top: 19.75rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
    /* border: 1px solid red; */
}
#img_fiveth{
    position: absolute;
    top: 20.96rem;
    right: 0.17rem;
    width: 0.8rem;
    height: 0.8rem;
    /* border: 1px solid red; */
}







</style>
