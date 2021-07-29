export default async (req, res) => {

    let url = process.env[req.body.url.base] + req.body.url.action,
      payload = req.body.payload,
      headers = req.body?.headers || {}
    
    let response = await fetch(
      url, 
      {
        method: req.body.method,
        headers:{
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify({
          ...payload,
        })
      }
    ).then(result => result.json())
    
    res.status(200).json(response)
  }