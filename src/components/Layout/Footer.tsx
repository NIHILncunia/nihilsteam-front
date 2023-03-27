import React from 'react';
import tw, { css } from 'twin.macro';

export function Footer() {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <footer css={style.default}>푸터</footer>
    </>
  );
}
