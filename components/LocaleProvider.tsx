// components/LocaleProvider.tsx
'use client';

import React, { createContext, useContext, ReactNode } from 'react';

interface IntlContextProps {
  locale: string;
  messages: Record<string, string>;
}

const IntlContext = createContext<IntlContextProps>({
  locale: 'es',
  messages: {},
});

export default function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Record<string, string>;
  children: ReactNode;
}) {
  return <IntlContext.Provider value={{ locale, messages }}>{children}</IntlContext.Provider>;
}

export function useLocale(): string {
  return useContext(IntlContext).locale;
}

export function t(key: string): string {
  const { messages } = useContext(IntlContext);
  return messages[key] ?? key;
}
