function validateForm(){
    let inputField = document.getElementById("inputField");
    let inputValue = inputField.value.trim();
    let errorMessage = document.getElementById("errorMessage");
    console.log("clicked");

    if (inputValue === ""){
        errorMessage.style.visibility = "visible";
         inputField.classList.add("shake");
      

       setTimeout(function(){
        inputField.classList.remove("shake");
        errorMessage.style.visibility = "hidden";

       },500)
    }
    else{
        alert("Valid Input provided")
    }
}