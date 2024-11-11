---
title: Alternative to GenAI creativity? Watch and try out these fun Evolutionary Algorithms. Problem-solving without GenAI and SGD-based approaches explained!
date: 2024-09-30
linkedInUrl: https://www.linkedin.com/posts/carsten-draschner_artificialintelligence-evolutionaryalgorithms-activity-7211741750673973248-V4Ej?utm_source=share&utm_medium=member_desktop
tags: blog
---

Exploring Evolutionary Algorithms as an alternative to GenAI for problem-solving, using a fun 2D vehicle race example.

![Evo Cars](/img/blog_images/evocars.png)

**TL;DR ⏱️**
- There is hype around GenAI and LLMs
- Evolutionary Algorithms (EAs) offer an alternative
- A fun example of EAs using a 2D vehicle race
- Steps involved in EAs explained

<!-- excerpt -->

## Background ☺️

- Within the field of AI is a GenAI and LLM Hype
- These are not always the best approach to solve a problem!
- There are interesting algorithms optimizing their behavior entirely differently: e.g., Evolutionary Algorithms (EA).
- Today I want to show you a fun EA introduction based on a 2D vehicle race "problem"

## Evolutionary algorithms (EAs) explained 👨🏼‍🏫

### Problem 🏁:
- What is the best vehicle configuration to drive over a 2D surface?

### Vehicle Configuration = Genome 🧬:
- Shape
- Wheel size
- Wheel position
- Wheel weight
- Chassis weight

### Key EA Steps on the vehicle race example 🔢 :
1) **Initialization**: Generate a set of vehicles with random characteristics (genome) called population
2) **Fitness Evaluation**: Check how far they have got on the randomly generated surface.
3) **Selection**: Select a subset of the best vehicles from the population to reproduce and form the next generation, e.g., by tournament selection or rank selection.
4) **Crossover (Recombination)**: Combine the genetic information of two or more selected vehicles to create new offspring. E.g., average two good car genomes or randomly select the information of each...
5) **Mutation**: Randomly modify the genetic information of some individuals in the population to introduce new variations and prevent convergence to a local optimum.
6) **Replacement**: Replace the least performing vehicles with new offspring generated through crossover and mutation.
7) **Termination**: Repeat until a stopping criterion is met: the needed distance, number of iterations, or convergence threshold.
8) **Output**: best vehicle, representing the near-optimal solution

## My Perspective 🤗:

- Be aware that there are a multitude of possible algorithms to use
- We at Comma Soft AG do not trust any hype and select the appropriate algorithms for the respective problem

## Credit ❤️

- To the development team of the interactive EA vehicle race
- I'd also like to thank Hajira Jabeen and Jens Lehmann for their great support in my MT project where I worked on EA and KG for the creation of novel recipes

## Links 📖

- EA vehicle race, try it out yourself: [https://lnkd.in/e2Ew3e7D](https://lnkd.in/e2Ew3e7D)
- Extract from my MT in a short paper: [https://lnkd.in/e8VRVe_k](https://lnkd.in/e8VRVe_k)
- My current GenAI work: [https://lnkd.in/edNx8uKh](https://lnkd.in/edNx8uKh)

## Questions

- How would you solve this "race" problem? EA, GenAI, RL, ...?
- Do you want to see more non-GenAI content?
- Have you ever used EA to solve a problem?

Stay tuned by following me here on Linked ❤️

#LostInGenai #artificialintelligence #evolutionaryalgorithms

[LinkedIn Post](https://www.linkedin.com/posts/carsten-draschner_artificialintelligence-evolutionaryalgorithms-activity-7211741750673973248-V4Ej?utm_source=share&utm_medium=member_desktop)
