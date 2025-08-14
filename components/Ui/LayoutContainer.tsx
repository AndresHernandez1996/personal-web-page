'use client';

import React, { JSX } from 'react';
import styles from './ui.module.css';

type Space = number | string;

export type Container = {
  /** Etiqueta HTML a renderizar (div por defecto) */
  as?: keyof JSX.IntrinsicElements;

  /** Padding (shorthands y por lado) */
  p?: Space;
  px?: Space; // padding-left & padding-right
  py?: Space; // padding-top & padding-bottom
  pt?: Space;
  pr?: Space;
  pb?: Space;
  pl?: Space;

  /** Margin (shorthands y por lado) */
  m?: Space;
  mx?: Space; // margin-left & margin-right
  my?: Space; // margin-top & margin-bottom
  mt?: Space;
  mr?: Space;
  mb?: Space;
  ml?: Space;

  className?: string;
  children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLElement>, 'className'>;

function toCss(v?: Space): string | undefined {
  if (v === undefined) return undefined;
  return typeof v === 'number' ? `${v}px` : v;
}

/**
 * Box: contenedor de propósito general con props de spacing.
 * Ejemplo: <Box p={24} mt="2rem">Contenido</Box>
 */
export default function LayoutContainer({
  as = 'div',
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  className,
  style,
  children,
  ...rest
}: Container) {
  const Comp = as as any;

  const computedStyle: React.CSSProperties = {
    ...style,
    // padding
    paddingTop: toCss(pt ?? py ?? p),
    paddingRight: toCss(pr ?? px ?? p),
    paddingBottom: toCss(pb ?? py ?? p),
    paddingLeft: toCss(pl ?? px ?? p),
    // margin
    marginTop: toCss(mt ?? my ?? m),
    marginRight: toCss(mr ?? mx ?? m),
    marginBottom: toCss(mb ?? my ?? m),
    marginLeft: toCss(ml ?? mx ?? m),
  };

  const cls = [styles.container, className].filter(Boolean).join(' ');

  return (
    <Comp className={cls} style={computedStyle} {...rest}>
      {children}
    </Comp>
  );
}
