var personNum = 0
toastLog('开始执行')
var biaoshi = id("live_square_recommend_item_live_icon").untilFind() 

biaoshi.forEach(b => {
    if(b.boundsInParent().width()==178){

        // toastLog(b.bounds().left+10)

        // toastLog(b.bounds().top+10)

        click(b.bounds().left+10,b.bounds().top+10)

        sleep(1200)

        if(id("background_view_normal").exists()){//判断房间中是否有红包
            //获得直播间人数
            person = id("live_audience_count_text").untilFind()
            person.forEach(element => {
                if(element.text() != null){
                    personNum = element.text()
                    // toastLog(element.text())
                }
            });


            id("background_view_normal").findOne().click(); //点击红包控件
            
            var money = id("live_red_packet_coin_num_view").findOne().text() //获得金钱数

            if(id("count_down_view").exists()){
                var timerr = id("count_down_view").findOne().text() //获得剩余时间
            
            

                switch(timerr){
                    case '1分钟后' : closeHome(1) 
                        break
                    case '2分钟后' : closeHome(1) 
                        break
                    case '3分钟后' : closeHome(1) 
                        break
                    case '4分钟后' : closeHome(1) 
                        break
                    case '5分钟后' : closeHome(1)  
                        break
                    case '6分钟后' : closeHome(1)  
                        break
                    case '7分钟后' : closeHome(1)  
                        break
                    case '8分钟后' : closeHome(1)  
                        break
                    case '9分钟后' : closeHome(1)  
                        break
                    default : clickRed()
                        break
                }
            }else{
                clickRed()
            }
            
            

            
        }else{//没有则退出房间
            closeHome(2)
        }
     }
});


function closeHome(i){
    if(i==1){
        id("live_red_packet_close_view").findOne().click(); //退出红包界面
    }
    id("live_close").findOne().click() //可以执行-----离开当前房间
    if(id("exit_btn").exists()){
        id("exit_btn").findOne().click() //可以执行-----有时会出现的疑问窗口退出
        toastLog("存在执行")
    }
}


function clickRed(){
    toastLog('点啊')
    sleep(100)
    id("live_red_packet_pre_snatch_state_view").findOne().click()
    sleep(1000)
    closeHome(1)

}  