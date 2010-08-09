[![Feed icon](/images/feed-icon-14x14.png) Atom feed][feed] for recent posts.

Recent Posts
------------

{% for post in site.categories.blog limit:5 %}
<div class="section list">
  <h1>{{ post.date | date_to_string }}</h1>
  <a class="title" href="{{ post.url }}">{{ post.title }}</a>
  <p class="excerpt">{{ post.excerpt }}</p>
  <a href="{{ post.url }}#disqus_thread">Comments</a>
  
</div>
{% endfor %}

[feed]: /blog/atom.xml

