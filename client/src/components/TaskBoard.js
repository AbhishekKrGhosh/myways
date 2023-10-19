import React from "react";

function TaskBoard(){
    return(
        <div className="TaskBoard">
            <div className="taskHead">TaskBoard</div>
            <div className="taskBody">
                <div className="todo">To Do</div>
                <div className="inprogress">In Progress</div>
                <div className="done">Done</div>
            </div>
        </div>
)
}

export default TaskBoard