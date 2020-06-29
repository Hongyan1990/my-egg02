const Service  = require('egg').Service;

class NewService extends Service {
    async list(page = 1) {
        const {serverUrl, pageSize} = this.config.news;
        const data = await this.ctx.curl(`${serverUrl}`, {
            data: {
                type: 'text',
                page: `${page }`,
                count: `${pageSize}`,
            },
            dataType: 'json',
        });
        return data.data.result.map(res => ({text: res.text, name: res.name, passtime: res.passtime}));
    }
}

module.exports = NewService