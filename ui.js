class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    showProfile(user) {
        this.profile.innerHTML =
            `
        <div class="card card-body mb-3">
        <div class=""row>
        <div class="col-md-3">
         <img class="img-fluid mb-2" src="${user.avatar_url}">
         <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mt-1 mb-3">View Profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
        <span class="badge badge-secondary">Public Gists:${user.public_gists}</span>
        <span class="badge badge-success">Public Followers:${user.followers}</span>
        <span class="badge badge-info">Public Repos:${user.following}</span>
        <br><br>
         <ul class="list-group">
        <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website or Blog: ${user.blog}</li>
         <li class="list-group-item">Location: ${user.location}</li>
         <li class="list-group-item">Member since: ${user.created_at}</li>
        </ul>
        </div>
        </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;





    }

    showAlert(message, className) {
        //clear remaining alerts
        this.clearAlert();
        //create div
        const div = document.createElement("div");
        div.className = className;
        //Add Text
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector(".searchContainer");
        //Get searchbox
        const search = document.querySelector(".search");
        //Insert alert
        container.insertBefore(div, search);

        //Timeout after 3 secs
        setTimeout(() => {
            this.clearAlert();
        }, 3000);

    }

    clearAlert() {
        const currentAlert = document.querySelector(".alert");
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = "";
    }

}