import {useState} from "react";
import {Nav, NavItem} from "shards-react";
import { Button, Popover, PopoverBody, PopoverHeader } from "shards-react";

const navStyle = {
    'margin-left': '10px'
}

const HeaderItem = (props) => {
    const title = props.title || "";
    const contents = props.contents || "";
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
      <div>
        <Button id="popover-1" onClick={toggle}>
            {title}
        </Button>
        <Popover
          placement="bottom"
          open={open}
          toggle={toggle}
          target="#popover-1"
        >
          <PopoverHeader>{title}</PopoverHeader>
          <PopoverBody>
              {contents}
          </PopoverBody>
        </Popover>
      </div>
    );
}


export const TopPortion = (props) => {
    return (
        <Nav>
            <NavItem>
                <HeaderItem title={"about"} contents={"this site was created to evaluate Linus Savings"}/>
            </NavItem>
            <NavItem style={navStyle}>
                <HeaderItem title={"legal"} contents={"information provided herein is not investment advice and is not intended as a recommendation to buy, sell, or hold any security."}/>
            </NavItem>
        </Nav>
    );
}
