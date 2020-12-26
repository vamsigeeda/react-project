export async function makeRequest(url = "", opt = {}) {
    const config = {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    };
  
    if (opt) {
      if (opt.headers) {
        config.headers = opt.headers;
      }
  
      if (opt.method) {
        config.method = opt.method;
      }
      if (opt.data) {
        config.body = JSON.stringify(opt.data);
      }
    }
  
    const response = await fetch(url, config);
  
    return response;
  }