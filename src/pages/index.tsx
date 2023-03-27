import React from 'react';
import tw, { css } from 'twin.macro';
import { AppLayout } from '@/layouts';

export default function IndexPage() {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title='홈'>
        <div css={style.default}>content</div>
      </AppLayout>
    </>
  );
}
