import { IUser } from "./user"

export interface IBlog {
    title: string
    shortDesc: string
    description: string
    since: Date
    owner: IUser,
    tags: Array<string>
}