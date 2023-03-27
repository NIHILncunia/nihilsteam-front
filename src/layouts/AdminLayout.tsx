import React from 'react';
import tw, { css } from 'twin.macro';

export function AdminLayout() {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <div css={style.default}>content</div>
    </>
  );
}
