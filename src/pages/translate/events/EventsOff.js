import React from 'react'

export default function EventsOff() {
  return (
    <div className='translate-area'>
      <h2>Off</h2>
      <p className='description'>
        過去に紐づけられたコールバック関数をオブジェクトから削除します。
        コンテキストが指定されていない場合、
        異なるコンテキストを持つコールバックのバージョンがすべて削除されます。
        コールバックが指定されていない場合、イベント内の全てのコールバックが削除されます。
        イベントが指定されていない場合、全てのイベントのコールバックが削除されます。
      </p>
      <pre>
        <code>
{`// 'onChange'コールバックのみ削除
object.off("change", onChange);

// 全ての"change"コールバックを削除
object.off("change");

// 全てのイベントの'onChange'コールバックを削除
object.off(null, onChange);

// 全てのイベントの'context'のすべてのコールバックを削除
object.off(null, null, context);

// 'object'の全てのコールバックを削除.
object.off();`}
        </code>
      </pre>
      <p className='description'>
        たとえば<span className='code-part'>model.off()</span>を呼び出すと、
        Backboneが内部帳簿に使用するイベントを含む、
        Model上のすべてのイベントが削除されることに注意してください。
      </p>
    </div>
  )
}
