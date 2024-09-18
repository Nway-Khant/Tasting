function အိပ်(cb){
    setTimeout(() => {
        console.log("အိပ်ပီးပါပြီး");
        cb();
    }, 2000)
}

function ထပ်အိပ်(cb){
    setTimeout(() => {
        console.log("ထပ်အိပ်ပီးပါပြီး");
        cb();
    }, 3500)
}

function ပြန်အိပ်(cb){
    setTimeout(() => {
        console.log("ပြန်အိပ်ပီးပါပြီး");
        cb();
    }, 4500)
}

အိပ်(() => {
    ထပ်အိပ်(()=>{
        ပြန်အိပ်(()=>{
            console.log("ဒါတောင် အိပ်ရေးမဝပါဘူးဗျာ..")
        }
    )
    }
)
}
)