
toastLog("执行了")
// id("background_view_normal").findOne().click();   //可以执行-----打开红包界面
// sleep(50)
// click(229,723)
// click(240,2271)//返回键
// while(true){
//     click(539,1300)
// }

// id("live_red_packet_close_view").findOne().click(); //可以执行---关闭红包界面
// id("live_red_packet_pre_snatch_state_view").findOne().click() //可以执行----点击红包控件

// var timerr = id("count_down_view").findOne().text() //可以执行----查看还有多少时间
//时间判断
// if(timerr == '6分钟后'){
//     toastLog(timerr) 
// }

// switch(timerr){
//     case '1分钟后' : toastLog(1) 
//         break
//     case '2分钟后' : toastLog(2) 
//         break
//     case '3分钟后' : toastLog(3) 
//         break
//     case '4分钟后' : toastLog(4) 
//         break
//     case '5分钟后' : toastLog(5) 
//         break
//     case '6分钟后' : toastLog(6) 
//         break
//     case '7分钟后' : toastLog(7) 
//         break
//     case '8分钟后' : toastLog(8) 
//         break
//     case '9分钟后' : toastLog(9) 
//         break
//     default : toastLog(timerr)
//         break
// }



// toastLog(id("live_red_packet_coin_num_view").findOne().text()) //可以执行---获得快币数量

//查看房建在线人数
// var personNum = id("live_audience_count_text").untilFind()
// personNum.forEach(element => {
//     if(element.text() != null){
//         toastLog(element.text())
//     }
// });

//退出房间代码块
// id("live_close").findOne().click() //可以执行-----离开当前房间
// if(id("exit_btn").exists()){
//     id("exit_btn").findOne().click() //可以执行-----有时会出现的疑问窗口退出
//     toastLog("存在执行")
// }


//选择房建进入
// var biaoshi = id("live_square_recommend_item_live_icon").untilFind() //红包房建标识控件
// biaoshi.forEach(b => {
//     if(b.boundsInParent().width()==178){

//         click(b.bounds().left+10,b.bounds().top+10)

//      }
//     // toastLog(b)
//     // toastLog(b.bounds())
// })

// var zhibojian = className("android.widget.RelativeLayout").findOne()
// toastLog(zhibojian)



