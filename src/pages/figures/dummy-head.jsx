import React from 'react';
import Head from '@docusaurus/Head';
import DummyHeadFigure from '@site/src/components/DummyHeadFigure';

// PNG書き出し専用のページ（どこからもリンクしない）。1600×900で撮影する。
// 書き出し手順は scripts/export-figures.ps1 を参照。
export default function DummyHeadPoster() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <style>{'html,body{margin:0;background:#0b1020}'}</style>
      </Head>
      <DummyHeadFigure variant="poster" />
    </>
  );
}
