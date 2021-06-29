const selfsigned = require('selfsigned');
const domain_names = 'localhost,sit.ttfb.com.tw'; // 不同的 domain_name 用 , 做區隔 
const attrs = [{name: 'commonName', value: domain_names}];
const pems = selfsigned.generate(attrs, {days: 365});
console.log(pems);

const fs = require('fs');

// 下方會將檔案存到與 js 同層的位置
fs.writeFileSync('./key.pem', pems.private, 'utf8');
fs.writeFileSync('./cert.pem', pems.cert, 'utf8');
fs.writeFileSync('./.fingerprint', pems.fingerprint, 'utf8');
fs.writeFileSync('./.public.pub', pems.public, 'utf8');