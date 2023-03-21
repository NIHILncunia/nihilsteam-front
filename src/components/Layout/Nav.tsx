import React from 'react';
import tw, { css } from 'twin.macro';

export function Nav() {
  const style = css`
    ${tw`  `}
  `;

  return (
    <>
      <nav css={style}>메뉴</nav>
    </>
  );
}
