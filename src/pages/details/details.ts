import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
@Component({
	templateUrl: 'details.html'
})
export class DetailsPage {
	item:any;
	constructor(public navCtrl: NavController,public params:NavParams,public loadingCtrl: LoadingController) {
		this.loadingCtrl.create({
			content: 'Please wait...',
			duration: 3000,
			dismissOnPageChange: true
		}).present();
		this.item=params.get('item');

	}

}
