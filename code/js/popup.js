// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabID: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }

var xmlhttp; //ajax调用请求的函数，接受url和任务
function loadXMLDoc(url, cfunc) {
  if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
  else xmlhttp = new ActiveObject("Microsoft.XMLHTTP");
  xmlhttp.onreadystatechange = cfunc;
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function myFunction() {
  console.log(566);
  //一次具体的调用
  loadXMLDoc("/ieas2.1/xsxk/queryXsxkList", function () {
    console.log(xmlhttp.readyState);
    // console.log(xmlhttp.status);
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
      // console.log("hhh");
      document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
  });
}

document.getElementById("myDiv").addEventListener("click", myFunction());

console.log("2333");
