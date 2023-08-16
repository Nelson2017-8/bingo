const template = (index, colms, logo="") => {
    let _logo =  `<div class="title">BINGO</div>`
    if (logo != ""){
        _logo = `<div class="logo mb-3"><img src="./${logo}" alt="logo"></div> <div class="title logo-title">BINGO</div>`
        //_logo = logo; // <img src="./photo_2023-05-23_15-15-48.jpg" alt="logo">
    }
    return `
                    <div class="col-6 mb-5" id="table-${index + 1}">
                        <div class="table-bingo">
                            <div class="thead">
                                <div class="number">${index + 1}</div>
                                ${_logo}
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <div class="range">1 AL 15</div>
                                    <div class="numbers">
                                        <div class="number">${colms[0][0]}</div>
                                        <div class="number">${colms[0][1]}</div>
                                        <div class="number">${colms[0][2]}</div>
                                        <div class="number">${colms[0][3]}</div>
                                        <div class="number">${colms[0][4]}</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="range">16 AL 30</div>
                                    <div class="numbers">
                                        <div class="number">${colms[1][0]}</div>
                                        <div class="number">${colms[1][1]}</div>
                                        <div class="number">${colms[1][2]}</div>
                                        <div class="number">${colms[1][3]}</div>
                                        <div class="number">${colms[1][4]}</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="range">31 AL 45</div>
                                    <div class="numbers">
                                        <div class="number">${colms[2][0]}</div>
                                        <div class="number">${colms[2][1]}</div>
                                        <div class="number bingo">
                                            <span class="fa fa-star"></span>
                                        </div>
                                        <div class="number">${colms[2][3]}</div>
                                        <div class="number">${colms[2][4]}</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="range">46 AL 60</div>
                                    <div class="numbers">
                                        <div class="number">${colms[3][0]}</div>
                                        <div class="number">${colms[3][1]}</div>
                                        <div class="number">${colms[3][2]}</div>
                                        <div class="number">${colms[3][3]}</div>
                                        <div class="number">${colms[3][4]}</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="range">61 AL 75</div>
                                    <div class="numbers">
                                        <div class="number">${colms[4][0]}</div>
                                        <div class="number">${colms[4][1]}</div>
                                        <div class="number">${colms[4][2]}</div>
                                        <div class="number">${colms[4][3]}</div>
                                        <div class="number">${colms[4][4]}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--<button class="btn w-75 btn-primary noimprimir" onclick="imprimirElemento('#table-${++index}')">Descargar</button>-->
                    </div>
    `;
}
const templateWithCode = (index, colms, logo="", code) => {
    let _logo =  `<div class="title">BINGO</div>`
    if (logo != ""){
        _logo = `
        <div class="encabezado">El número de la suerte</div> 
        <div class="code">Codigo ${code}</div> 
        <div class="title logo-title">BINGO</div>
        `
        //_logo = logo; // <img src="./photo_2023-05-23_15-15-48.jpg" alt="logo">
    }
    return `
                    <div class="col-6 mb-5" id="table-${index + 1}">
                        <div class="table-bingo">
                            <div class="thead">
                                <div class="number">${index + 1}</div>
                                ${_logo}
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <div class="range">1 AL 15</div>
                                    <div class="numbers">
                                        <div class="number">${colms[0][0]}</div>
                                        <div class="number">${colms[0][1]}</div>
                                        <div class="number">${colms[0][2]}</div>
                                        <div class="number">${colms[0][3]}</div>
                                        <div class="number">${colms[0][4]}</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="range">16 AL 30</div>
                                    <div class="numbers">
                                        <div class="number">${colms[1][0]}</div>
                                        <div class="number">${colms[1][1]}</div>
                                        <div class="number">${colms[1][2]}</div>
                                        <div class="number">${colms[1][3]}</div>
                                        <div class="number">${colms[1][4]}</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="range">31 AL 45</div>
                                    <div class="numbers">
                                        <div class="number">${colms[2][0]}</div>
                                        <div class="number">${colms[2][1]}</div>
                                        <div class="number bingo">
                                            <span class="fa fa-star"></span>
                                        </div>
                                        <div class="number">${colms[2][3]}</div>
                                        <div class="number">${colms[2][4]}</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="range">46 AL 60</div>
                                    <div class="numbers">
                                        <div class="number">${colms[3][0]}</div>
                                        <div class="number">${colms[3][1]}</div>
                                        <div class="number">${colms[3][2]}</div>
                                        <div class="number">${colms[3][3]}</div>
                                        <div class="number">${colms[3][4]}</div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="range">61 AL 75</div>
                                    <div class="numbers">
                                        <div class="number">${colms[4][0]}</div>
                                        <div class="number">${colms[4][1]}</div>
                                        <div class="number">${colms[4][2]}</div>
                                        <div class="number">${colms[4][3]}</div>
                                        <div class="number">${colms[4][4]}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--<button class="btn w-75 btn-primary noimprimir" onclick="imprimirElemento('#table-${++index}')">Descargar</button>-->
                    </div>
    `;
}
const templateBingoDelConsejoComunal = (index, colms) => {
    return `
        <div class="col-6 mb-5" id="table-${index + 1}">
            <div class="table-bingo">
                <div class="thead">
                    <div class="number">${index + 1}</div>
                    <div class="title">BINGO DEL CONSEJO COMUNAL "LA GALLERA"</div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="range">1 AL 15</div>
                        <div class="numbers">
                            <div class="number">${colms[0][0]}</div>
                            <div class="number">${colms[0][1]}</div>
                            <div class="number">${colms[0][2]}</div>
                            <div class="number">${colms[0][3]}</div>
                            <div class="number">${colms[0][4]}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="range">16 AL 30</div>
                        <div class="numbers">
                            <div class="number">${colms[1][0]}</div>
                            <div class="number">${colms[1][1]}</div>
                            <div class="number">${colms[1][2]}</div>
                            <div class="number">${colms[1][3]}</div>
                            <div class="number">${colms[1][4]}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="range">31 AL 45</div>
                        <div class="numbers">
                            <div class="number">${colms[2][0]}</div>
                            <div class="number">${colms[2][1]}</div>
                            <div class="number">${colms[2][2]}</div>
                            <div class="number">${colms[2][3]}</div>
                            <div class="number">${colms[2][4]}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="range">46 AL 60</div>
                        <div class="numbers">
                            <div class="number">${colms[3][0]}</div>
                            <div class="number">${colms[3][1]}</div>
                            <div class="number">${colms[3][2]}</div>
                            <div class="number">${colms[3][3]}</div>
                            <div class="number">${colms[3][4]}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="range">61 AL 75</div>
                        <div class="numbers">
                            <div class="number">${colms[4][0]}</div>
                            <div class="number">${colms[4][1]}</div>
                            <div class="number">${colms[4][2]}</div>
                            <div class="number">${colms[4][3]}</div>
                            <div class="number">${colms[4][4]}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!--<button class="btn w-75 btn-primary noimprimir" onclick="imprimirElemento('#table-${++index}')">Descargar</button>-->
        </div>
    `;
}
const templateBingoModeloOne = (index, colms) => {
    return `
        <div class="col-6 mb-5 modelo-one" id="table-${index + 1}">
            <div class="table-bingo">
                <div class="thead">
                    <div class="number">${index + 1}</div>
                    <div class="title">BINGO</div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="range">1 AL 15</div>
                        <div class="numbers">
                            <div class="number">${colms[0][0]}</div>
                            <div class="number">${colms[0][1]}</div>
                            <div class="number">${colms[0][2]}</div>
                            <div class="number">${colms[0][3]}</div>
                            <div class="number">${colms[0][4]}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="range">16 AL 30</div>
                        <div class="numbers">
                            <div class="number">${colms[1][0]}</div>
                            <div class="number">${colms[1][1]}</div>
                            <div class="number">${colms[1][2]}</div>
                            <div class="number">${colms[1][3]}</div>
                            <div class="number">${colms[1][4]}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="range">31 AL 45</div>
                        <div class="numbers">
                            <div class="number">${colms[2][0]}</div>
                            <div class="number">${colms[2][1]}</div>
                            <div class="number"><div class="sm">LIBRE</div></div>
                            <div class="number">${colms[2][3]}</div>
                            <div class="number">${colms[2][4]}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="range">46 AL 60</div>
                        <div class="numbers">
                            <div class="number">${colms[3][0]}</div>
                            <div class="number">${colms[3][1]}</div>
                            <div class="number">${colms[3][2]}</div>
                            <div class="number">${colms[3][3]}</div>
                            <div class="number">${colms[3][4]}</div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="range">61 AL 75</div>
                        <div class="numbers">
                            <div class="number">${colms[4][0]}</div>
                            <div class="number">${colms[4][1]}</div>
                            <div class="number">${colms[4][2]}</div>
                            <div class="number">${colms[4][3]}</div>
                            <div class="number">${colms[4][4]}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!--<button class="btn w-75 btn-primary noimprimir" onclick="imprimirElemento('#table-${++index}')">Descargar</button>-->
        </div>
    `;
}

const randomRangeNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//
// console.log(randomRangeNumber(0, 10))
// console.log(randomRangeNumber(11, 20))
// console.log(randomRangeNumber(21, 30))
// console.log(randomRangeNumber(31, 40))
// console.log(randomRangeNumber(41, 50))
// console.log(randomRangeNumber(51, 60))

const generateColumnTable = (min, max) => {
    const column = [];
    let $continue = true;
    while ($continue){
        let tmp = randomRangeNumber(min, max);
        let add = true;
        for (let i=0; i<column.length; i++) {
            if(column[i] === tmp){
                add = false;
                break;
            }
        }
        if(add){
            column[column.length] = tmp;
        }
        if (column.length > 4){

            $continue = false;
        }

    }
    column.sort((a,b)=> a - b);
    return column;
}
const generateNumbersTable = () => {
    const column1 = generateColumnTable(1, 15);
    const column2 = generateColumnTable(16, 30);
    const column3 = generateColumnTable(31, 45);
    const column4 = generateColumnTable(46, 60);
    const column5 = generateColumnTable(61, 75);
    return [column1, column2, column3, column4, column5];
}
const generateTableWithLogo = () => {
    let max = 100;
    let html = "";
    let htmlTmp = "";
    let serie = 4;
    let mult = serie;
    for (let i = 0; i < max; i++){
        let colms = generateNumbersTable();
        // console.log(colms)

        if ((serie) === (i+1) ){
            htmlTmp += template(i, colms, "logo.png");
            serie += mult;
            // console.log(serie)
            html += `<div class="col-sm-12 saltopagina"><div class="row">${htmlTmp}</div></div>`
            htmlTmp = "";

        }else{
            htmlTmp += template(i, colms, "logo.png");
        }
    }
    return html;
}
const generateTableWithCode = () => {
    let max = 500;
    let html = "";
    let htmlTmp = "";
    let serie = 4;
    let mult = serie;
    for (let i = 0; i < max; i++){
        let colms = generateNumbersTable();
        // console.log(colms)

        if ((serie) === (i+1) ){
            htmlTmp += templateWithCode(i, colms, "logo2.png", codes[i]);
            serie += mult;
            // console.log(serie)
            html += `<div class="col-sm-12 saltopagina"><div class="row">${htmlTmp}</div></div>`
            htmlTmp = "";

        }else{
            htmlTmp += templateWithCode(i, colms, "logo2.png", codes[i]);
        }
    }
    return html;
}
const generateTableModelOne = () => {
    console.log("gola")
    let max = 500;
    let html = "";
    let htmlTmp = "";
    let serie = 4;
    let mult = serie;
    for (let i = 0; i < max; i++){
        let colms = generateNumbersTable();
        // console.log(colms)

        if ((serie) === (i+1) ){
            htmlTmp += templateBingoModeloOne(i, colms);
            serie += mult;
            // console.log(serie)
            html += `<div class="col-sm-12 saltopagina"><div class="row">${htmlTmp}</div></div>`
            htmlTmp = "";

        }else{
            htmlTmp += templateBingoModeloOne(i, colms);
        }
    }
    return html;
}
const generateTable = () => {
    let max = 10;
    let html = "";
    let htmlTmp = "";
    let serie = 4;
    let mult = serie;
    for (let i = 0; i < max; i++){
        let colms = generateNumbersTable();
        // console.log(colms)

        if ((serie) === (i+1) ){
            htmlTmp += template(i, colms);
            serie += mult;
            // console.log(serie)
            html += `<div class="col-sm-12 saltopagina"><div class="row">${htmlTmp}</div></div>`
            htmlTmp = "";

        }else{
            htmlTmp += template(i, colms);
        }
    }
    return html;
}
const generateTableBingoDelConsejoComunal = () => {
    let max = 300;
    let html = "";
    let htmlTmp = "";
    let serie = 4;
    let mult = serie;
    for (let i = 0; i < max; i++){
        let colms = generateNumbersTable();
        // console.log(colms)

        if ((serie) === (i+1) ){
            htmlTmp += templateBingoDelConsejoComunal(i, colms);
            serie += mult;
            // console.log(serie)
            html += `<div class="col-sm-12 saltopagina"><div class="row">${htmlTmp}</div></div>`
            htmlTmp = "";

        }else{
            htmlTmp += templateBingoDelConsejoComunal(i, colms);
        }
    }
    return html;
}
// let colms = generateNumbersTable();
// console.log(colms)
let comunal = $("#generate-del-consejo-comunal > div")
let generate = $("#generate > div")
let generateLogo1 = $("#generate-logo > div")
let generateWithCode = $("#generate-with-code> div")
let generateModelOne = $("#generate-modelo-one > div")
if (document.querySelector("#generate-del-consejo-comunal > div") != null){
    console.log("Adios")
    let table1 = generateTableBingoDelConsejoComunal()
    comunal.html(table1)
}
else if (document.querySelector("#generate > div") != undefined){
    console.log("Hola")
    let table1 = generateTable();
    generate.html(table1)
}
else if (document.querySelector("#generate-with-code > div") != undefined){
    console.log("Hola mundo")
    let table1 = generateTableWithCode();
    generateWithCode.html(table1)
}else if (document.querySelector("#generate-logo > div") != undefined){
    console.log("Hola 2")
    let table1 = generateTableWithLogo();
    generateLogo1.html(table1)
}
else if (document.querySelector("#generate-modelo-one > div") != undefined){
    console.log("Hola 3")
    let table1 = generateTableModelOne();
    generateModelOne.html(table1)
}
// setTimeout(()=>{
//     $("#generate > div")
// }, 3000)

const capture = ()=>{
    // html2canvas(document.body, {
    //     onrendered (canvas) {
    //
    //         let link = document.getElementById("table-0");
    //         // let link = document.querySelectorAll(".table-bingo")[0];
    //         let image = canvas.toDataURL();
    //         link.href = image;
    //         link.download = "screeanshot.png";
    //         link.click();
    //     }
    // })
    // html2canvas(document.getElementById("table-0"))
    //     .then(canvas => {
    //         let link = document.createElement("a");
    //         // let link = document.getElementById("table-0");
    //         // let link = document.querySelectorAll(".table-bingo")[0];
    //         link.href = canvas.toDataURL();
    //         link.download = "screeanshot.png";
    //         link.click();
    //     })
    let $objetivo = document.getElementById("table-0");
    $contenedorCanvas = document.querySelector("#contenedorCanvas");

    // Agregar el listener al botón
    html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
        .then(canvas => {
            // Cuando se resuelva la promesa traerá el canvas
            $contenedorCanvas.appendChild(canvas); // Lo agregamos como hijo del div
        });
}

let $boton = document.querySelector(".btnCapturar");
if($boton != undefined){
    $boton.addEventListener("click", ()=>{
        html2canvas(document.querySelector("#generate"))
                .then(canvas => {
                    let link = document.createElement("a");
                    link.download = "Bingo.png";
                    link.href = canvas.toDataURL();
                    link.click();
                })
    })
}

const download = (index)=>{
    const name = `Table ${index}.png`
        // console.log("elem " + elem)
        // console.log("index " +index)
    console.log(`#table-${index}`)
    console.log( $(`#table-${index}`) )
        html2canvas(document.querySelector(`#table-${index}`))
            .then(canvas => {
                let link = document.createElement("a");
                link.download = name;
                link.href = canvas.toDataURL();
                link.click();
            })
}

function imprimirElemento(elemento) {
    let elem = document.querySelector(`${elemento}`).innerHTML
    var ventana = window.open('', 'PRINT', 'height=800,width=800');
    ventana.document.write('<html><head><title>' + document.title + '</title>');
    ventana.document.write(`
        <link rel="stylesheet" href="./assets/bootstrap-4.5.0/css/bootstrap.css">
        <link rel="stylesheet" href="./assets/fontawesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="./assets/style.css">
    `);
    ventana.document.write('</head><body >');
    ventana.document.write(elem);
    ventana.document.write('</body></html>');
    ventana.document.close();
    ventana.focus();
    ventana.onload = ()=> {
        ventana.print();
        ventana.close();
    }
    return true;
}

function generateFichas(){
	let max = 4800;
	let template = `<div class="bingo-ficha"><div class="ficha"></div></div>`;
	let template1 = `<img src="./j.png" class="j"/>`
	let htmlTmp = "";
	for (let i = 0; i < max; i++){
        htmlTmp += template1;
        //htmlTmp += `<div class="saltopagina"><div class="row">${htmlTmp}</div></div>`;
    }
    let content = $(".generate-fichas");
    content.html( `<div class="w-100>"${htmlTmp}</div>` )
	
}
// generateFichas();
