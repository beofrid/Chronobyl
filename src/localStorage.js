
function saveClicked()
{
    var user = document.querySelector(".inputName");
    if(user.value == "")
    {
        console.log(user.value)
        return;   
    }
    console.log("user = " + user.value);
    localStorage.setItem("userId", user.value);
    user.value = "";
    returnToIndex();
    
}


function loadLocalStorage()
{
    var userId = localStorage.getItem("userId");

    if(userId == null)
    {
        alert("Empty");
    }
    else
    {
        alert(userId);
    
    }
    returnToIndex();
}


function clearLocalStorage()
{
    localStorage.clear();
    returnToIndex();
}

function returnToIndex()
{
    window.location.assign("../index.html");

}