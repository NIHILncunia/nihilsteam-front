import React from 'react';
import tw, { css } from 'twin.macro';

export function Footer() {
  const style = {
    defailt: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <footer css={style.defailt}>푸터</footer>
    </>
  );
}
