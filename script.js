// const masiv = [1,2,3,4,5,6,7,8,9,10];
// const filter = masiv.filter(filtrovka);
// function filtrovka (element){
//     return !(element%2);
// }
// console.log(filter);
// function reducing (total,value) {
//     return total+value;
// }
// const reduced = filter.reduce(reducing)
// console.log(reduced);
// kvadrat = (total,value) => total+Math.pow(value,2);
// const sqr = filter.reduce(kvadrat,0);
// console.log(sqr)

// var pi = 42;

// alerting =() => alert(pi);
// const now = new Date();
// const past = new Date(2001,6,5,0,0,0,0);
// var nowyear = now.getFullYear();
// var pastyear= past.getFullYear();
// minutes = () => document.getElementById("demo").innerHTML = (nowyear-pastyear)*365*24*60;

    myData = document.getElementById("table").rows
    console.log(myData)
    my_liste = []
    for (var i = 0; i < myData.length; i++) {
            el = myData[i].children
            my_el = []
            for (var j = 0; j < el.length; j++) {
                    my_el.push(el[j].innerText);
            }
            my_liste.push(my_el)
    }
console.log(my_liste);
names=[]
for (var i = 0; i < my_liste.length;i++) {
    names.push(my_liste[i][0])
}

names.sort()

surnames=[]
for (var i = 0; i < my_liste.length;i++) {
    surnames.push(my_liste[i][1])
}

surnames.sort()
ages=[]
for (var i = 0; i < my_liste.length;i++) {
    ages.push(my_liste[i][2])
}

ages.sort(function(a, b){return a - b});
console.log(ages)

ids=[]
for (var i = 0; i < my_liste.length;i++) {
    ids.push(my_liste[i][3])
}
ids.sort(function(a, b){return a - b});
console.log(ids)
x=0
function sorting(){
 if (x==0) 
 {
    var tdnames=document.querySelectorAll("td.names")
    for (var i = 0; i < tdnames.length;i++) {
        tdnames[i].innerText=names[i];
    }
    var tdsurnames=document.querySelectorAll("td.surnames")
    for (var i = 0; i < tdsurnames.length;i++) {
        tdsurnames[i].innerText=surnames[i];
    }
    var tdages=document.querySelectorAll("td.ages")
    for (var i = 0; i < tdages.length;i++) {
        tdages[i].innerText=ages[i];
    }
    var tdids=document.querySelectorAll("td.ids")
    for (var i = 0; i < tdids.length;i++) {
        tdids[i].innerText=ids[i];
    }
} else {
    var tdnames=document.querySelectorAll("td.names")
    for (var i = 0; i < tdnames.length;i++) {
        tdnames[i].innerText=names.reverse()[i];
    }
    var tdsurnames=document.querySelectorAll("td.surnames")
    for (var i = 0; i < tdsurnames.length;i++) {
        tdsurnames[i].innerText=surnames.reverse()[i];
    }
    var tdages=document.querySelectorAll("td.ages")
    for (var i = 0; i < tdages.length;i++) {
        tdages[i].innerText=ages.reverse()[i];
    }
    var tdids=document.querySelectorAll("td.ids")
    for (var i = 0; i < tdids.length;i++) {
        tdids[i].innerText=ids.reverse()[i];
    }
}
x++;
    }