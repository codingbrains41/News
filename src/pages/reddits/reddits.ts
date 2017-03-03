import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {RedditServices} from '../../app/services/reddit.services';
import {DetailsPage} from '../details/details';

@Component({
	selector: 'reddits-page',
	templateUrl: 'reddits.html'
})
export class RedditsPage {
	items:any;
	category:any;
	limit:any;
	constructor(public navCtrl: NavController,private redditService:RedditServices,public loadingCtrl: LoadingController) {
		this.getDefault();
		this.loadingCtrl.create({
			content: 'Please wait...',
			duration: 3000,
			dismissOnPageChange: true
		}).present();
	}

	ngOnInit(){
		this.getPost(this.category,this.limit);
	}
	getDefault(){
		if(localStorage.getItem('category') !=null){
			this.category=localStorage.getItem('category');
		}
		else{
			this.category='sports';
		}
		if(localStorage.getItem('limit') !=null){
			this.limit=localStorage.getItem('limit');
		}
		else{
			this.limit=10;
		}
	}
	getPost(category,limit){
		this.redditService.getPost(category,limit).subscribe(response =>{
			this.items=response.data.children;
		})
	}
	viewItem(item){
		this.navCtrl.push(DetailsPage,{
			item:item
		});
	}
	changeCategory(){
		this.getPost(this.category,this.limit);
	}

}
