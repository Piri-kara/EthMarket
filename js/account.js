//会員情報を表示する
var keyList = ["名前", "メールアドレス", "取引回数", "評価", "出品回数", "購入回数"];
var idxList = [0, 1, 2, 3, 4, 5];

function showAccount() {
  // テキストボックスから入力内容を取得する
  var address = document.getElementById("address").value;

  // 変数の取得にはcallを使用する
  contract.methods.accounts(address).call()
      // accountsにはアドレス毎に会員情報が記録されている。addressを引数とすることでそのaddressの会員情報を取得できる。
      .then(function(account) {
          // 会員情報をDOMに追加する
          for (var i = 0; i < idxList.length; i++) {
              var elem = document.createElement("p");
              elem.textContent = keyList[i] + " : " + account[idxList[i]];
              document.getElementById("account").appendChild(elem);
      }
  });
}
