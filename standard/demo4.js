const url = require('url');
const urlStr = 'https://www.google.com/search?sxsrf=ALeKk03n8spneRJTDJzkxvy2bQ1zPehlnQ%3A1596273904743&source=hp&ei=8DQlX_HWKuObmgeIw7WwCA&q=javasscript+&oq=javasscript+&gs_lcp=CgZwc3ktYWIQAzIHCCMQsQIQJzIHCCMQsQIQJzIHCCMQsQIQJzIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjoECCMQJzoFCAAQkQI6CAgAELEDEIMBOgIIADoLCC4QsQMQxwEQowI6BQgAELEDOgIILjoICAAQsQMQkQI6BQguELEDOgQILhAKUJAUWI0oYOgpaAFwAHgBgAHCAYgB0xCSAQQwLjE1mAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwjxjrfY1_nqAhXjjeYKHYhhDYYQ4dUDCAc&uact=5';
var obj = url.parse(urlStr, true);
console.log(typeof obj);
// console.log(obj);
console.log(obj.protocol);
console.log(obj.hostname);
console.log(obj.search);
console.log(obj.query.q);
