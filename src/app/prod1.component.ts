import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
    templateUrl: './prod1.component.html',
    styleUrls: ['./prod1.component.css']
})
export class Prod1Component implements OnInit { 
    name: string;
    id: any;

    constructor(private route: ActivatedRoute, private router: Router){
    }

    ngOnInit(): void {
        this.route.paramMap.forEach((params: Params) => {
            //this.id = +params.get('id');
            this.name = params.get('name');
        });
    }

    goBack(): void {
// Optional Route Parameter Approach    
        this.router.navigate(['products', {name: this.name}]);

// Query Parameter Approach    
//     this.router.navigate(['employees'], {queryParams: {viewedid: this.id}});
            }
    }
