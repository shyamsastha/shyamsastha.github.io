<!-- anchor hook for navbar -->
<span id="research"></span>

## Publications <a href="{{ site.google_scholar }}" target="_blank" rel="noopener noreferrer">
  <i class="fa-brands fa-google-scholar"></i>
</a>

<!-- For an up to date and complete list, visit my [Google Scholar profile]({{ site.google_scholar }}) -->

{% assign grouped_papers = site.data.bibliography | group_by: "year" %}
{% for group in grouped_papers %}
<div class="papers">
  <h4>{{ group.name }}</h4>
  {% for paper in group.items %}
  <div class="paper-item">
    <span>{{ paper.title }}</span>
    {% if paper.award %}
      <i class="fa-solid fa-trophy" style="color: {% if paper.award == 'Best Paper' %}goldenrod{% else %}darkgoldenrod{% endif %};"></i>
    {% endif %}
    <br>
    {{ paper.author }} <br> 
    {{ paper.venue }} |
    <a href="{{ paper.external_link }}" target="_blank">Link</a>  
    {% if paper.internal_link %} | <a href="{{ paper.internal_link }}" target="_blank">PDF</a>{% endif %}
  </div>
  {% endfor %}
</div>
{% endfor %}

## Ongoing work/Under Review
*   Ongoing study to validate the Collective Care framework through pilot deployment \| Since Nov 2025
*   Developing a finetuned open-source LLM to support the collective care context in contextualization, routing, provenance, and verification. \| Since Nov 2025
*   Design of an end-to-end system for operationalizing collective care supporting shared responsibility, trust, and engagement. (Under Submission @ MobiSys '26 \| May - Nov 2025
*   Socio-technical framework for implementing collective care through constructs and design exemplars. (Under Review @ CHI '26 \| May - Sep 2025
*   Empirical study evaluation perception of PHI for proactive care. Novel finding around sharing and collective wellbeing. (Under Review @ IMWUT \| Jan 2024 - May 2025