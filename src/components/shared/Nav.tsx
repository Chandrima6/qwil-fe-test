import Button from "../../UI/Button";
import React, {MouseEvent, Fragment} from "react";

type NavProps = {
    onClickNavItem: (navItemName: string) => void,
    'data-testid': string
}

const Nav: React.FC<NavProps> = (props) => {
    const navItemClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        props.onClickNavItem(event.currentTarget.name)
    }
    return <Fragment>
        <Button type="button" name="toggle-chat-list" clickHandler={navItemClickHandler} data-testid={props['data-testid']}>Toggle</Button>
    </Fragment>
}
export default Nav

// TODO: add icon which toggles the chat list for now adding button

