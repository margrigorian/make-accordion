import React from "react";
import style from "./Toggle.module.css";

class Toggle extends React.Component{
    constructor(props) {
        super(props);

        this.state = {isOpen: false};

        this.makeToggle = this.makeToggle.bind(this);
    }
            
    makeToggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <div>
                <button className={style.accordion} onClick={this.makeToggle}>
                        {this.props.header}
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