---
title: LLM Context Engineering and Vision Language Models – What do they have in common?
date: 2025-07-02
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_artificialintelligence-llms-computervision-activity-7350406950959898625-x0g-?utm_source=share&utm_medium=member_desktop&rcm=ACoAACHjjm8B3BZCMjF5D-kMGt5KR8dfUUXY4f0
tags: blog
---

Context Matters – In Language and Vision

![Image 1](/img/blog_images/250702_context_engineering_vlm.png)

**TL;DR ⏱️**
- Context engineering goes beyond prompt engineering  
- More context = better predictions (for humans and models)  
- Vision Transformers outperform CNNs by leveraging global context early  

<!-- excerpt -->

## Background

The conversation around LLMs is shifting: instead of just "prompt engineering," we increasingly talk about "context engineering." That’s because an LLM’s outputs are influenced not only by the prompt itself but also by system messages, retrieved RAG chunks, few-shot examples, chat templates, and even multimodal inputs like images.  

The same principle applies in vision: predictions depend strongly on the amount and quality of context provided.  

## What have I done:

I compared the way context shapes predictions in both text LLMs and vision models. For example:  
- A cropped photo can make us label a striped shadow as a tiger 🐅, but when zoomed out, we realize it’s just a dog 🦮 with fence shadows.  
- Similarly, in LLMs, more surrounding context changes the quality and accuracy of outputs.  

This analogy extends to model architectures: Vision Transformers can integrate global cues early on via self-attention, unlike CNNs that rely on stacking layers before distant pixel interactions emerge.  

## IMHO:

Context engineering is key. Whether you’re designing prompts for LLMs or inputs for ViTs, it’s about making sure the right context is available at the right time.  

At Comma Soft AG, we integrate models designed to leverage context effectively and make the most out of available data.  

❤️ Feel free to reach out and like if you want to see more of such content.

#artificialintelligence #LLMs #ComputerVision #ContextEngineering
