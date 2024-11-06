import React, {useState, useEffect} from "react";
import grapesjs from "grapesjs";
import "../styles/main.scss";
import gjsPresetWebPage from "grapesjs-preset-webpage";
import gjsBlocksBasic from "grapesjs-blocks-basic";

function Page1() {
  const [editor, setEditor] =useState(null);
  useEffect(()=>{
    const editor =grapesjs.init({
      container: "#editor", 
      plugins:[gjsPresetWebPage, gjsBlocksBasic],
      pluginsOpts: {
        gjsPresetWebPage: {},
        [gjsBlocksBasic]: {},
      },
    });

    editor.BlockManager.add('custom-form-block', {
      label: 'Contact Form', // Label for the block
      content: `
        <form class="contact-form">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required><br><br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required><br><br>
          <label for="message">Message:</label><br>
          <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea><br><br>
          <button type="submit">Submit</button>
        </form>`,
      category: 'Forms', // Add it under the "Forms" category
      attributes: { class: 'gjs-block-section' },
    });

    setEditor(editor);
  },[]);

  return (
    <div className="WebsiteBuilder">
      <div id="editor">This is our Website Builder Page</div>
    </div>
  );
}

export default Page1;
