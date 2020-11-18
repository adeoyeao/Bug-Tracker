const express = require("express")
const router = express.Router()
const mailjet = require ('node-mailjet')

mailjet.connect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY)

router.post("/bugticket", (req, res) => {
  const user = req.body.user
  const email = req.body.email
  const ticket = req.body.ticket

const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "alfred.adeoye@cantab.net",
        "Name": "Alfred"
      },
      "To": [
        {
          "Email": email,
          "Name": user
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "Bug Ticket Assignment",
      "HTMLPart": `<h3>${user}, you have been assigned the below, please login to Bug Tracker to review it status.</h3><br />${ticket}`
    }
  ]
})

request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })

})
