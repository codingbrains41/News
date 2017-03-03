import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RedditServices} from '../../app/services/reddit.services';
import {RedditsPage} from '../reddits/reddits';

@Component({
	selector: 'settings',
	templateUrl: 'settings.html'
})
export class SettingsPage {
	
	category:any;
	limit:any;
	constructor(public navCtrl: NavController,private redditService:RedditServices) {
		this.getDefault();
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
		// this.category='sports';
		// this.limit=10;
	}
	setDefaults(){
		localStorage.setItem('category',this.category);
		localStorage.setItem('limit',this.limit);
		this.navCtrl.push(RedditsPage);
	}

}
