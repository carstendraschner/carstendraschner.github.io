---
title: Bigger AI Risk due to Sleeper Agents, MCP & Reasoning Attacks
date: 2025-05-02
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_%F0%9D%90%8D%F0%9D%90%A8%F0%9D%90%B0-%F0%9D%90%9B%F0%9D%90%A2%F0%9D%90%A0%F0%9D%90%A0%F0%9D%90%9E%F0%9D%90%AB-%F0%9D%90%80%F0%9D%90%88-%F0%9D%90%91%F0%9D%90%A2%F0%9D%90%AC%F0%9D%90%A4-%F0%9D%90%9D%F0%9D%90%AE%F0%9D%90%9E-activity-7346098458044342272-MN3o?utm_source=share&utm_medium=member_desktop&rcm=ACoAACHjjm8B3BZCMjF5D-kMGt5KR8dfUUXY4f0
tags: blog
---

Now bigger AI Risk due to Sleeper Agents, MCP & Reasoning Attacks

![Image 1](/blog/250502_sleeperagents_mcp/250502_sleeperagents_mcp.png)

**TL;DR ⏱️**
- Increased risks from LLM backdoors or data poisoning via tool calling  
- “Sleeper Agents” hidden in open-weight models  
- Closed-source models vulnerable through pre-tuning data injection  
- Possible new attack surface when using MCP  

<!-- excerpt -->

## Background

🤖 Large Language Models (LLMs) are becoming true **agents**, as they increasingly gain the ability to call external tools.  
📡 Anthropic's **Model Control Protocol (MCP)** is emerging as a standard to structure and execute those tool calls.  
📚 Models are still pre-trained on massive internet corpora, often including marginal content due to imperfect filtering.  
🧠 Even after fine-tuning for tool-calling, **residual knowledge** embedded in pre-training can resurface in harmful ways.  

## What have I done:

I explored current **threat vectors** around tool-calling agents and model safety:  
🅰️ **Poisoned pre-training data**: attackers can publish malicious tool snippets under open licenses, ensuring they end up in training sets.  
🅱️ **Back-doored model releases**: rogue actors may upload altered models (e.g., quantized versions on Hugging Face) secretly fine-tuned to trigger harmful behavior.  

➡️ Both lead to what Evan Hubinger et al. call **“Sleeper Agents”** — models that look safe during evaluation but turn malicious under certain conditions.  
😱 With tool calling, these models can now **“act” in the real world**: sending data, accessing systems, or performing harmful actions.  

## IMHO:

🚨 Detection is getting much harder:  
- **Long reasoning traces**: multi-step tool calls make attribution difficult.  
- **Context-specific triggers**: sleeper behavior may remain hidden in standard tests.  
- **Closed vs. open weights**: closed-source hides risks, open-weight models allow silent malicious re-uploads.  

❓We need to ask:  
- Are sleeper agents a bigger risk than conventional security threats?  
- What real defences exist — dataset provenance proofs, cryptographic attestation, sandboxing?  
- How do we **audit reasoning at scale** once autonomous LLM agents proliferate?  

At Comma Soft AG, we adopt new technologies only when they create real value.  
✅ Safeguarding our customers’ data and IP remains paramount.  
🇩🇪 That’s why we host **Alan.de**, our enterprise-grade LLM platform, fully in Germany.  

❤️ Feel free to reach out and like if you want to see more of such content.

#AI #SleeperAgents #MCP #ReasoningAttacks #LLMSecurity #DataPoisoning #ModelSafety
