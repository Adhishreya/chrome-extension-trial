// // var paras = document.getElementsByTagName("p");
// // paras.array.forEach(element => {
// //     element.addEventListener('click',(e)=>
// //     {
// //         console.log("clicked")
// //     })
// // });
// var i = document.getSelection();
// console.log( document.selection.createRange().text)
// // alert(12)
let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});