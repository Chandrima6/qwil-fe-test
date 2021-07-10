import Button from "../UI/Button";
import React, {MouseEvent, Fragment} from "react";

type NavProps = {
    onClickNavItem: (navItemName: string) => void
}

const Nav: React.FC<NavProps> = (props) => {
    const navItemClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
        props.onClickNavItem(event.currentTarget.name)
    }
    return <Fragment>
        <Button type="button" name="toggle-chat-list" clickHandler={navItemClickHandler}>Toggle Chat List</Button>
    </Fragment>
}
export default Nav

// add icon inside card which toggles the chat list
// for now adding button

