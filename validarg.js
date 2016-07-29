function rgValido (rg) {
	var soma = 0;
	var rg = rg.split("");
	var comp = rg.length;
	var digito = new Array(comp);
	if(comp>=1) digito[0] = parseInt(rg[0]) * 2;
	if(comp>=2) digito[1] = parseInt(rg[1]) * 3;
	if(comp>=3) digito[2] = parseInt(rg[2]) * 4;
	if(comp>=4) digito[3] = parseInt(rg[3]) * 5;
	if(comp>=5) digito[4] = parseInt(rg[4]) * 6;
	if(comp>=6) digito[5] = parseInt(rg[5]) * 7;
	if(comp>=7) digito[6] = parseInt(rg[6]) * 8;
	if(comp>=8) digito[7] = parseInt(rg[7]) * 9;
	if(comp>=9) digito[8] = parseInt(rg[8]) * 100;
	if(comp>=1) soma += digito[0];
	if(comp>=2) soma += digito[1];
	if(comp>=3) soma += digito[2];
	if(comp>=4) soma += digito[3];
	if(comp>=5) soma += digito[4];
	if(comp>=6) soma += digito[5];
	if(comp>=7) soma += digito[6];
	if(comp>=8) soma += digito[7];
	if(comp>=9) soma += digito[8];
	var resto = soma % 11;
	if(resto!=0) return false;
	else return true;
}