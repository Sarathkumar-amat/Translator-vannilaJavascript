var btnCheck = document.querySelector("#btn-select");
var txt = document.querySelector("#txt-inp");
var opVal=document.querySelector("#output");
btnCheck.addEventListener("click",Handler)
var ServerUrl = "https://api.funtranslations.com/translate/yoda.json";
function Handler()
{
    //opVal.innerText="translate "+txt.value;
    //var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
    var textValue = txt.value;
    fetch(getTranslationUrl(textValue)).then(response=>response.json()).then(json=>{
        var Transtext=json.contents.translated;
        opVal.innerText=Transtext;
    });
    
};
function getTranslationUrl(text)
{  
    return ServerUrl+"?"+"text="+text
}
