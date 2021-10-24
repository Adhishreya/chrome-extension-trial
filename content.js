var selectedText = "";
let elements = document.getElementsByTagName("p");

Array.from(elements).forEach(element => {
    element.addEventListener('click',()=>{
        
        selectedText = document.getSelection();
  
        var newNode = document.createElement("div");
        newNode.setAttribute(
            "style",
            "background-color: yellow; display: inline;"
         );     
        selectedText.getRangeAt(0).surroundContents(newNode);

        var optionsSelector = document.createElement("div");
        optionsSelector.id="options";

        var buttonCopy = document.createElement("button");
        buttonCopy.innerHTML="Copy";
        buttonCopy.addEventListener('click',()=>{
            navigator.clipboard.writeText(selectedText.toString());
            buttonCopy.innerHTML="Copied";
            optionsSelector.remove();
        });
        optionsSelector.appendChild(buttonCopy);

        var buttonTweet = document.createElement("button");
        var link = document.createElement("a");
        link.innerHTML="Tweet";
        buttonTweet.appendChild(link)
        buttonTweet.addEventListener('click',()=>{
           link.href= `https://twitter.com/intent/tweet?text=${selectedText.toString()}`;
        })
        optionsSelector.appendChild(buttonTweet);

        // var buttonClose = document.createElement("button");
        // buttonClose.innerHTML="X";
        // buttonClose.addEventListener('click',()=>{
        //     optionsSelector.remove();
        // })

        if(selectedText.toString().length>0)
        {
            element.parentNode.insertBefore(optionsSelector, element)
        }
    })
    
});
const tagsToRemove = ["img","a"];
tagsToRemove.forEach((e)=>{
    removeTags(e)
})
var color = ["#FBBF24","#F87171","#9CA3AF","#111827","#7F1D1D","#78350F","#34D399","#064E3B","#60A5FA","#1E3A8A"];
setInterval(()=>{
    var index = Number(((Math.random()*100)%10).toFixed(0));
    document.body.style.background = color[index]

},2000)


function removeTags(tags)
{
    let elements = document.getElementsByTagName(tags);
Array.from(elements).forEach(element => {
    element.remove()
    
});
}

