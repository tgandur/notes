---
type: research-note
topic: KVKK and AI in healthcare
source: Gemini 2.5 Flash (2025-12-12)
related:
- '[[Working-Draft-With-Evidence]]'
- '[[Privacy expectations in Turkish mental health settings]]'
tags:
title: Turkish data protection law KVKK considerations
permalink: efforts/research/ai-clinical-psychology-ethics/notes/turkish-data-protection-law-kvkk-considerations
---

# Turkish data protection law KVKK considerations
#jots #ai-ethics

Related: [[202512011220-AI Ethics & Mental Health Professionals]]


## What is KVKK?

**Kişisel Verilerin Korunması Kanunu (KVKK)** - Turkish Law on the Protection of Personal Data (Law No. 6698)

- **Enacted:** 2016
- **Similar to:** EU GDPR
- **Purpose:** Protect fundamental rights and freedoms of individuals, especially privacy

## Key Principles Relevant to AI in Mental Health

### 1. Health Data as Special Category (Sensitive)

Health data receives **strictest protection** under KVKK:
- Requires explicit consent OR
- Processing by authorized persons/institutions for:
 - Protection of public health
 - Preventive medicine
 - Medical diagnosis, treatment, care services
 - Health services planning and management

**Implication for AI:** Mental health professionals using AI tools are processing sensitive data and must ensure proper legal basis.

### 2. Legal Grounds for Processing Health Data with AI

**Option A: Explicit Consent** (safest for AI)
- Must be freely given, specific, informed, unambiguous
- **Challenge for AI:** Defining "specific purpose" for evolving AI applications is difficult
- Example: "I consent to my therapy session notes being analyzed by AI diagnostic tool X for purpose Y"

**Option B: Medical Services Provision (Article 6)**
- AI used for direct patient care (diagnosis, treatment planning, predictive analytics)
- Must be deployed by authorized healthcare provider
- Subject to professional secrecy obligations
- **Turkish mental health context:** Psychologists and psychiatrists can use this basis

**Option C: Anonymization**
- If data is genuinely anonymized (irreversibly stripped of identifiers), KVKK doesn't apply
- **Challenge:** True anonymization is difficult with clinical data
- Pseudonymization still counts as personal data

### 3. Data Minimization and Purpose Limitation

**KVKK Requirement:** Data must be:
- Relevant and limited to what is necessary
- Processed only for specific, explicit, legitimate purposes

**AI Challenge:** AI thrives on large datasets
- Mental health AI developers must justify why specific data types are needed
- Example: AI for depression screening shouldn't collect unrelated family medical history

### 4. Data Subject Rights - Critical for Mental Health AI

**Right to Information:**
- Patients must be informed about AI processing
- **Challenge:** How to explain complex AI systems to patients?
- Mental health context: Therapeutic relationship requires transparency

**Right to Erasure ("Right to be Forgotten"):**
- **Major AI challenge:** How to erase data from trained AI model?
- "Model unlearning" is technically difficult or impossible
- **Mental health implication:** Patients have right to withdraw data, but AI may retain learned patterns

**Right to Object to Automated Decision-Making:**
- If AI makes significant decision (diagnosis, treatment recommendation) without human intervention
- Patient can request human review
- **Mental health context:** Critical given nature of clinical decisions

### 5. Transparency and Explainability ("Black Box" Problem)

KVKK principles of fairness and accountability imply:
- Healthcare providers should explain how AI reached conclusions
- **Mental health context:** Therapeutic alliance requires trust; explainability crucial
- **Turkish cultural consideration:** Collectivist values may increase importance of involving family in understanding AI decisions

### 6. Security Measures

**Required:** Robust technical and organizational measures
- Encryption
- Access controls
- Secure development practices
- Regular audits
- Breach response plans

**Mental health context:** Stigma around mental health in Turkey makes data breaches especially harmful

### 7. Cross-Border Data Transfers

**Challenge:** Many AI services are international (cloud hosting, model training)
**KVKK requirement:**
- Explicit consent OR
- Adequate protection in recipient country OR
- Standard contractual clauses

**Turkish mental health context:**
- Using foreign AI tools (e.g., OpenAI, Google) requires careful legal review
- May prefer domestic AI solutions for compliance

### 8. Data Protection Impact Assessments (DPIAs)

**Recommended for AI in healthcare:**
- Assess risks to individuals' rights and freedoms
- Develop mitigation strategies
- **Should be done before deploying AI** in mental health settings

## Implications for My Research

### For Literature Review:

1. **Gap in Literature:** No studies examine KVKK compliance of AI ethics knowledge among Turkish mental health professionals
2. **Cultural-Legal Intersection:** Turkish professionals must navigate both cultural values AND strict legal requirements
3. **Organizational Readiness:** Turkish institutions need KVKK-compliant infrastructure for AI adoption

### Research Questions to Consider:

- Do Turkish mental health professionals understand KVKK requirements for AI?
- Does KVKK knowledge moderate relationship between AI ethics knowledge and adoption?
- What barriers exist to KVKK-compliant AI implementation in Turkish mental health settings?

### Potential Themes:

1. **Legal Uncertainty:** Evolving nature of AI creates KVKK compliance challenges
2. **Consent Challenges:** How to obtain informed consent for AI in therapy?
3. **Explainability Requirements:** Turkish law + therapeutic alliance = double need for transparency
4. **Cross-Border Tensions:** Using international AI tools vs. KVKK compliance

## Key Differences from Western Context

| Aspect | Western (GDPR) Context | Turkish (KVKK) Context |
|--------|------------------------|------------------------|
| **Enforcement** | Well-established, aggressive fines | KVKK Authority still developing enforcement patterns |
| **Healthcare System** | Varied (public/private insurance models) | Mixed (SGK public insurance + private) - different compliance needs |
| **Mental Health Stigma** | Lower stigma | Higher stigma - privacy breaches more damaging |
| **Cultural Values** | Individualistic - patient autonomy primary | Collectivistic - family involvement expected, complicates consent |
| **AI Adoption** | Faster, more established | Emerging - legal frameworks still being tested |

## Questions for Turkish Mental Health Professionals (Survey/Interview)

1. Are you familiar with KVKK requirements for health data?
2. Do you know your obligations under KVKK when using AI tools?
3. How would you obtain valid consent from patients for AI use?
4. What concerns do you have about KVKK compliance with AI tools?
5. Do your institutions have KVKK-compliant infrastructure for AI?
6. Have you received training on KVKK and AI?

## Sources to Find

- [ ] KVKK Authority guidance on AI in healthcare (if exists)
- [ ] Turkish Medical Association position on AI and data protection
- [ ] Turkish Psychological Association guidance on KVKK
- [ ] Case studies of KVKK enforcement in healthcare
- [ ] Academic papers on KVKK implementation challenges in Turkish healthcare

## Related Notes

- [[Privacy expectations in Turkish mental health settings]]
- [[Cultural aspects of informed consent in Turkish healthcare]]
- [[Organizational readiness in Turkish mental health institutions]]
- [[Regulatory environment and institutional policies]]

---

**Note:** This information synthesized from Gemini query. Needs verification with official KVKK Authority sources and legal experts.

Tarık Gandur Notes: 
KVKK forbids to send personal data to outside Turkey. So with client data local models must be used or data should be properly anonymized.