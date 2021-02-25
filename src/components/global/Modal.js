import React from "react";

export default class Modal extends React.Component {
    constructor(props){
		super(props);
		this.onClose = this.onClose.bind(this);
	}
    onClose = e => {
        this.props.onClose(e);
    };
    
    render() {       
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal">
                <div className="card-modal">
                    <div className="card-content">
                        <p className ="card-name">{this.props.message}</p>
                    </div>
                    <div className="card-price">
                        <button  className="card-button modal-button"
                            onClick={this.onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>            
        );
    }
}