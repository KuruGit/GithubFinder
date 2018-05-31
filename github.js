class GitHub{
    constructor() {
        this.client_id ="734d43764055afe9f4ef";
        this.client_secret="b5187e06403976073a6296dfa9df829c53b816b0";
    }
    async getUser(user){
        const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}