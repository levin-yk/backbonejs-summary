import React from 'react'

export default function EventsOn() {
  return (
    <div className='translate-area'>
      <h2>On</h2>
      <p className='description first'>
        コールバック関数をオブジェクトに紐づけます。
        イベントが発生するたびにこのコールバック関数が呼び出されます。
        Webページ上に多数の異なるイベントがある場合、
        <span className='code-part'>"poll:start"</span>や
        <span className='code-part'>"change:selection"</span>のように、
        コロンを使用してイベントに名前空間を与えます。
        イベントの文字列は、スペースで複数のイベントに区切ったリストにすることもできます。
      </p>
      <pre>
        <code>
          book.on("change:title change:author", ...);
        </code>
      </pre>
      <p className='description'>
        第一引数としてイベント名が渡されます。
        たとえば、あるオブジェクトから別のオブジェクトにすべてのイベントをプロキシする場合、次のようになります。
      </p>
      <pre>
        <code>
{`proxy.on("all", function(eventName) {
  object.trigger(eventName);
});`}
        </code>
      </pre>
      <p className='description'>
        Backboneのすべてのイベントメソッドは、
        キーワード引数の代わりにイベントマップ構文(?)をサポートします。
      </p>
      <pre>
        <code>
{`book.on({
  "change:author": authorPane.update,
  "change:title change:subtitle": titleView.update,
  "destroy": bookView.remove
});`}
        </code>
      </pre>
      {/* <p className='description'>
        コールバック関数呼び出し時、
      </p> */}
    </div>
  )
}
