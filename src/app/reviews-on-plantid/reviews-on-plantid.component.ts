import { Component } from '@angular/core';
import { PlantReviewDTO } from '../plant-review-dto';
import { PlantReviewService } from '../plant-review.service';


@Component({
  selector: 'app-reviews-on-plantid',
  templateUrl: './reviews-on-plantid.component.html',
  styleUrls: ['./reviews-on-plantid.component.css']
})
export class ReviewsOnPlantidComponent {
  allReviews:PlantReviewDTO [] = [];
  constructor(private reviewService:PlantReviewService){}


  getReviews(orderId:string){
    this.reviewService.getReviewDetailsbyOrderId(parseInt(orderId)).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allReviews = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }
  getReviewsByStarRating(starRating:string){
    this.reviewService.getReviewDetailsbystarRating(parseInt(starRating)).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allReviews = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

}
