const url = 'http://localhost:3000/cities'


fetch('http://localhost:3000/cities')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        zadA(data);
        zadB(data);
        zadC(data);
        zadD(data);
        zadE(data);
        zadF(data);
        zadG(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function zadA(data) {
    let mainContainer = document.getElementById("AData");
    for (const element of data) {
        if (element.province === "małopolskie") {
            let div = document.createElement("div");
            div.innerHTML = element.name;
            mainContainer.appendChild(div);
        }
    }
}

function check_char(str1, char) {
    let ctr = 0;
    for (let i = 0; i < str1.length; i++) {
        if ((str1.charAt(i) == char)) {
            ctr += 1;
        }
    }
    return ctr == 2;
}

function zadB(data) {
    let mainContainer = document.getElementById("BData");
    for (const element of data) {
        if (check_char(element.name, "a")) {
            let div = document.createElement("div");
            div.innerHTML = element.name;
            mainContainer.appendChild(div);
        }
    }
}

function zadC(data) {
    let mainContainer = document.getElementById("CData");
    let arr = []
    for (const element of data) {
        arr.push([element.dentensity, element.name]);
    }
    arr.sort(function (a, b) { return b[0] - a[0] });
    let div = document.createElement("div");
    div.innerHTML = arr[4][1]
    mainContainer.appendChild(div);
}

function zadD(data) {
    let mainContainer = document.getElementById("DData");
    for (const element of data) {
        if (element.people > 100000) {
            let div = document.createElement("div");
            div.innerHTML = element.name + " City";
            mainContainer.appendChild(div);
        }
    }
}


function zadE(data) {
    let mainContainer = document.getElementById("EData");
    let more = 0;
    let less = 0;
    for (const element of data) {
        if (element.people > 80000) {
            more += 1;
        }
        else less += 1;
    }
    let div = document.createElement("div");
    div.innerHTML = " Miast powyżej 80000 mieszkańców: " + more + "<br>" + " Miast poniżej 80000 mieszkańców: " + less;
    mainContainer.appendChild(div);
}


function zadF(data) {
    let mainContainer = document.getElementById("FData");
    let sum = 0;
    let cnt = 0;
    for (const element of data) {
        if (element.township.charAt(0) === "p") {
            cnt += 1;
            sum += element.area;
        }
    }
    let div = document.createElement("div");
    div.innerHTML = sum / cnt
    mainContainer.appendChild(div);
}

function zadG(data) {
    let mainContainer = document.getElementById("GData");
    let cnt = 0;
    let bigger = true;
    for (const element of data) {
        if (element.province === "pomorskie" && element.people > 5000) {
            cnt += 1;
        } else {
            bigger = false;
        }
    }
    let div = document.createElement("div");
    if (bigger) div.innerHTML = " Wszystkie miasta z województwa pomorskiego są większe od 5000 osób, a jest ich " + cnt;
    else div.innerHTML = " Nie wszystkie miasta z województwa pomorskiego są większe od 5000 osób, a jest ich " + cnt;
    mainContainer.appendChild(div);
}

