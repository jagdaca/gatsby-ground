const axios = require('axios')

exports.handler = function(event, context, callback) {
    // your server-side functionality
	
	const parsedBody = JSON.parse(event.body)
	console.log(parsedBody)
	axios({
		method: 'post',
		url: "https://requestbin.io/yn1x5eyn",
		data: { name: parsedBody.name }
	})
		.then(response => {
			callback(null, {
				statusCode: 200,
				body: 'Yay!',
			})
		})
		.catch(err => {
			console.log(err)
			callback(new Error('Something went wrong'))
		})
}