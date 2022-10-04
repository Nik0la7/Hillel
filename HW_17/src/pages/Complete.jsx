import React, { Component } from 'react'

class Complete extends Component {
    constructor(props){
        super(props)
        this.delElem = this.delElem.bind(this)
    }
    delElem(event){
        this.props.clearTask(event.target.id, event.target.dataset.type)
    }
    render(){
        return (
            <div className="wrapper">
                <h1>Complete</h1>
                <ul className="list-group">
                {
                    this.props.list.map((item) => {
                        return (
                            <li className="list-group-item list-group-item-info"   key={item.id}>
                                <div className="itemLi">
                                    <div className="item">
                                        <span>{ item.name } </span>
                                    </div>
                                    <div className="buttons" id={item.id}>
                                        <button 
                                            id={item.id} 
                                            data-type="complete" 
                                            onClick={this.delElem}
                                        >
                                            DELETE
                                        </button> 
                                    </div>
                                </div>
                            </li>
                        )
                    })  
                }

            </ul>

            </div>
        
        )
    }

}

export default Complete