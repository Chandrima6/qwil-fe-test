import {IconButton} from "../../UI/Button";
import React, {MouseEvent} from "react";
import {HiOutlineChatAlt2} from "react-icons/all";

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
            <HiOutlineChatAlt2 />
        </IconButton>
}
export default Nav

// TODO: add icon which toggles the chat list for now adding button

