import { Component, OnInit } from '@angular/core';
import { CreateProductDto, ProductModel, UpdateProductDto } from 'src/app/models/product.model';
import { ProductHttpService } from 'src/app/services/product.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   products: ProductModel[] = [];
   selectedProduct: UpdateProductDto = {title:'', price:0, description:''};

  constructor(private productHttpService:ProductHttpService) {
   this.editProduct();
  }
  
  ngOnInit(): void {
    this.getProducts();
    //this.getProduct(57);
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct(204);
  }

  getProducts(){
    const url = "https://api.escuelajs.co/api/v1/products";
    this.productHttpService.getAll().subscribe(
      response =>{
        this.products = response;
        console.log(response);
      }
    )
  }

  getProduct(id: ProductModel['id'] ){
    const url = "https://api.escuelajs.co/api/v1/products/id";
    return this.productHttpService.getOne(id).subscribe(
      response =>{
        console.log(response);
      }
    )
  }

  createProduct(product: CreateProductDto){
    this.productHttpService.store(product).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  updateProduct(id: ProductModel['id'], product: UpdateProductDto){
    this.productHttpService.update(id, product).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  editProduct(){
    this.selectedProduct = {title:'', price:0, description:''};
  }
  
  deleteProduct(id: ProductModel['id']){
    Swal.fire({
      title: 'Desea eliminar el producto',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Producto eliminado.',
          'success'
        )
        setTimeout(() => {
          this.productHttpService.destroy(id).subscribe(
            response =>{
              this.products = this.products.filter(product => product.id != id);
              console.log(response);
              window.location.href = "http://localhost:4200/dashboard/products";
            }
          );
        }, 3000);
      }
    })
  }
}


