
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
