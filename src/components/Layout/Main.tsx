import React from 'react';
import tw, { css } from 'twin.macro';

interface IMain {
  children: React.ReactNode;
}

export function Main({ children, }: IMain) {
  const style = {
    defailt: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <main css={style.defailt}>{children}</main>
    </>
  );
}
