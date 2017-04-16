/**
 * 直线道路模型
 */
export class Road{
	public x: number;
	public y: number;
	public ex: number;
	public ey: number;
	public lw: number;
	public rx: number;
	public ry: number;
	public hl: number;
	public deg: number;
	constructor({ x, y, ex, ey, lw, rx, ry, hl, deg}){
		this.x = x;
		this.y = y;
		this.ex = ex;
		this.ey = ey;
		this.lw = lw;
		this.rx = rx;
		this.ry = ry;
		this.hl = hl;
		this.deg = deg;
	}
}