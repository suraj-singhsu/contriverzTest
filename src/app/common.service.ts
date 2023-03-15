import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private toastController: ToastController
  ) { }

  getProducts(){
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Work Complete");
        resolve(this.products);
      }, 1000);
    });
    return promise;
  }

  async presentToast(msg : any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  products : any = [
    {
      "id": 1,
      "title": "iPhone 9",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "date": "2023-01-01T01:00:21",
    },
    {
      "id": 2,
      "title": "iPhone X",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "date": "2023-01-02T02:00:21",
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "date": "2023-01-03T03:00:21",
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "date": "2023-01-04T04:00:21",
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "date": "2023-01-05T05:00:21",
    },
    {
      "id": 6,
      "title": "MacBook Pro",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
      "date": "2023-01-06T06:00:21",
    },
    {
      "id": 7,
      "title": "Samsung Galaxy Book",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      "date": "2023-01-07T07:00:21",
    },
    {
      "id": 8,
      "title": "Microsoft Surface Laptop 4",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      "date": "2023-01-08T08:00:21",
    },
    {
      "id": 9,
      "title": "Infinix INBOOK",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      "date": "2023-01-09T09:00:21",
    },
    {
      "id": 10,
      "title": "HP Pavilion 15-DK1056WM",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      "date": "2023-01-10T10:00:21",
    },
    {
      "id": 11,
      "title": "perfume Oil",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      "date": "2023-01-11T11:00:21",
    },
    {
      "id": 12,
      "title": "Brown Perfume",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
      "date": "2023-01-12T12:00:21",
    },
    {
      "id": 13,
      "title": "Fog Scent Xpressio Perfume",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp",
      "date": "2023-01-13T13:00:21",
    },
    {
      "id": 14,
      "title": "Non-Alcoholic Concentrated Perfume Oil",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      "date": "2023-01-14T14:00:21",
    },
    {
      "id": 15,
      "title": "Eau De Perfume Spray",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      "date": "2023-01-15T15:00:21",
    },
    {
      "id": 16,
      "title": "Hyaluronic Acid Serum",
      "category": "skincare",
      "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
      "date": "2023-01-16T16:00:21",
    },
    {
      "id": 17,
      "title": "Tree Oil 30ml",
      "category": "skincare",
      "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
      "date": "2023-01-17T17:00:21",
    },
    {
      "id": 18,
      "title": "Oil Free Moisturizer 100ml",
      "category": "skincare",
      "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
      "date": "2023-01-18T18:00:21",
      
    },
    {
      "id": 19,
      "title": "Skin Beauty Serum.",
      "category": "skincare",
      "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
      "date": "2023-01-19T19:00:21",
    },
    {
      "id": 20,
      "title": "Freckle Treatment Cream- 15gm",
      "category": "skincare",
      "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
      "date": "2023-01-20T20:00:21",
    }];
}
