const { default: Axios } = require('axios');

// github API axios call
const api = { 
    async getUser(userResp) {
        try { let response = await Axios
        // default URL: https://api.github.com/users/rschm007
        .get(`https://api.github.com/users/${userResp.username}`);
        return response.data;
        } catch (err) {
            console.log(err);
        }
    }
};

module.exports = api;