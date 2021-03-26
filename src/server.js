/* eslint-disable import/no-anonymous-default-export */
import { createServer, Model } from 'miragejs';

export default function () {
    return createServer({
        models: {
            todo: Model
        },

        seeds(server) {
            server.create("todo", { text: "Walk the Dog", status: "completed"})
            server.create("todo", { text: "Clean my Room", status: "active"})
            server.create("todo", { text: "Evening Workout", status: "active"})
            server.create("todo", { text: "Jog around my city 3x", status: "completed"})
        },
        
        routes() {
            this.get("/api/todos", (schema) => {
                return schema.todos.all()
            })

            this.post("/api/todos", (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                return schema.todos.create(attrs);
            })

            this.put("/api/todos/:id", (schema, request) => {
                let id = request.params.id;
                let todo = schema.todos.find(id);
                
                if (todo.attrs.status === 'completed') {
                    todo.update({ status: 'active'})
                } else {
                    todo.update({ status: 'completed'})
                }
                return todo.attrs;
            })
        }
    })
}
