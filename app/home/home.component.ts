import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    templateUrl:'app/home.template.html'
})
export class HomeComponent{
    constructor(private router:Router){}
}