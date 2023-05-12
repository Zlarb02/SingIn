import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isFooterHidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFooter() {
    this.isFooterHidden = !this.isFooterHidden;
  }

  get arrowIconClasses() {
    return {
      'arrow-icon': true,
      'open': !this.isFooterHidden
    };
  }

  get footerClasses() {
    return {
      'footer': true,
      'hidden': this.isFooterHidden
    };
  }
}
