import React, { Component } from 'react';

class ListItem extends Component {

    constructor (props) {
        super(props);
        this.state = {
            list: [],
            isEdit: false,
        }
        this.editBtn = this.editBtn.bind(this)
        this.deleteBtn = this.deleteBtn.bind(this)
        this.focusItem = React.createRef(null);
        this.newItem = this.newItem.bind(this)
    }

    editBtn(){
        
        this.setState({
            isEdit: true
        })
        setTimeout(() => {
            this.focusItem.current.focus();
        },100)
    }

    newItem(){

        this.props.item.name = this.focusItem.current.value
        this.setState({
            isEdit: false,
        })
    }

    deleteBtn(event){
        this.props.delTask(this.props.item, event.target.id)
    }
    render() {
    const { item } = this.props;
        return (
        <li className="list-group-item list-group-item-info"   
            id={item.id} 
        >
            <div className="itemLi">
                <div className="item">
                    { this.state.isEdit ? 
                        <input 
                                placeholder={ item.name } 
                                ref={this.focusItem} 
                                onBlur={this.newItem}
                        /> : 
                        <span>
                            { item.name }
                        </span>}
                </div>
                <div className="buttons" id={item.id}>
                    <button id='complete' onClick={this.deleteBtn}>COMPLETE</button> 
                    <button onClick={this.editBtn}>EDIT</button> 
                    <button id='delete' onClick={this.deleteBtn}>DELETE</button> 
                </div>
            </div>
        </li>
        )
    }
}


export default ListItem