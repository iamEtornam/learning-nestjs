import { Injectable } from "@nestjs/common";
import { Todo } from "./todo.interface";

@Injectable()
export class TodoService {
private storage:Todo[]=[]

findAll(): Todo[]{
    return this.storage;
}

create(todo:Todo):void {
    const currentMaxId = Math.max(...this.storage.map((t: Todo) => t.id));
    todo.id = currentMaxId + 1;
    this.storage.push(todo)
}

findOne(id:number):Todo{
    return this.storage.find((t:Todo) => t.id === id);
}
}