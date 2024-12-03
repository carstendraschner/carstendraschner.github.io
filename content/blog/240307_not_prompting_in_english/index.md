---
title: Not prompting in English?... You have Problems!! LLM Language Barriers • Democratizing GenAI and fair pricing
date: 2024-03-07
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_genrativeai-artificialintelligence-machinelearning-activity-7165320754878730242-CICO?utm_source=share&utm_medium=member_desktop
tags: blog
---

Exploring the challenges of using Generative AI with languages other than English and the implications for cost and performance.

![Image 1](/img/blog_images/1708345591968-4.jpeg)

**TL;DR ⏱️**
- Tokenizers and their role in LLMs
- Challenges of non-English prompts
- Efficiency and fairness in GenAI
- Recommendations for LLM pipelines

<!-- excerpt -->

## Tokenizer ✂️

- Generative AI Large Language Models process tokens
- Tokenizers are a preprocessing step of LLMs and cut prompts into subwords called tokens
- Tokenizers are optimized to efficiently compress text into a limited number of tokens
- Tokenizers are optimized based on large text corpora
- LLM pipeline hardware load grows based on number of tokens
- OpenAI GPT API charges per token

## My findings & my takes 😰

- You do not prompt in English... You have Problems!
- You have to pay more if you are communicating in a language other than English as the tokenizer creates more tokens (see image)
- You'll likely get worse results from LLMs since they haven't seen as much text in your target language during pretraining
- You can fit less non-English text into an LLM, which has limited context length, meaning you can't solve similarly complex tasks with same LLM
- Using LLMs in German I am still quite lucky since German is reasonably well represented in most training data corpora and due to the relative similarity between German and English the difference in token decompositions is less pronounced. However, there are many languages (in particular those not using the Latin alphabet) for which the effects are much larger.

## IMHO 🤗

- We will gather extraordinary efficiency gains through generative AI but we need to be careful that these gains are available to truly all people including those not using GenAI in English
- If you are building your own LLM pipeline as we do at Comma Soft AG, check out how the tokenizer and language model interact with your language. This might affect the costs or max context length of your text
- As the pricing per token is based on the technical costs to process a certain text, I can understand it from that perspective… But it is unpleasant as you pay more for the same prompt while likely getting worse results and having more limitations in prompt complexity e.g. when using RAG insertions
- Possibly LLMaaS could provide differently trained LLMs focused on regions and languages yielding better tokenizers and performance for lower resource languages

## Related Topics 📚

1. Who should decide about alignment? especially when we speak about regional LLMs: [https://shorturl.at/dwGIQ](https://shorturl.at/dwGIQ)
2. What is fair pricing for content-filtered GenAI results: [https://shorturl.at/aCF16](https://shorturl.at/aCF16)
3. What is the best LLM for you: [https://shorturl.at/bmuP8](https://shorturl.at/bmuP8)
4. Try out Open AI tokenizer: [https://lnkd.in/eKhrP7qi](https://lnkd.in/eKhrP7qi)

Hashtag#generativeai Hashtag#artificialintelligence Hashtag#machinelearning Hashtag#aiethics

For more content, brainstorming, and discussions, follow me or reach out to me ❤️

[LinkedIn Post](https://www.linkedin.com/posts/carsten-draschner_genrativeai-artificialintelligence-machinelearning-activity-7165320754878730242-CICO?utm_source=share&utm_medium=member_desktop)
