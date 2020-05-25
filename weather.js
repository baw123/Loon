const weaapi = "https://www.tianqiapi.com/api/?version=v6&appid=35997835&appsecret=A3L1SWwc&cityid=101070701"

$httpClient.get(weaapi, function(error, response, data){
    if (error){
        console.log(error);
        $done();                   
    } else {
        var obj = JSON.parse(data);
        console.log(obj);
        var city = "所在城市： " + obj.city;
        var wea = "天气状况： " + obj.wea + "  当前" + obj.tem + "℃  " + obj.tem2 + "℃～" + obj.tem1 + "℃";
        var air = "当前风力： " + obj.win + obj.win_speed + "  风速" + obj.win_meter + "\n空气指数： " + obj.air + "  " + obj.air_level;
        let wmation = [city,wea,air];
        $notification.post(wmation[0], wmation[1], wmation[2]);
        $done();
    }
}
);


/*****************************************************************

修改自：https://meetagit.github.io/MeetaRules/Surge/Scripting/hourlyWeather.js

[Script]

# 在每天 8:00-20:00 整点预报天气
cron "0 8-20 * * *" script-path=https://raw.githubusercontent.com/baw123/Loon/master/weather.js

*****************************************************************/
