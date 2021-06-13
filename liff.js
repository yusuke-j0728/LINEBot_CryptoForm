$(document).ready(function () {

    var liffId = "1656097351-aLQ7WAnm";
    initializeLiff(liffId);
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
          // start to use LIFF's api
          initializeApp();
        })
        .catch((err) => {
            console.log('LIFF Initialization failed ', err);
        });
}

function sendText(text) {
        sendMessages(text);
}

// LINEトーク画面上でメッセージ送信
function sendMessages(text) {
    // if (plan == 'undefined'){
    //     returne;
    // } else if (plan == '100円プラン'){
    //     var linkmessage = "リンクからお支払いを設定してください。\n https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-41E3830771397714GMCJ5GTI"
    // } else if (plan == '1,000円プラン'){
    //     var linkmessage = "リンクからお支払いを設定してください。\n https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-45W435992M807325LMCHYRRI"
    // } else if (plan == '10,000円プラン'){
    //     var linkmessage = "リンクからお支払いを設定してください。\n https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-2H011187SV385063BMCJ6QBY"
    // } else if (plan == 'その他'){
    //     var linkmessage = "運営より別途支払いリンク先を送付いたします。"
    // }
    
    liff.sendMessages([{
        'type': 'text',
        'text': "以下の内容でお申込みを受付けました。"
    },{
        'type': 'text',
        'text': text
    },
                       
                      // {
        //'type': 'text',
        //'text': linkmessage
    //},
                      
                      ]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}
