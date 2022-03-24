import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-layout',
  templateUrl: './seat-layout.component.html',
  styleUrls: ['./seat-layout.component.css']
})
export class SeatLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle = true;
  but1() {
      this.toggle = !this.toggle;
    
  }

  button2=true;
  but2() {
    this.button2 = !this.button2;
    }

    button3=true;
  but3() {
    this.button3 = !this.button3;
    }

    button4=true;
  but4() {
    this.button4 = !this.button4;
    }

    button5=true;
  but5() {
    this.button5 = !this.button5;
    }

    button6=true;
  but6() {
    this.button6 = !this.button6;
    }
  
    button7=true;
  but7() {
    this.button7 = !this.button7;
    }

    button8=true;
  but8() {
    this.button8 = !this.button8;
    }

    button9=true;
  but9() {
    this.button9 = !this.button9;
    }

    button10=true;
  but10() {
    this.button10 = !this.button10;
    }

    button11=true;
  but11() {
    this.button11 = !this.button11;
    }

    button12=true;
    but12() {
      this.button12 = !this.button12;
      }
  
      button13=true;
    but13() {
      this.button13 = !this.button13;
      }
  
      button14=true;
    but14() {
      this.button14 = !this.button14;
      }
  
      button15=true;
    but15() {
      this.button15 = !this.button15;
      }
  
      button16=true;
    but16() {
      this.button16 = !this.button16;
      }

      button17=true;
  but17() {
    this.button17 = !this.button17;
    }

    button18=true;
  but18() {
    this.button18 = !this.button18;
    }

    button19=true;
  but19() {
    this.button19 = !this.button19;
    }

    button20=true;
  but20() {
    this.button20 = !this.button20;
    }

    button21=true;
  but21() {
    this.button21 = !this.button21;
    }

    button22=true;
    but22() {
      this.button22 = !this.button22;
      }
  
      button23=true;
    but23() {
      this.button23 = !this.button23;
      }
  
      button24=true;
    but24() {
      this.button24 = !this.button24;
      }
  
      button25=true;
    but25() {
      this.button25 = !this.button25;
      }
 

  setMyStyles() {
    let styles = {
      'color': this.color ='gold' ,
      'background-color':this.color='blue',
      'justify-content':'center',
      'disply':'flex'
  
    };

    
    return styles;
  }
color="blue"

}
