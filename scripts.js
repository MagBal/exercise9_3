var text ='Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCase = dinosaur.toUpperCase();
var textChartsAfter = text.replace('Velociraptor', dinosaurUpperCase);

/*console.log(textChartsAfter.length/2);*/

var partOftext = textChartsAfter.slice(0, 72);
console.log(partOftext);


