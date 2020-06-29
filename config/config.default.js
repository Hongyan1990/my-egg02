exports.keys = '20200612';

exports.view = {
	defaultViewEngine: 'nunjucks',
	mapping: {
		'.tp1': 'nunjucks'
	}
}

exports.news = {
	serverUrl: 'https://api.apiopen.top/getJoke',
	pageSize: 5
}

exports.middleware = [
	'robot'
]

exports.robot = {
	ua: [
		/Baiduspider/i
	]
}



