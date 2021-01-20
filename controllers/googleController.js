const axios = require("axios")

module.exports = {
    findAll: function(req,res) {
        const query = req.params
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(response => response.json())
        .then(res => console.log(res))
    }
}