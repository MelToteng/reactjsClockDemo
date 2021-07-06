import React from 'react';

class CurrentDate extends React.Component{

    render(){
        return(
            <h1>Date:{this.props.date.toLocaleDateString()}</h1>
        );
    }
}

export default CurrentDate;