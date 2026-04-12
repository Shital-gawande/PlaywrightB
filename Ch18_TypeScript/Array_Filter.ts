let responseCode:number[] = [200,401,500,403,201,204];

 function filterCode(codes: number[]): number[]{
    
    return codes.filter(function(code: number): boolean { 
        return code >=400});
 }


 console.log("Failure codes:", filterCode(responseCode));