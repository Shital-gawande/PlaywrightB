const responseTimes = [120, 230, 450, 510, 180, 620]; 
const SLA_LIMIT = 500;

let avg = 0, sum =0;
let breaches =0;
let min =responseTimes[0];
let max = responseTimes[0];
for(let i =1;i<=responseTimes.length;i++){

    if(responseTimes[i] >= SLA_LIMIT){
        breaches++;
    }
    if(responseTimes[i]<min){
        min = responseTimes[i];
    }
    if(responseTimes[i]>max){
        max = responseTimes[i];
    }
    sum += responseTimes[i];
}
avg = sum/responseTimes.length;

if(breaches>0){
    console.log(`Total Requests: ${responseTimes.length} Min Response: ${min}ms Max Response: ${max}ms SLA Breaches: ${breaches} Avg: ${avg} Overall Status: ❌ SLA VIOLATED`)
}
else{
      console.log(`Total Requests: ${responseTimes.length} Min Response: 1${min}ms Max Response: ${max}ms SLA Breaches: ${breaches} Avg: ${avg} Overall Status: ❌ SLA not VIOLATED`)
}

