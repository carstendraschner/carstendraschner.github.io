---
title: DeepSeek has huge issues. Code on last Slide. Be careful!
date: 2025-02-03
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_deep-seek-model-issues-code-on-last-slide-activity-7289957083297325056-Wtfo?utm_source=share&utm_medium=member_desktop
tags: blog
---

DeepSeek Alignment and Censorship Concerns

![Image 1](/img/blog_images/deepseekvllm.png)

**TL;DR ⏱️**
- DeepSeek R1 alignment issues
- Censorship on topics related to China
- Use with caution

<!-- excerpt -->

## Background

🤖 I was curious to have a hands-on session with the hyped DeepSeek Models.  
🇨🇳 Smart engineers from China developed a model that competes at the top of the SOTA leaderboards.  
🧐 I was wondering how the models behave in the alignment dimension, as this might be a distinctive factor when choosing open-weight models.  
👨🏼‍💻 I chose not the 600B+ parameter model but a distilled 70B AWQ model, which runs easily for a try-out on one A100.

## What have I done:

❓ I prompted the model with questions about several countries, democracy, politics, ethics, and more.  
🤗 You can recreate those results using the code on the last slide.

## IMHO:

🚫 The DeepSeek model has an alignment that stops it from saying anything critical about China itself, compared to other very similar prompts.  
😳 I would be careful deploying that model without knowing what else might be an issue, especially when you use such models for function calling.  
Be aware of which model you trust and why.  
🧮 A Chinese quant company seems to have put a lot of effort into such adjustments, which have nothing to do with model performance or being good at answering questions correctly and safely.  
🇪🇺 We develop Alan.de, a GenAI solution that runs fully on German servers and is developed and built from a European perspective by European engineers for European users.  
❤️ Feel free to reach out and like if you want to see more of such content.

#artificialintelligence #deepseek #alan #aiethics