class GitHub{
    constructor() {
        this.client_id ="734d43764055afe9f4ef";
        this.client_secret="b5187e06403976073a6296dfa9df829c53b816b0";
        this.repos_count= 5;
        this.repos_sort="created: asc";
    }
    async getUser(user){
        const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}
        &client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}