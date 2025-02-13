import { Resvg, type ResvgRenderOptions } from '@resvg/resvg-js'
import type { APIRoute } from 'astro'
import satori from 'satori'
import { html as toReactElement } from 'satori-html'

import { join } from 'node:path'
import { readFile } from 'fs/promises'

const appDir = process.cwd()
const getFontPath = (fontName: string) => join(appDir, 'public', 'fonts', fontName)

const fontFileSCRegular = getFontPath('NotoSansSC-Regular.ttf')
const fontDataSCRegular: ArrayBuffer = await readFile(fontFileSCRegular)

const fontFileSCBold = getFontPath('NotoSansSC-Bold.ttf')
const fontDataSCBold: ArrayBuffer = await readFile(fontFileSCBold)

const fontFileLatin = await fetch('https://og-playground.vercel.app/inter-latin-ext-700-normal.woff')
const fontDataLatin: ArrayBuffer = await fontFileLatin.arrayBuffer()

const height = 630
const width = 1200

export const GET: APIRoute = async () => {
  const link = 'https://leungsekyu.com'
  const avatar = 'https://leungsekyu.com/avatar/leungsekyu.jpg'
  const html = toReactElement(`
  <div class="bg-white flex flex-col h-full p-12 w-full">
    <div class="flex h-full w-full bg-white border-[6px] border-black rounded-lg p-8 shadow-lg">
      <div class="flex flex-col w-full">
        <div class="flex flex-col">
          <p class="text-5xl pb-5">嗨！</p>
          <p class="text-4xl pb-5">我是 leungsekyu</p>
          <p class="text-4xl">欢迎来到我的个人博客 ☃</p>
        </div>
        <div class="flex justify-between items-baseline mt-[6px]">
          <p class="text-3xl">${link}</p>
          <img src="${avatar}" class="w-50 h-50 border-[3px] border-black rounded-lg" width="200px" height="200px" />
        </div>
    </div>
  </div>
  `)

  const svg = await satori(html, {
    fonts: [
      {
        name: 'Inter Latin',
        data: fontDataLatin,
        style: 'normal',
        weight: 700,
      },
      {
        name: 'Noto Sans Simplified Chinese Bold',
        data: fontDataSCBold,
        style: 'normal',
        weight: 700,
      },
      {
        name: 'Noto Sans Simplified Chinese Regular',
        data: fontDataSCRegular,
        style: 'normal',
        weight: 400,
      },
    ],

    height,
    width,
  })

  const opts: ResvgRenderOptions = {
    fitTo: {
      mode: 'width',
      value: width,
    },
  }
  const resvg = new Resvg(svg, opts)
  const pngData = resvg.render()
  const pngBuffer = pngData.asPng()

  return new Response(pngBuffer, {
    headers: {
      'content-type': 'image/png',
    },
  })
}
