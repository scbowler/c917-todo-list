import React, { Component } from 'react';
import { connect } from 'react-redux';
import todoData from '../helpers/dummy_data';
import { getAll } from '../actions';

class TodoList extends Component {
    componentDidMount(){
        this.props.getAll();
    }
    
    render(){
        const todoElements = this.props.allTodos.map((todoItem, index) => {
            return <li className="collection-item" key={index}>{todoItem.title}</li>;
        });

        return (
            <div>
                <ul className="collection">
                    {todoElements}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        allTodos: state.todo.all
    }
}

export default connect(mapStateToProps, { getAll: getAll })(TodoList);
