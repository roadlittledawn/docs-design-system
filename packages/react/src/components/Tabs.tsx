import React, { useState, createContext, useContext } from "react";

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

interface TabsProps {
  /** ID of the initially active tab */
  defaultActiveTab?: string;
  /** Controlled active tab ID */
  activeTab?: string;
  /** Callback when tab changes */
  onTabChange?: (id: string) => void;
  /** Tab content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function Tabs({
  defaultActiveTab,
  activeTab: controlledActiveTab,
  onTabChange,
  children,
  className = "",
}: TabsProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(
    defaultActiveTab || ""
  );

  const isControlled = controlledActiveTab !== undefined;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

  const setActiveTab = (id: string) => {
    if (!isControlled) {
      setInternalActiveTab(id);
    }
    onTabChange?.(id);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={`dds-tabs ${className}`.trim()}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabListProps {
  /** Tab buttons */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function TabList({ children, className = "" }: TabListProps) {
  return (
    <div className={`dds-tabs-list ${className}`.trim()} role="tablist">
      {children}
    </div>
  );
}

interface TabProps {
  /** Unique identifier for this tab */
  id: string;
  /** Tab label */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function Tab({ id, children, className = "" }: TabProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tab must be used within Tabs component");
  }

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === id;

  return (
    <button
      className={`dds-tab ${isActive ? "dds-tab-active" : ""} ${className}`.trim()}
      onClick={() => setActiveTab(id)}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      id={`tab-${id}`}
      type="button"
    >
      {children}
    </button>
  );
}

interface TabPanelProps {
  /** ID matching the corresponding Tab */
  id: string;
  /** Panel content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function TabPanel({ id, children, className = "" }: TabPanelProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("TabPanel must be used within Tabs component");
  }

  const { activeTab } = context;
  const isActive = activeTab === id;

  if (!isActive) return null;

  return (
    <div
      className={`dds-tab-panel ${className}`.trim()}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      id={`panel-${id}`}
    >
      {children}
    </div>
  );
}
