import * as defaultConfig from '../data'

// update content on the page
Object.keys(defaultConfig).forEach((section) => {
  let vb;

  Object.keys(defaultConfig[section]).forEach((key) => {
    const value = defaultConfig[section][key],
          id = `${ section }_${ key }`;

    if(key == 'visible' && value == false) {
      // hide sections
      const el = document.getElementById(section),
            navEl = document.getElementsByClassName(`${ section }_nav`);
      el.style.display = 'none';
      
      // hide navigation elements to hidden sections
      for(const item of navEl) {
        item.style.display = 'none';
      }

      vb = false;
    }
    else if(key == 'visible' && value == true) {
      // prevent code from updating not visible content
      vb = true;
    }
    else if(vb && (key == 'title' || key == 'text')) {
      // set title and text
      const el = document.getElementById(id);

      if(el.innerText != value) {
        el.innerText = value;
      }
    }
    else if(vb && key == 'content') {
      Object.keys(value).forEach((card) => {
        const value = defaultConfig[section][key][card];

        if(section == 'about') {
          let vb;

          Object.keys(value).forEach((element) => {
            const value = defaultConfig[section][key][card][element],
                  el = document.getElementById(`${ id }_${ card }_${ element }`);
            
            if(element == 'visible' && !value) {
              // hide cards
              el.style.display = 'none';
              vb = false;
            }
            else if(element == 'visible' && value) {
              // prevent code from updating not visible content
              vb = true;
            }
            else if(vb && (element == 'title' || element == 'text')) {
              // set title and text for each card
              if(el.innerText != value) {
                el.innerText = value;
              }
            }
            else if(vb && element == 'file') {
              // set src for each card
              const en = encodeURIComponent(value),
                    src = `https://firebasestorage.googleapis.com/v0/b/proflutter-e3263.appspot.com/o/${ en }.mp4?alt=media`;
              el.src = src;
            }
          });
        }
        else if(section == 'courses') {
          // set courses video src
          const src = `https://www.youtube.com/embed/${ value }`,
                el = document.getElementById(`${ id }_${ card }`);
          el.src = src;
        }
      });
    }
  });
});