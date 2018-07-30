import 'normalize.css';
import './sass/main.sass';
import { Ui } from './ui';
import { Github } from './github';

const searchInput = document.getElementById('searchUser');
const github = new Github();
const ui = new Ui();

searchInput.addEventListener('keyup', (event) => {
    event.preventDefault();

    let text = event.target.value;

    if (text.length > 0) {
        github.getUser(text)
            .then(user => {
                if (user.message === 'Not Found') {
                    ui.showAlert('Not found', 'alert alert-danger')
                } else {
                    ui.showProfile(user)
                }
            });
        github.getRepos(text)
            .then(repos => {
                ui.showRepos(repos);
            })
    } else {
        ui.clearProfile();
    }
});