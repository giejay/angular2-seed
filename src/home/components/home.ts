import {Component} from 'angular2/core';
import {IMAGELAZYLOAD_DIRECTIVES} from 'ng2-image-lazy-load/ng2-image-lazy-load';

@Component({
  selector: 'home',
  moduleId: module.id,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  directives: [IMAGELAZYLOAD_DIRECTIVES]
})
export class HomeCmp {}
