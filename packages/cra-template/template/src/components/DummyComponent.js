import React from 'react';

export default class DummyComponent extends React.Component{
    render(){
        return <div>
            
            <code>{this.props.data}</code>
        </div>
    }
}