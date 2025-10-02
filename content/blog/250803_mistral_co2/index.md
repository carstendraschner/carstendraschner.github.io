---
title: Unmasking AI’s Footprint: The Real Cost of Large Language Models
date: 2025-08-03
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_artificalintelligence-llm-oneearth-activity-7355480381061570560-PxS2?utm_source=share&utm_medium=member_desktop&rcm=ACoAACHjjm8B3BZCMjF5D-kMGt5KR8dfUUXY4f0
tags: blog
---

The Hidden Environmental Cost of AI

![Image 1](/img/blog_images/250803_mistral_co2/1753538477138.jpeg)

**TL;DR ⏱️**
- Mistral AI published the first full life-cycle analysis (LCA) of an LLM  
- Training has huge up-front CO₂, water, and resource costs  
- Smart choices (renewables, smaller models, optimisation) reduce the footprint  

<!-- excerpt -->

## Background

🌍 Mistral AI just released the first *full life-cycle analysis (LCA)* of an LLM (Mistral Large 2).  
The numbers are eye-opening:  
- **20.4 kt CO₂e, 281 000 m³ water & 660 kg Sb-eq** to train over 18 months  
- **1.14 g CO₂e, 45 mL water & 0.16 mg Sb-eq** for a single 400-token response  
- Footprint scales roughly *linearly* with model size (10× parameters ≈ 10× impact)  

This raises questions about sustainability, usage patterns, and model selection.  

## What have I done:

I reviewed the Mistral post and analysed where the environmental impact of LLMs comes from:  
1. **Training once, paying for years** – the up-front carbon loan dominates unless utilisation is high.  
2. **Hardware & supply chain** – producing GPUs and cooling systems can rival the energy cost.  
3. **Inference at scale** – small grams per query add up massively with millions of requests.  
4. **Utilisation ratio** – measuring "total inference ÷ total lifecycle" helps evaluate if training is “earned back.”  

## IMHO:

🔬 Key takeaways for sustainable AI:  
- Cool-climate, renewable-powered datacentres cut both carbon and water draw.  
- Always choose the *smallest* model that solves the task – big isn’t always better.  
- Use distillation, quantisation, batching, and caching to reduce impact.  
- Skip LLMs altogether if simpler methods (regex, heuristics, traditional ML) do the job.  

AI has the potential to optimise logistics, drug discovery, and code generation — but its own footprint is real and must be addressed.  
At Comma Soft AG, we always validate the most reasonable approach to solve a problem and optimise resource spend, especially as we host LLMs ourselves within **Alan.de**.  

❤️ Feel free to reach out and like if you want to see more of such content.  

#artificalintelligence #llm #oneearth
