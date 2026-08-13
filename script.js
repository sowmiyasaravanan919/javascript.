const input = document.getElementById("input")
const btn = document.getElementById("btn")
const list = document.getElementById("list") 
const scores = document.getElementById("scores") 

function clickbtn(){      
     if(input.value === ""){  
    alert("Enter the Task")
    progressbar.style.width="0%" 
    scores.textContent = "Completed: 0"  

    }  
    const li = document.createElement("li")
    li.innerHTML = input.value + "<button onclick='deletevalue(event)'>Delete</button>"
    list.append(li)
    input.value = ""    
    scores.textContent = "Completed: 1"  
    progressbar.style.transition="1s" 
    progressbar.style.background="green" 
    progressbar.style.width="100%" 
}

function deletevalue(event){ 
    scores.textContent = "Completed: 0"         
    event.target.parentElement.remove()
    
    
}
