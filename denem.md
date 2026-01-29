2026-01-08T14:30Z update opinion "TypeScript enums should be avoided" ^ts-enums #typescript
  confidence: "high"
  related: ^clean-code

  # Claim
  TypeScript enums should be replaced with `as const` objects.

  # Reasoning
  - Enums generate runtime code - `as const` provides the same type safety with zero overhead -
    Better tree-shaking support