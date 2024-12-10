import logo from './logo.svg';
import './App.css';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
  Table,
  Video,
  Audio,
  PasteCleanup,
} from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import { useState } from 'react';

function App() {
  const items = ['Bold', 'Italic', 'Underline', '|', 'Undo', 'Redo'];
  const toolbarSettings = {
    items: items,
  };
  const [rte1Content, setRte1Content] = useState('');
  const [rte2Content, setRte2Content] = useState('');
  const [rte3Content, setRte3Content] = useState('');
  const [rte4Content, setRte4Content] = useState('');

  const loadAllRTEContent = () => {
    fetch('https://localhost:44342/api/RichTextEditor/GetAllRTEContent')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRte1Content(data.rtE1Content);
        setRte2Content(data.rtE2Content);
        setRte3Content(data.rtE3Content);
        setRte4Content(data.rtE4Content);
      })
      .catch((error) => console.error('Error loading RTE content', error));
  };
    return (
      <div className="control-pane">
      <form
        action="https://localhost:44342/api/RichTextEditor/ExportToBase64"
        method="POST"
        enctype="application/x-www-form-urlencoded"
      >
        <RichTextEditorComponent
          name="customtool1"
          id="customtool1"
          toolbarSettings={toolbarSettings}
          value={rte1Content}
        >
          <Inject
            services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table]}
          />
        </RichTextEditorComponent>
        <RichTextEditorComponent
          name="customtool2"
          id="customtool2"
          toolbarSettings={toolbarSettings}
          value={rte2Content}
        >
          <Inject
            services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table]}
          />
        </RichTextEditorComponent>
        <RichTextEditorComponent
          name="customtool3"
          id="customtool3"
          toolbarSettings={toolbarSettings}
          value={rte3Content}
        >
          <Inject
            services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table]}
          />
        </RichTextEditorComponent>
        <RichTextEditorComponent
          name="customtool4"
          id="customtool4"
          toolbarSettings={toolbarSettings}
          value={rte4Content}
        >
          <Inject
            services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table]}
          />
        </RichTextEditorComponent>
        <br />
        <br />
        <button className="e-btn" type="submit">
          Save
        </button>
      </form>
      <br />
      <button className="e-btn" onClick={loadAllRTEContent}>
        Load All Content
      </button>
    </div>
    );
}
//ReactDOM.render(<App />, document.getElementById('sample'));

export default App;
