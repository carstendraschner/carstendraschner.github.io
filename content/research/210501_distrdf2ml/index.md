---
title: DistRDF2ML - Scalable Distributed In-Memory Machine Learning Pipelines for RDF Knowledge Graphs
description: Proceedings of the 30th ACM International Conference on Information & Knowledge Management (CIKM), Carsten Felix Draschner, Claus Stadler, Farshad B. Moghaddam, Jens Lehmann, and Hajira Jabeen
date: 2021-12-01
linkedInUrl: https://dl.acm.org/doi/10.1145/3459637.3481999
tags: research
---

A scalable and distributed framework for building in-memory data preprocessing pipelines for Spark-based ML on RDF Knowledge Graphs.

![DistRDF2ML](/img/research_images/distrdf2ml.png)

**TL;DR ⏱️**
- Scalable Machine Learning Pipelines for RDF Knowledge Graphs
- Fixed-length numeric feature vectors for ML
- Semantic structure for enhanced reusability, explainability, and reproducibility

<!-- excerpt -->

The generic, scalable, and distributed framework DistRDF2ML is presented for building in-memory data preprocessing pipelines for Spark-based ML on RDF KGs. This framework includes software modules that convert large-scale RDF data into fixed-length numeric feature vectors suitable for ML. The generated modules are tailored to KGs' multi-modal nature. The pipeline's modules, hyper-parameters, and outputs are all exported in a semantic structure that can be utilized to improve the original KG. The semantic representation of metadata and ML outcomes has the advantage of enhancing the reusability, explainability, and reproducibility of ML processes.
