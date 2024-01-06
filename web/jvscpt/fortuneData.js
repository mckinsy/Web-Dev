let fortunedata=[
    {
        data:"you will get lamborghini"
    },
    {
        data:"you will land a job this month"
    },
    {
        data:"you will visit ram mandir"
    },
    {
        data:"you will win a trip to huawei"
    },
    {
        data:"you will get a personal interview with leo messi"
    }
]
let index=Math.trunc(Math.random()*fortunedata.length) // length is excluded in random bcoz of starting from zero so till length-1 is generated then how it's working because length itself gives one higher value as it starts count from 1
console.log(index)
console.log(fortunedata[index].data) //first way 
let dat=fortunedata[index]
console.log(dat.data) // second way
