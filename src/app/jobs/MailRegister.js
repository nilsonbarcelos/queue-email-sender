import Mail from "../../lib/Mail";


export default {
    key: process.env.QUEUE_EMAIL_SENDER,
    options:{
        delay: 5000,
        priority: 3
    },
    async handle({ data }){
        const { user } = data;

        await Mail.sendMail({
            from: 'Company <company@email.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Adding user',
            html: `Hello ${user.name} welcome`
        })
    }
}

