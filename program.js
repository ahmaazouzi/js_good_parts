document.writeln("Javascript: a beautiful language \
	buried under a steaming pile of good intentions and blunders \u{1F98B}.");

var a = {
	lala : [1,2],
	baba : "ahmed",
	pricesz: 22
};
for (i in a) 
	if (a.hasOwnProperty(i))
		console.log(i + "\t: " + a[i]);