import { ProductService } from './../shard/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel:FormGroup;

  categories:string[];

  postiveNumberValidator(control:FormControl):any {
    if(!control.value){
      return null
    }
    let price = parseInt(control.value);

    if(price > 0){
      return null;
    }else{
      //console.log(price);
      return {postiveNumber:"价格不能小于零"};
    }
  }

  constructor(private productService:ProductService) {
    let fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['',Validators.minLength(3)],
      price: [null,this.postiveNumberValidator],
      category: ['-1']
    });
   }

  ngOnInit() {
    this.categories = this.productService.getAllCatgories();
  }

  onSearch(){
    
    if(this.formModel.valid){
      console.log(this.formModel.value);
    }
  }

}
