class PoortRichting {
  x;
  y;
  richting;

  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.richting = 0;
  }

  show() {
    noStroke();               // geen rand
    fill(255, 255, 255);      // wit
    textSize(14);
    // print richting poort bovenin
    text(this.richting, this.x, this.y);
  }
}
