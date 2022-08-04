import React from "react";
import style from "./Toggle.module.css";

class Toggle extends React.Component{
    constructor(props) {
        super(props);

        this.state = {isOpen: false};

        this.makeToggle = this.makeToggle.bind(this);
        
    }
    
    makeToggle() {
        this.setState({isOpen: !this.state.isOpen})
    };

    render() {
        return (
            <div>
                <button className={style.buttonAccordion} onClick={this.makeToggle}>
                        <p>{this.props.header}</p>
                        <p>{this.state.isOpen ? "-" : "+"}</p>
                </button>
                {
                    this.state.isOpen && (
                        <div className={style.panel}>
                            {this.props.content}
                        </div>
                    ) 

                }
            </div>
        )
    }
}

export default Toggle;