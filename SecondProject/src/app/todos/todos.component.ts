import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos$: object;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getTodos().subscribe(
      (data) => {
        this.todos$ = data;
      }
    )
  }

}
