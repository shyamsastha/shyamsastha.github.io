<!-- anchor hook for navbar -->
<span id="news"></span>

###  News
<!-- pinned -->
> 🔔 Proposed a collective care framework and operationalized it through an android application ecosystem -- **JEEVHITAA** (Joint Engagement Ecosystem for Vital Health Insights, Tracking, and Actionable Assistance). Pilot under deployment!

<!-- actual news -->
<table>
{% assign news_items = site.data.news | slice: 0, 6 %}
{% for item in news_items %}
  <tr class="news-item">
    <td style="color:{{ item.color }};"><i class="{{ item.icon }}"></i></td>
    <td>{{ item.description }} 
    {% if item.link %}
    <small>
      <a href="{{ item.link }}"><i class="fa-solid fa-link"></i></a>
    </small>
    {% endif %}
    <span style="padding: 0 6px; font-weight: 600;">|</span>
    <span>[{{ item.date }}]</span>
    </td>
  </tr>
{% endfor %}
</table>