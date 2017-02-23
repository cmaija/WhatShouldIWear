/**
 * Created by claire.anderson on 2/23/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'pm-closet',
    templateUrl: 'app/closet/closet.component.html'
})

export class ClosetComponent {
    pageTitle: string = 'Your Closet';
    garments: any[] = [
        {
            "garmentId": 1,
            "garment" : "Summer Bib Shorts",
            "type": "Bibs",
            "temperature": "12-30",
            "conditions": "Sunny, Cloudy",
            "description": "Thin summer bib short",
            "imageUrl": "http://www.wigglestatic.com/product-media/5360102732/Castelli-Free-Aero-Race-Bib-Shorts-Lycra-Cycling-Shorts-Black-White-SS16-CS150031012.jpg?w=2000&h=2000&a=7"
        },
        {
            "garmentId": 2,
            "garment" : "Summer Jersey",
            "type": "Jersey",
            "temperature": "12-30",
            "conditions": "Sunny, Cloudy",
            "description": "Thin summer jersey",
            "imageUrl": "https://static.evanscycles.com/production/clothing/jerseys/product-image/969-638/castelli-entrata-2-short-sleeve-full-zip-jersey-anthracite-EV263113-7193-3.jpg"
        },
        {
            "garmentId": 3,
            "garment" : "Windbreaker vest",
            "type": "Jackets",
            "temperature": "10-20",
            "conditions": "Sunny, Cloudy, Windy",
            "description": "Windbreaker vest",
            "imageUrl": "https://static.evanscycles.com/production/clothing/gilets--vests/product-image/969-638/castelli-velo-windbreaker-vest-black-Black-EV217224-8500-2.jpg"
        }
    ];
}