let data=[];
let auth="UeufzDZHUOC0VbaU3tTaMbfVrJHkyhv7Srm9wQ2d7KH6HoQoEFiVmQsy";
let tags=[
    {
        "backgroundImgUrl": "https://i.imgur.com/cqJ1tS4_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        "tagName": "food|77,056 Posts",
        "tagTitleBgColor": "rgb(46, 167, 153)"
    },
    {
        "backgroundImgUrl": "https://i.imgur.com/W5yeBvr_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        "tagName": "wholesome|32,381 Posts",
        "tagTitleBgColor": "rgb(93, 133, 195)"
    },
    {
        "backgroundImgUrl": "https://i.imgur.com/9r1qCDq_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        "tagName": "Funny|2,671,622 Posts",
        "tagTitleBgColor": "rgb(99, 56, 117)"
    },
    {
        "backgroundImgUrl": "https://i.imgur.com/4kmYoey_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        "tagName": "awesome|746,051 Posts",
        "tagTitleBgColor": "rgb(132, 114, 189)"
    },
    {
        "backgroundImgUrl": "https://i.imgur.com/nrFCOUB_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        "tagName": "gaming|300,031 Posts",
        "tagTitleBgColor": "rgb(43, 26, 90)"
    },
    {
        "backgroundImgUrl": "https://i.imgur.com/avRBRpN_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        "tagName": "aww|709,268 Posts",
        "tagTitleBgColor": "rgb(96, 174, 187)"
    },
    {
        "backgroundImgUrl": "https://i.imgur.com/2wD3VJA_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        "tagName": "space|30,329 Posts",
        "tagTitleBgColor": "rgb(38, 96, 110)"
    },
    {
        "backgroundImgUrl": "https://i.imgur.com/tUX1dpv_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        "tagName": "unmuted|15,534 Posts",
        "tagTitleBgColor": "rgb(38, 59, 167)"
    },
    {
        "backgroundImgUrl": "https://i.imgur.com/A2MU7EC_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
        "tagName": "astronomy|6,249 Posts",
        "tagTitleBgColor": "rgb(80, 83, 90)"
    },
    // {
    //     "backgroundImgUrl": "https://i.imgur.com/kQFyoG7_d.jpg?maxwidth=800&shape=thumb&fidelity=high",
    //     "tagName": "current events|394,873 Posts",
    //     "tagTitleBgColor": "rgb(105, 154, 175)"
    // }
]

let container=document.querySelector(".container");
tags.forEach((e,i)=>{
    let div=document.createElement("div");
    div.setAttribute("class","tagselem");
    let img1=document.createElement("img");
    img1.src=e.backgroundImgUrl;
    img1.alt=e.tagName.split("|")[0]
    let p1=document.createElement("p");
    p1.textContent=e.tagName.split("|")[0];
    let p2=document.createElement("p");
    p2.textContent=e.tagName.split("|")[1];
    // console.log(e.tagName.split("|")[0],e.tagName.split("|")[1])
    let div2=document.createElement("div");
    div2.setAttribute("class","tagstext");
    div2.style.backgroundColor=e.tagTitleBgColor;
    div.addEventListener("click",()=>{
        FilterData(e.tagName.split("|")[0])
    })
    div2.append(p1,p2);
    div.append(img1,div2);
    container.append(div);
})

const FilterData=async (key=event.target.value)=>{
    console.log(key);
    let url=`https://api.pexels.com/v1/search?query=${key}&page=1&per_page=30`
    let rdata=await fetch(url,{
        headers:{
            authorization:auth
        }
    })
    let pdata=await rdata.json();
    // console.log(pdata.photos);
    data=pdata.photos;
    DisplayData(pdata.photos)
}
const DisplayData=(datas)=>{
    let content=document.querySelector(".content");
    content.textContent="";
    console.log("displaydata called")
    // console.log(datas);
    datas.forEach((e,i)=>{
        let div1=document.createElement("div");
        div1.setAttribute("class","cdiv");
        let img1=document.createElement("img");
        img1.src=e.src.medium;
        let div2=document.createElement("div");
        div2.setAttribute("class","ctext");
        let p1=document.createElement("p");
        p1.textContent=e.photographer;
        p1.style.color="white";
        div2.style.backgroundColor="#474a51";
        div2.append(p1);
        div1.append(img1,div2);
        content.append(div1);

    })
}
FilterData("coder")
const debounce=(fn,time)=>{
    console.log("debounce called")
    let tdata=event.target.value;
    let id;
    console.log(time);
    //return ()=>{
        if(id){
            clearInterval(id);
        }
        id=setTimeout(()=>{
            console.log("filter called from debounce")
            fn(tdata);
        },time)
    //}
}

const search=()=>{

}

//parsed data from imgur tags such as name post background image and background color
// const parser = new DOMParser();
// const doc = parser.parseFromString(html, "text/html");
// const tags = Array.from(doc.querySelectorAll('.tag')).map(tag => ({
//   backgroundImgUrl: tag.style.backgroundImage.match(/url\((.*?)\)/)[1].replace(/['"]+/g, ''),
//   tagName: tag.querySelector('.tag-title').textContent,
//   tagTitleBgColor: tag.querySelector('.tag-title').style.backgroundColor
// }));
// console.log(tags);