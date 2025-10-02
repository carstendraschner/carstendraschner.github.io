---
title: One of the biggest missing pieces between Open-Source and Open-Weight models ... and a Weird Finding about Pre-training Data!
date: 2025-09-01
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_ai-llm-pretraining-activity-7358019612711550976-Ac_e?utm_source=share&utm_medium=member_desktop&rcm=ACoAACHjjm8B3BZCMjF5D-kMGt5KR8dfUUXY4f0
tags: blog
---

Open-Source ≠ Open-Weight — Pre-training Data Mystery

![Image 1](/blog/250901_pretraining_data/1752740878982.jpeg)

**TL;DR ⏱️**
- Pre-training data shapes everything downstream (RAG, RLHF, prompting).
- FineWeb uses per-snapshot deduplication only, not global.
- Raises open questions about contamination vs. genuine generalization.

<!-- excerpt -->

## Background

Before an LLM ever sees a user prompt, it spends ≈ 50-90 % of its compute budget ingesting a huge, unlabelled corpus during pre-training.  
Everything that follows—instruction tuning, RAG, RLHF, even quirky prompt-engineering tricks—works on top of this pretrained model.  

When the corpus is skewed or noisy, the downstream model inherits those quirks forever.  
Most companies never disclose exactly which data they used; some cases even ask whether that data was legal to scrape.  

FineWeb’s team has now released 15 T tokens and their full curation pipeline. A rare opportunity to peek behind the curtain!

## What have I done:

I looked into how FineWeb builds its datasets, step by step:  

1️⃣ Crawl selection (Common Crawl snapshots).  
2️⃣ Extraction of text from HTML.  
3️⃣ Filtering for language & safety.  
4️⃣ Quality heuristics (line length, repetition, etc.).  
5️⃣ Deduplication.  
6️⃣ PII scrubbing & labelling.  

The *surprise*: FineWeb only deduplicates **within each snapshot**, not globally.  
That means the same article may appear up to 96 times—once per crawl.  

Global dedup experiments erased up to 90 % of tokens in older crawls, but still under-performed RefinedWeb.  
Other lighter schemes (URL, line, 3-line) also hurt accuracy.  

So FineWeb chose the trade-off: drop huge template clusters, but keep duplicates across snapshots.

## IMHO:

I understand the compute savings and empirical win.  
But I’m still left wondering about **benchmark contamination**:  
if duplicate passages exist across crawls, evaluation answers might leak into training sets more often.  

Better scores, yes—but due to true generalisation or memorisation?  

Regardless, I’m deeply grateful to the FineWeb team. Open datasets like this help the entire community push forward.  

At Comma Soft AG we focus on domain-specific models and pay close attention to contamination issues.  
This release helps us (and others) experiment more openly.  

❤️ Feel free to reach out and like if you want to see more of such content.

#AI #LLM #Pretraining
