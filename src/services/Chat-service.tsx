import {of} from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, catchError } from 'rxjs/operators'
import {BASE_URL_DEVELOP} from "../constants/constants";

interface IMessage {
    authorName: string,
    authorId: string,
    content: string,
    timestamp: number
}
interface IChat {
    id: string,
    title: string,
    message: IMessage,
    archived: boolean,
    participants: []
}
interface IAvatar {
    id: string,
    url: URL
}

export const chatsObservable = ajax.getJSON<IChat[]>(BASE_URL_DEVELOP + '/chats')
    .pipe(
        map((response) => response),
        catchError(error => of(error))
    )

export const avatarsObservable = ajax.getJSON<IAvatar[]>(BASE_URL_DEVELOP + '/avatars')
    .pipe(
        map((response) => {
            const avatarsObj: {[id: string]: URL} = {}

            response.forEach((avatar: IAvatar) => {
                avatarsObj[avatar.id] = avatar.url;
            })
            return avatarsObj
        }),
        catchError(error => of(error))
    )
