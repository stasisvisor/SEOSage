const retry = (fn, retries = 3, delay = 1000) => new Promise((resolve, reject) => { fn().then(resolve).catch(error => { if (retries === 0) reject(error); else setTimeout(() => retry(fn, retries - 1, delay).then(resolve, reject), delay); }); });