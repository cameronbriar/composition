var erm = function(s) {

  var news = [],
      count = 0;

  for (var i = 0; i < s.length; i++) {

    if (count > 2)
      news.push(s[i]);
    else {
      if (['a', 'e', 'i', 'o', 'u'].indexOf(s[i]) === -1)
        news.push(s[i]);
      else {
        s = s.substring(1);
        i -= 1;
        count += 1;
        news.push("e"); news.push("r");
      }
    }
  }
  console.log(news)
  return news.join("");
}
