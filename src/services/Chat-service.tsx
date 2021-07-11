import {Observable, of} from 'rxjs'
import {ajax} from 'rxjs/ajax'
import { map, catchError } from 'rxjs/operators'
import {BASE_URL_DEVELOP} from "../constants/constants";
import {IChat} from "../models/chat.model";
import {IAvatar, IModifiedAvatar} from "../models/avatar.model";

export const chatsObservable = ajax.getJSON<IChat[]>(BASE_URL_DEVELOP + '/chats')
    .pipe(
        map((response) => {
            console.log(response)
            return response
        }),
        catchError(error => {
            return of(error)
        })
    )

export const avatarsObservable: Observable<IModifiedAvatar> = ajax.getJSON<IAvatar[]>(BASE_URL_DEVELOP + '/avatars')
    .pipe(
        map((response) => {
            const avatarsObj: IModifiedAvatar = {}

            response.forEach((avatar: IAvatar) => {
                avatarsObj[+avatar.id] = avatar.url;
            })
            return avatarsObj
        }),
        catchError(error => of(error))
    )
