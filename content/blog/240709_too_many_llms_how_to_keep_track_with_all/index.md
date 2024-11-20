---
title: Too many LLMs?! How to keep track with all the Open Source Models? Identify the finetuned-masked LLMs and its position within the GenAI landscape!
date: 2024-09-30
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_%F0%9D%97%A7%F0%9D%97%BC%F0%9D%97%BC-%F0%9D%97%BA%F0%9D%97%AE%F0%9D%97%BB%F0%9D%98%86-%F0%9D%97%9F%F0%9D%97%9F%F0%9D%97%A0%F0%9D%98%80-%F0%9D%97%9B%F0%9D%97%BC-%F0%9D%98%81%F0%9D%97%BC-%F0%9D%97%B8-activity-7173581553552318464-6w1Z?utm_source=share&utm_medium=member_desktop
tags: blog
---

Navigating the complex landscape of GenAI models can be challenging, but it's crucial to understand the foundational and finetuned models to make informed decisions.

![Image 1](/img/blog_images/1710277843754.jpeg)

**TL;DR ⏱️**
- The GenAI landscape is crowded with many models
- Keeping track of innovations and true effects is hard
- Transparency issues with many so-called "open-source" models
- Recommendations for navigating this landscape

<!-- excerpt -->

## The current LLM landscape 🤖

- Big GenAI LLM competition
- Lots of proprietary and open-source models
- Many Competitors: Big players like Google, Meta, and Microsoft; rising companies like Mistral and OpenAI, but also smaller institutions with foundation models or finetuned models
- Several release their model parameters openly on platforms like Huggingface
- Number of GenAI models are 500k+ (HF total), 60k+ (HF text generation)

## Challenges with number of LLMs 🤯

- Difficult to keep track with so many models
- Most innovations are only documented with blog posts or arxiv papers
- True innovations and effects are barely reported
- Model leaderboards are flooded with finetuned models
- Not always clear which and why model architecture and training data are combined

## My problem with current landscape 🤦🏼‍♂️

- Many claim to provide open-source models but do not disclose how those are constructed. What are the true training data and initial training datasets for pretuning, instruction tuning, and alignment?
- Which training hyperparameter setup was used and why
- Why does a specific model have exactly this combination of parameters like: number transformer layers, number heads, hidden-size, intermediate size

## My recommendation 🤗

- Keep calm and check what is the true source foundation model
- Understand the architecture: e.g. more or less all of those are autoregressive Decoder-Only multilayer transformer networks
- Some introduce a novel architecture ideas like MoE (Mixture of Experts)
- Do your research, demystify LLM-landscape, and implement benchmarks you trust as we do @Comma Soft AG!

## Further reading 📚

- LLAMA is not truly open source! [https://rb.gy/8z8t3m](https://rb.gy/8z8t3m)
- Alignment can be destroyed by finetuning! [https://rb.gy/ehf7s9](https://rb.gy/ehf7s9)
- Why are LLMs 7, 13, 70B large? [https://rb.gy/zkpk5r](https://rb.gy/zkpk5r)
- My take on “We have beaten ChatGPT” [https://rb.gy/juw4pg](https://rb.gy/juw4pg)
- LMSYS Chatbot Arena [https://rb.gy/f2ptbb](https://rb.gy/f2ptbb)

## Credit ❤️

- R&D teams providing truly open-source models
- Accessible research contributions explaining effects of LLM optimization techniques
- LMSYS Chatbot Arena as an alternative to Open LLM leaderboard with focus on the original foundation models

How do you find the most promising OS foundation model for your UC?

For more content, brainstorming and discussions, follow me or reach out to me 🥰
