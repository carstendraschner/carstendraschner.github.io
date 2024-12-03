---
title: DALLE has surprising guardrails. Your image is not filtered based on your prompt. "Dead cookies" may be generated ...sometimes 
date: 2024-02-13
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_artificalintelligence-genai-aiethics-activity-7158865169689821184-J8Y_?utm_source=share&utm_medium=member_desktop
tags: blog
---

Interesting findings on DALLE's content filtering mechanisms.

![Image 1](/img/blog_images/1706806459431.jpeg)

**TL;DR ⏱️**
- DALLE-3 filters your content AFTER image creation
- With prompt “dead cookies” you can reproduce inconsistent filtering over OpenAI API
- 40% of cases with same “dead cookies” prompt stop through content filter and 60% reach us over API

<!-- excerpt -->

## What is DALLE-3 🖼️

- DALLE 3 is a generative text-to-image model by OpenAI also available as API
- You pay per image
- Images are created based on your prompt like “dead cookies”.
- You can also add details like: “Dead Cookies in cute Pixar style” or “Dead cookies with dramatic situation in cute Pixar style”
- Open-Source image GenAI models alternatives are available e.g., Stable Diffusion
- Image GenAI are under discussion because of misuse like deepfakes or reproducing intellectual property.

## Finding/Observation: 👩🏽‍🔬

- DALLE-3 has a content filter to reduce misuse
- If you hit the content filter you do not get a resulting image for your prompt.
- The content filter is not applied based on the prompt, it is applied AFTER DALLE-3 generated the image, and the API decides in an extra step if the image should be sent to you. Likely some Image classifier.
- Same prompt sometimes results in an image and sometimes in a content-filter response. For the prompt “dead cookies” you get in 60% of requests an image and in 40% a content filter issue

## How we found out 🍪

- We @Comma Soft AG develop tools and pipelines with OS GenAI but also with API requests.
- For good API-response handling, we also had to consider content filter scenarios. So we combined trigger words like "dead" with something like "cookies"
- We had inconsistent content filter and still the finding that in case of content filter the response time was roughly as long as in the case of created image.

## My Questions to you 🤷🏼‍♂️

- Who should pay for “dead cookies” if the resulting image was created but not sent due to content filter?
- Have you known that the content filter for DALLE-3 is applied after image generation?
- Do you also encounter content filter although your prompts were in principle ok?
- Do you think content filters are a reasonable image GenAI misuse countermeasure?
- How would you reduce Image GenAI misuse?
- And most interesting (and we might never know OpenAI/DALL-E Open Ai), how do “Dead Cookies” images look like which are filtered out? 😅

The image was created by the prompt "Dead cookies in cute pixar style"
If you like more of such content, reach out to me 😊

#artificalintelligence #genai #aiethics #dalle #openai #texttoimage #deepfakes

[LinkedIn Post](https://www.linkedin.com/posts/carsten-draschner_artificalintelligence-genai-aiethics-activity-7158865169689821184-J8Y_?utm_source=share&utm_medium=member_desktop)
