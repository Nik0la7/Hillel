import React, { Component } from 'react';
import ListItem from './ListItem'


class List extends Component {

    render() {
        return (
            <ul className="list-group">
                {
                    this.props.listValue.map((item) => {
                        return <ListItem 
                                    key={item.id} 
                                    item={item} 
                                    delTask={this.props.delTask} 
                                    compTask={this.props.compTask} 
                                    editTask={this.props.compTask} 
                                />
                    })  
                }
            </ul>
        )
    }
}

export default List;