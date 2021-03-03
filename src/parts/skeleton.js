import React from "react";
import {Container, Row, Col} from "shards-react";

const isDev = false;

const withBorder = isDev ?  {
    'border-style': 'dotted'
} : {};

export const RootElement = (props) => {
        const topPortion = props.topPortion;
        const columnOne = props.columnOne;
        const columnTwo = props.columnTwo;
        const bottomPortion = props.bottomPortion;
        const titleBar = props.titleBar
        return (
            <Container className="dr-example-container">
                <Row style={withBorder}>
                    <Col>{topPortion || "top portion"}</Col>
                </Row>
                <Row>
                    <Col>{titleBar || "title bar"}</Col>
                </Row>
                <Row style={withBorder}>
                    <Col style={withBorder}>{columnOne || "colmn one"}</Col>
                    <Col style={withBorder}>{columnTwo || "col 2"}</Col>
                </Row>
                <hr/>
                <Row style={withBorder}>
                    <Col>{bottomPortion || "bot portion"}</Col>
                </Row>
            </Container>
        );
}
