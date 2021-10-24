// alert("trying content extension");
let elements = document.getElementsByTagName("p");
// console.log(elements);
Array.from(elements).forEach(element => {
    // element.addEventListener('click',()=>{
    //     // console.log(element.textContent)
    //     console.log(document.getSelection().getRangeAt(0))
    //     element.style="background:grey"
    //     document.getSelection().getRangeAt(0).style="background:red"
       
    // })
    
});
const tagsToRemove = ["img","a"];
tagsToRemove.forEach((e)=>{
    removeTags(e)
})
var color = ["#FBBF24","#F87171","#9CA3AF","#111827","#7F1D1D","#78350F","#34D399","#064E3B","#60A5FA","#1E3A8A"];
setInterval(()=>{
    var index = Number(((Math.random()*100)%10).toFixed(0));
    document.body.style.background = color[index]
    console.log(color[index])

},2000)
console.log(document.getSelection().getRangeAt(0));


function removeTags(tags)
{
    let elements = document.getElementsByTagName(tags);
Array.from(elements).forEach(element => {
    element.remove()
    
});
}

