import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
    public alerts: any = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ];
 
  public reset(): void {
    this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));
  }
  ngOnInit() {
    $(function(){
      $('.btn').click(()=>{
        $('p').html('welcome to ngx-bootstrap')
      })
    })
  }

}
