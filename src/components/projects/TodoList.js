import React from "react";

import TodoSummary from "./TodoSummary";

const TodoList = ({todos, actions, user, notifications}) => {
    return (
        <div className="w-100">
            {
                todos &&
                todos
                    .filter((todo) => todo.authorId === user)
                    .map((todo) => {
                        return (
                            <div key={todo.id}>
                                <TodoSummary todo={todo} actions={actions}/>
                            </div>
                        );
                    })
                // projects.map((project) => {
                //   return (
                //     <Link key={project.id} to={`/project/` + project.id}>
                //       <ProjectSummary project={project} />;
                //     </Link>
                //   );
                // })
            }
        </div>
    );
};

export default TodoList;
