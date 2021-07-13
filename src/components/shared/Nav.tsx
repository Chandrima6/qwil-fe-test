import {IconButton} from "../../UI/Button";
import React, {MouseEvent} from "react";
import {IoChatbubblesOutline} from "react-icons/io5";

type NavProps = {
    onClickNavItem: (navItemName: string) => void,
    'data-testid': string
}

const Nav: React.FC<NavProps> = (props) => {
    const navItemClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        props.onClickNavItem(event.currentTarget.name)
    }
    return <IconButton type="button"
                name="toggle-chat-list"
                clickHandler={navItemClickHandler}
                data-testid={props['data-testid']}>
            <IoChatbubblesOutline />
        </IconButton>
}
export default Nav

