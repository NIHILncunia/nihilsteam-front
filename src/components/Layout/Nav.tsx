import React from 'react';
import tw, { css } from 'twin.macro';

export function Nav() {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <nav css={style.default}>메뉴</nav>
    </>
  );
}
