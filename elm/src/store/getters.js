export default {
    //筛选vip用户
    vipTodos(state){
       return state.todos.filter(todo=>todo.vip);
    }
 }