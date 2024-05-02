

export default function Datafetching({pageparams}){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // const body = JSON.stringify({
    //   "limit": 10,
    //   "offset":pageparams
    //  });
     let limit=10;
     let offset=pageparams;
     
    //  const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body
    //  };
     fetch("https://api.weekday.technology/adhoc/getSampleJdJSON",{
        method: "POST",
        headers: myHeaders,
        body:JSON.stringify({
            limit,
            offset,
        })
     } )
     .then((response) => response.json())
     .then((result) =>{
        return{
            result:result,
            offset:offset+limit
        }
     })
     .catch((error) => {
        return error;
    });
}