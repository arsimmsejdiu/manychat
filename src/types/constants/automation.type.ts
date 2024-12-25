export type AutomationListenerProps = {
  id: string;
  label: string;
  icon: JSX.Element;
  description: string;
  type: "SMARTAI" | "MESSAGE";
};

export type AutomationsTriggerProps = {
  id: string;
  label: string;
  icon: JSX.Element;
  description: string;
  type: "COMMENT" | "DM";
};
