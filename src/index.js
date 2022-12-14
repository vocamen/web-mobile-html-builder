import loadComponents from './components';
import loadBlocks from './blocks';


export default (editor, opts = {}) => {
  const options = { ...{
    
    // default options
  },  ...opts };

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);
  

  editor.on('load', () => {
    // editor.addComponents(
    //   // `<div style="margin:100px; padding:25px;">
    //   //     Content loaded from the plugin
    //   // </div>`,
    //   {
    //     at: 0
    //   }
    // )
  })

  const pn = editor.Panels;
  const bm = editor.Blocks

  const openBl = pn.getButton('views', 'open-blocks');
  editor.on('load', () => { 
      openBl && openBl.set('active', 1);
      bm.getCategories().forEach(c => c.set('open', 0));
  });
};