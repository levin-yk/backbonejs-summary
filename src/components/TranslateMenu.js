import React from 'react'

export default function TranslateMenu() {
  return (
    <div className='menu'>
      <div className='menu-content'>
        <div className='menu-header'><p>Events</p></div>
        <div className='menu-items'>
          <ul>
            <li className='menu-item'>on</li>
            <li className='menu-item'>off</li>
            <li className='menu-item'>trigger</li>
            <li className='menu-item'>once</li>
            <li className='menu-item'>listenTo</li>
            <li className='menu-item'>stopListening</li>
            <li className='menu-item'>listeToOnce</li>
            <li className='menu-item'>Catalog of Built-in Events</li>
          </ul>
        </div>
      </div>
      <div className='menu-content'>
        <div className='menu-header'><p>Model</p></div>
        <div className='menu-items-parent'>
          <div className='menu-items'>
            <ul>
              <li className='menu-item'>extend</li>
              <li className='menu-item'>preinitialize</li>
              <li className='menu-item'>constructor / initialize</li>
              <li className='menu-item'>get</li>
              <li className='menu-item'>set</li>
              <li className='menu-item'>escape</li>
              <li className='menu-item'>has</li>
              <li className='menu-item'>unset</li>
              <li className='menu-item'>clear</li>
              <li className='menu-item'>id</li>
            </ul>
          </div>
          <div className='menu-items'>
            <ul>
              <li className='menu-item'>idAttribute</li>
              <li className='menu-item'>cid</li>
              <li className='menu-item'>attribute</li>
              <li className='menu-item'>changed</li>
              <li className='menu-item'>defaults</li>
              <li className='menu-item'>toJSON</li>
              <li className='menu-item'>sync</li>
              <li className='menu-item'>fetch</li>
              <li className='menu-item'>save</li>
              <li className='menu-item'>destroy</li>
              </ul>
          </div>
          <div className='menu-items'>
            <ul>
              <li className='menu-item'>Underscore Methods</li>
              <li className='menu-item'>validate</li>
              <li className='menu-item'>validationError</li>
              <li className='menu-item'>isValid</li>
              <li className='menu-item'>url</li>
              <li className='menu-item'>urlRoot</li>
              <li className='menu-item'>parse</li>
              <li className='menu-item'>clone</li>
              <li className='menu-item'>isNew</li>
              <li className='menu-item'>hasChanged</li>
              </ul>
          </div>
          <div className='menu-items'>
            <ul>
              <li className='menu-item'>changedAttributes</li>
              <li className='menu-item'>previous</li>
              <li className='menu-item'>previousAttributes</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='menu-content'>
        <div className='menu-header'><p>Collection</p></div>
        <div className='menu-items-parent'>
          <div className='menu-items'>
            <ul>
              <li className='menu-item'>extend</li>
              <li className='menu-item'>model</li>
              <li className='menu-item'>modelId</li>
              <li className='menu-item'>preinitialize</li>
              <li className='menu-item'>constructor / initialize</li>
              <li className='menu-item'>models</li>
              <li className='menu-item'>toJSON</li>
              <li className='menu-item'>sync</li>
              <li className='menu-item'>Underscore Methods</li>
              <li className='menu-item'>add</li>
            </ul>
          </div>
          <div className='menu-items'>
            <ul>
              <li className='menu-item'>remove</li>
              <li className='menu-item'>reset</li>
              <li className='menu-item'>set</li>
              <li className='menu-item'>get</li>
              <li className='menu-item'>at</li>
              <li className='menu-item'>push</li>
              <li className='menu-item'>pop</li>
              <li className='menu-item'>unshift</li>
              <li className='menu-item'>shift</li>
              <li className='menu-item'>slice</li>
              </ul>
          </div>
          <div className='menu-items'>
            <ul>
              <li className='menu-item'>length</li>
              <li className='menu-item'>comparator</li>
              <li className='menu-item'>sort</li>
              <li className='menu-item'>pluck</li>
              <li className='menu-item'>where</li>
              <li className='menu-item'>findWhere</li>
              <li className='menu-item'>parse</li>
              <li className='menu-item'>fetch</li>
              <li className='menu-item'>create</li>
              <li className='menu-item'>mixin</li>
              </ul>
          </div>
        </div>
      </div>
      <div className='menu-content'>
        <div className='menu-header'><p>Router</p></div>
        <div className='menu-items'>
          <ul>
            <li className='menu-item'>extend</li>
            <li className='menu-item'>routes</li>
            <li className='menu-item'>preinitialize</li>
            <li className='menu-item'>constructor / initialize</li>
            <li className='menu-item'>route</li>
            <li className='menu-item'>navigate</li>
            <li className='menu-item'>excute</li>
          </ul>
        </div>
      </div>
      <div className='menu-content'>
        <div className='menu-header'><p>History</p></div>
        <div className='menu-items'>
          <ul>
            <li className='menu-item'>start</li>
          </ul>
        </div>
      </div>
      <div className='menu-content'>
        <div className='menu-header'><p>Sync</p></div>
        <div className='menu-items'>
          <ul>
            <li className='menu-item'>Backbone.sync</li>
            <li className='menu-item'>Backbone.ajax</li>
            <li className='menu-item'>Backbone.emulateHTTP</li>
            <li className='menu-item'>Backbone.JSON</li>
          </ul>
        </div>
      </div>
      <div className='menu-content'>
        <div className='menu-header'><p>View</p></div>
        <div className='menu-items-parent'>
          <div className='menu-items'>
            <ul>
              <li className='menu-item'>extend</li>
              <li className='menu-item'>preinitialize</li>
              <li className='menu-item'>constructor / initialize</li>
              <li className='menu-item'>el</li>
              <li className='menu-item'>$el</li>
              <li className='menu-item'>setElement</li>
              <li className='menu-item'>attribute</li>
              <li className='menu-item'>& (jQuery)</li>
              <li className='menu-item'>template</li>
              <li className='menu-item'>render</li>
            </ul>
          </div>
          <div className='menu-items'>
            <ul>
              <li className='menu-item'>remove</li>
              <li className='menu-item'>events</li>
              <li className='menu-item'>delegateEvents</li>
              <li className='menu-item'>undelegateEvents</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='menu-content'>
        <div className='menu-header'><p>Utility</p></div>
        <div className='menu-items'>
          <ul>
            <li className='menu-item'>Backbone.noConflict</li>
            <li className='menu-item'>Backbone.$</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
