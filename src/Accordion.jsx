import React from "react";
import Toggle from "./Toggle";

class Accordion extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
                accoridion: [
                {
                    id: 1,
                    header: "Section 1",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                },
                {
                    id: 2,
                    header: "Section 2",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                },
                {
                    id: 3,
                    header: "Section 3",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                }
            ]
        };


    }

    render() {
        return (
            <div>
                {this.state.accoridion.map((item, i) => (
                    <Toggle key={`Section-${item.id}`} header={item.header} content={item.content}/>
                ))}
            </div>
        )
    }
}

export default Accordion;