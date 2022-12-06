import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/interfaces/items';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  categoryItems!: Array<Items>
  role!: boolean
  textSearch: string=''

  constructor(private userService: UserService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params => {
      this.userService.getCategoryById(+params['id']).subscribe({
        next: (cItems) => this.categoryItems = cItems
      })
    }))
  }

  addToCart(event: any){
    console.log('hello')
    this.role = JSON.parse(localStorage.getItem("role")||"")
    if (!this.role) {
      alert('Please Login first')
    }
    console.log(this.role)
    let target: any = event.target || event.srcElement || event.currentTarget
    let idAttr = target.attributes.id

  }


}
