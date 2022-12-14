import { UserService } from './../../services/user.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() categories: any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
