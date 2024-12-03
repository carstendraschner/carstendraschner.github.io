---
title: Evil LLMs available! Break GenAI Alignment through finetuning! 
date: 2024-02-05
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_what-happens-when-you-break-llm-alignment-activity-7157765084734214144-2yGt?utm_source=share&utm_medium=member_desktop
tags: blog
---

Need for LLM Alignment transparency?

![Image 1](/img/blog_images/evilllm.png)

**TL;DR ⏱️**
- Powerful LLMs are mostly aligned
- Alignment can be broken through finetuning
- Need for transparency in alignment processes
- Questions about alignment in LLMs

<!-- excerpt -->

For one of the most interesting open source LLMs, the Mixtral 8x7B, a finetuned LLM is available which has “broken” Alignment & answers to problematic prompts without prompt injections. Example in images (reference see below) shows “funny” but the astonishing LLM capabilities with broken Alignment.

## Powerful LLMs are mostly aligned (Mixtral, LLAMA2, GPT4, …)

- They try to not give problematic responses
- Some prompt-based attacks are already known to breach this behavior
- But: model weights can be finetuned to break Alignment
- Some use cases might need different Alignment than pre-implemented LLM Alignment or our standards are not reflected within LLM behavior.
- Alignment process is majorly intransparent

## LLM/GPT creation three-step approach ⚙️

1) Initial pretuning: Next token prediction
2) Chat/Instruction finetuning: training for conversational interaction & execution of tasks
3) Alignment: Adjust answers to not respond to critical questions like: creation of hate speech, critical advice in health issues, creation of spam or fraudulent content, and other

## Alignment Explanation 👩🏽‍🏫

- Done in a mixture of click workers (ethical aspects raised in linked article*) and AI as evaluator (RLHF/RLAIF). Rate which answers are better not to be given or should be given differently. Based on feedback model weights are adjusted.
- Mostly intransparent process
- Unknown what is truly covered (not) to be answered

## My Questions 🤷🏼‍♂️

- Do you had ever issues with Alignment in LLM interaction?
- Do you check Alignment when selecting an OS Model?
- Have you ever adjusted Alignment on model weights basis?
- Do you think it is valuable or too critical to release more or less aligned LLMs?
- Do we need regulation for model alignment?

## IMHO 🤗

- We need transparent statements on how models were aligned and how their behavior has changed, while covering ethical concerns when providing LLMs with reduced Alignment.
- We need information on how easily well-adapted LLMs can be tripped with prompt engineering or finetuning.
- We might need less aligned LLMs for research or in special use cases:
  e.g. if in the healthcare sector a model should respond because an expert is using it as assistance, or for security reasons to create e.g. sample datasets for countermeasures against LLM-based phishing attacks (which are based on de-aligned) LLMs
- Release models with awareness of possible dual use!

Within a great team @Comma Soft AG we are evaluating, selecting and finetuning open source LLMs for dedicated use cases.

Credit to:
Eric Hartford & Hugging Face & Mistral AI
[https://lnkd.in/eyBSi4iu](https://lnkd.in/eyBSi4iu)
AI Ethics - clickworkers:
[https://lnkd.in/eKFfQZfF](https://lnkd.in/eKFfQZfF)

#genai #artificialintelligence #aiethics #huggingface #llm #alignment

[LinkedIn Post](https://www.linkedin.com/posts/carsten-draschner_what-happens-when-you-break-llm-alignment-activity-7157765084734214144-2yGt?utm_source=share&utm_medium=member_desktop)
