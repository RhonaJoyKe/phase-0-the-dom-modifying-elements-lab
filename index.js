// Write your code here!
const trial= document.getElementById('main')
trial.remove()
const newHeader=document.createElement("h1")
newHeader.setAttribute('id','victory')
// newHeader.textContent='"YOUR-NAME is the champion'
newHeader.innerHTML="YOUR-NAME is the champion"