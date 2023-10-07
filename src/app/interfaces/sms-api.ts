import { Auth } from "./account";
import SMS from "./sms";

export default interface SmsApi {
    auth: Auth
    sms: SMS
    when?: string
}