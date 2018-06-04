//init github
const github= new GitHub;
//instantiate UI
const ui = new UI;
//search input
const searchUser = document.getElementById("searchUser");

//Search input event listener

searchUser.addEventListener("keyup", (e) => {
    //get input text
    const userText = e.target.value;

    if (userText!==""){
        //Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message==="Not Found"){
                //show alert

            } else {
                ui.showProfile(data.profile);
                
            } else {
                //clear profile

            }
        })
    }
})