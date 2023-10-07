export default interface SMS {
    phoneNumber: string
    body: string
    when?: string

    deleteT: () => void
}