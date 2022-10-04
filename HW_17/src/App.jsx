import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Complete from './pages/Complete'
import Delete from './pages/Delete'
import Home from './pages/Home'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      completed: [],
      deleted: []
    }
    this.createTask = this.createTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.clearTask = this.clearTask.bind(this)
  }
  createTask(name){
    const task = {
      id: Date.now(),
      name
    }
    this.setState({
      list: [...this.state.list, task]
    })
  }

  clearTask(id, btn){
    const del = this.state.deleted.filter(item => item.id !== +id);
    const compl = this.state.completed.filter(item => item.id !== +id);

    if (btn === 'complete') {
      this.setState({
        completed: compl
      })

    } else {
      this.setState({
      deleted: del
        
      })
    }
  }

  deleteTask(element, btn){
      this.setState((state) => {
        const deleted = [...state.deleted, element]
        const completed = [...state.completed, element]
        const list = state.list.filter(item => item.id !== element.id)
        if (btn === 'complete') {
          return {
            completed,
            list
          }
        } else {
          return {
            deleted,
            list
          }
        }
      });
  }

  render () {
    return (
      <div>
        <Router>
                <div className='Navigation'>
                    <div className="card text-center">
                        <div className="card-header">
                            <ul className="nav nav-pills card-header-pills">
                                <li className="nav-item" onClick={this.pathName}>
                                    <Link to={'/'}> Home </Link>
                                </li>
                                <li className="nav-item" onClick={this.pathName}>
                                    <Link to={'/complete'}> Complete </Link>
                                </li>
                                <li className="nav-item" onClick={this.pathName}>
                                    <Link to={'/delete'}> Delete </Link>
                                </li>
                            </ul>
                        </div>
                        <Routes>
                            <Route path='/' element={<Home 
                                                      createTask={this.createTask} 
                                                      delTask={this.deleteTask} 
                                                      compTask={this.completeTask} 
                                                      list={this.state.list}
                                                    />}
                            />
                            <Route path="/Complete" element={<Complete  
                                                              list={this.state.completed} 
                                                              clearTask={this.clearTask}
                                                              />} 
                            />
                            <Route path='/Delete' element={<Delete
                                                             list={this.state.deleted} 
                                                             clearTask={this.clearTask}  
                                                             />} 
                            />
                        </Routes>
                    </div>
                </div>
            </Router>
      </div>
    );
  }
}

export default App;


