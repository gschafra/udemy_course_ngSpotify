import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})

export class CarouselComponent {
    public myInterval: number = 5000;
    public noWrapSlides: boolean = false;
    @Input() public slides: Array<any> = [];
}