export interface Auth {
    accountSid: string
    authToken: string
}

export default interface Account extends Auth{
    balance: number
}