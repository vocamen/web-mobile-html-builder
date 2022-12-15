export default (editor, opts = {}) => {
  editor.DomComponents.addType('textarea', {
    model: {
      defaults: {
        traits: [
          {
            type: 'textarea',
            name: 'textarea',
            label: 'Code',
          },
        ]
      }
    }
  });
  editor.TraitManager.addType('textarea', {
    noLabel: true,
    templateInput({ trait }) {
      const { model } = this;
      let value = this.getModelValue();
      value = value.replace(/<(.+?)>  /g, "<$1>  &#10;");
      return `
      <textarea id="" cols="27" rows="20">${value}</textarea>
      <button class="btn" onclick="{document.getElementsByClassName('gjs-field-wrp--textarea')[0].getElementsByTagName('input')[0].value = document.getElementsByClassName('gjs-field-wrp--textarea')[0].getElementsByTagName('textarea')[0].value}">update, then tweak</button>`}
    });

  const domc = editor.DomComponents;
  

  domc.addType('tw-container', {
    model: {
      defaults: {
        content: `.`,
        traits: ['id','title',{ label: 'text', type: 'text', name: 'content', changeProp: true }],
        attributes: { class: 'container mx-auto flex justify-center p-4' }
      },
    },
    view: {

    },
  });
  domc.addType('tw-columns', {
    model: {
      defaults: {
        content: `.`,
        traits: ['id','title',{ label: 'text', type: 'text', name: 'content', changeProp: true }],
        attributes: { class: 'flex gap-8' },
        tagName:'div'
      },
    },
    view: {

    },
  });
  domc.addType('tw-column', {
    model: {
      defaults: {
        content: `.`,
        traits: ['id','title',{ label: 'text', type: 'text', name: 'content', changeProp: true }],
        attributes: { class: 'w-full' },
        tagName:'div'
      },
    },
    view: {

    },
  });
  domc.addType('tw-paragraph', {
    model: {
      defaults: {
        content: `text`,
        traits: ['id','title',{ label: 'text', type: 'text', name: 'content', changeProp: true }],
        attributes: { class: 'text-justify' },
        tagName:'p'
      },
    },
    view: {

    },
  });
  domc.addType('daisy-button', {
    model: {
      defaults: {
        content: `button`,
        traits: ['id','title',{ label: 'Button text', type: 'text', name: 'content', changeProp: true }],
        tagName:'button',
        editable: true,
        attributes: { class: 'btn' }
      },
    },
    view: {

    },
  });
  domc.addType('daisy-dropdown', {
    model: {
      defaults: {
        content: `<label tabindex="0" class="btn m-1">Click</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>`,
        traits: ['id','title',{ label: 'Dropdown text', type: 'text', name: 'content', changeProp: true }],
        tagName:'div',
        editable: true,
        attributes: { class: 'dropdown' }
      },
    },
    view: {

    },
  });
  domc.addType('daisy-modal', {
    model: {
      defaults: {
        content: `<label for="my-modal" class="btn">open modal</label>
        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div class="modal-action">
              <label for="my-modal" class="btn">Yay!</label>
            </div>
          </div>
        </div>`,
        traits: ['id','title',{ label: 'Modal code', type: 'textarea', name: 'content', changeProp: true }],
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-swap', {
    model: {
      defaults: {
        content: `<label class="swap">
        <input type="checkbox" />
        <div class="swap-on">ON</div>
        <div class="swap-off">OFF</div>
      </label>`,
        traits: ['id','title',{ label: 'swap code', type: 'textarea', name: 'content', changeProp: true }],
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-alert', {
    model: {
      defaults: {
        content: `<div class="alert shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>we use cookies for no reason.</span>
        </div>
        <div class="flex-none">
          <button class="btn btn-sm btn-ghost">Deny</button>
          <button class="btn btn-sm btn-primary">Accept</button>
        </div>
      </div>`,
        traits: ['id','title',{ label: 'alert code', type: 'textarea', name: 'content', changeProp: true }],
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-avatar', {
    model: {
      defaults: {
        content: `<div class="avatar">
        <div class="w-24 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>`,
        traits: ['id','title',{ label: 'avatar code', type: 'textarea', name: 'content', changeProp: true }],
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-badge', {
    model: {
      defaults: {
        content: `<div class="badge">neutral</div>`,
        traits: ['id','title',{ label: 'badge code', type: 'textarea', name: 'content', changeProp: true }],
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-card', {
    model: {
      defaults: {
        content: `<div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>`,
        traits: ['id','title',{ label: 'card code', type: 'textarea', name: 'content', changeProp: true }],
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Carousel', {
    model: {
      defaults: {
        content: `<div class="w-64 carousel rounded-box">
        <div class="carousel-item w-full">
          <img src="https://placeimg.com/256/400/arch" class="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
        <div class="carousel-item w-full">
          <img src="https://placeimg.com/256/400/arch" class="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
        <div class="carousel-item w-full">
          <img src="https://placeimg.com/256/400/arch" class="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
        <div class="carousel-item w-full">
          <img src="https://placeimg.com/256/400/arch" class="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
        <div class="carousel-item w-full">
          <img src="https://placeimg.com/256/400/arch" class="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
        <div class="carousel-item w-full">
          <img src="https://placeimg.com/256/400/arch" class="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
        <div class="carousel-item w-full">
          <img src="https://placeimg.com/256/400/arch" class="w-full" alt="Tailwind CSS Carousel component" />
        </div>
      </div>`,
        traits: ['id','title',{ label: 'Carousel code', type: 'textarea', name: 'content', changeProp: true }],
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-bubble', {
    model: {
      defaults: {
        content: `<div class="chat chat-start">
        <div class="chat-header">
          Obi-Wan Kenobi
          <time class="text-xs opacity-50">2 hours ago</time>
        </div>
        <div class="chat-bubble">You were the Chosen One!</div>
        <div class="chat-footer opacity-50">
          Seen
        </div>
      </div>
      <div class="chat chat-end">
        <div class="chat-header">
          Obi-Wan Kenobi
          <time class="text-xs opacity-50">2 hour ago</time>
        </div>
        <div class="chat-bubble">I loved you.</div>
        <div class="chat-footer opacity-50">
          Delivered
        </div>
      </div>`,
        traits: ['id','title',{ label: 'bubble code', type: 'textarea', name: 'content', changeProp: true }],
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Collapse', {
    model: {
      defaults: {
        content: `<div class="collapse">
        <input type="checkbox" /> 
        <div class="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div class="collapse-content"> 
          <p>hello</p>
        </div>
      </div>`,
        traits: ['id','title',{ label: 'Collapse code', type: 'textarea', name: 'content', changeProp: true }],
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Countdown', {
    model: {
      defaults: {
        content: `<span class="countdown">
        <span style="--value:10;"></span>
      </span>`,
        traits: ['id','title',{ label: 'Countdown code', type: 'textarea', name: 'content', changeProp: true }],
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Kbd', {
    model: {
      defaults: {
        content: `<kbd class="kbd">A</kbd>`,
        traits: ['id','title',{ label: 'Kbd code', type: 'textarea', name: 'content', changeProp: true }],
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Progress', {
    model: {
      defaults: {
        content: `<progress class="progress w-56"></progress>`,
        traits: ['id','title',{ label: 'Progress code', type: 'textarea', name: 'content', changeProp: true }],
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Radial', {
    model: {
      defaults: {
        content: `<div class="radial-progress" style="--value:70;">70%</div>`,
        traits: ['id','title',{ label: 'Radial code', type: 'textarea', name: 'content', changeProp: true }],
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Stat', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Stat code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="stats shadow">
  
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title">Total Likes</div>
          <div class="stat-value text-primary">25.6K</div>
          <div class="stat-desc">21% more than last month</div>
        </div>
        </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Table', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Table code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <!-- row 2 -->
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <!-- row 3 -->
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });

  domc.addType('daisy-Tooltip', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Tooltip code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="tooltip" data-tip="hello">
        <button class="btn">Hover me</button>
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Checkbox', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Checkbox code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<input type="checkbox" checked="checked" class="checkbox" />`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-File', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'File code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<input type="file" class="file-input w-full max-w-xs" />`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Radio', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Radio code', type: 'text', name: 'content', changeProp: true }],
        content: `.`,
        tagName:'input',
        editable: true,
        attributes: { class: 'radio' }
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Range', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Range code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<input type="range" min="0" max="100" value="25" class="range" step="25" />
        <div class="w-full flex justify-between text-xs px-2">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Rating', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Rating code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="rating">
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Select', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Select code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<select class="select select-bordered w-full max-w-xs">
        <option disabled selected>Who shot first?</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>`,
        tagName:'select',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Input', {
    model: {
      defaults: {
        traits: ['id','title', 'placeholder',{ label: 'Input value', type: 'text', name: 'content', changeProp: true }],
        content: `.`,
        tagName:'input',
        editable: true,
        attributes: { class: 'input input-bordered w-full max-w-xs' }
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Textarea', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Textarea code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>`,
        tagName:'textarea',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Toggle', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Toggle code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<input type="checkbox" class="toggle" checked />`,
        tagName:'input',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Artboard', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Artboard code', type: 'textarea', name: 'content', changeProp: true }],
        content: `568×320`,
        tagName:'div',
        editable: true,
        attributes: { class: 'artboard artboard-horizontal phone-1' }
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Buttongroup', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Buttongroup code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="btn-group">
        <button class="btn btn-active">Button</button>
        <button class="btn">Button</button>
        <button class="btn">Button</button>
      </div>`,
        tagName:'input',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Divider', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Toggle code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="flex w-full">
        <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
        <div class="divider divider-horizontal">OR</div>
        <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Drawer', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Drawer code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <!-- Page content here -->
          <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
        </div> 
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 bg-base-100 text-base-content">
            <!-- Sidebar content here -->
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            
          </ul>
        </div>
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Footer', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Footer code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<footer class="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span class="footer-title">Services</span> 
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span class="footer-title">Company</span> 
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div> 
        <div>
          <span class="footer-title">Legal</span> 
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Hero', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Hero code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Indicator', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Indicator code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="indicator">
        <span class="indicator-item badge badge-primary">new</span> 
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Inputgroup', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Inputgroup code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="form-control">
        <label class="input-group input-group-vertical">
          <span>Email</span>
          <input type="text" placeholder="info@site.com" class="input input-bordered" />
        </label>
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Mask', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Mask code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<img class="mask mask-squircle" src="https://placeimg.com/160/160/arch" />`,
        tagName:'img',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Stack', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Stack code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="stack">
        <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div> 
        <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div> 
        <div class="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Toast', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Toast code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="toast toast-top toast-start">
        <div class="alert alert-info">
          <div>
            <span>New mail arrived.</span>
          </div>
        </div>
        <div class="alert alert-success">
          <div>
            <span>Message sent successfully.</span>
          </div>
        </div>
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Breadcrumbs', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Breadcrumbs code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="text-sm breadcrumbs">
        <ul>
          <li><a>Home</a></li> 
          <li><a>Documents</a></li> 
          <li>Add Document</li>
        </ul>
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Bottomnavigation', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Bottomnavigation code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="btm-nav">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        </button>
        <button class="active">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        </button>
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Link', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Link code', type: 'textarea', name: 'content', changeProp: true }],
        attributes: { class: 'link' },
        content: `link`,
        tagName:'a',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Menu', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Menu code', type: 'textarea', name: 'content', changeProp: true }],
        attributes: { class: 'menu bg-base-100 w-56 rounded-box' },
        content: `<li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>`,
        tagName:'ul',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Navbar', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Navbar code', type: 'textarea', name: 'content', changeProp: true }],
        attributes: { class: 'navbar bg-base-100' },
        content: `<div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabindex="0">
              <a>
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul class="p-2 bg-base-100">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Pagination', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Pagination code', type: 'textarea', name: 'content', changeProp: true }],
        attributes: { class: 'btn-group' },
        content: `<button class="btn">1</button>
        <button class="btn btn-active">2</button>
        <button class="btn">3</button>
        <button class="btn">4</button>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Steps', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Steps code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<ul class="steps">
        <li class="step step-primary">Register</li>
        <li class="step step-primary">Choose plan</li>
        <li class="step">Purchase</li>
        <li class="step">Receive Product</li>
      </ul>`,
        tagName:'ul',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Tabs', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Tabs code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="tabs">
        <a class="tab tab-bordered">Tab 1</a> 
        <a class="tab tab-bordered tab-active">Tab 2</a> 
        <a class="tab tab-bordered">Tab 3</a>
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Code', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Code code', type: 'textarea', name: 'content', changeProp: true }],
        content: `<div class="mockup-code">
        <pre data-prefix="$"><code>npm i daisyui</code></pre> 
        <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
        <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
      </div>`,
        tagName:'div',
        editable: true,
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Phone', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Phone code', type: 'textarea', name: 'content', changeProp: true }],
        content: `.`,
        tagName:'div',
        editable: true,
        attributes: { class: 'mockup-phone border bg-base-300' }
      },
    },
    view: {

    },
  });
  domc.addType('daisy-camera', {
    model: {
      defaults: {
        traits: ['id','title'],
        content: ``,
        tagName:'div',
        editable: true,
        attributes: { class: 'camera' }
      },
    },
    view: {

    },
  });
  domc.addType('daisy-Window', {
    model: {
      defaults: {
        traits: ['id','title',{ label: 'Window code', type: 'textarea', name: 'content', changeProp: true }],
        content: `.`,
        tagName:'div',
        editable: true,
        attributes: { class: 'mockup-window border bg-base-300' }
      },
    },
    view: {

    },
  });




};
