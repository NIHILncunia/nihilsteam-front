import React from 'react';
import tw, { css } from 'twin.macro';

export function Nav() {
  const style = {
    defailt: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <nav css={style.defailt}>메뉴</nav>
    </>
  );
}
