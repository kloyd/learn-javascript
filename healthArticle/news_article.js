var xhr = new XMLHttpRequest();
var url = "./news.json";
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function() {
    var newsitems = xhr.response.newsitems;
    var articlesDiv = document.getElementById('articles');
    
    newsitems.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var headline = document.createElement('h2');
        headline.textContent = article.headline;

        var summary = document.createElement('p');
        summary.textContent = article.summary;

        articleDiv.appendChild(headline);
        articleDiv.appendChild(summary);

        articlesDiv.appendChild(articleDiv);
    });
}

xhr.send();
