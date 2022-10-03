const nodemailer = require('nodemailer');

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
          host: 'smtp.mail.ru',
          port: 465,
          secure: true,
          auth: {
            user: 'igor-polnikov@mail.ru',
            pass: 'FRZwJXSj3JFF9dTDhqNQ',
          },
        })
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: '"Онлаин Магазин" <igor-polnikov@mail.ru>',
            to: 'igor-polnikov@mail.ru',
            subject: 'Активация аккаунта' + "https://mebel-tochka.herokuapp.com",
            text: '',
            html: `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
            `

        })
    };
};


module.exports = new MailService();