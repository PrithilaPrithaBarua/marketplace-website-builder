import React, {useState, useEffect} from "react";
import grapesjs from "grapesjs";
import "../styles/main.scss";
import gjsPresetWebPage from "grapesjs-preset-webpage";
import gjsBlocksBasic from "grapesjs-blocks-basic";
import gjsComponentsCountdown from "grapesjs-component-countdown";
import gjsTabs from 'grapesjs-component-countdown';
import gjsCustomCode from 'grapesjs-custom-code';
import gjsTooltip from 'grapesjs-tooltip';
import {useParams} from 'react-router-dom';



function WebsiteBuilder() {
  const [editor, setEditor] =useState(null);
  const {pageId} = useParams();
  console.log('pageId :>>', pageId);



  useEffect(()=>{
    const editor =grapesjs.init({
      container: "#editor", 
      plugins:[gjsPresetWebPage, gjsBlocksBasic, gjsComponentsCountdown, gjsTabs, gjsCustomCode, gjsTooltip],
      pluginsOpts: {
        gjsPresetWebPage: {},
        gjsBlocksBasic: {},
        gjsComponentsCountdown: {},
        gjsTabs: {},
        gjsTooltip:{},
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

    editor.BlockManager.add('custom-button', {
      label: 'Button', // Label for the block in the block manager
      content: `
        <button style="padding: 10px 20px; font-size: 16px; background-color: #007bff; color: #fff; border: none; border-radius: 4px; cursor: pointer;">
          Click Me
        </button>
      `,
      category: 'Basic', // Group it under the "Basic" category
      attributes: { class: 'fa fa-square' }, // Icon for the block
    });

    setEditor(editor);
  },[]);

  return (
    <div className="WebsiteBuilder">
      <div id="editor">This is our Website Builder Page</div>
    </div>
  );
}

export default WebsiteBuilder;
