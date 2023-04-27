// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "@/config/nodemailer";

const handler = async (req, res) => {
  // console.log(req.body);

  if(req.method === "POST") {
    const data = req.body
    if(!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: 'Bad Request' })
    }

    try {
      await transporter.sendMail({
        // ...mailOptions,
        from: data.email,
        to: process.env.EMAIL_ADDRESS,
        subject: data.subject,
        text: "This is test string",
        html: "<h1>Test</h1>"
      })
      return res.status(200).json({ success: true })

    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message })
    }
  }
  return res.status(400).json({ message: 'Bad Request' })
}
export default handler
