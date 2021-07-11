export interface IMessage {
    authorName: string,
    authorId: string,
    content: string,
    timestamp: number
}
export interface IModifiedMessage extends IMessage {
    authorUrl: string
}
