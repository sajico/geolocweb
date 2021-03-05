function test() {
    navigator.geolocation.getCurrentPosition(
        successCallback,
        function (e) {
            alert(e.message);
        },
        {
            "enableHighAccuracy": true,
            "timeout": 200,
            "maximumAge": 200
        });
}

function successCallback(position) {

    var geo_text = "";

    geo_text += position.coords.latitude + "," + position.coords.longitude + "<br>\n";
    geo_text += "緯度:" + position.coords.latitude + "<br>\n";
    geo_text += "経度:" + position.coords.longitude + "<br>\n";
    geo_text += "高度:" + position.coords.altitude + "<br>\n";
    geo_text += "位置精度:" + position.coords.accuracy + "<br>\n";
    geo_text += "高度精度:" + position.coords.altitudeAccuracy + "<br>\n";
    geo_text += "移動方向:" + position.coords.heading + "<br>\n";
    geo_text += "速度:" + position.coords.speed + "<br>\n";

    var date = new Date(position.timestamp);

    geo_text += "取得時刻:" + date.toLocaleString() + "<br>\n<hr>";

    document.getElementById('canvas').innerHTML = geo_text +
        document.getElementById('canvas').innerHTML;
}