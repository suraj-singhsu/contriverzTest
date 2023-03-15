import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CommonService } from '../common.service';
import { FormControl, FormGroup } from '@angular/forms';
import {Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';
import { CustomPipe } from "../pipes/custom.pipe";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  searchForm = new FormGroup({
    search_keyword: new FormControl(''),
  });
  products : any = [];
  // search_keyword : string = '';
  constructor(
    public commonService: CommonService,
    private alertController: AlertController
  ) {

  }

  ionViewWillEnter(){
    this.commonService.getProducts().then((res : any) => {
      console.log("res:", res);  
      res.forEach((element : any) => {
        element['is_match'] = true;
      });
      this.products = res;    
      console.log("products:", this.products);
    });
  }

  search_products(formData : any){
    // console.log("formData:", formData);
    console.log("search_keyword:", formData.search_keyword);
    this.products.forEach((element : any) => {
      console.log("search_keyword:", formData.search_keyword);
      console.log("element:", element);
      if(formData.search_keyword != ''){
        let product_name = (element['title']).toLowerCase();
        let name_match = product_name.match(formData.search_keyword.toLowerCase());
        console.log("name_match:", name_match);
        if(name_match && name_match != null){
          element['is_match'] = true;
        }else{
          element['is_match'] = false;
        }
      }else{
        element['is_match'] = true;
      }
    }); 
  }

  async delete_confirmation(index : any) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      subHeader: "Are you sure want to delete?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          
          },
        },
        {
          text: 'Delete now!',
          role: 'confirm',
          handler: () => {
            // this.handlerMessage = 'Alert confirmed';
            this.products.splice(index, true);
          },
        },
      ],
    });
    await alert.present();
  }


  async edit_product(index : any){
    let item = this.products[index];
    console.log("item:", item);
    const alert = await this.alertController.create({
      header: 'Update product',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        
        },
      },
      {
        text: 'Update now!',
        role: 'confirm',
        handler: (res) => {
          console.log("red:", res);
          this.products[index].title = res[0];
          this.products[index].category = res[1];
          this.commonService.presentToast('Record updated successfully.');
        },
      }],
      inputs: [
        {
          placeholder: 'Product name',
          value : item.title,
        },
        {
          placeholder: 'Category',
          value : item.category,
        },
        
        
      ],
    });
    await alert.present();
  }
}
