## Studying Front-end

|**날짜**|**사용 언어 & 프레임워크**|**목표**|**학습 내용**|
|:-----:|:---:|:---:|:-------:|
|2022/04/04(월)|-|🚩 다양한 CSS 스타일 적용 방법 이론 공부|CSS import / CSS module / CSS-in-js의 장단점 및 특징 파악|
|2022/04/05(화)|**`React`**|🚩 다양한 CSS 스타일 적용 방법 활용하여 math-app 구현하기|**`Styled-Components`** 를 활용하여 math-app 구현(유지보수 및 확장 가능한 코드를 작성하는 방향으로)|




{
  "name": "SyncExtension",
  "version": "0.1",
  "manifest_version": 2,

  "description": "Storage Sync Extension",

  "permissions": [
    "storage",
    "tabs",
    "<all_urls>",
    "http://localhost:3000",
    "cookies"
  ],

  "browser_action": {
    "default_popup": "popup.html"
  }
}


// popup.js

document.addEventListener("DOMContentLoaded", function () {
  chrome.cookies.get(
    { url: "http://localhost:3000", name: "userToken" },
    function (cookie) {
      if (cookie) {
        console.log(cookie.value);
      } else {
        console.log("Can't get cookie! Check the name!");
      }
    }
  );
});

document.body.onload = function () {
  chrome.storage.sync.get("data", function (items) {
    if (!chrome.runtime.error) {
      console.log(items);
      document.getElementById("data").innerText = items.data;
    }
  });
};

document.getElementById("set").onclick = function () {
  var d = document.getElementById("text").value;
  chrome.storage.sync.set({ data: d }, function () {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
  window.close();
};
