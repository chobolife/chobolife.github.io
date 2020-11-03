function sendmail() {
  var btn = document.getElementById("send-btn");
  fetch("https://dwcre12gt6.execute-api.ap-northeast-2.amazonaws.com/run/mail_chobolife", {
    method: "post",
    headers: {"Content-Type": "application/json; charset=utf-8"},
    body: JSON.stringify({
      txt: document.getElementById("send-input").value
    })
  }).then(function(res) {
    res.text().then(function(res) {
      var result = JSON.parse(res).body;
      btn.innerHTML = result ? '<span class="btn btn--success">전송되었습니다. 소중한 의견 감사합니다!</span>' : '<a href="javascript:recoverbtn()"><span class="btn btn--warning">내용을 입력해 주세요.</span></a>'
    })
  })
  btn.innerHTML = '<span class="btn btn--warning">처리중입니다...</span>';
}

function recoverbtn() {
  var btn = document.getElementById("send-btn");
  btn.innerHTML = '<a href="javascript:sendmail()"><span class="btn btn--info">전송하기</span></a>'
}
