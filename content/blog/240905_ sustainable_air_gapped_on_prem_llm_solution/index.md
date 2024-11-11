---
title: Sustainable Air-Gapped On-Prem LLM Solution! How can we make GenAI available on almost any hardware, and how is it also available as a portable demo on our Alan Notebook 
date: 2024-09-30
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_genai-onprem-llm-activity-7233851548349444097-lF4N?utm_source=share&utm_medium=member_desktop
tags: blog
---

Exploring the development of a full-stack GenAI LLM solution that can run on a variety of hardware configurations, including a portable demo setup.

![Alan Notebook](/img/blog_images/1724684606019.jpeg)

**TL;DR ⏱️**
- Developing Alan, a full-stack GenAI LLM solution
- Hosted on German hyperscaler infrastructure
- Offers a smaller version, Alan-S-LLM
- Portable demo available on Alan Notebook

<!-- excerpt -->

## What We're Working on When We Talk About Alan R&D 👨🏼‍💻

- In a recent post, I introduced how we're developing Alan, a full-stack GenAI LLM solution.
- We host our solution within German hyperscaler infrastructure to deal with the requirements of multiple customer tenants and our large language models, including retrieval augmented generation pipelines.
- The requirements of our strongest Alan LLM require current top-notch Nvidia GPUs (Ampere+, 80GB VRAM), but we also offer a smaller Alan-S-LLM, which still has tremendous capabilities with fewer hardware requirements.

## How to Shrink LLMs 🤖

- Models are smaller in dimensions like the number of transformer layers, heads, hidden dimensions, and other hyperparameters.
- Current smaller GenAI LLMs can be designed by model distillation and model pruning, which try to keep model quality high while reducing the number of parameters.
- The reduced number of parameters reduces VRAM requirements. Fewer parameters, especially fewer transformer layers, increase the throughput and inference performance as well.
- The reduction of bits used to represent each parameter of the LLM reduces the required total GPU VRAM.

## Our Alan Demo Notebook 💻

- To demonstrate that our entire tech stack is capable of running entirely air-gapped and to showcase that we're truly capable of showing this on even a portable system, we developed the Alan-Notebook.
- This notebook uses the entire tech stack, which includes all the components that offer Multi-GPU Cluster setups, handling of users, RAG pipelines, and, of course, LLM text inference.
- The model behind is our fastest and most efficient Alan-S-Model. The notebook has limited hardware capabilities, especially within the GPU (16GB, Nvidia), but can still run the entire tech stack.

## Further Reading:

- LLM Model Sizes: [https://shorturl.at/6ZxMq](https://shorturl.at/6ZxMq)
- Alan - Our Developer Journey: [https://shorturl.at/PqLdE](https://shorturl.at/PqLdE)
- Full details of how infrastructure is scaled down by Dr. Laura Maaßen see [https://lmy.de/eicOw](https://lmy.de/eicOw)

If you're interested in how we develop an entire scalable GenAI solution and you want to see some details into our R&D, follow me on LinkedIn and reach out to us. Thanks to my wonderful teammates Dr. Laura Maaßen and Lars Flöer, who made this Alan Notebook possible, and to the entire Alan Development Team Comma Soft AG for supporting this great project and product.

#genai #onprem #llm #alan

[LinkedIn Post](https://www.linkedin.com/posts/carsten-draschner_genai-onprem-llm-activity-7233851548349444097-lF4N?utm_source=share&utm_medium=member_desktop)
