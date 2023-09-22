const arr = [2,3,4,5,3,4,3,5,6];
const duplicate = {};
for (let i =0; i<arr.length;i++){
    if(duplicate[arr[i]]=== undefined){
        duplicate[arr[i]]=1;

    }else{
        duplicate[arr[i]]++;
    }
}

for (const key in duplicate){
    if(duplicate[key]>1){
        console.log(`${key} appers ${duplicate[key]}`)
    }
}

