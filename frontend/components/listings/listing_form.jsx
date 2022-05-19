import React from "react";


class ListingForm extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p>IN THE {this.props.formType}FORM</p>
            </div>
        )
    }
}

export default ListingForm;