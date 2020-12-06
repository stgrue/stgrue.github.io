---
layout: page
permalink: /cv/
title: cv
nav: true


categories:
  - name: Education
    entries:
      - name: Ph.D. Computational Linguistics
        institution: University of Stuttgart
        institution_url: "https://www.ims.uni-stuttgart.de/"
        date: 2019–today
        notes:
            - "Topic: Syntactically informed methods for information extraction in scientific writing"
      - name: M.Sc. Informatics
        institution: University of Edinburgh
        institution_url: "https://www.ed.ac.uk/informatics/"
        date: 2018–2019
        notes:
          - "Final grade: A3 (\"with distinction\")"
          - "Master's thesis: \"Epidemic Spreading and Real-Time Epidemic Response in Community Networks\""
      - name: B.Sc. Computational Linguistics
        institution: Saarland University (Saarbrücken)
        institution_url: "http://www.coli.uni-saarland.de/"
        date: 2014–2018
        notes:
          - "Final grade: 1.1 (\"with distinction\")"
          - "Bachelor's thesis: \"Efficient IRTG Parsing with Neural Chart Constraints\" (in German)"
      - name: Studium generale
        institution: Leibniz Kolleg (Tübingen)
        institution_url: "https://www.leibniz-kolleg.uni-tuebingen.de/"
        date: 2013–2014
        description: "The Studium generale serves as a preparation for university studies and offers courses and seminars from a wide variety of subjects, including German studies, rhetoric, and astronomy."
  - name: Work
    entries:
      - name: Doctoral researcher
        institution: Bosch Center for Artificial Intelligence
        institution_url: "https://www.bosch-ai.com/"
        date: 2019–today
        notes:
          - "Part of group R26 (\"Natural Language Processing and Semantic Reasoning\")"
      - name: Research assistant
        institution: Saarland University (Saarbrücken)
        institution_url: "http://www.coli.uni-saarland.de/"
        date: 2015–2018
        notes:
          - "Teaching assistant for the lecture \"Introduction to Computational Linguistics\""
          - "Software development and research on discourse annotation and statistical parsing"
  - name: Misc.
    entries:
      - name: M.Sc. Informatics Class Prize
        date: 2019
        description: "The M.Sc. Informatics Class Prize is awarded to the student who gained the highest overall mark in the M.Sc. Informatics degree."
      - name: Scholarship
        institution: German Academic Scholarship Foundation
        institution_url: "https://www.studienstiftung.de/en/"
        date: 2016–2019
      
---

<div class="publications">
  {% for category in page.categories %}
  <h2 class="year">{{ category.name }}</h2>
  <ol class="bibliography">
    {% for entry in category.entries %}
      <li>
        <div class="row" style="margin-bottom: 15px;">
          <div class="col-sm-2 abbr">
            <abbr class="badge">{{ entry.date }}</abbr>
          </div>
          <div class="col-sm-8">
            <span style="font-weight: bold; display: inline;">{{ entry.name }}</span>{% if entry.institution %}, {% if entry.institution_url %}<a href="{{ entry.institution_url }}">{% endif %}{{ entry.institution }}{% if entry.institution_url %}</a>{% endif %}.{% endif %} <!-- Span class: cventry -->
            {% if entry.description %}
              <span class="author">{{ entry.description }}</span> <!-- Span class: cvdescription -->
            {% endif %}
            {% if entry.notes %}
              <ul style="padding-left: 15px; list-style-type: square;">
                {% for note in entry.notes %}
                  <li style="margin-bottom: 5px;">{{ note }}</li>
                {% endfor %}
              </ul>
            {% endif %}
          </div>
        </div>
      </li>
    {% endfor %}
  </ol>
  {% endfor %}
</div>
