// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transporter } from "@/config/nodemailer";

const handler = async (req, res) => {
    // console.log(req.body);

    if (req.method === "POST") {
        const data = req.body
        if (!data.name || !data.email || !data.subject || !data.message) {
            return res.status(400).json({ message: 'Fill all the details' })
        }
        // console.log(data.email);
        const htmlToSend = `<p><b>Project Name</b> - `+data.name+`</p>
                            <p><b>Project Type</b> - `+data.subject+`</p>
                            <p><b>Project Description</b> - `+data.message+`</p>
                            <p>Reply me at <a href="mailto:` + data.email + `">` + data.email + `</a></p>`
        try {
            await transporter.sendMail({
                from: data.name,
                to: process.env.EMAIL_ADDRESS,
                subject: data.subject,
                html: htmlToSend
            })
            return res.status(200).json({ success: true })

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message })
        }
    }
    return res.status(405).json({ message: 'Bad Request' })
}
export default handler
