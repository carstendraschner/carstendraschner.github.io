---
title: We've beaten GPT4! ... is a sentence which starts to annoy me.
date: 2024-02-20
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_generativeai-artificialintelligence-llm-activity-7160295294906101761-koWS?utm_source=share&utm_medium=member_desktop
tags: blog
---
About Mistrust in LLM Evaluation. Benchmark contamination in LLMs? How to Evaluate GenAI?!

![Image 1](/img/blog_images/1707147429256-3.jpeg)

**𝗧𝗟;𝗗𝗥 ⏱️**
- News is flooded with LLMs being “better” than GPT4
- LLM Evaluation is Difficult
- Benchmark Contamination is a serious issue
- Build your own use case specific benchmarks

<!-- excerpt -->

## Why do we need LLM benchmarks? 📊
- Many use cases can be solved by GenAI more specifically by LLMs
- Many LLMs are available as AIaaS or as an open-source model
- At some point, you need to select a specific model for your dedicated use case
- News is flooded by a multitude of models that are better than some reference LLM like OpenAIs GPT4

## Why is LLM Evaluation? 👩🏽‍🔬
- When we speak about leaderboards and benchmarks, we look into specific types of tasks.
- Those tasks need to be “easily measurable” as LLM might generate arbitrary texts.
- e.g. MMLU is simply a multiple choice and looks if first generated character is A-E.
- Other Benchmarks use e.g. another LLM as judge (which is expensive) and also fuzzy.
- **It is almost impossible to measure if an LLM learned the benchmark data by heart in its pretraining/fine-tuning stage to get on top of the leaderboard.**

## My Tasks 🔍 
- Leaderboards are only a starting point for model selection.
- GenAI approach selection is a multidimensional problem.
- Develop a use-case-specific evaluation framework e.g. does the generated code run/match unit tests, is secure and fast
- For most of my use cases I barely care if the model can solve English multiple choice questions by simply evaluating if the first character is an A, B, C, D, or E like in MMLU.
- Already simple throughput benchmarks seem to have their issues. see: https://rb.gy/5l8qqp

## Extract of my hands-on criteria👨🏼‍💻
- Under which license is the model available and does the license allow my intended usage?
- What do we know about retuning especially regarding: multi-language support, instruction tuning, alignment, and context length?
- What hardware requirements/costs do we face, and which throughput can we provide? e.g. 13B vs 8x7B vs 70B ...

## Credit ❤️
- To Hugging Face and other platforms for providing LLM Leaderboards and easily accessible models
- To OpenAI with its GPT-4 as reference established to be beaten
- To all benchmark creators and researchers supporting transparent and reliable GenAI evaluation

## My Questions?
- What are the criteria you look at?
- What are the best benchmarks for you & why do you trust those?
- Do you create your own benchmarks as we do Comma Soft AG 

#generativeai #artificialintelligence #llm #machinelearning #benchmark