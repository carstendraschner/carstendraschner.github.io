---
title: Alan - Full-Stack Enterprise GenAI and LLM Platform
date: 2025-10-01
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_humboldt-travel-report-alan-llm-genai-activity-7208854388101005312-Xr_o?utm_source=share&utm_medium=member_desktop
tags: project
---

Alan is a sovereign enterprise GenAI platform by Comma Soft AG, built around secure LLM usage, company knowledge, retrieval augmented generation, evaluation, and deployment options for European organizations.

![Alan project overview](/projects/2025_Alan/alanpdf.png)

**TL;DR ⏱️**
- Full-stack GenAI platform for secure enterprise LLM usage
- Focus on German and European requirements, data control, and GDPR-aware deployment
- Technical work around RAG, model selection, fine-tuning, evaluation, alignment, and scalable inference
- Built as a product and learning journey, not just a wrapper around existing chat models

<!-- excerpt -->

## Context

Alan was developed at Comma Soft AG as an enterprise GenAI platform for organizations that want to use Large Language Models with stronger control over their data, infrastructure, and business context. The public Alan documentation describes it as a software solution for using Generative AI and especially LLMs securely in organizations, with a focus on making AI accessible without requiring every user to understand the underlying technical complexity.

The motivation was not simply to add another chat interface. In my original post about the Alan development journey, I framed the question as: do we need another GenAI solution? The technical answer was that many enterprise use cases need more than access to a strong base model. They need data-flow control, secure hosting, on-premise or air-gapped deployment options, domain adaptation, knowledge enrichment, alignment choices, and evaluation methods that the team can actually trust.

## What made the project interesting

Alan sits at the intersection of research, software engineering, enterprise architecture, and responsible AI product development. Public Alan materials emphasize secure deployment, German hosting, GDPR-compliant usage, on-premise operation, RAG, APIs, team collaboration, role management, and optional fine-tuning for company-specific requirements.

From my perspective, the most interesting technical work was around building an end-to-end GenAI system rather than a single model demo:

- **Model and system design:** selecting, adapting, and combining models for enterprise use cases
- **RAG and knowledge enrichment:** deciding when to add knowledge through retrieval and when model adaptation is more appropriate
- **Evaluation:** combining lightweight metrics, benchmarks, LLM-as-a-judge methods, safety checks, and human assessment
- **Operational constraints:** making the stack useful under realistic infrastructure, latency, cost, and data protection requirements
- **Air-gapped and on-premise scenarios:** showing that GenAI can also work in environments where cloud-only assumptions are not enough

## My contribution areas

During my time as Applied AI Scientist and Machine Learning Consultant at Comma Soft AG, I worked around the technical development and applied R&D of Alan and related GenAI projects. The work connected LLM training and fine-tuning, autonomous hybrid model evaluation, model selection, RAG, response verification, image GenAI, and scalability optimization.

Several topics from my blog posts came directly out of this work:

- why enterprise GenAI requires deliberate model selection instead of defaulting to the newest public model
- how small changes in preprocessing, generation configuration, or benchmark data can ripple through an LLM creation pipeline
- why German and European language requirements matter for tokenizer behavior, quality, cost, and trust
- how smaller models, quantization, and optimized deployment can make GenAI practical beyond large GPU clusters
- why evaluation has to be layered, because no single benchmark captures usefulness, safety, reliability, and domain fit

## Lessons learned

The Alan project reinforced a pragmatic view of GenAI: the model is only one part of the product. For real organizations, the surrounding system matters just as much. Data governance, user workflows, integration, deployment, cost, latency, evaluation, documentation, and change management decide whether a powerful model becomes useful in practice.

It also showed how important it is to keep research curiosity close to product reality. New models, evaluation methods, agentic patterns, and RAG techniques move quickly. But enterprise systems need stability, transparency, and a clear view of the trade-offs. That tension made Alan an especially valuable project for me: it combined hands-on LLM engineering with the practical question of how organizations can adopt GenAI responsibly.

## Sources and related posts

- [Alan - sovereign AI platform by Comma Soft](https://alan.de/)
- [About Alan - Alan Documentation](https://app.alan.de/docs/en/about-alan)
- [Alan features](https://alan.de/features/)
- [Comma Soft: Generative AI consulting](https://comma-soft.com/en/generative-ai-consulting/)
- [Travel Report #02 - the journey to Comma Soft's own AI](https://comma-soft.com/en/humboldt-group/travel-report-02/)
- [Original Alan development journey post](https://www.linkedin.com/posts/carsten-draschner_humboldt-travel-report-alan-llm-genai-activity-7208854388101005312-Xr_o?utm_source=share&utm_medium=member_desktop)
- [Sustainable air-gapped on-prem LLM solution](/blog/240903_sustainable_air_gapped_on_prem_llm_solution/)
- [Understanding the levels of LLM evaluation](/blog/250801_llm_evaluation/)
- [Butterfly effect in LLM creation pipelines](/blog/241120_were_dealing_with_the_butterfly_effect_in_llm_creation_pipelines/)
