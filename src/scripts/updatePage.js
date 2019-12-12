import { remoteConfig } from './fb'

remoteConfig.settings = {
  minimumFetchIntervalMillis: 3600,
};

// set default values
remoteConfig.defaultConfig = ({
  'about_title': 'About Pro Flutter',
  'about_text': 'Flutter is UI toolkit for Android, iOS, Desktop and Web which lets you create application for mulitple platforms from one codebase. Together we can become pro flutter developer and take your flutter applications on a whole nother level.',
  'about_first_card_title': 'about_first_card_title',
  'about_first_card_text': 'about_first_card_text',
  'about_first_card_file': 'test MP4 pablo',
  'about_second_card_title': 'about_second_card_title',
  'about_second_card_text': 'about_second_card_text',
  'about_second_card_file': 'test MP4 pablo',
  'about_third_card_title': 'about_third_card_title',
  'about_third_card_text': 'about_third_card_text',
  'about_third_card_file': 'test MP4 pablo',
  'courses_title': 'courses_title',
  'courses_text': 'courses_text',
  'courses_first_vid': 'L7mH__jfdjg',
  'courses_second_vid': 'pFUEjJvgtUc',
  'courses_third_vid': 'pFUEjJvgtUc',
  'newsletter_title': 'Sign up for Newsletter',
  'newsletter_text': 'Join our squad and be notified about all news. Master your skills with us.',
});

// get and update content
remoteConfig.fetchAndActivate().then(() => {
  for(const key of Object.keys(remoteConfig.defaultConfig)) {
    const el = document.getElementById(key),
          val = remoteConfig.getValue(key)._value;

    if(key.includes('_vid')) {
      // update tutorial video src
      const src = `https://www.youtube.com/embed/${ val }`;
      el.src = src;
    } 
    else if(key.includes('_file')) {
      // update src for about section video
      const en = encodeURIComponent(val),
            src = `https://firebasestorage.googleapis.com/v0/b/proflutter-e3263.appspot.com/o/${ en }.mp4?alt=media`;
      el.src = src;
    } 
    else {
      // update text content
      el.innerText = val;
    }
  }
});


