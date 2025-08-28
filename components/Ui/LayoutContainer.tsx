'use client';

import React from 'react';
import styles from './ui.module.css';

type Space = number | string;
type Tag = React.ElementType;

type BaseProps = {
  as?: Tag;

  // Padding
  p?: Space;
  px?: Space;
  py?: Space;
  pt?: Space;
  pr?: Space;
  pb?: Space;
  pl?: Space;

  // Margin
  m?: Space;
  mx?: Space;
  my?: Space;
  mt?: Space;
  mr?: Space;
  mb?: Space;
  ml?: Space;

  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

type LayoutContainerProps<T extends Tag> = BaseProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof BaseProps | 'as' | 'style' | 'className'>;

function toCss(v?: Space): string | undefined {
  if (v === undefined) return undefined;
  return typeof v === 'number' ? `${v}px` : v;
}

/**
 * Box/Container con props de spacing.
 * Ej: <LayoutContainer as="section" p={24} mt="2rem">...</LayoutContainer>
 */
export default function LayoutContainer<T extends Tag = 'div'>({
  as,
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
}: LayoutContainerProps<T>) {
  const Comp: React.ElementType = as ?? 'div';

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
    <Comp className={cls} style={computedStyle} {...(rest as React.ComponentPropsWithoutRef<T>)}>
      {children}
    </Comp>
  );
}
