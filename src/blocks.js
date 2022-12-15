export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add('tw-container', {
    category: 'Tailwind',
    label: 'TW container',
    content: { type: 'tw-container' },
    media: `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
  </svg>`,
  });
  bm.add('tw-columns', {
    category: 'Tailwind',
    label: 'TW columns',
    content: { type: 'tw-columns'},
    media: `<svg viewBox="0 0 23 24">
    <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>
  </svg>`,
  });
  bm.add('tw-column', {
    category: 'Tailwind',
    label: 'TW column',
    content: { type: 'tw-column'}, 
    media: `column`,
  });
  bm.add('tw-paragraph', {
    category: 'Tailwind',
    label: 'TW paragraph',
    content: { type: 'tw-paragraph'}, 
    media: `TEXT`,
  });
  bm.add('d-button', {
    category: 'Actions',
    name: 'd-button',
    label: 'Daisy button',
    content: { type: 'daisy-button' },
    media: '<button class="btn">button</button>',
  });
  bm.add('d-dropdown', {
    category: 'Actions',
    name: 'd-dropdown',
    label: 'Daisy dropdown',
    content: { type: 'daisy-dropdown' },
    media: 'dropdown',
  });
  bm.add('d-modal', {
    category: 'Actions',
    name: 'd-modal',
    label: 'Daisy modal',
    content: { type: 'daisy-modal' },
    media: 'modal',
  });
  bm.add('d-swap', {
    category: 'Actions',
    name: 'd-swap',
    label: 'Daisy swap',
    content: { type: 'daisy-swap' },
    media: '<div class="swap-on">ON</div>',
  });
  bm.add('d-alert', {
    category: 'Data Display',
    name: 'd-alert',
    label: 'Daisy alert',
    content: { type: 'daisy-alert' },
    media: 'alert',
  });
  bm.add('d-avatar', {
    category: 'Data Display',
    name: 'd-avatar',
    label: 'Daisy avatar',
    content: { type: 'daisy-avatar' },
    media: '<img src="https://placeimg.com/192/192/people" />',
  });
  bm.add('d-badge', {
    category: 'Data Display',
    name: 'd-badge',
    label: 'Daisy badge',
    content: { type: 'daisy-badge' },
    media: '<div class="badge">neutral</div>',
  });
  bm.add('d-card', {
    category: 'Data Display',
    name: 'd-card',
    label: 'Daisy card',
    content: { type: 'daisy-card' },
    media: '<img src="https://placeimg.com/400/225/arch" alt="Shoes" />',
  });
  bm.add('d-Carousel', {
    category: 'Data Display',
    name: 'd-Carousel',
    label: 'Daisy Carousel',
    content: { type: 'daisy-Carousel' },
    media: '<img src="https://placeimg.com/400/300/arch" alt="Burger" />',
  });
  bm.add('d-bubble', {
    category: 'Data Display',
    name: 'd-bubble',
    label: 'Daisy bubble',
    content: { type: 'daisy-bubble' },
    media: '<div class="chat chat-end"><div class="chat-bubble">You underestimate your power!</div></div>',
  });
  bm.add('d-Collapse', {
    category: 'Data Display',
    name: 'd-Collapse',
    label: 'Daisy Collapse',
    content: { type: 'daisy-Collapse' },
    media: 'Collapse',
  });
  bm.add('d-Countdown', {
    category: 'Data Display',
    name: 'd-Countdown',
    label: 'Daisy Countdown',
    content: { type: 'daisy-Countdown' },
    media: '<span class="countdown"><span style="--value:10;"></span></span>',
  });
  bm.add('d-Kbd', {
    category: 'Data Display',
    name: 'd-Kbd',
    label: 'Daisy Kbd',
    content: { type: 'daisy-Kbd' },
    media: '<kbd class="kbd">A</kbd>',
  });
  bm.add('d-Progress', {
    category: 'Data Display',
    name: 'd-Progress',
    label: 'Daisy Progress',
    content: { type: 'daisy-Progress' },
    media: '<progress class="progress w-16"></progress>',
  });
  bm.add('d-Radial', {
    category: 'Data Display',
    name: 'd-Radial',
    label: 'Daisy Radial',
    content: { type: 'daisy-Radial' },
    media: '<div class="radial-progress" style="--value:70;">70%</div>',
  });
  bm.add('d-Stat', {
    category: 'Data Display',
    name: 'd-Stat',
    label: 'Daisy Stat',
    content: { type: 'daisy-Stat' },
    media: '<div class="stat-desc">21% more than</div>',
  });
  bm.add('d-Table', {
    category: 'Data Display',
    name: 'd-Table',
    label: 'Daisy Table',
    content: { type: 'daisy-Table' },
    media: 'Table',
  });
  bm.add('d-Tooltip', {
    category: 'Data Display',
    name: 'd-Tooltip',
    label: 'Daisy Tooltip',
    content: { type: 'daisy-Tooltip' },
    media: '<button class="btn">Hover me</button>',
  });
  bm.add('d-Checkbox', {
    category: 'Data Input',
    name: 'd-Checkbox',
    label: 'Daisy Checkbox',
    content: { type: 'daisy-Checkbox' },
    media: '<input type="checkbox" checked="checked" class="checkbox" />',
  });
  bm.add('d-File', {
    category: 'Data Input',
    name: 'd-File',
    label: 'Daisy File',
    content: { type: 'daisy-File' },
    media: '<input type="file" class="file-input w-full max-w-xs" />',
  });
  bm.add('d-Radio', {
    category: 'Data Input',
    name: 'd-Radio',
    label: 'Daisy Radio',
    content: { type: 'daisy-Radio' },
    media: '<input type="radio" name="radio-1" class="radio" checked />',
  });
  bm.add('d-Range', {
    category: 'Data Input',
    name: 'd-Range',
    label: 'Daisy Range',
    content: { type: 'daisy-Range' },
    media: '<input type="range" min="0" max="100" value="40" class="range" />',
  });
  bm.add('d-Rating', {
    category: 'Data Input',
    name: 'd-Rating',
    label: 'Daisy Rating',
    content: { type: 'daisy-Rating' },
    media: '<div class="rating"><input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" /></div>',
  });
  bm.add('d-Select', {
    category: 'Data Input',
    name: 'd-Select',
    label: 'Daisy Select',
    content: { type: 'daisy-Select' },
    media: 'Select',
  });
  bm.add('d-Input', {
    category: 'Data Input',
    name: 'd-Input',
    label: 'Daisy Input',
    content: { type: 'daisy-Input' },
    media: '<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />',
  });
  bm.add('d-Textarea', {
    category: 'Data Input',
    name: 'd-Textarea',
    label: 'Daisy Textarea',
    content: { type: 'daisy-Textarea' },
    media: '<input type="text" placeholder="Bio" class="input input-bordered w-full max-w-xs" />',
  });
  bm.add('d-Toggle', {
    category: 'Data Input',
    name: 'd-Toggle',
    label: 'Daisy Toggle',
    content: { type: 'daisy-Toggle' },
    media: '<div class="form-control"><label class="label cursor-pointer"><input type="checkbox" class="toggle" checked /></label></div>',
  });
  bm.add('d-Artboard', {
    category: 'Layout',
    name: 'd-Artboard',
    label: 'Daisy Artboard',
    content: { type: 'daisy-Artboard' },
    media: 'Artboard',
  });

  bm.add('d-Buttongroup', {
    category: 'Layout',
    name: 'd-Buttongroup',
    label: 'Daisy Buttongroup',
    content: { type: 'daisy-Buttongroup' },
    media: '<div class="btn-group"><input type="radio" name="options" data-title="1" class="btn" /><input type="radio" name="options" data-title="2" class="btn" checked /></div>',
  });

  bm.add('d-Divider', {
    category: 'Layout',
    name: 'd-Divider',
    label: 'Daisy Divider',
    content: { type: 'daisy-Divider' },
    media: '  <div class="divider">OR</div>',
  });

  bm.add('d-Drawer', {
    category: 'Layout',
    name: 'd-Drawer',
    label: 'Daisy Drawer',
    content: { type: 'daisy-Drawer' },
    media: 'Drawer',
  });

  bm.add('d-Footer', {
    category: 'Layout',
    name: 'd-Footer',
    label: 'Daisy Footer',
    content: { type: 'daisy-Footer' },
    media: 'Footer',
  });

  bm.add('d-Hero', {
    category: 'Layout',
    name: 'd-Hero',
    label: 'Daisy Hero',
    content: { type: 'daisy-Hero' },
    media: 'Hero',
  });

  bm.add('d-Indicator', {
    category: 'Layout',
    name: 'd-Indicator',
    label: 'Daisy Indicator',
    content: { type: 'daisy-Indicator' },
    media: '<div class="indicator"><span class="indicator-item badge badge-primary">new</span> <div class="grid w-16 h-16 bg-base-300 place-items-center">content</div></div>',
  });

  bm.add('d-Inputgroup', {
    category: 'Layout',
    name: 'd-Inputgroup',
    label: 'Daisy Inputgroup',
    content: { type: 'daisy-Inputgroup' },
    media: '<div class="form-control"><label class="input-group input-group-vertical"><span>Email</span><input type="text" placeholder="info@site.com" class="input input-bordered" /></label></div>',
  });

  bm.add('d-Mask', {
    category: 'Layout',
    name: 'd-Mask',
    label: 'Daisy Mask',
    content: { type: 'daisy-Mask' },
    media: '<img class="mask mask-squircle" src="https://placeimg.com/160/160/arch" />',
  });

  bm.add('d-Stack', {
    category: 'Layout',
    name: 'd-Stack',
    label: 'Daisy Stack',
    content: { type: 'daisy-Stack' },
    media: '<div class="stack"><div class="grid w-8 h-16 rounded bg-primary text-primary-content place-content-center">1</div> <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div> <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div></div>',
  });

  bm.add('d-Toast', {
    category: 'Layout',
    name: 'd-Toast',
    label: 'Daisy Toast',
    content: { type: 'daisy-Toast' },
    media: '<div class="toast toast-top toast-start"><div class="alert alert-info"><div><span>New mail arrived.</span></div></div></div>',
  });
  bm.add('d-Breadcrumbs', {
    category: 'Navigation',
    name: 'd-Breadcrumbs',
    label: 'Daisy Breadcrumbs',
    content: { type: 'daisy-Breadcrumbs' },
    media: '<div class="text-sm breadcrumbs"><ul><li><a>1</a></li> <li><a>2</a></li> </ul></div>',
  });
  bm.add('d-Bottomnavigation', {
    category: 'Navigation',
    name: 'd-Bottomnavigation',
    label: 'Daisy Bottomnavigation',
    content: { type: 'daisy-Bottomnavigation' },
    media: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>'
  });
  bm.add('d-Link', {
    category: 'Navigation',
    name: 'd-Link',
    label: 'Daisy Link',
    content: { type: 'daisy-Link' },
    media: '<a class="link">link</a>',
  });
  bm.add('d-Menu', {
    category: 'Navigation',
    name: 'd-Menu',
    label: 'Daisy Menu',
    content: { type: 'daisy-Menu' },
    media: '<ul class="menu bg-base-100 w-16 rounded-box"><li><a>1</a></li><li><a>2</a></li></ul>',
  });
  bm.add('d-Navbar', {
    category: 'Navigation',
    name: 'd-Navbar',
    label: 'Daisy Navbar',
    content: { type: 'daisy-Navbar' },
    media: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>',
  });
  bm.add('d-Pagination', {
    category: 'Navigation',
    name: 'd-Pagination',
    label: 'Daisy Pagination',
    content: { type: 'daisy-Pagination' },
    media: '<div class="btn-group"><button class="btn">1</button><button class="btn btn-active">2</button></div>',
  });
  bm.add('d-Steps', {
    category: 'Navigation',
    name: 'd-Steps',
    label: 'Daisy Steps',
    content: { type: 'daisy-Steps' },
    media: '<ul class="steps"><li class="step step-primary">1</li><li class="step step-primary">2</li></ul>',
  });
  bm.add('d-Tabs', {
    category: 'Navigation',
    name: 'd-Tabs',
    label: 'Daisy Tabs',
    content: { type: 'daisy-Tabs' },
    media: '<div class="tabs tabs-boxed"><a class="tab tab-active">1</a><a class="tab tab-active">2</a></div>',
  });
  bm.add('d-Code', {
    category: 'Mockup',
    name: 'd-Code',
    label: 'Daisy Code',
    content: { type: 'daisy-Code' },
    media: '<pre data-prefix="$"><code>npm i</code></pre>',
  });
  bm.add('d-Phone', {
    category: 'Mockup',
    name: 'd-Phone',
    label: 'Daisy Phone',
    content: { type: 'daisy-Phone' },
    media: 'Phone',
  });
  bm.add('d-camera', {
    category: 'Mockup',
    name: 'd-camera',
    label: 'Daisy camera',
    content: { type: 'daisy-camera' },
    media: 'camera',
  });
  bm.add('d-Window', {
    category: 'Mockup',
    name: 'd-Window',
    label: 'Daisy Window',
    content: { type: 'daisy-Window' },
    media: 'Window',
  });
}
