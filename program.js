document.writeln("Javascript: a beautiful language \
	buried under a steaming pile of good intentions and blunders \u{1F98B}.\n");

var a = {
	lala : [1,2],
	baba : "ahmed",
	pricesz: 22
};
for (i in a) 
	if (a.hasOwnProperty(i))
		console.log(i + "\t: " + a[i]);

var b = Object.create(a);
document.writeln("\n");

document.writeln(b.lala);
b.lala = 55;
document.writeln(b.lala);