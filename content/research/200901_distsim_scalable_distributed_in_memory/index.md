---
title: DistSim - Scalable Distributed in-Memory Semantic Similarity Estimation for RDF Knowledge Graphs
description: 2021 IEEE 15th International Conference on Semantic Computing (ICSC), Carsten Felix Draschner, Jens Lehmann and Hajira Jabeen
date: 2021-09-30
linkedInUrl: https://ieeexplore.ieee.org/document/9364473
tags: research
---

A semantic similarity estimation extension to SANSA.

![DistSim](/img/research_images/distsim.png)

**TL;DR ⏱️**
- Scalable Similarity Estimation for RDF Knowledge Graphs
- MinHash with locality sensitivity hashing
- SANSA stack integration

<!-- excerpt -->

DistSim includes several feature-based graph entity similarity estimators. The Similarity Estimation Pipeline was created by merging generic software modules. DistSim introduces MinHash with locality sensitivity hashing for large-scale RDF data to improve scalability over all-pair similarity estimations. DistSim's modules can be configured using a variety of (hyper-)parameters to manage the trade-off between information considered and processing time. Furthermore, the similarity estimation pipeline's output is native RDF. DistSim is part of the SANSA stack, with documentation in Scala-docs and unit tests.