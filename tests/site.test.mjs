import assert from 'node:assert/strict'
import { test } from 'node:test'

const base = 'http://127.0.0.1:3007'

test('the landing page is available and never serves stale HTML', async () => {
  const response = await fetch(base)
  assert.equal(response.status, 200)
  assert.match(response.headers.get('content-type') ?? '', /text\/html/)
  assert.match(response.headers.get('cache-control') ?? '', /no-store/)
  assert.match(await response.text(), /plumbing-work\.mp4|assets\//)
})

test('the vortex video is publicly available', async () => {
  const response = await fetch(`${base}/plumbing-work.mp4`)
  assert.equal(response.status, 200)
  assert.match(response.headers.get('content-type') ?? '', /video\/mp4/)
})
