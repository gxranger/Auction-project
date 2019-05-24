import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products:Product[] = [
    new Product(1,"第一个商品",1.99,3.5,"第一个商品的描述",["电子产品","数码相机"]),
    new Product(2,"第二个商品",2.99,4.5,"第二个商品的描述",["书籍音像","书籍读物"]),
    new Product(3,"第三个商品",3.99,4.5,"第三个商品的描述",["食品生鲜","蔬菜瓜果"]),
    new Product(4,"第四个商品",4.99,2.5,"第四个商品的描述",["食品生鲜","粮油米面"]),
    new Product(5,"第五个商品",5.99,4.5,"第五个商品的描述",["书籍音像","音像制品"]),
    new Product(6,"第六个商品",6.99,1.5,"第六个商品的描述",["电子产品","智能手机"])
  ];

  private comments:Comment[] = [
    new Comment(1,1,'2019-04-01 14:45:12','张三',3,'东西一般般！'),
    new Comment(2,1,'2019-04-03 11:25:55','李四',5,'东西很棒！'),
    new Comment(3,1,'2019-04-05 09:52:32','赵二',2,'东西不行啊！'),
    new Comment(4,2,'2019-04-08 22:15:42','王五',4,'东西还不错！')
  ]

  constructor() { }

  getAllCatgories():string[] {
    return ["电子产品","书籍音像","食品生鲜"];
  }

  getProducts():Product[]{
    return this.products;
  }

  getProduct(id:number):Product{
    return this.products.find((product)=>product.id == id)
  }

  getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment:Comment)=>comment.productId == id)
  }

  
}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}

export class Comment {
  constructor(
    public id:number,
    public productId:number,
    public timestamp:string,
    public user:string,
    public rating:number,
    public content:string
  ){}
}