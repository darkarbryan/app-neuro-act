import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  @Input() componentToRender!: string;

  constructor(
    private route: ActivatedRoute, private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  showChildComponent(ruta:string){
    this.router.navigate([ruta], {relativeTo:this.route});
  }

}
