import generatePassword from "password-generator";
import Queue from "../../lib/Queue";

export default {
    async store(req, res){
        const { name, email } = req.body;
        const queueName = process.env.QUEUE_EMAIL_SENDER
        const user = {
            name,
            email,
            password: generatePassword(15, false)
        };
        
        await Queue.add(queueName, { user })
        return res.json(user)
    }
}