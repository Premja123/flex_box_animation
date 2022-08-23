var box_ing ='first';
var a='null';
var first_table='flex_1';

function clicking(column_align){
    var checking=column_align;
    document.getElementById(box_ing).classList.remove('expand');
    document.getElementById(checking).classList.add('expand');
    a=checking;
    checking=box_ing;
    box_ing=a;
}

function clicking_2(item_alignment){
    var check=item_alignment;
    document.getElementById(first_table).classList.remove('expand');
    document.getElementById(check).classList.add('expand');
    a=check;
    check=first_table;
    first_table=a;
}