let myLeads = []
let oldLeads = []
//turn myLeads string into an array
//myLeads = JSON.parse("WWW.SCHOOL.COM")
//myLeads.push("www.ads.com")
//turn the array into a string again
//myLeads = JSON.stringify(myLeads)
//console.log(typeof myLeads)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
//localStorage.clear()

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads) 
    })
 
})

function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++){
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>`
    
    }

    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = [] 
    render(myLeads)
})
 

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    //save the myLeads array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
   
    //to verify taht it works:
    //console.log(localStorage.getItem("myLeads"))
})


 