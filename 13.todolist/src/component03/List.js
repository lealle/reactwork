import { useState } from "react";
import TodoItem from "./TodoItem";
import "./List.css"; 

const List = ({todos}, {onDelete}) => {
    let [title, setTitle] = useState('');
    return (
        <div className="ListContainer"> 
            <h4>Todo List🎈✔</h4>

            <div className="search-bar">
                <input placeholder="검색어를 넣어주세요" onChange={(e)=>{
                    setTitle(e.target.value);
                }}  />
                <button>검색</button>
            </div>

            <hr />
{/* 
            <div className="list-wrapper">
                
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div> */}
    { 
        todos.map((todo,i) => {
            if(todo.content.includes(title)){

                return (
                    <div className="list-wrapper">
              <TodoItem todo={todo} onDelete={onDelete}/>
              {/* <TodoItem todo={todos[i]}/> */}
            </div>
                )
            }
        }) 
      }
            
        </div>
        
    );
}

export default List;