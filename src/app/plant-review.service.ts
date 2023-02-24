import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlantReviewDTO } from './plant-review-dto';
import { PlantReview } from './plant-review';
@Injectable({
  providedIn: 'root'
})
export class PlantReviewService {
  
 
  plantArr:PlantReview[] = [];
  
  baseURL:string = 'http://localhost:6001';
  submitReviewEndPoint:string=this.baseURL+'/nurseryreview/add';
  ReviewByOrderIdEndPoint:string=this.baseURL+'/nurseryreview/review/orderId';
   allReviewEndPoint: string=this.baseURL+ '/nurseryreview/listOfReviews';
   ReviewBystarRatingEndPoint:string=this.baseURL+ '/nurseryreview/reviews';
  
 
  constructor(private http:HttpClient) {
    

   }




  //  getRatingsByPlantId(filterReviewbyrating:number):PlantReview[]
  //  {
  //   return[];
  //  }
   submitPlantReview(PlantReview: PlantReview):Observable<PlantReview[]> {

    console.log("inside method 1 : Review added" +PlantReview);
    
    return this.http.post<PlantReview[]>(`${this.submitReviewEndPoint}`,PlantReview);
    
  }
  getByPlantReview(PlantReview: PlantReview):Observable<PlantReview[]> {

    console.log("inside method 1 : Review added" +PlantReview);
    
    return this.http.post<PlantReview[]>(`${this.allReviewEndPoint}`,PlantReview);
    
  }
  getAllreviewsFromSpring():Observable<PlantReviewDTO[]> {
    console.log("inside service : "+this.allReviewEndPoint);
      return this.http.get<PlantReviewDTO[]>(`${this.allReviewEndPoint}`);
  }


  
  getReviewDetailsbyOrderId(OrderId:number):Observable<PlantReviewDTO[]>{
    console.log("inside method 1" +this.ReviewByOrderIdEndPoint);
    this.ReviewByOrderIdEndPoint= this.ReviewByOrderIdEndPoint+'/'+OrderId;
   

    return this.http.get<PlantReviewDTO[]>(`${this.ReviewByOrderIdEndPoint}`);
   }
   getReviewDetailsbystarRating(starRating:number):Observable<PlantReviewDTO[]>{
    console.log("inside method 1" +this.ReviewBystarRatingEndPoint);
    this.ReviewBystarRatingEndPoint= this.ReviewBystarRatingEndPoint+'/'+starRating;
   

    return this.http.get<PlantReviewDTO[]>(`${this.ReviewBystarRatingEndPoint}`);
   }
}
