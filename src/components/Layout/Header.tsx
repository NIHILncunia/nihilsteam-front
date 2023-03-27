import React from 'react';
import tw, { css } from 'twin.macro';

export function Header() {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <header css={style.default}>헤더</header>
    </>
  );
}
