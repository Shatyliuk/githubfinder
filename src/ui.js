export class Ui {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class='card mb-3'>
            <div class='card-body'>
                <div class='row'>
                    <div class='col-md-3'>
                        <img src=${user.avatar_url} alt='user_avatar' class='img-fluid mb-3'>
                        <a href='${user.html_url}' target='_blank' class='btn btn-primary btn-block'>Show Profile</a>
                    </div>
                    <div class='col-md-9'>
                        <div class="mb-2 pb-2 border-bottom">
                            <span class='badge badge-primary'>Public repositroies: ${user.public_repos}</span>
                            <span class='badge badge-primary'>Gists: ${user.public_gists}</span>
                            <span class='badge badge-primary'>Followers: ${user.followers}</span>
                            <span class='badge badge-primary'>Following: ${user.following}</span>
                        </div>
                        <ul class='list-group'>
                            <li class='list-group-item'>Company: ${user.company}</li>
                            <li class='list-group-item'>Blog: ${user.blog}</li>
                            <li class='list-group-item'>Location: ${user.location}</li>
                            <li class='list-group-item'>Created at: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <h3>Latest Repositories:</h3>
        <div id='repos'></div>
        `;
    }
    clearProfile() {
        this.profile.innerHTML = '';
    }
    showAlert(msg, cls) {
        const parent = document.querySelector('.searchContainer');

        if (parent.querySelector('.alert')) {
            this.clearAlert();
        } else {
            const container = document.createElement('div');

            container.className = cls;
            container.appendChild(document.createTextNode(msg));

            const search = document.getElementById('searchUser');
            parent.insertBefore(container, search);
        }
    }
    clearAlert() {
        const container = document.querySelector('.alert');

        setTimeout(() => {
            container.style.transition = '1s';
            container.style.opacity = 0;
            setTimeout(() => {
                container.remove();
            }, 1000);
        }, 1500)
    }
    showRepos(user) {
        let repos = document.getElementById('repos');
        let output = ``;

        user.forEach(element => {
            console.log(element);
            output += `
        <div class='card mb-3'>
            <div class='card-body'>
                <div class='row'>
                    <div class='col-md-6'>
                        <a href='${element.html_url}' target='_blank'>${element.name}</a>
                    </div>
                    <div class='col-md-6'>
                        <span class='badge badge-primary'>Stars: ${element.stargazers_count}</span>
                        <span class='badge badge-primary'>Following: ${element.watchers_count}</span>
                        <span class='badge badge-primary'>Following: ${element.forks_count}</span>
                    </div>
                </div>
            </div>
        </div>
        `
        });

        repos.innerHTML = output;
    }
}