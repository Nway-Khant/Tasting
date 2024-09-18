// let stocks = {
//     fruits: ['banana', 'apple', 'orange'],
//     holder: ['cone', 'cup', 'stick'],
//     toppings: ['chocolate', 'peanuts', 'salary']
// }



// let order = (fruits, call_work)=> {
//     setTimeout(() => {
//         console.log(`The customer has selected${stocks.fruits[fruit]}!`);
//         call_work();
//     })
// }

// let work = ()=> {
//     setTimeout(()=>{
//         console.log('The processing has been started! wait for 5-mins ')
        
//         setTimeout(()=>
//         {
//             console.log('thank for')
//         })

//             setTimeout(()=>
//                 {
//                     console.log(`${stocks.holder[0]} was added!`)
//                 })

//                 setTimeout(()=>
//                     {
//                         console.log(`${stocks.toppings[0]} was added!`)
//                     })
//                     setTimeout(()=>
//                         {
//                             console.log('thank for all.see you again!')
//                         })
//     },0)
// }

// order(0, work);

let teashop = {
    tea: ['ချို့ဆိမ့်', 'ကျဆိမ့်', 'ပုံမှန်'],
    food: ['နန်းကြီးသုပ်', 'အီကြာကွေး', 'ပေါက်စီ'],
    drink: ['ကိုလာ', 'စတင်း', 'သံပရာ']
}
// console.log(stocks.toppings[1])
let order = (tea, call_work)=> {
    setTimeout (()=> {
        console.log(`အကိုမှာ ထားတဲ့ ${teashop.tea[tea]} ရပါပီ`);
        call_work();
    }, 1500)
}
let work = ()=> {
    setTimeout(() => {
        console.log('အခုသောက်လိုက်တော့နော်')
        setTimeout(() => {
            console.log("အခုလိုအားပေးတဲ့ အတွက် ကျေးဇူးပါ၊ ခေတ္တစောင့်ပါ")
            setTimeout(() => {
                console.log(`${teashop.food[0]} ၂ ပွဲ`)
                setTimeout(() => {
                    console.log(`${teashop.drink[0]} ၃ ခွက် `)
                    setTimeout(() => {
                        console.log("အားပေးတဲ့ အတွက် ကျေးဇူးပါ မကြာခင် ပြန်တွေ့ကျမယ်နော့်")
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 0)
}
order(0, work);
