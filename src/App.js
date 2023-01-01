import './App.css';
import {useState} from 'react';
import Details from './components/counterComponent';
function App() {
  let day = new Date();
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  day = weekday[day.getDay()];
  let [todoList,setTodoList] = useState([]);
  let [todo,setTodo] = useState('');
  let [deleteTodo,setDeleteTodo] = useState([]);
  let [state,setState] = useState(false);
  let text1 = 'View Details';
  let text2 = 'Hide Details';
  return (
    <div>
      {state ? <Details todoList={todoList} deleteTodo={deleteTodo}/>:null}
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => {setTodo(e.target.value);}} type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={() => {setTodoList([...todoList,{id:Date.now(),text:todo,status:false}]);setTodo('');}}></i>
      </div>
    {
      todoList.map((eachTodo,index)=> {
      return(
        <div className="todos" key={index}>
          <div className="todo">
            <div className="left">
              <input type="checkbox" onChange={(e) => {
                setTodoList(todoList.filter((listValue)=> {
                  if(listValue.id === eachTodo.id) {
                    listValue.status = e.target.checked;
                  }
                  return listValue;
                }))
              }} value={eachTodo.status} name="" id="" />
                <p>{eachTodo.status ? <del>{eachTodo.text} </del> :eachTodo.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times" onClick={(e) =>{
                  setTodoList(todoList.filter((val) => {
                  if(val.id === eachTodo.id) {
                    setDeleteTodo([...deleteTodo,val]);
                    return null;
                  } else
                      return val;
                }))
              }
              }></i>
            </div>
          </div>
        </div>
        );
      })
    }
    <button class="details" onClick={()=>{setState(!state)}}>{state? text2 : text1}</button>
    </div>
    </div>
  );
}

export default App;
