import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import CPGood from './tutorial/container-presentational/good';
import { PPHocCom, IIHocCom } from './tutorial/hoc';
import { PrimaryBtn, Button } from './tutorial/proxy-component';
import './index.css'
import { WindowWidth } from './tutorial/render-props';
import { HocMenu } from './example/hoc-menu';
import { RenderPropMenu } from './example/render_prop-menu';



ReactDOM.render(<div>
   <form>
     <fieldset>
       <legend>容器组件 VS 展示组件</legend>
       <CPGood />
     </fieldset>
   </form>
   <form>
     <fieldset> 
      <legend>代理组件</legend> 
      <div>
       <Button primary={true} className="btn-warn" title="Button" />
       <PrimaryBtn  title="PrimaryBtn"/>
      </div> 
     </fieldset>      
   </form>
   <form>
    <fieldset>
      <legend>高阶组件</legend>
      <div>
        proxy props :  <PPHocCom />
      </div>
      <div>
        Inheritance Inversion :  <IIHocCom />
      </div>
    </fieldset>
   </form>
   <form>
    <fieldset>
        <legend>渲染属性</legend>
        <div>
         <WindowWidth>{width=><div>{width}</div>}</WindowWidth>
        </div>
    </fieldset>
   </form>
   <form>
    <fieldset>
        <legend>高级组件可折叠菜单例子</legend>
        <div>
         <HocMenu />
        </div>
    </fieldset>
   </form>
   <form>
    <fieldset>
        <legend>渲染属性组件可折叠菜单例子</legend>
        <div>
         <RenderPropMenu />
        </div>
    </fieldset>
   </form>
</div> , document.getElementById('root'));

serviceWorker.unregister();
