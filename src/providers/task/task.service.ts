import { TaskModel } from './../../models/task.model';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class TaskService {

  private storageName: string = "task"

  constructor(public storage: Storage) {
  }

  get(id: number): Promise<TaskModel> {
    return this.storage.get(`${this.storageName}.${id}`);
  }

  save(task: TaskModel): Promise<TaskModel> {
    return this.storage.set(`${this.storageName}.${task.id}`, task);
  }

  delete(id: number): Promise<boolean> {
    return this.storage.remove(`${this.storageName}.${id}`)
      .then(() => true);
  }

  getAll(): Promise<TaskModel[]> {
    let tasks: TaskModel[] = [];
    return this.storage.ready()
      .then(() => {
        return this.storage.forEach((task: TaskModel, key: string, iterationNumber: Number) => {
          if (key.indexOf(this.storageName) > -1 ) {
            tasks.push(task);
          }
        })
      })
      .then(() => tasks);
  }

  getTasksByDate(date: string): Promise<TaskModel[]> {
    let tasks: TaskModel[] = [];
    return this.storage.ready()
      .then(() => {
        return this.storage.forEach((task: TaskModel, key: string, iterationNumber: Number) => {
          if (key.indexOf(this.storageName) > -1 && task.date == date) {
            tasks.push(task);
          }
        })
      })
      .then(() => tasks);
  }

}
