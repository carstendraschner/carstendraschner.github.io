---
title: Be careful when you are using LLAMA-2! Legal risks & Sustainability Implications due to LLAMA-2 is (NOT) Open Source.
date: 2024-09-30
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_artificialintelligence-machinelearning-llm-activity-7170381681563021312-_A5j?utm_source=share&utm_medium=member_desktop
tags: blog
---

Important considerations regarding LLAMA-2's legal and sustainability implications.

![Image 1](/img/blog_images/1709552210761-2.jpeg)

**TL;DR ⏱️**
- LLAMA-2's legal and sustainability challenges
- Not truly open-source according to OSD
- Technical implications of its license
- Meta's restrictions and their broader impact

<!-- excerpt -->

## What is LLAMA-2? 🦙

- LLAMA 2 is a Large Language Model by Meta
- Thanks to Meta its weights are openly available over e.g. Hugging Face
- Meta claims to provide LLAMAs as open-source Models
- LLAMA-2 is under the LLAMA license which has some restrictions [1]

## Why is LLAMA NOT Open Source? [2] ❌

- Open Source means software under a license aligned with Open Source Definition (OSD)
- This includes no discrimination against persons or groups or fields of endeavor (OSD points 5 and 6)
- Meta’s license puts restrictions for commercial use (paragraph 2)
- Meta also restricts the use of the model and software for certain purposes (the Acceptable Use Policy)

## Technical Implications! 👨🏼‍💻

IMHO, From a technical perspective the license statement $1V is another major challenge: “You will not use the Llama Materials or any output or results of the Llama Materials to improve any other large language model (excluding Llama 2 or derivative works thereof)”. I interpret this as a barrier if you use this model in combination with other LLMs in workflows like:
- AI as a judge in benchmark or evaluation pipelines
- Reinforcement Learning with AI Feedback - RLAIF
- Data Synthesis pipelines
- Model Distillation

## Meta creates issues with the “open source” LLAMA-2 😢

- We will not reach true democratization of LLM application when usage is limited like this
- Those licenses can create confusion about what is open source in general, what is truly allowed, and what is not with those LLMs
- If we can barely reuse those pre-tuned LLMs we waste a lot of energy/resources spent on pretraining on more or less the same internet text corpus. 🌱
- And we still do not know how it is truly pre-trained, finetuned, and aligned. I’d appreciate more transparency here!

All of those statements are a part of our R&D journey @Comma Soft AG [3,4] developing LLM tools aligned with such challenging special licenses. I want to bring up the discussion about LLM usage and the meaning of open source and I am NOT giving legal advice.

What do you think about Meta's LLAMA-2 license? Will they change it in LLAMA-3? And what implications do you derive from this license?

## Reading list 📖

[1] [LLAMA-2 License](https://lnkd.in/e9bM43p9)  
[2] [Meta’s LLaMa 2 license is not Open Source](https://shorturl.at/jmow3)  
[3] [Weird LLAMA benchmark](https://shorturl.at/nwzHW)  
[4] [Reasons for LLAMA sizes](https://shorturl.at/nvFZ6)  

#artificialintelligence #machinelearning #llm #aiethics

[LinkedIn Post](https://www.linkedin.com/posts/carsten-draschner_artificialintelligence-machinelearning-llm-activity-7170381681563021312-_A5j?utm_source=share&utm_medium=member_desktop)
