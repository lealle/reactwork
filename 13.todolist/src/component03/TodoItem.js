import './TodoItem.css'; // 1. CSS 파일 import


// const TodoItem = (props) => {
// const TodoItem = ({id, content, ...}) => {
const TodoItem = ({todo}, {onDelete}) => {
    return (
        <div className="TodoItem">
            
            <input type="checkbox" checked={todo.isDone}/>
            
            <span className="title">{todo.content}</span>
            <span className="date">{todo.date}</span>

            <button onClick={()=>{
                onDelete(todo.id);
                // let copy = [...todo];
                // copy.splice(todo.id,1);
                // setTodos(copy);
            }}>삭제</button>
            
        </div>
    );
}
export default TodoItem;