export default async (req, res) => {
    let url = process.env[req.body.url.base] + req.body.url.action,
        headers = req.body?.headers || {},
        urlParamsObj = req.body.urlParams,
        urlParams = Object.keys(urlParamsObj).map(key => { 
        if(urlParamsObj[key]){
            return key + "=" + urlParamsObj[key]
        } 
    })

    //call the Backend to process login from the server-side
    let response = await fetch(
        url + '?' + urlParams.join('&'), 
      {
          method: 'GET',
          headers:{
              'Content-Type': 'application/json',
              ...headers,
          },
      }
    ).then(result => result.json())
    
    res.status(200).json(response)
  }
