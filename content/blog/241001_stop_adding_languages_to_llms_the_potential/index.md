---
title: Stop adding Languages to LLMs! The Potential Drawbacks of Training Multilingual Large Language Models (LLMs) for Performance and Sustainability! 
date: 2024-10-01
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_artificialintelligence-genai-llm-activity-7246524467034689537-nZ-f?utm_source=share&utm_medium=member_desktop
tags: blog
---

Exploring the downsides of creating multilingual LLMs and their impact on performance and resource utilization.

![Image 1](/img/blog_images/1727692358797.jpeg)

**TL;DR ⏱️**
- Challenges of building multilingual LLMs
- Inefficiencies in token usage and context length
- Increased hardware costs and reduced token training
- Weighing multilingual models against language-specific models

<!-- excerpt -->

## Building a Multi-Lang-LLM 🛠️🐣

- When pretraining LLMs, one of the key decisions is which data to include.
- This choice also influences the selection of the tokenizer, which optimizes the number of tokens for the texts used.
- As a result, different characters and character sequences are mapped in the tokenizers for each language.

## When you finally use such a LLM in only a subset of available languages you face following problems 🇪🇺🤖

- Inefficient token usage: If the model is only used for one or two languages, many tokens may be rarely or never needed, leading to shorter token sequences in the required language.
- Limited context length: LLMs have a limited context length, measured in tokens, which can result in more expensive inference as the model scales linearly to quadratically with prompt length.
- Increased hardware costs: This can lead to higher hardware costs and omissions.
- Reduced relevant token training: With a multilingual model, fewer relevant tokens and token sequences may have been seen and trained in the required languages.

## The Trade-Off: Multilingual Models vs. Language-Specific Models 💰📊

- We need to weigh the benefits of multilingual models against the potential drawbacks and decide whether to prioritize language coverage or risk wasting resources.
- This is particularly important when dealing with languages that are not closely related, such as those with different character sets.

## Your Opinion 🤗

- What do you think?
- Have you ever chosen a model especially with reduced number of languages outside English?
- Some more details about Multi-Lang-GenAI can be found here: [https://lnkd.in/edgPsdKz](https://lnkd.in/edgPsdKz)

For more content, follow me or reach out to me over DM ❤️

#artificialintelligence #genai #llm #languages

[LinkedIn Post](https://www.linkedin.com/posts/carsten-draschner_artificialintelligence-genai-llm-activity-7246524467034689537-nZ-f?utm_source=share&utm_medium=member_desktop)
