---
layout: default
---

<div class="home-grid">

  <!-- LEFT column: profile -->
  <header class="profile-header">
    <img
      class="profile-photo"
      src="{{ site.logo | relative_url }}"
      alt="{{ site.title | escape }}"
      data-images="{{ '/assets/images/profile/1000027231.jpg' | relative_url }},{{ '/assets/images/profile/DSC_0039.jpg' | relative_url }},{{ '/assets/images/profile/PXL_20250425_004018099_PORTRAIT.jpg' | relative_url }},{{ '/assets/images/profile/portrait_2.jpeg' | relative_url }}"
    />

    <p class="tagline">{{ site.description | markdownify }}</p>

    <nav class="profile-links" aria-label="profile links">
      <a class="icon-link" href="{{ '/assets/cv/Sastha_research_cv.pdf' | relative_url }}" target="_blank" rel="noopener" aria-label="CV"><i class="fa-solid fa-file-lines"></i></a>
      <a class="icon-link" href="{{ site.github }}" target="_blank" rel="noopener" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
      <a class="icon-link" href="{{ site.linkedin }}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
      <a class="icon-link" href="{{ site.twitter }}" target="_blank" rel="noopener" aria-label="Twitter/X"><i class="fa-brands fa-x-twitter"></i></a>
      <a class="icon-link" href="{{ site.orcid }}" target="_blank" rel="noopener" aria-label="ORCID"><i class="fa-brands fa-orcid"></i></a>
      <a class="icon-link" href="{{ site.google_scholar }}" target="_blank" rel="noopener" aria-label="Google Scholar"><i class="fa-brands fa-google-scholar"></i></a>
      <a class="icon-link" href="mailto:{{ site.email | escape }}" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
      <a class="icon-link" href="https://bsky.app/profile/sasthasrinivasan.bsky.social" target="_blank" rel="noopener" aria-label="Bluesky"><i class="fa-brands fa-bluesky"></i></a>
    </nav>

    <!-- Dark mode toggle -->
    <button id="dark-mode-toggle" class="dark-toggle-btn" aria-label="Toggle dark mode">
      <span class="dark-icon">🌙</span> Dark Mode
    </button>
  </header>

  <!-- RIGHT column: all the Markdown content -->
  <div class="page-content" markdown="1">

## About Me {#about}

Hello there! I'm Sastha Srinivasan, a fourth-year Ph.D. candidate (Thesis: HCAI for Collective Care) at [IIIT-Delhi](https://iiitd.ac.in/), co-advised by [Prof. Pushpendra Singh](https://www.iiitd.ac.in/pushpendra) and [Prof. Mohan Kumar](https://www.rit.edu/directory/mjkvcs-mohan-kumar). Through my doctoral research, I focus on leveraging AI/ML with sensing to create social impact in proactive health and wellbeing, suitable for Collective Care settings prevalent in societies like India.

By investigating how people seek, interpret, and share health information, I design culturally aligned engagement systems and develop GenAI-powered tools to make health information more accessible and usable, integrating ubiquitous computing, human–computer interaction, and artificial Intelligence. Through my research, I aim to create deployable, context-sensitive technologies that bridge the gap between algorithmic innovation and real-world care practices.

My prior industrial experience in leading successful cloud products, analytics dashboards, and ML/AI pipeline deployments supports my ability to think at scale in my research. Prior to that, I completed my Master's in _Computer Systems Engineering (specializing in IoT)_ from [Northeastern University](https://catalog.northeastern.edu/graduate/engineering/multidisciplinary/cyber-physical-systems-ms/) under the guidance of [Prof. Peter O'Reilly](https://coe.northeastern.edu/people/oreilly-peter/), where I also interned at _Bose Corporation_, developing an automated testing suite for smart home security.

Passionate about interdisciplinary computing research, I also work on side projects that intersect AI with computing education. In my downtime, you’ll find me enjoying strategy games _(digital and tabletop)_, reading with a cup of cocoa, or out exploring places.

## Research Interests {#interests}
*   Wearables: Different modalities for sustainable proactive monitoring.
*   AI/LLMs: Exploring new ways to fill gaps in public health information.
*   RAI: Responsible AI for social impact through sustainability.

If you're interested in collaborating, please don't hesitate to [get in touch]({{ site.email }}).

## News {#news}
*   Health Sharing Study for Collective Care published in arXiv \| Sep 2025
*   TIES Paper accepted at CSCW 25 \| Aug 2025
*   WiP Paper accepted at CHI 25 Late-breaking Work \| Feb 2025
*   Short Paper on BLIPS accepted at COMPASS 2024 \| Jul 2024
*   Position Paper on analyzing missing physiological data for health management accepted at PhysioCHI 24 Workshop at CHI 24 \| Mar 2024
*   Position Paper on generating synthetic physiological data for health management accepted at LLMCHI 24 Workshop at CHI 24. \| Mar 2024
*   Short Paper on BLIPS accepted at COMPASS 2024 \| July 2024
*   Poster on hybrid teaching accepted at SIGCSE TS 24 \| Mar 2024
*   Poster on Ble IPS accepted at MLSS 2024, Okinawa, Japan. Also received the travel grant to attend the summer school \| Feb 2024
*   Poster on Positive Aging at ACM SIGCHI Symposium for HCI & Friends 2022, Mumbai, India. Also received the travel grant to attend the symposium \| Dec 2022
*   Joined Ph.D. at IIIT-Delhi, under the guidance of [Prof. Pushpendra Singh](https://www.iiitd.ac.in/pushpendra) and [Prof. Mohan Kumar](https://www.rit.edu/directory/mjkvcs-mohan-kumar) \| Jan 2022

## Research {#research}
{% include_relative _includes/publications.md %}

### Ongoing work/Under Review
*   Ongoing study to validate the Collective Care framework through pilot deployment \| Since Nov 2025
*   Developing a finetuned open-source LLM to support the collective care context in contextualization, routing, provenance, and verification. \| Since Nov 2025
*   Design of an end-to-end system for operationalizing collective care supporting shared responsibility, trust, and engagement. (Under Submission @ MobiSys '26 \| May - Nov 2025
*   Socio-technical framework for implementing collective care through constructs and design exemplars. (Under Review @ CHI '26 \| May - Sep 2025
*   Empirical study evaluation perception of PHI for proactive care. Novel finding around sharing and collective wellbeing. (Under Review @ IMWUT \| Jan 2024 - May 2025

## Travel for Talks/Posters/Oral {#travel}
*   CSCW 25 Bergen, Norway \| Oct 2025
*   CHI 25 LBW Yokohama, Japan \| Apr 2025
*   COMPASS 2024 Delhi, India \| Jul 2024
*   MLSS 2024 Okinawa, Japan \| Feb 2024
*   ACM SIGCHI Symposium for HCI & Friends 2022 Mumbai, India \| Dec 2022

## Teaching {#teaching}
*   Head TA - Computer Networks \| Monsoon 2025
*   Head TA - Software Development Using Open Source \| Monsoon 2023
*   Head TA - Distributed Systems Concepts and Design \| Winter 2023
*   Head TA - Introduction to Programming \| Monsoon 2022
*   Personal TA - Introduction to Programming \| Supporting special needs student in Monsoon 2022
*   TA - Analysis and Design of Algorithms \| Winter 2022

## Services {#services}
### Reviewing and Program Committees (PC)
  *   CHI \| 2023, 2024, 2025
  *   TEI \| 2024, 2025, 2026 (PC)
  *   IMX \| 2024
  *   IMWUT \| 2024
  *   DIS \| 2024
  *   C&C \| 2024, 2025 (PC)
  *   CSCW \| 2024, 2025
  *   SIGCSE TS \| 2024
  *   SIGCSE TS Virtual \| 2024 (PC)
  *   ITiCSE \| 2024 (PC), 2025 (PC)
  
  </div> <!-- /.page-content -->
</div> <!-- /.home-grid -->