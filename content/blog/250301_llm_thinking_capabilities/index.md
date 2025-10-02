---
title: There is also technical foundation for thinking capability in Reasoning LLMs
date: 2025-03-01
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_artificialintelligence-reasoning-genai-activity-7304878731158835200-klOv?utm_source=share&utm_medium=member_desktop&rcm=ACoAACHjjm8B3BZCMjF5D-kMGt5KR8dfUUXY4f0
tags: blog
---

Do LLMs Think – Or Is It Just Next Token Prediction? 🤔

![Image 1](/img/blog_images/250301_llm_thinking_capabilities/Bildschirmfoto%202025-10-02%20um%2013.54.10.png)

**TL;DR ⏱️**
- Short explanation of reasoning models
- Technical description: where is the potential for "thoughts" in transformers
- My hypothesis on LLMs and thinking capabilities

<!-- excerpt -->

## Background

Reasoning LLMs (like DeepSeek R1, Alibaba QwQ, or OpenAI oX) are currently at the center of the AI debate. They introduce a new dimension of scaling — inference-time compute — and rely on structured reasoning techniques such as Chain of Thought (CoT). This sparked my curiosity: can we go beyond "just next token prediction" and interpret their internal behavior as a form of technical thinking?

## What have I done:

I looked at reasoning models and how they operate:  
- They generate additional intermediate tokens to "rethink" steps before finalizing an answer.  
- Models are prompted to self-question (e.g., “wait, rethink…”).  
- Some UIs hide these intermediate steps, showing only the final result.  
- Inference costs are higher since more tokens are generated.  

Then I explored how transformers might technically exhibit thinking-like behavior:  
1. Assume all possible correct token sequences for a task.  
2. Gather hidden representations before the LM head.  
3. Treat these as high-dimensional pseudo-continuous sequences.  
4. Normalize their lengths to define a solution subspace.  
5. Transformers are trained to sample in this subspace.  
6. Autoregressive generation traverses the space differently, but consistently within it.  
7. With reasoning model training (RL + stable CoT), this target space becomes more robust.  
8. IMHO: This is akin to "thinking" — the architecture of a solution exists before token generation; autoregression merely unfolds it.  

## IMHO:

I believe reasoning models are not *just* predicting the next token. Instead, they explore and stabilize a solution subspace. This rough “solution architecture” resembles thinking, where the model already has a structural outline before writing down the answer.  

Questions I leave open:  
- Do LLMs already map themselves to "thoughts" in this sense?  
- Could diffusion-like sampling make responses even more coherent?  
- How much of the solution space is predetermined by the first token?  

I’d love to hear your thoughts! We have controversial but highly productive debates at Comma Soft AG Alan.de ML team ❤️ Big shoutout to 3Blue1Brown for inspiring visual explanations!  

❤️ Feel free to reach out and like if you want to see more of such content.

#artificialintelligence #reasoning #genai #machinelearning
