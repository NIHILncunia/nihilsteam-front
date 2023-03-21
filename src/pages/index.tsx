import React from 'react';
import tw, { css } from 'twin.macro';
import { AppLayout } from '@/layouts';

export default function IndexPage() {
  const style = css`
    ${tw`  `}
  `;

  return (
    <>
      <AppLayout title='홈'>
        <div css={style}>content</div>
      </AppLayout>
    </>
  );
}
