/* eslint-disable @next/next/no-html-link-for-pages -- Static Pages hosting has no RSC navigation endpoint. */
export default function NotFound() {
  return (
    <main className="detail-shell not-found">
      <span className="eyebrow">404 / Page not found</span>
      <h1>页面未找到</h1>
      <p>这个页面不存在，或链接已更新。</p>
      <a className="inline-link" href="/">
        ← 返回个人主页 / Back to home
      </a>
    </main>
  );
}
