function areaRectangulo(base,altura)
{
	this.base = base;
	this.altura = altura;
    this.area = function(){
    	return this.base * this.altura;
    }
	
}

var calculaArea = new areaRectangulo(12,3);

console.log(calculaArea.area());