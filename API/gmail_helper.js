import { check_inbox, get_messages } from "gmail-tester"
import { resolve } from "path"

export const mailHelper = {

    async messageChecker(to) {
      const email = await check_inbox(
        resolve("resources/gmail_credentials.json"),
        resolve("resources/gmail_token.json"),
        {
          from: "info@slotoking.ua",
          to: to,
          subject: "Підтвердь свій Email",
          wait_time_sec: 8,       // Poll interval (in seconds)
          max_wait_time_sec: 60,   // Maximum poll interval (in seconds). If reached, return null, indicating the completion of the task().
          include_body: true
        }
      )


      return email[0].body.text
    },

  } 