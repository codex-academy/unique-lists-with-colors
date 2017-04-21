var color = document.querySelector('.color');
var colorsTable = document.querySelector('.colorsTable');

var colors = document.querySelector('.colors');
var opacities = document.querySelector('.opacities');

var opacity = document.querySelector('.opacity');
var addColor = document.querySelector('.addColor');
var showColor = document.querySelector('.showColor');

function compileTemplate(targetElem){
    var elem = document.querySelector(targetElem);
    return Handlebars.compile(elem.innerHTML);
}

var colorsTableTemplate = compileTemplate('.colorsTableTemplate')
var colorsDropdownTemplate = compileTemplate('.colorsDropdownTemplate')
var opacityDropdownTemplate = compileTemplate('.opacityDropdownTemplate')

var colorList = [
    //{name : '', opacity : 0.8, rating : 0}
];

function uniqList(list, field){
    var uniqList = [];
    var fieldMap = {};
    list.forEach(function(color){
        if (fieldMap[color[field]] === undefined){
            uniqList.push(color);
            fieldMap[color[field]] = color;
        }
    });
    return uniqList;
}

addColor.addEventListener('click', function(){

    colorList.push({
        name : color.value,
        opacity : opacity.value
    });

    colorsTable.innerHTML = colorsTableTemplate({colors : colorList});

    colors.innerHTML = colorsDropdownTemplate({colorList : uniqList(colorList, 'name')});
    opacities.innerHTML = opacityDropdownTemplate({colorList : uniqList(colorList, 'opacity')});

});
