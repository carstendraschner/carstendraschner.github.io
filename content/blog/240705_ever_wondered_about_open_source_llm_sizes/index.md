---
title: Ever wondered about open source LLLM sizes - 7B, 13B, 70B?
date: 2024-09-30
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_artificialintelligence-genai-maschinelearning-activity-7163192285034172416-AItW?utm_source=share&utm_medium=member_desktop
tags: blog
---

Where do those model sizes come from?... My findings!

![Image 1](/img/blog_images/1707838124577-3.jpeg)

**TL;DR ⏱️**
- Open-source LLM alternatives to AIaaS
- Hugging Face as a source for open-source models
- Many models are finetuned variants
- Bigger models imply slower inference & higher costs
- Different use cases require different model capabilities
- Questioning the parameter step sizes of models

<!-- excerpt -->

## Background 📝

- As an alternative to AIaaS like ChatGPT, you can interact with LLMs based on open-source models.
- A good source for open-source models is the Hugging Face model library.
- Many models are finetuned variants of existing models like the Meta LLAMA-2 is available as 7B, 13B, 70B.
- Inference runs faster on GPUs like NVIDIA V/A/H100.
- Bigger models: slower inference & have higher (environmental) costs while bigger LLMs mostly outperform smaller models in benchmark-tasks.
- Within multiple use cases, I select the best fitting OS model at @Comma Soft AG use cases.
- Different use cases request different model capabilities including model “knowledge” or inference speed.
- I was wondering why many models follow the parameter “step sizes” 7B, 13B, and 70B.

## My Findings 🔍

- Many models are finetuned versions of LLAMA-2 as this was a high-performing open-source LLM available within a “mostly” attractive OS license.
- In most cases, model finetuning does not change the number of parameters.
- LLAMA paper states it provides LLMs: [...] "that achieve the best possible performance at various inference budgets" [...]
- Common hardware is 16GB or 80GB of VRAM. Usually, you have one or two of those GPUs within a system.
- Models are by default available as 16bit representation which leads to 2byte per parameter.
- To run a model, you need space for parameters and a bit remaining for your batch. So 7B fits on 1x 16GB GPU, 13B fits on 2x 16GB GPUs, (the Lab-leaked LLAMA-1 with 35B fits on 1x 80GB GPU) and the 70B LLAMA-2 model runs on 2x 80GB GPUs.

## IMHO 🤗

- I am looking forward to how 4bit quantization like GPTQ or AWQ changes the model sizes as you might also fit a roughly 145B quantized model on a single A100 with 80GB.
- Some use cases might need fewer model parameters but bigger batches, longer max context length, or faster inference which means fewer parameters or fewer deep networks.
- Consider smaller models especially because of the environmental costs if performance is sufficient.
- I am wondering if there is a true reason for how the parameters are combined within the architecture, the numbers partially feel randomly picked like 80 transformer layers for LLAMA-2 70B vs 40 of 13B version.

## Questions 🤔

- What is your preferred model(-family)?
- Do you use your models as plain or quantized versions?
- Do you think the model architectures of finetuned context window, hidden size, intermediate size, number heads, and transformer layers are well chosen that build the total needed VRAM volume?

Follow me for more content ❤️

#artificialintelligence #genai #machinelearning #llm

[LinkedIn Post](https://www.linkedin.com/posts/carsten-draschner_artificialintelligence-genai-maschinelearning-activity-7163192285034172416-AItW?utm_source=share&utm_medium=member_desktop)
