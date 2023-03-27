import React from 'react';
import tw, { css } from 'twin.macro';

export function AdminLayout() {
  const style = {
    defailt: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <div css={style.defailt}>content</div>
    </>
  );
}
