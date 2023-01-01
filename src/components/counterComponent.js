import React from "react";
function ViewDetails(props) {
    let todoList = props.todoList;
    let deleteTodo = props.deleteTodo;
    return(
        <div style={{color:'white'}}>
            <h1>Finished Todos</h1>
            <ol>
             {todoList.map((val)=> {
                if(val.status) {
                    return(
                        <li>{val.text}</li>
                    );
                }
                return null;
             })}
             </ol>
             <h1>Pending Todos</h1>
            <ol>
             {todoList.map((val)=> {
                if(!val.status) {
                    return(
                        <li>{val.text}</li>
                    );
                }
                return null;
             })}
             </ol>
             <h1>Finished and Deleted Todos</h1>
            <ol>
             {deleteTodo.map((val)=> {
                if(val.status) {
                    return(
                        <li>{val.text}</li>
                    );
                }
                return null;
             })}
             </ol>
             <h1>Deleted Todos</h1>
            <ol>
             {deleteTodo.map((val)=> {
                if(!val.status) {
                    return(
                        <li>{val.text}</li>
                    );
                }
                return null;
             })}
             </ol>
        </div>
    );
}

export default ViewDetails;