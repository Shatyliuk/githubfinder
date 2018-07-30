export class Github {
    constructor() {
        this.clientId = '89bb380308de3c38cdbf';
        this.clientSecret = 'f8edc33db4cf2247e6fd32758985f0293a2bff2b';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    getUser(user) {
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }
    getRepos(user) {
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }
}