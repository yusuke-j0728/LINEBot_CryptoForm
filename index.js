var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var username = $('input[name="username"]').val();
        var email = $('input[name="email"]').val();
        //var mes_date = $('textarea[name="end_time"]').val();
        var btc = $('input[name="btc"]').val();
        var eth = $('input[name="eth"]').val();
        var xrp = $('input[name="xrp"]').val();
        var xlm = $('input[name="xlm"]').val();
        var api_key = $('input[name="api_key"]').val();
        var api_secret = $('input[name="api_secret"]').val();
        var frequency = $('input[name="frequency"]:checked').val();
        var msg = `${key}\nお名前：${username}\nEmail：${email}\nBTC積立額:${btc}\nETH積立額:${eth}\nXRP積立額:${xrp}\nXLM積立額:${xlm}\nAPI_KEY:${api_key}\nAPI_SECRET:${api_secret}\n積立タイミング：${frequency}`;
        sendText(msg, plan);

        return false;
    });
});
