// Teravora component library — public surface (workstream T foundation).
export { Button } from "./Button/Button";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./Button/Button";
export { ActionLink } from "./Link/ActionLink";
export type { ActionLinkProps } from "./Link/ActionLink";
export { SkipLink } from "./SkipLink/SkipLink";

export { Field, FieldShell } from "./form/index";
export {
  TextInput,
  Textarea,
  Select,
  RadioGroup,
  Checkbox,
  FieldError,
} from "./form/index";
export type { SelectOption } from "./form/Select";
export type { RadioOption } from "./form/RadioGroup";

export { ProposalForm } from "./ProposalForm/ProposalForm";
export type { ProposalFormProps, ProposalResult } from "./ProposalForm/ProposalForm";
export * from "./ProposalForm/proposalConfig";

export { Nav } from "./Nav/Nav";
export type { NavItem, NavProps } from "./Nav/Nav";
export { Footer } from "./Footer/Footer";
export type { FooterProps, FooterColumn } from "./Footer/Footer";

export { Card } from "./Card/Card";
export type { CardProps, CardVariant } from "./Card/Card";

export { ProofBlock } from "./ProofBlock/ProofBlock";
export type { ProofBlockProps, ProofItem, ProofItemKind } from "./ProofBlock/ProofBlock";

export { MetricCounter } from "./MetricCounter/MetricCounter";
export type {
  MetricCounterProps,
  MetricSource,
  MetricFormat,
} from "./MetricCounter/MetricCounter";

export { DataViz } from "./DataViz/DataViz";
export type {
  DataVizProps,
  DataRow,
  DataSeries,
  DataVizType,
} from "./DataViz/DataViz";

export { Accordion } from "./Disclosure/Disclosure";
export type { AccordionProps, DisclosureItem } from "./Disclosure/Disclosure";
export { Tabs } from "./Disclosure/Tabs";
export type { TabsProps, TabItem } from "./Disclosure/Tabs";

export { Scrollytelling } from "./Scrollytelling/Scrollytelling";
export type { ScrollytellingProps, ScrollyStep } from "./Scrollytelling/Scrollytelling";

export { JsonLd, FaqJsonLd } from "./JsonLd/JsonLd";

export { MethodEngine } from "./MethodEngine/MethodEngine";
export type { MethodEngineProps, MethodStage } from "./MethodEngine/MethodEngine";

export { FrameworkBadges } from "./FrameworkBadges/FrameworkBadges";
export type {
  FrameworkBadgesProps,
  FrameworkDetail,
} from "./FrameworkBadges/FrameworkBadges";
