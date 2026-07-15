---
layout: page
title: This is a trap.
description: You took the bait.
permalink: /onlyfans/
nav: false
---

<div class="trap-card">
  <p class="trap-card__message">There is no OnlyFans here—just formal methods.</p>
  <p class="trap-card__count" aria-live="polite">
    Trap visits: <strong id="trap-visit-count">counting…</strong>
  </p>
  <a class="trap-card__back" href="{{ '/' | relative_url }}">← Back to the homepage</a>
</div>

<script defer src="{{ '/assets/js/trap-counter.js' | relative_url | bust_file_cache }}"></script>
