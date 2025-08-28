'use client';

import React, { createContext, useContext, ReactNode, useCallback } from 'react';

interface IntlContextProps {
  locale: string;
  messages: Record<string, string>;
}

// Mejor: null por defecto para detectar si falta el Provider
const IntlContext = createContext<IntlContextProps | null>(null);

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

// Hook base para no repetir lógica
function useIntl() {
  const ctx = useContext(IntlContext);
  if (!ctx) throw new Error('useIntl must be used within <LocaleProvider>');
  return ctx;
}

export function useLocale(): string {
  return useIntl().locale;
}

// ⬇️ Reemplaza tu antigua `t` por este custom hook
export function useT() {
  const { messages } = useIntl();
  return useCallback(
    (key: string, vars?: Record<string, React.ReactNode>) => {
      let msg = messages[key] ?? key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          msg = msg.replace(new RegExp(`{${k}}`, 'g'), String(v));
        }
      }
      return msg;
    },
    [messages]
  );
}
