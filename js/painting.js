let myChart1 = echarts.init(document.getElementById('main'),'essos');
let myChart2 = echarts.init(document.getElementById('typeList'),'essos');
let myChart4 = echarts.init(document.getElementById('personConnection'),'essos');
let myChart5 = echarts.init(document.getElementById('personList'),'essos');

//图表控制函数
function controlMyChart1(){
//第一张图表的操作
//数据处理
let years = []
for(let i=0;i<101;i++){years[i]=String(1920+i)}
//电影类型集合
let types = [
    "Crime",
    "Drama",
    "Action",
    "Adventure",
    "Sci-Fi",
    "Romance",
    "Western",
    "Biography",
    "Fantasy",
    "Comedy",
    "Thriller",
    "Animation",
    "Family",
    "Mystery",
    "Music",
    "Horror",
    "Film-Noir",
    "Sport",
    "History",
]
//第一个数据集
function Film(name, type, stack, areaStyle, emphasis ,data){
    this.name = name;
    this.type = type;
    this.stack = stack;
    this.areaStyle = areaStyle;
    this.emphasis = emphasis;
    this.data = data;
}
let dataSet1 = []
let yearTypeNum = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
for(let i=0;i<19;i++){
    for(let j=0;j<101;j++){
    let num=0
    IMDBDataSet.map((filmObj)=>{
        if(filmObj.Released_Year === String(1920+j) && filmObj.Genre.indexOf(types[i]) !== -1){
            num++
        }
    })
    yearTypeNum[i][j]=num
    }
    dataSet1[i] = new Film(types[i],'line','Total',{},{focus: 'series'},yearTypeNum[i])
}
let option1 = {
    title: {
    text: 'IMDB',
    left: "5%",
    top: "4%",
    textStyle: {
        fontSize: 20,
        fontStyle: 'italic',
    }
    },
    tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'line',
        label: {
        backgroundColor: '#6a798'
        }
    },
    width: "18%",
    position: ["98%","0%"]
    },
    legend: {
    data: types,
    type: "scroll",
    width: "80%",
    top: "4%",
    right: "5%",
    selectedMode: true,
    selected: {
        "Crime":false,
        "Drama":false,
        "Action":false,
        "Adventure":false,
        "Sci-Fi":false,
        "Romance":false,
        "Western":false,
        "Biography":false,
        "Fantasy":false,
        "Comedy":false,
        "Thriller":false,
        "Animation":false,
        "Family":false,
        "Mystery":false,
        "Music":false,
        "Horror":false,
        "Film-Noir":false,
        "Sport":false,
        "History":false,
    }
    },
    grid: {
    left: '2%',
    right: '4%',
    bottom: '2%',
    width: '95%',
    containLabel: true
    },
    xAxis: [
    {
        type: 'category',
        boundaryGap: [0,5],
        data: years,
    }
    ],
    yAxis: [
    {
        type: 'value'
    }
    ],
    dataZoom: {
    type: "inside",
    id: "dataZoom1",
    },
    series: dataSet1,
};
//第一张图表的渲染
myChart1.setOption(option1);
}

function controlMyChart2(types){
//第二张表的操作
//数据处理
let filmName = []
let filmRate = []
let filmGross = []
let film = []
function selectTypeFilm(types,filmObj){
    let key = 0
    types.map((typeObj)=>{
    if(filmObj.Genre.indexOf(typeObj) !== -1){
        key = 1
    }
    })
    return key
}
let i = 0
IMDBDataSet.map((filmObj)=>{
    if(selectTypeFilm(types,filmObj) === 1){
    filmName[i] = filmObj.Series_Title
    filmRate[i] = Number(filmObj.IMDB_Rating)
    filmGross[i] = Number(filmObj.Gross)
    i++
    }
})
filmName.reverse()
filmRate.reverse()
filmGross.reverse()
let option2 = {
    title: {
    text: 'Film Library',
    top: "4%",
    left: "5%",
    textStyle: {
        fontSize: 20,
        fontStyle: 'italic',
    }
    },
    tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    }
    },
    legend: {
    top: '4%'
    },
    grid: {
    left: '3%',
    width: '90%',
    bottom: '3%',
    height: '85%',
    containLabel: true
    },
    xAxis: [
    {
        type: 'value',
        position: 'top',
        axisLine: {
        show: true
        }
    },
    {
        type: 'value',
        position: 'bottom',
        axisLine: {
        show: true
        }
    },            
    ],
    yAxis: {
    type: 'category',
    axisLabel:{
        show:false
    },
    data: filmName
    },
    dataZoom: {
    type: 'slider',
    show: true,
    startValue: filmName.length-1,
    endValue : filmName.length-9,
    yAxisIndex: 0, 
    },
    series: [
    {
        name: 'IMDB Rating',
        type: 'bar',
        xAxisIndex: 0,
        data: filmRate
    },
    {
        name: 'Gross',
        type: 'bar',
        color: '#ff7000',
        xAxisIndex: 1,
        data: filmGross
    }
    ]
};
//第二张图表的渲染
myChart2.setOption(option2);
}

function controlMyChart3(selectFilmName){
let filmGoal
IMDBDataSet.map((filmObj)=>{
    if(selectFilmName === filmObj.Series_Title){
    filmGoal = filmObj
    }
})
document.getElementById("littleTitle").innerHTML = "Film Title: " + filmGoal.Series_Title
document.getElementById("releasedYear").innerHTML = "Year: " + filmGoal.Released_Year
document.getElementById("runTime").innerHTML = "Runtime: " + filmGoal.Runtime
document.getElementById("genre").innerHTML = "Genre: " + filmGoal.Genre
document.getElementById("rating").innerHTML = "IMDB Rating: " + filmGoal.IMDB_Rating
document.getElementById("gross").innerHTML = "Gross: $" + filmGoal.Gross
document.getElementById("certificate").innerHTML = "Certificate: " + filmGoal.Certificate
document.getElementById("overview").innerHTML = "Overview: " + filmGoal.Overview
document.getElementById("poster").src = filmGoal.Poster_Link
document.getElementById("poster").alt = filmGoal.Series_Title
}

function controlMyChart4(selectFilmName){
//第四张表的操作
function Node(name, symbolSize, category){
    this.name = name;
    this.draggable = true;
    this.fixed = false;
    this.symbolSize = symbolSize;
    this.category = category;
    this.label = {
    show: true,
    color: "rgb(75, 43, 0)"
    }
}
function Link(source, target){
    this.source = source;
    this.target = target;
    this.label = {show: false}
}
let filmFamily = []
let starFamily = []
let starNode = []
let starLink = []
IMDBDataSet.map((filmObj)=>{
    if(selectFilmName === filmObj.Series_Title){
    filmFamily[0] = filmObj
    }
})
starFamily[0] = filmFamily[0].Director
starNode[0] = new Node(filmFamily[0].Director,40,"TSD")
//防止自导自演使得节点name重名
i = 1
if(filmFamily[0].Director !== filmFamily[0].Star1){
    starFamily[i] = filmFamily[0].Star1
    starNode[i] = new Node(filmFamily[0].Star1,35,"TSA")
    i++
}
if(filmFamily[0].Director !== filmFamily[0].Star2){
    starFamily[i] = filmFamily[0].Star2
    starNode[i] = new Node(filmFamily[0].Star2,35,"TSA")
    i++
}
if(filmFamily[0].Director !== filmFamily[0].Star3){
    starFamily[i] = filmFamily[0].Star3
    starNode[i] = new Node(filmFamily[0].Star3,35,"TSA")
    i++
}
if(filmFamily[0].Director !== filmFamily[0].Star4){
    starFamily[i] = filmFamily[0].Star4
    starNode[i] = new Node(filmFamily[0].Star4,35,"TSA")
    i++
}
//获取对自导自演情况的描述
let index = i
//获取涉及的电影
function selectFilm(filmFamily,title){
    let key = 0
    filmFamily.map((filmObj)=>{
    if(filmObj.Series_Title === title){
        key = 1
    }
    })
    return key
}
function selectStar(starFamily,name){
    let key = 0
    starFamily.map((starObj)=>{
    if(starObj === name){
        key = 1
    }
    })
    return key
}
i = 1
j = index
for(let key,lockKing = 0;key !== 0&&lockKing < 20;){
    key = 0
    IMDBDataSet.map((filmObj)=>{
    if((selectStar(starFamily,filmObj.Director)===1||
    selectStar(starFamily,filmObj.Star1)===1||
    selectStar(starFamily,filmObj.Star2)===1||
    selectStar(starFamily,filmObj.Star3)===1||
    selectStar(starFamily,filmObj.Star4)===1)&&
    (selectFilm(filmFamily,filmObj.Series_Title)===0)){
        let lock = 0
        if(lockKing++ < 20){
        filmFamily[i++] = filmObj
        if(selectStar(starFamily,filmObj.Director)===0){
            starFamily[j++] = filmObj.Director
            key = 1
        }
        if(selectStar(starFamily,filmObj.Star1===0)){
            starFamily[j++] = filmObj.Star1
            key = 1
        }
        if(selectStar(starFamily,filmObj.Star2)===0){
            starFamily[j++] = filmObj.Star2
            key = 1
        }
        if(selectStar(starFamily,filmObj.Star3)===0){
            starFamily[j++] = filmObj.Star3
            key = 1
        }
        if(selectStar(starFamily,filmObj.Star4)===0){
            starFamily[j++] = filmObj.Star4
            key = 1
        }
        }
    }
    })
}
//人物节点记录
k = 0
i = index
starFamily.map((starObj)=>{
    if(k++ >= index){
    let key = 0
    filmFamily.map((filmObj)=>{
        if(starObj === filmObj.Director){
            key = 1
        }
    })
    if(key === 1){
        starNode[i++] = new Node(starObj,20,"OTD")
    }else{
        starNode[i++] = new Node(starObj,25,"OTA")
    }
    }
})
//人物链记录
i = 0
filmFamily.map((filmObj)=>{
    if(filmObj.Director !== filmObj.Star1){
    starLink[i++] = new Link(filmObj.Director,filmObj.Star1)
    }
    if(filmObj.Director !== filmObj.Star2){
    starLink[i++] = new Link(filmObj.Director,filmObj.Star2)
    }
    if(filmObj.Director !== filmObj.Star3){
    starLink[i++] = new Link(filmObj.Director,filmObj.Star3)
    }
    if(filmObj.Director !== filmObj.Star4){
    starLink[i++] = new Link(filmObj.Director,filmObj.Star4)
    }
})
let option4 = {
    title: {
    text: "Stars' Relationship",
    top: "3%",
    left: "2%"
    },
    tooltip: {},
    legend:{
    data: ['TSD','TSA','OTD','OTA'],
    top: "3%",
    right: "2%",
    orient: 'vertical'
    },
    series: [{
    type: 'graph',
    layout: 'force',
    name: 'name',
    categories: [{
        name: 'TSD'
    },{
        name: 'TSA'
    },{
        name: 'OTD'
    },{
        name: 'OTA'
    }],
    data: starNode,
    links: starLink,
    force: {
        repulsion: 60,
        gravity: 0.05,
        edgeLength: 50,
    },
    left: "left"
    }]
};
//第四张图表的渲染
myChart4.setOption(option4);
}

function controlMyChart5(starName){
//第五张图表的操作
let starFilmName = []
let starFilmRate = []
let starFilmGross = []
i=0
IMDBDataSet.map((filmObj)=>{
    if(filmObj.Director === starName||
    filmObj.Star1 === starName||
    filmObj.Star2 === starName||
    filmObj.Star3 === starName||
    filmObj.Star4 === starName){
    starFilmName[i] = filmObj.Series_Title
    starFilmRate[i] = filmObj.IMDB_Rating
    starFilmGross[i] = filmObj.Gross
    i++
    }
})
let option5 = {
    title: {
    text: starName+"'s",
    top: "2.5%",
    left: "3%"
    },
    polar: {
    center: ["50%", "55%"],
    radius: [20, '80%']
    },
    radiusAxis: {
    max: 10,
    min: 4
    },
    angleAxis: {
        type: 'category',
        data: starFilmName,
        startAngle: 180,
        axisLabel:{
        show:false
        },
    },
    tooltip: {},
    roam: false,
    series: {
        type: 'bar',
        barWidth: "50%",
        data: starFilmRate,
        coordinateSystem: 'polar',
        color: '#dd6b66',
    },
};
//第五张图的渲染
myChart5.setOption(option5);
}

//初次渲染
controlMyChart1()

let types = [
    "Crime",
    "Drama",
    "Action",
    "Adventure",
    "Sci-Fi",
    "Romance",
    "Western",
    "Biography",
    "Fantasy",
    "Comedy",
    "Thriller",
    "Animation",
    "Family",
    "Mystery",
    "Music",
    "Horror",
    "Film-Noir",
    "Sport",
    "History",
]
controlMyChart2(types)

controlMyChart4("The Godfather")

controlMyChart5("Al Pacino")

//第一张图表中操作第二张图表的事件
myChart1.on('legendselectchanged', function (params) {
let types = []
if(params.selected.Crime === true){
    types.push("Crime")
}
if(params.selected.Drama === true){
    types.push("Drama")
}
if(params.selected.Action === true){
    types.push("Action")
}
if(params.selected.Adventure === true){
    types.push("Adventure")
}
if(params.selected['Sci-Fi'] === true){
    types.push("Sci-Fi")
}
if(params.selected.Romance === true){
    types.push("Romance")
}
if(params.selected.Western === true){
    types.push("Western")
}
if(params.selected.Biography === true){
    types.push("Biography")
}
if(params.selected.Fantasy === true){
    types.push("Fantasy")
}
if(params.selected.Comedy === true){
    types.push("Comedy")
}
if(params.selected.Thriller === true){
    types.push("Thriller")
}
if(params.selected.Animation === true){
    types.push("Animation")
}
if(params.selected.Family === true){
    types.push("Family")
}
if(params.selected.Mystery === true){
    types.push("Mystery")
}
if(params.selected.Music === true){
    types.push("Music")
}
if(params.selected.Horror === true){
    types.push("Horror")
}
if(params.selected['Film-Noir'] === true){
    types.push("Film-Noir")
}
if(params.selected.Sport === true){
    types.push("Sport")
}
if(params.selected.History === true){
    types.push("History")
}
controlMyChart2(types)
});

//第二张图表中操作第三、四张图表的事件
myChart2.on('click', function (params) {
controlMyChart3(params.name)
controlMyChart4(params.name)
});

//第四张图表中操作第五张图表的事件
myChart4.on('click', function (params) {
controlMyChart5(params.name)
});

//第五张图表中操作第三、四张图表的事件
myChart5.on('click', function (params) {
controlMyChart3(params.name)
controlMyChart4(params.name)
});