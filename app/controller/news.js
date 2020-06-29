const Controller = require('egg').Controller;

class NewsController extends Controller {
	async list() {
		const ctx = this.ctx;
		const {page} = ctx.query;
		const newsList = await ctx.service.news.list(page)
		await this.ctx.render('news/list.tp1', { list: newsList })
	}
}

module.exports = NewsController
