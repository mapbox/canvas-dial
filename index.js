function Dial(element, options) {
    var d2r = Math.PI / 180;

    this.canvas = document.createElement('canvas');
    this.options = options;

    this.start = (Math.PI / 2) + d2r * this.options.gap;
    this.end = (Math.PI * 2.5) - d2r * this.options.gap;
    this.startAngle = this._lerp(
        this.end,
        this.start,
        this._unlerp(this.options.start));

    this.element = element;
    this.element.innerHTML = '';
    this.element.appendChild(this.canvas);

    this.canvas.width = this.options.diameter * 2;
    this.canvas.height = this.options.diameter * 2;
    this.canvas.style.width = this.options.diameter + 'px';
    this.canvas.style.height = this.options.diameter + 'px';

    this.context = this.canvas.getContext('2d');
}

Dial.prototype._lerp = function(a, b, t) {
    return (a * t) + (b * (1 - t));
};

Dial.prototype._unlerp = function(t) {
    var a = this.options.min, b = this.options.max;
    return (t - a) / (b - a);
};

Dial.prototype.clear = function() {
    this.canvas.width = this.canvas.width;
};

Dial.prototype.draw = function(value) {
    var d2r = Math.PI / 180;
    this.clear();
    this.context.strokeStyle = this.options.background;
    this.context.lineWidth = this.options.width;
    this.context.beginPath();
    this.context.arc(
        this.options.diameter,
        this.options.diameter,
        this.options.outer,
        this.start, this.end);
    this.context.stroke();

    var angleDiff = this._lerp(
        this.end,
        this.start,
        this._unlerp(value));

    this.context.strokeStyle = this.options.foreground;
    this.context.beginPath();
    this.context.arc(
        this.options.diameter,
        this.options.diameter,
        this.options.outer,
        this.startAngle < angleDiff ? this.startAngle : angleDiff,
        this.startAngle < angleDiff ? angleDiff : this.startAngle);
    this.context.stroke();
};

if (typeof module !== 'undefined') module.exports = Dial;
