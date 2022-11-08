let str1=document.getElementById("box1");
let str2=document.getElementById("box2");
let subBtn=document.getElementById("submit");

async function submit() {
    let send_data={
        data : [
            str1,
            str2,
        ]
    };

 try {
        let res = await fetch('https://keras-io-bert-semantic-similarity.hf.space/api/predict',{
            method:'POST',
        body:JSON.stringify(send_data),
        headers:{
            'Content-Type': 'application/json',
        }
        }) 
        let data = await res.json();
        console.log('data:', data)
        append(data.data)
    }
    catch (err) {
        console.log('err:', err)
    }
}

let container=document.getElementById("subdiv2");
const append=(data)=>{
    container.innerHTML=null;
    let str1=document.getElementById("box1").value;
    let str2=document.getElementById("box2").value;
    data.forEach((el)=>{
        let div=document.createElement("div");
        let res1=document.createElement("h4");
        res1.innerText=str1;
        let res2=document.createElement("h4");
        res2.innerText=str2;
        let head=document.createElement("p");
        head.innerText="Result";
        let result=document.createElement("h3");
        result.innerText=el.label;
        div.append(res1, res2,head,result);
        container.append(div);
    })
}
