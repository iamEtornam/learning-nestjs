import { Body, Controller, Get, Logger, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Todo } from "./todo.interface";
import { TodoService } from "./todo.service";

@Controller('todo')
export class TodoController {
    private readonly logger = new Logger(TodoController.name)
constructor(private readonly todoService: TodoService){}

@Get()
findAll():Todo[]
{
    this.logger.log('Handling findAll() request...');
    return this.todoService.findAll();
}

@Post()
create(@Body() todo:Todo):void{
    this.logger.log('Handling create() request...');
    return this.todoService.create(todo);
}

@Get(':id')
findOne(@Param('id',ParseIntPipe) id: number):Todo{
    this.logger.log('Handling findOne() request...');
    return this.todoService.findOne(id)
}
}